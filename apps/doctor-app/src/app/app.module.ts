import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { ContainerComponent } from './shared/container/container.component';
import { ProfileComponent } from './profile/profile/profile.component';

import { DrugsService } from '@frontend/drugs';
import { MessageService, ConfirmationService } from 'primeng/api';
import { DoctorsService } from '@frontend/doctors';
import { CookieService } from 'ngx-cookie-service';

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
import { DialogModule } from 'primeng/dialog';
import { NewUsersComponent } from './doctors/new-users/new-users.component';

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
  DialogModule,
];

const routes: Routes = [
  {
    path: '',
    component: ContainerComponent,
    children: [
      {
        path: 'profile',
        component: ProfileComponent,
      },
    ],
  },
];

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    ContainerComponent,
    ProfileComponent,
    NewUsersComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    ...UX_MODULES,
  ],
  providers: [
    DrugsService,
    DoctorsService,
    MessageService,
    ConfirmationService,
    CookieService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
