import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoginPageComponent} from './components/login-page/login-page.component';
import {MainPageComponent} from './components/main-page/main-page.component';
import {RegistrationPageComponent} from './components/registration-page/registration-page.component';
import {FormPageComponent} from './components/form-page/form-page.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AuthenticationService} from './services/authentication/authentication.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatChipsModule} from '@angular/material/chips';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatTabsModule} from '@angular/material/tabs';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatRadioModule} from '@angular/material/radio';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatDialogModule} from '@angular/material/dialog';
import {MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatTableModule} from '@angular/material/table';
import {Ng2TelInputModule} from 'ng2-tel-input';
import {TextMaskModule} from 'angular2-text-mask';
import {NgxFileDropModule} from 'ngx-file-drop';
import {NgxMatDatetimePickerModule, NgxMatNativeDateModule} from '@angular-material-components/datetime-picker';
import {MatDatepickerModule} from '@angular/material/datepicker';


@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    MainPageComponent,
    RegistrationPageComponent,
    FormPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatChipsModule,
    MatIconModule,
    MatMenuModule,
    MatTabsModule,
    MatButtonToggleModule,
    MatSidenavModule,
    MatRadioModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatTableModule,
    Ng2TelInputModule,
    TextMaskModule,
    MatButtonModule,
    BrowserModule,
    NgxFileDropModule,
    NgxMatDatetimePickerModule,
    MatDatepickerModule,
    NgxMatNativeDateModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS, useClass: AuthenticationService, multi: true,
    },
    {provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {floatLabel: 'always'}}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
