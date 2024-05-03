import { Component, OnInit, inject } from '@angular/core';
import { FormGroup,FormControl ,ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { Router } from '@angular/router';
 
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  private router = inject(Router)
   decodeJWTToken(token:string){
    return JSON.parse(atob(token.split(".")[1]))
  }
  handleOauthResponse(response:any){
    const responsePayload = this.decodeJWTToken(response.credential)
    console.log(responsePayload)
    sessionStorage.setItem('loggedinUser',JSON.stringify(responsePayload))
    this.router.navigate(['dashboard'])
    
  }
}
