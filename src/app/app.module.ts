import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule }   from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormulaireComponent } from './Form/formulaire/formulaire.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { UploadFileWindowComponent } from './upload-file-window/upload-file-window.component';
import { IdentificationComponent } from './Form/identification/identification.component';
import { ContextComponent } from './Form/context/context.component';
import { EvaluationComponent } from './Form/evaluation/evaluation.component';
import { CommentairesComponent } from './Form/commentaires/commentaires.component';
import { SignaturesComponent } from './Form/signatures/signatures.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CgiHeaderComponent } from './cgi-header/cgi-header.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { HttpClientModule } from '@angular/common/http';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule, MatDatepickerModule, MatNativeDateModule, MatFormFieldModule,
  MatInputModule} from '@angular/material';
import { FormPrintComponent } from './form-print/form-print.component';
import { InvoiceComponent } from './invoice/invoice.component';


const appRoutes: Routes = [
 { path: 'form', component: FormulaireComponent },
 { path : 'dashboard', component : DashboardComponent},
 { path : 'upload', component : UploadFileWindowComponent},
 { path : '', component : LoginPageComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    FormulaireComponent,
    DashboardComponent,
    UploadFileWindowComponent,
    IdentificationComponent,
    ContextComponent,
    EvaluationComponent,
    CommentairesComponent,
    SignaturesComponent,
    CgiHeaderComponent,
    LoginPageComponent,
    FormPrintComponent,
    InvoiceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatInputModule, MatButtonModule, MatCheckboxModule, MatDatepickerModule, MatNativeDateModule ,  MatFormFieldModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [
    MatInputModule,
    MatButtonModule, 
    MatCheckboxModule, 
    MatDatepickerModule, 
    MatNativeDateModule,  
    MatFormFieldModule, 
    BrowserAnimationsModule],
  providers: [MatDatepickerModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
