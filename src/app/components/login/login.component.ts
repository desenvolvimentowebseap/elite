import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public formLogin: FormGroup;

  constructor(private fb: FormBuilder, private route: Router, private loginService: LoginService) {
    this.formLogin = this.criarFormLogin()
  }

  ngOnInit(): void {}

  public criarFormLogin(): FormGroup{
    return this.fb.group({
      username: ["", [Validators.required, Validators.minLength(6)]],
      password: ["", [Validators.required, Validators.minLength(6)]],
    })
  }

  form = this.fb.group({
    email: [{value: '', disabled: true},  [
      Validators.email, Validators.required],
    ],
    password: ['', [Validators.required, Validators.minLength(6)]]
  })

 public isFormControlInvalid(controlName: string): boolean {
    return !!(this.formLogin.get(controlName)?.invalid && this.formLogin.get(controlName)?.touched)
  }

  public submitForm(){
    const {username, password} = this.formLogin.value;
    this.formLogin.reset();

    this.loginService.login(username, password).subscribe(
      res => {
        'Login efetuado com sucesso'
        this.route.navigate(['']);
      },
      err => {
        'Erro ao efetuar o login. Verifique o login e a senha'
      }
    )
  }

  onSubmit() {

  }
}
