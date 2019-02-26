import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BsDropdownModule, TabsModule, CollapseModule, PaginationModule, ModalModule } from 'ngx-bootstrap';
import { RouterModule } from '@angular/router';
import { JwtModule } from '@auth0/angular-jwt';
import { NgxGalleryModule } from 'ngx-gallery';
import { CarouselModule} from 'ngx-bootstrap/carousel';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { appRoute } from './routes';

import { AppComponent } from './app.component';
import { ValueComponent } from './value/value.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';

import { AdminPanelComponent } from './admin/admin-panel/admin-panel.component';
import { UserManagmentComponent } from './admin/user-managment/user-managment.component';
import { AdminService } from './_services/admin.service';
import { RolesModalComponent } from './admin/roles-modal/roles-modal.component';


import { MembersComponent } from './members comp/members/members.component';
import { MemberCardComponent } from './members comp/member-card/member-card.component';
import { MemberDetailComponent } from './members comp/member-detail/member-detail.component';
import { MemberEditComponent } from './members comp/member-edit/member-edit.component';

import { AdvertisementsComponent } from './advertisements comp/advertisements/advertisements.component';
import { AdvertisementCardComponent } from './advertisements comp/advertisement-card/advertisement-card.component';
import { AdvertisementDetailComponent } from './advertisements comp/advertisement-detail/advertisement-detail.component';
import { AdvertisementNewComponent } from './advertisements comp/advertisement-new/advertisement-new.component';
import { AdvertisementEditComponent } from './advertisements comp/advertisement-edit/advertisement-edit.component';

import { AuthService } from './_services/auth.service';
import { RegisterComponent } from './register/register.component';
import { ErrorInterceptorProvider } from './_services/error.interceptor';
import { AlertifyService } from './_services/alertify.service';
import { AuthGuard } from './_guards/auth.guard';
import { PreventUnsavedChanges } from './_guards/prevent-unsaved-changes.guard';
import { UserService } from './_services/user.service';
import { AdvertisementService } from './_services/advertisement.service';

import { MemberDetailResolver } from './_resolvers/member-detail.resolver';
import { MemberResolver } from './_resolvers/member.resolver';
import { MemberEditResolver } from './_resolvers/member-edit.resolver';
import { AdvertisementDetailResolver } from './_resolvers/advertisement-detail.resolver';
import { AdvertisementResolver } from './_resolvers/advertisement.resolver';
import { AdvertisementEditResolver } from './_resolvers/advertisement-edit.resolver';
import { AdvertisementNewResolver } from './_resolvers/advertisement-new.resolver';

import { HasRoleDirective } from './_directive/hasRole.directive';
import { PhotoEditorComponent } from './members comp/photo-editor/photo-editor.component';
import { HistoriaComponent } from './galeria/historia/historia.component';
import { RenovaciaComponent } from './galeria/renovacia/renovacia.component';
import { VozidlaComponent } from './galeria/vozidla/vozidla.component';


export function tokenGetter() {
   return localStorage.getItem('token');
}

@NgModule({
   declarations: [
      AppComponent,
      ValueComponent,
      NavComponent,
      HomeComponent,
      RegisterComponent,
      MembersComponent,
      MemberCardComponent,
      MemberDetailComponent,
      MemberEditComponent,
      PhotoEditorComponent,
      AdvertisementsComponent,
      AdvertisementCardComponent,
      AdvertisementDetailComponent,
      AdvertisementNewComponent,
      AdvertisementEditComponent,
      AdminPanelComponent,
      HasRoleDirective,
      UserManagmentComponent,
      RolesModalComponent,
      RenovaciaComponent,
      VozidlaComponent,
      HistoriaComponent
   ],
   imports: [
      BrowserModule,
      HttpClientModule,
      FormsModule,
      ReactiveFormsModule,
      ModalModule.forRoot(),
      NgbModule.forRoot(),
      NgxGalleryModule,
      PaginationModule.forRoot(),
      BsDropdownModule.forRoot(),
      TabsModule.forRoot(),
      CarouselModule.forRoot(),
      CollapseModule.forRoot(),
      RouterModule.forRoot(appRoute),
      JwtModule.forRoot({
         config: {
            tokenGetter: tokenGetter,
            whitelistedDomains: ['localhost:5000'],
            blacklistedRoutes: ['localhost:5000/api/auth']
         }
      })
   ],
   providers: [

      AuthService,
      ErrorInterceptorProvider,
      AlertifyService,
      AuthGuard,
      PreventUnsavedChanges,
      UserService,
      MemberDetailResolver,
      MemberResolver,
      MemberEditResolver,
      AdvertisementService,
      AdvertisementDetailResolver,
      AdvertisementResolver,
      AdvertisementEditResolver,
      AdvertisementNewResolver,
      AdminService
   ],
   entryComponents: [
      RolesModalComponent
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
