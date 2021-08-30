import { NgModule } from '@angular/core';
import { NavBarComponent } from './component/nav-bar/nav-bar.component';

// Add componentes padrão para importar de uma só vez
@NgModule({
    declarations: [NavBarComponent],
    exports: [NavBarComponent]
})
export class CoreModule {}
