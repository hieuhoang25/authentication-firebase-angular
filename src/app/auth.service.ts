import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afAuth: AngularFireAuth) { }

  GoogleAuth(){
    return this.AuthLogin(new GoogleAuthProvider());
  }
  GithubAuth(){
    return this.AuthLogin(new GithubAuthProvider())
  }
  AuthLogin(provider: any){
    return this.afAuth
    .signInWithPopup(provider)
    .then((result) => {
      console.log(result)
      console.log('You have been successfully logged in!');
    })
    .catch((error) => {
      console.log(error);
    });

  }
}
