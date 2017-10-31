import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { SettingsComponent } from "./settings/settings.component";
import { HelpComponent } from "./help/help.component";
const MAINMENU_ROUTES: Routes = [
  //full : makes sure the path is absolute path
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'help', component: HelpComponent }
];
export const CONST_ROUTING = RouterModule.forRoot(MAINMENU_ROUTES);
