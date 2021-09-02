/* eslint-disable max-len */
import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import { SQLitePorter } from '@ionic-native/sqlite-porter/ngx';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  db: SQLiteObject;
  databaseName = 'pedidos.db';

  constructor(private sqlite: SQLite, private sqlitePorter: SQLitePorter) { }

  async openDatabase() {
    try {
      console.log('Vai tentar criar: ');
      this.db = await this.sqlite.create({ name: this.databaseName, location: 'default' });
      console.log('tentar criar sql object: ', this.db);
      this.createTables();
    } catch (error) {
      console.error('Ocorreu um erro ao criar o banco de dados', error);
    }
  }

  createTables() {
    this.db.sqlBatch([
      ['CREATE TABLE IF NOT EXISTS produto (idProduto integer primary key AUTOINCREMENT, nome varchar(200), marca varchar(50), tipo varchar(100), preco varchar(100), desconto varchar(100), imagem varchar(255));'],
      ['CREATE TABLE IF NOT EXISTS carrinho (idCarrinho integer primary key AUTOINCREMENT, idProduto integer not null, quantidade integer not null, idUsuario integer not null, foreign key (idProduto) references produto (produto) on update no action on delete no action);']
    ])
    .then(()=> console.log('Tabelas criadas'))
    .catch(e => console.error('Erro ao criar as tabelas', e));
  }

  executeSQL(sql: string, params?: any[]) {
    return this.db.executeSql(sql, params);
  }
}
