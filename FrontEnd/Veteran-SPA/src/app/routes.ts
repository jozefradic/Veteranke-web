import {Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { MembersComponent } from './members comp/members/members.component';
import { AuthGuard } from './_guards/auth.guard';
import { MemberDetailComponent } from './members comp/member-detail/member-detail.component';
import { MemberDetailResolver } from './_resolvers/member-detail.resolver';
import { MemberResolver } from './_resolvers/member.resolver';

export const appRoute: Routes = [
    {path: '', component: HomeComponent},

    {
        path: '',
        runGuardsAndResolvers: 'always',
        canActivate: [AuthGuard],
        children: [
            {path: 'register', component: RegisterComponent},
            {path: 'members/:id', component: MemberDetailComponent,
                resolve: {user: MemberDetailResolver}}

            // {path: 'members', component: MembersComponent}
        ]
    },
    // wild card, if path is ok, but doesnt match anything above, redirect to HOME
    // ordering is important
    { path: 'members', component: MembersComponent, resolve: {users: MemberResolver}},
    {path: '**', redirectTo: '', pathMatch: 'full'},
];
