import {Injectable} from '@angular/core';
import {AngularFireAuth} from "@angular/fire/compat/auth";
import firebase from "firebase/compat/app";
import {from, Observable, of, ReplaySubject, switchMap, tap} from 'rxjs';
import AuthProvider = firebase.auth.AuthProvider;
import UserCredential = firebase.auth.UserCredential;
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {Collection} from "../data-types/collections";
import {CrudService} from "./crud.service";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private user$: ReplaySubject<firebase.User | null> = new ReplaySubject<firebase.User | null>(1);

  private user: firebase.User | null = null;

  constructor(private afAuth: AngularFireAuth,
              private firestoreService: AngularFirestore,
              private crudService: CrudService) {
    this.afAuth.authState
      .pipe(
        tap((value: firebase.User | null) => {
          this.user$.next(value);
          this.user = value;
        })
      ).subscribe();
  }

  public googleSingIn(): Observable<UserCredential> {
    return this.authWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  public getUser(): firebase.User | null {
    return this.user;
  }

  public selectUser(): Observable<firebase.User | null> {
    return this.user$;
  }

  public authWithPopup(provider: AuthProvider): Observable<any> {
    return from(this.afAuth.signInWithPopup(provider))
      .pipe(
        switchMap((credentials: any) => {
          return this.crudService.fetchOneDocumentFromFirestore(Collection.USERS, credentials.user.uid)
            .pipe(
              switchMap((user: any) => {
                if (!user) {
                  const {user: credentialsUser} = credentials;
                  const userRef: any = this.firestoreService.collection(Collection.USERS).doc(credentialsUser.uid).set({
                    id: credentialsUser.uid,
                    name: credentialsUser.displayName,
                    email: credentialsUser.email,
                    balance: 0,
                    photoURL: credentialsUser.photoURL,
                  }, {
                    merge: true,
                  });
                  return from(userRef);
                }
                return of(user);
              })
            )
        }),
      );
  }

  public singOut(): Observable<void> {
    return from(this.afAuth.signOut());
  }
}
