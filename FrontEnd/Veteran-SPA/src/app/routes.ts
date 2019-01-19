import {Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';

export const appRoute: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'register', component: RegisterComponent},

    // wild card, if path is ok, but doesnt match anything above, redirect to HOME
    // ordering is important
    {path: '**', redirectTo: 'home', pathMatch: 'full'},
];
