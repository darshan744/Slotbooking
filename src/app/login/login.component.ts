import { Component } from '@angular/core';
import { FormGroup,FormControl ,ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  login=new FormGroup({
    Username:new FormControl(''),
    Password:new FormControl('')
  })
  applylogin(){
    let x=this.login.value.Username??''
    let y=this.login.value.Password??''
    console.log(x,y);
    
  }
}
