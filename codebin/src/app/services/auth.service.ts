import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword,signOut ,onAuthStateChanged } from "firebase/auth";
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private uid?:string

  constructor(private router:Router) { 
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        this.uid = user.uid
        console.log("User logged in as",user.email)
      } else {
        this.uid = undefined
        console.log("User logged out")
      }
    });
  }

  isAuthenticated(){
    return this.uid ? true : false
  }

  getUid(){
    return this.uid
  }


  registerUser(email: string, password: string) {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log({ user })
        this.router.navigate(['/'])
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage)
        alert("Something went wrong while signup try again")
      });
  }

  loginUser(email: string, password: string) {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log({ user })
        this.router.navigate(['/'])
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage)
        alert("Something went wrong while login try again")
      });
  }

  logout(){
    const auth = getAuth();
    signOut(auth).catch((error) => {
      alert("Something went wrong while logout")
    });
  }
}
