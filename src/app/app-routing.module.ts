import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { GamerComponent } from './components/gamer/gamer.component';
import { ResultsComponent } from './components/results/results.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "game", component: GamerComponent },
  { path: "results", component: ResultsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
