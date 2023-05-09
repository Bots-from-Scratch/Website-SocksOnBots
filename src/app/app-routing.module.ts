import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InfoComponent } from './info/info.component';
import { CompetitionComponent } from './competition/competition.component';
import { TutorialComponent } from './tutorial/tutorial.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: 'info', component: InfoComponent },
  {path: 'competition', component: CompetitionComponent},
  {path: 'tutorial', component: TutorialComponent},
  {path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
