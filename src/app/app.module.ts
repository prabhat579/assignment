import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { RegistrationComponent } from './component/registration/registration.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RegisterService } from './register.service';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import {MatIconModule} from '@angular/material/icon';
import {MatChipsModule} from '@angular/material/chips';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatExpansionModule} from '@angular/material/expansion';
import { MatAutocompleteModule } from '@angular/material';
import { ProfileComponent } from './component/profile/profile.component';
import {MatSliderModule} from '@angular/material/slider';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { HomeComponent } from './component/home/home.component';
import { UserRegistrationComponent } from './component/user-registration/user-registration.component';
import { EditUserComponent } from './component/edit-user/edit-user.component';


@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    ProfileComponent,
    HomeComponent,
    UserRegistrationComponent,
    EditUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule, MatButtonModule, MatDialogModule,
    MatFormFieldModule, MatInputModule, MatCardModule, MatSelectModule, ReactiveFormsModule,
     FormsModule, HttpClientModule, MatSnackBarModule , FormsModule, MatIconModule ,MatChipsModule,MatToolbarModule,
     MatExpansionModule,
     MatAutocompleteModule,MatSliderModule,MatCheckboxModule


  ],
  providers: [RegisterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
