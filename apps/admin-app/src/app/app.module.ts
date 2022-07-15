import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ContainerComponent } from './shared/container/container.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { DrugsListComponent } from './drugs/drugs-list/drugs-list.component';
import { DrugsFormComponent } from './drugs/drugs-form/drugs-form.component';

import { DrugsService } from '@frontend/drugs';
import { MessageService, ConfirmationService} from 'primeng/api';

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
];

const routes: Routes = [
  {
    path: '',
    component: ContainerComponent,
    children: [
      {
        path: 'drugs',
        component: DrugsListComponent,
      },
      {
        path: 'drugs/form',
        component: DrugsFormComponent
      },
      {
        path: 'drugs/form/:id',
        component: DrugsFormComponent
      }
    ],
  },
];

@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    SidebarComponent,
    DrugsListComponent,
    DrugsFormComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    ...UX_MODULES,
  ],
  providers: [DrugsService, MessageService, ConfirmationService],
  bootstrap: [AppComponent],
})
export class AppModule {}
