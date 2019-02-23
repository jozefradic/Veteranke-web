import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BsDropdownModule, TabsModule, CollapseModule, PaginationModule } from 'ngx-bootstrap';
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

import { HasRoleDirective } from './_directive/hasRole.directive';
import { PhotoEditorComponent } from './members comp/photo-editor/photo-editor.component';

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
      HasRoleDirective
   ],
   imports: [
      BrowserModule,
      HttpClientModule,
      FormsModule,
      ReactiveFormsModule,
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
      AdvertisementEditResolver
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
