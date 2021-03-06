import { Component, OnInit } from '@angular/core';
import { AuthService } from "./auth.service";
import { Router } from "@angular/router";

@Component({
    selector: 'selector-name',
    templateUrl: 'app/user/login.component.html',
    styles:[`
        em { float:right; color: #E06C65; padding-left:10px }
    `]
})

export class LoginComponent implements OnInit {
    constructor(
        private authService: AuthService,
        private router: Router
    ) { }

    ngOnInit() { }

    login(formValues){
        this.authService.loginUser(formValues.userName, formValues.password);
        this.router.navigate(['events']);
    }

    cancel(){
        this.router.navigate(['events']);
    }
}