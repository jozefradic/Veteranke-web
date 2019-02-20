import {Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { MembersComponent } from './members comp/members/members.component';
import { AuthGuard } from './_guards/auth.guard';
import { MemberDetailComponent } from './members comp/member-detail/member-detail.component';
import { MemberDetailResolver } from './_resolvers/member-detail.resolver';
import { MemberResolver } from './_resolvers/member.resolver';
import { MemberEditComponent } from './members comp/member-edit/member-edit.component';
import { MemberEditResolver } from './_resolvers/member-edit.resolver';
import { PreventUnsavedChanges } from './_guards/prevent-unsaved-changes.guard';
import { AdvertisementsComponent } from './advertisements comp/advertisements/advertisements.component';
import { AdvertisementDetailComponent } from './advertisements comp/advertisement-detail/advertisement-detail.component';
import { AdvertisementDetailResolver } from './_resolvers/advertisement-detail.resolver';
import { AdvertisementResolver } from './_resolvers/advertisement.resolver';
import { AdvertisementNewComponent } from './advertisements comp/advertisement-new/advertisement-new.component';
import { AdminPanelComponent } from './admin/admin-panel/admin-panel.component';
import { AdvertisementEditComponent } from './advertisements comp/advertisement-edit/advertisement-edit.component';
import { AdvertisementEditResolver } from './_resolvers/advertisement-edit.resolver';

export const appRoute: Routes = [
    {path: '', component: HomeComponent},
    {path: 'members', component: MembersComponent, resolve: {users: MemberResolver}},
    {path: 'members/:id', component: MemberDetailComponent,
        resolve: {user: MemberDetailResolver}},
    {path: 'registracia', component: RegisterComponent},
    {path: 'advertisements/new', component: AdvertisementNewComponent},
    {path: 'advertisements', component: AdvertisementsComponent,
        resolve: {advertisement: AdvertisementResolver }},
    {path: 'advertisements/:id', component: AdvertisementDetailComponent,
        resolve: {advertisement: AdvertisementDetailResolver}},

    {
        path: '',
        runGuardsAndResolvers: 'always',
        canActivate: [AuthGuard],
        children: [
            {path: 'member/edit', component: MemberEditComponent,
                resolve: {user: MemberEditResolver}, canDeactivate: [PreventUnsavedChanges]},
            {path: 'advertisements/:id/edit', component: AdvertisementEditComponent,
                resolve: {advertisement: AdvertisementEditResolver}, canDeactivate: [PreventUnsavedChanges]},
            {path: 'admin', component: AdminPanelComponent, data: {roles: ['Admin', 'Moderator']}},
            // {path: 'members', component: MembersComponent}
        ]
    },
    // wild card, if path is ok, but doesnt match anything above, redirect to HOME
    // ordering is important
   // {path: '**', redirectTo: '', pathMatch: 'full'},
];
