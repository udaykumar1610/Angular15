
import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

 
    user = {
      email: '',
      password: ''
    };
  
    submitLogin() {
      // Validate the password against the pattern
      const pattern = /^(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&*()_+}{"':;?/>.<,])(?!.*\s).{6,10}$/;
      if (!pattern.test(this.user.password)) {
          alert('Password should be a combination of letters, numbers, and 1 special character. It should have a minimum length of 6 and maximum of 10 characters.');
          return;
      }
  
      alert('Login request submitted!');
      console.log(this.user);
  }
  


}
