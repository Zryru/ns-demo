import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators
} from '@angular/forms';
import { RouterExtensions } from '@nativescript/angular';
import { isIOS, TextField } from '@nativescript/core';

function mustMatch(a: string, b: string): ValidatorFn {
  return (control: FormGroup): ValidationErrors | null => {
    if (control.get(a).value !== control.get(b).value) {
      return { mustMatch: true };
    } else {
      return null;
    }
  };
}

@Component({
  selector: 'nsjdc-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent implements OnInit {
  form: FormGroup;
  isLogging = true;

  @ViewChild('passwordField') passwordField: ElementRef<TextField>;

  constructor(private router: RouterExtensions, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initForm();
  }

  focusPassword() {
    if (isIOS) {
      this.passwordField.nativeElement.focus();
    }
  }

  onAuth() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
    } else {
      this.router.navigate(['/challenges'], { clearHistory: true });
    }
  }

  toggleLogin() {
    if (!this.isLogging) {
      this.initForm();
    } else {
      this.form.addControl(
        'confirmPassword',
        new FormControl(null, {
          validators: [Validators.required, Validators.minLength(6)],
        }),
      );
      this.form.setValidators(mustMatch('password', 'confirmPassword'));
    }
    this.isLogging = !this.isLogging;
  }

  private initForm() {
    this.form = this.fb.group({
      email: new FormControl(null, {
        validators: [Validators.required, Validators.email],
      }),
      password: new FormControl(null, {
        validators: [Validators.required, Validators.minLength(6)],
      }),
    });
  }
}
