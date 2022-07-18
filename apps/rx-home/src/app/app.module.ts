import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { Route, RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { ContainerComponent } from './shared/container/container.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { DoctorsFormComponent } from './components/doctors-form/doctors-form.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';

import { Specialities } from '@frontend/doctors';
import { DoctorsService } from '@frontend/doctors';
import { CookieService } from 'ngx-cookie-service'

//ux modules
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CardModule } from 'primeng/card';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { ToastModule } from 'primeng/toast';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { PasswordModule } from 'primeng/password';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { FileUploadModule } from 'primeng/fileupload';

const UX_MODULES = [
  BrowserAnimationsModule,
  CardModule,
  ToolbarModule,
  ButtonModule,
  TableModule,
  InputTextModule,
  DropdownModule,
  ToastModule,
  ConfirmDialogModule,
  PasswordModule,
  AutoCompleteModule,
  FileUploadModule
];

const routes: Routes = [
  {
    path: '',
    component: ContainerComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
      },
      {
        path: 'home',
        component: HomeComponent,
      },
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'register',
        component: RegisterComponent,
        children: [
          {
            path: '',
            component: DoctorsFormComponent
          },
          {
            path: 'verify',
            component: VerifyEmailComponent
          },
          {
            path: 'verify/:id/:token',
            component: VerifyEmailComponent
          }
        ]
      },
    ],
  },
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ContainerComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    DoctorsFormComponent,
    VerifyEmailComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    ...UX_MODULES,
  ],
  providers: [Specialities, DoctorsService, CookieService],
  bootstrap: [AppComponent],
})
export class AppModule {}
