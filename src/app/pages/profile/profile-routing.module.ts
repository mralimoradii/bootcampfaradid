import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile.component';
import { ProfileChangeComponent } from './profile-change/profile-change.component';
import { ProfileEditeComponent } from './profile-edite/profile-edite.component';
import { ProfilePaymentComponent } from './profile-payment/profile-payment.component';
import { ProfileReservComponent } from './profile-reserv/profile-reserv.component';

const routes: Routes = [
  {
    path:'',
    component:ProfileComponent,
    children:[
      {
        path:"",
        redirectTo:"edite",
        pathMatch:"full"
      },
      {
        path:"change",
        component:ProfileChangeComponent
      },
      {
        path:"edite",
        component:ProfileEditeComponent
      },{
        path:"payment",
        component:ProfilePaymentComponent
      },{
        path:"reserv",
        component:ProfileReservComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
