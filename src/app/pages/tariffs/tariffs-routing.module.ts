import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TariffsComponent } from './tariffs.component';
import { TariffsListComponent } from './tariffs-list/tariffs-list.component';
import { TariffsDetailComponent } from './tariffs-detail/tariffs-detail.component';
import { TariffsAddComponent } from './tariffs-add/tariffs-add.component';

const routes: Routes = [
  {
    path:"",
    component:TariffsComponent,
    children:[
      {
        path:"",
        redirectTo:"list",
        pathMatch:"full"
      },
      {
        path:"list",
        component:TariffsListComponent
      },
      {
        path:"detail",
        component:TariffsDetailComponent
      },{
        path:"add",
        component:TariffsAddComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TariffsRoutingModule { }
