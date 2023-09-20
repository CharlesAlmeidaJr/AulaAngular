import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HelloComponent } from './hello/hello.component';
import { RotaComponent } from './rota/rota.component';

const routes: Routes = [
  {path: 'hello', component: HelloComponent},
  {path: 'rota', component: RotaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
