import {Injectable} from "@angular/core";
import {AngularFirestore, DocumentReference} from "@angular/fire/compat/firestore";
import {from, map, Observable} from "rxjs";
import {DocumentChangeAction} from "@angular/fire/compat/firestore/interfaces";
import firebase from "firebase/compat";

@Injectable({
  providedIn: 'root',
})
export class CrudService {

  constructor(private firestore: AngularFirestore) {
  }

  public fetchOneDocumentFromFirestore<T>(collectionName: string, id: string): Observable<T> {
    return this.firestore.collection(collectionName).doc(id).get()
      .pipe(
        map((snapshot: firebase.firestore.DocumentSnapshot<T | any>) => {
          const {id} = snapshot;
          const data = snapshot.data();
          return {
            id: id,
            ...data,
          }
        })
      )
  }

  public fetchDataFromFirestore<T>(collectionName: string): Observable<T[]> {
    return this.firestore.collection(collectionName).snapshotChanges()
      .pipe(
        map((actions: DocumentChangeAction<T | any>[]) => {
          return actions.map(document => {
            const data = document.payload.doc.data();
            const {id} = document.payload.doc;
            return {id: id, ...data} as T;
          });
        })
      )
  }

  public deleteDocumentFromCollection<T>(collectionName: string, id: string): Observable<void> {
    return from(this.firestore.collection(collectionName).doc(id).delete());
  }

  public createDocument<T>(collectionName: string, document: T): Observable<DocumentReference<T>> {
    return from(this.firestore.collection(collectionName).add(document)) as Observable<DocumentReference<T>>;
  }

  public updateDocument<T>(collectionName: string, id: string, document: T): Observable<void> {
    return from(this.firestore.collection(collectionName).doc(id).set(document, {merge: true}))
  }
}
