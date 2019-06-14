import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InboxComponent } from './modules/inbox/inbox.component';
import { RotasModule } from './app.routes';
import { Page404Component } from './modules/page404/page404.component';
import { HttpClientModule } from '@angular/common/http';
import { CmailFormModule } from './shared/modules/cmail-form-group.module';
import { AuthBasicGuard } from 'src/guards/auth-basic.guard';
import { EmailService } from './services/email.service';
import { FiltraEmail } from './modules/inbox/filtraEmail.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    InboxComponent,
    Page404Component,
    FiltraEmail
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CmailFormModule,
    RotasModule
  ],
  providers: [AuthBasicGuard, EmailService],
  bootstrap: [AppComponent]
})
export class AppModule { }
