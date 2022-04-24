import {Injectable} from '@angular/core';
import {AngularFireAuth} from "@angular/fire/compat/auth";
import firebase from "firebase/compat/app";
import {from, Observable, ReplaySubject, tap} from 'rxjs';
import AuthProvider = firebase.auth.AuthProvider;
import UserCredential = firebase.auth.UserCredential;

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public user$: ReplaySubject<firebase.User | null> = new ReplaySubject<firebase.User | null>(1);

  constructor(private afAuth: AngularFireAuth) {
    this.afAuth.authState
      .pipe(
        tap((value: firebase.User | null) => {
          this.user$.next(value);
        })
      ).subscribe();
  }

  public googleSingIn(): Observable<UserCredential> {
    return this.authWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  public authWithPopup(provider: AuthProvider): Observable<UserCredential> {
    return from(this.afAuth.signInWithPopup(provider));
  }

  public singOut(): Observable<void> {
    return from(this.afAuth.signOut());
  }
}
