/* eslint-disable max-len */
import { Injectable } from '@angular/core';
import { ProdutoDetalhe } from 'src/app/Components/produto-detalhe/ProdutoDetalhe';
import { Carrinho } from 'src/app/Page/carrinho/carrinho.page';
import { DatabaseService } from './database.service';

@Injectable({
    providedIn: 'root'
})
export class CarrinhoService {
    constructor(private db: DatabaseService){}

    async obterCarrinho(): Promise<Carrinho> {
        const sql = 'select * from carrinho left join produto on produto.idProduto = carrinho.idProduto where idUsuario = ?';
        const values = [1];//Obter id do usuário

        const result = await this.db.executeSQL(sql, values);
        const carrinho = this.parseDbToCarrinho(result.rows);
        console.log('carrinho: ', carrinho);
        return carrinho;
    }

    parseDbToCarrinho(rows: any): Carrinho {
        const carrinho: Carrinho = new Carrinho();

        let produto: ProdutoDetalhe = null;
        for (let i = 0; i < rows.length; i++) {
            const item = rows.item(i);
            produto = new ProdutoDetalhe();
            produto.pid = item.idProduto;
            produto.nome = item.nome;
            produto.marca = item.marca;
            produto.tipo = item.tipo;
            produto.preco = item.preco;
            produto.desconto = item.desconto;
            produto.imagemUrl = item.imagem;
            produto.quantidade = item.quantidade;
            carrinho.produtos.push(produto);
        }
        return carrinho;
    }

    async addProduto(produto: ProdutoDetalhe) {
        const estaNoCarrinho = await this.produtoEstaNoCarrinho(produto.pid);
        if (!estaNoCarrinho) {
            const sql = 'insert into produto (nome, marca, tipo, preco, desconto, imagem) values (?, ?, ?, ?, ?, ?)';
            const values = [produto.nome, produto.marca, produto.tipo, produto.preco, produto.desconto, produto.imagemUrl];
            console.log('Tentar inserir: ', this.db);
            return await this.db.executeSQL(sql, values);
        } else {
            this.addQuantidade(produto.pid);
            console.log('atualizou carrinho');
        }
    }

    async obterProdutoPorId(id: string): Promise<ProdutoDetalhe> {
        const sql = 'select * from produto where idProduto = ?';
        const values = [id];

        const retorno = new ProdutoDetalhe();

        const result = await this.db.executeSQL(sql, values);
        if (result.rows && result.rows.length > 0) {
            const produto = result.rows.item(0);
            retorno.pid = produto.idProduto;
            retorno.nome = produto.nome;
            retorno.marca = produto.marca;
            retorno.tipo = produto.tipo;
            retorno.preco = produto.preco;
            retorno.desconto = produto.desconto;
            retorno.imagemUrl = produto.imagem;
        }

        return Promise.resolve(retorno);
    }

    async produtoEstaNoCarrinho(id: string): Promise<boolean> {
        const sql = 'select 1 from carrinho where idProduto = ?';
        const values = [id];
        const result = await this.db.executeSQL(sql, values);
        const estaNoCarrinho = result.rows && result.rows.length > 0;
        return Promise.resolve(estaNoCarrinho);
    }

    async addQuantidade(id: string) {
        const sql = 'update carrinho set quantidade = quantidade+1 where idCarrinho = ?';
        const values = [id];
        return this.db.executeSQL(sql, values);
    }
}
