import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { ProfileComponent } from './profile.component';
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { userRoutes } from './user.routes';
import { LoginComponent } from "./login.component";


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forChild(userRoutes)
    ],
    exports: [],
    declarations: [
        ProfileComponent,
        LoginComponent
    ],
    providers: [
        
    ],
})
export class UserModule { }
