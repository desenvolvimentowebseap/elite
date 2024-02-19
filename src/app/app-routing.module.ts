import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { AboutComponent } from './components/pages/about/about.component';
import { NewMomentComponent } from './components/pages/new-moment/new-moment.component';
import { MomentComponent } from './components/pages/moment/moment.component';
import { EditMomentComponent } from './components/pages/edit-moment/edit-moment.component';
import { LoginComponent } from './components/login/login.component';
import { LayoutComponent } from './components/layout/layout.component';
import { InitialComponent } from './components/initial/initial.component';
import { AcompanhantesComponent } from './components/acompanhantes/acompanhantes.component';

const routes: Routes = [
  
      {path: '', component: HomeComponent },
      {path: 'login', component: LoginComponent},
      {
        path:'', component:LayoutComponent,
        children: [
          {path: 'initial', component: InitialComponent}
        ]
      },
      {path: 'acompanhantes', component: AcompanhantesComponent},
      {path: 'about', component: AboutComponent},
      {path: 'moments/new', component: NewMomentComponent},
      {path: 'moments/edit/:id', component: EditMomentComponent},
      {path: 'moments/:id', component: MomentComponent},
      {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
