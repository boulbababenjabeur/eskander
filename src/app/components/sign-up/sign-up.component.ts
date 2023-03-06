import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SignUpService } from 'src/app/services/sign-up.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private service: SignUpService,
    private router: Router
  ) {}
  signUpForm!: FormGroup;

  ngOnInit(): void {
    this.signUpForm = this.formBuilder.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', Validators.required],
      birthDate: ['', Validators.required],
    });
  }

  onSubmit(data: any) {
    // implement form submission logic here
    console.log(data);
    this.service.signUp(data).subscribe(
      (next) => {
        console.log(next);

        this.router.navigate(['/profile/'+next.id]);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
