import {Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { MembersComponent } from './members/members.component';
import { AuthGuard } from './_guards/auth.guard';

export const appRoute: Routes = [
    {path: '', component: HomeComponent},

    {
        path: '',
        runGuardsAndResolvers: 'always',
        canActivate: [AuthGuard],
        children: [
            {path: 'register', component: RegisterComponent},
            {path: 'members', component: MembersComponent}
        ]
    },
    // wild card, if path is ok, but doesnt match anything above, redirect to HOME
    // ordering is important
    {path: '**', redirectTo: '', pathMatch: 'full'},
];
