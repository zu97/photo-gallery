import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { FlexModule } from '@angular/flex-layout';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppStoreModule } from './app-store.module';

import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found.component';
import { LayoutComponent } from './ui/layout/layout.component';
import { CenteredCardComponent } from './ui/centered-card/centered-card.component';
import { LoaderComponent } from './ui/loader/loader.component';
import { FileInputComponent } from './ui/file-input/file-input.component';
import { ValidateIdenticalDirective } from './directives/validate-identical.directive';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import {
  FacebookLoginProvider,
  GoogleLoginProvider,
  SocialAuthServiceConfig,
  SocialLoginModule
} from 'angularx-social-login';
import { environment as env } from '../environments/environment';

const socialAuthConfig: SocialAuthServiceConfig = {
  autoLogin: false,
  providers: [
    {
      id: FacebookLoginProvider.PROVIDER_ID,
      provider: new FacebookLoginProvider(env.facebookAppId, {
        scope: 'email,public_profile'
      })
    },
    {
      id: GoogleLoginProvider.PROVIDER_ID,
      provider: new GoogleLoginProvider(env.googleAppId, {
        scope: 'email profile'
      })
    }
  ]
};

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    LayoutComponent,
    CenteredCardComponent,
    LoaderComponent,
    FileInputComponent,
    ValidateIdenticalDirective,
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatCardModule,
    FlexModule,
    MatProgressSpinnerModule,
    FormsModule,
    MatButtonModule,
    MatSnackBarModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule,
    SocialLoginModule,
    AppRoutingModule,
    AppStoreModule
  ],
  providers: [
    { provide: 'SocialAuthServiceConfig', useValue: socialAuthConfig }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
