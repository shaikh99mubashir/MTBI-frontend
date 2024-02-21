import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-login-register',
  templateUrl: './login-register.component.html',
  styleUrls: ['./login-register.component.scss']
})
export class LoginRegisterComponent implements OnInit {


  formTitle = 'Login'
  isLoginForm = true
  loader = false
  defaultEmail = 'faraz@gmail.com'
  defaultPass = '12345'
  modalRef :any;
  isEmailValid = false
  isPassValid = false

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('',Validators.required),
    stdID: new FormControl(''),
    stdName: new FormControl(''),
    stdFatherName: new FormControl(''),
    stdSemester: new FormControl(''),
    stdYear: new FormControl(''),
    stdContactNumber: new FormControl(''),
    // stdContactNumber: new FormControl('', [Validators.required, Validators.pattern('^[0-9]+$')]),
  });


  constructor(private modalService: NgbModal, private router: Router, private userService: UserServiceService) {
    let userID = localStorage.getItem('userID')
    if(userID){
      this.router.navigate(['/home'])
    }else{
      this.router.navigate([''])

    }
  }
  ngOnInit(): void {
  }
   login() {
    this.loader = true
    const _payload = {
      username: this.loginForm.controls['email'].value,
      password: this.loginForm.controls['password'].value,
    }
    this.userService.login(_payload).subscribe((res: any) => {
      console.log(res)
      
      if(res.success){
        this.loader = false
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: res.message,
          showConfirmButton: false,
          timer: 1000
        });
          this.router.navigate(['/home'])
          localStorage.setItem('userID',res.user_id)
      }else{
        this.loader = false
        Swal.fire({
              position: "top-end",
              icon: "error",
              title: res.message,
              showConfirmButton: false,
              timer: 1000
            });
      
      }
      
    })
  }

  validateSignupForm(){
    let isSignupFormValid = true
  }
  signUp() {
    this.loader = true
    const _payload = {
      username: this.loginForm.controls['email'].value,
      password: this.loginForm.controls['password'].value,
      studentID: this.loginForm.controls['stdID'].value,
      studentName: this.loginForm.controls['stdName'].value,
      fatherName: this.loginForm.controls['stdFatherName'].value,
      semester: this.loginForm.controls['stdSemester'].value,
      year: this.loginForm.controls['stdYear'].value,
      contact: this.loginForm.controls['stdContactNumber'].value,
    }
    console.log('signup Payload',_payload)
    this.userService.signUp(_payload).subscribe((res: any) => {
      console.log(res)
      if(res.success){
        this.loader = false
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: res.message,
          showConfirmButton: false,
          timer: 1000
        });
      }else{
        this.loader = false
        Swal.fire({
              position: "top-end",
              icon: "error",
              title: res.message,
              showConfirmButton: false,
              timer: 1000
            });
      
      }
    })
  }
  clearForm() {
    this.loginForm.patchValue({
      email: null,
      password: null,
      stdID: null,
      stdName: null,
      stdFatherName: null,
      stdSemester: null,
      stdYear: null,
      stdContactNumber: null,

    })
  }

  open(content: any) {
    this.modalRef =  this.modalService.open(content, { centered: true });
  }
  submit() {
    if(this.loginForm.valid){
      if(this.isLoginForm){
        this.login()
        this.modalRef?.close();
      }else{
        this.signUp()
        this.modalRef?.close();
      }
      this.clearForm()
    }else{
      if(!this.loginForm.controls.email.valid){
        this.isEmailValid = true
      }
       if(!this.loginForm.controls.password.valid){
        this.isPassValid = true
      }
    }
    

  }

  navigateToForm(form: any) {
    if (form === 'Login') {
      this.isLoginForm = !this.isLoginForm
      this.formTitle = "Register"
    } else {
      this.isLoginForm = !this.isLoginForm
      this.formTitle = 'Login'
    }

  }
}
