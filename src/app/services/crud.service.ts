import {Injectable} from "@angular/core";
import {Action, AngularFirestore, DocumentReference, DocumentSnapshot, QueryFn} from "@angular/fire/compat/firestore";
import {from, map, Observable, take} from "rxjs";
import {DocumentChangeAction} from "@angular/fire/compat/firestore/interfaces";

@Injectable({
  providedIn: 'root',
})
export class CrudService {

  constructor(private firestore: AngularFirestore) {
  }

  public fetchOneDocumentFromFirestore<T>(collectionName: string, id: string): Observable<T | null> {
    return this.firestore.collection(collectionName).doc(id).snapshotChanges()
      .pipe(
        map((snapshot: Action<DocumentSnapshot<T | any>>) => {
          const {id, exists} = snapshot.payload;
          const data = snapshot.payload.data();
          return exists
          ?
            {
            id: id,
            ...data,
          }
          : null;
        })
      )
  }

  public fetchDataFromFirestore<T>(collectionName: string, queryFn?: QueryFn): Observable<T[]> {
    return this.firestore.collection(collectionName, queryFn).snapshotChanges()
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
    return from(this.firestore.collection(collectionName).doc(id).delete()).pipe(take(1));
  }

  public createDocument<T>(collectionName: string, document: T): Observable<DocumentReference<T>> {
    return (from(this.firestore.collection(collectionName).add(document)) as Observable<DocumentReference<T>>).pipe(take(1));
  }

  public updateDocument<T>(collectionName: string, id: string | undefined, document: T): Observable<void> {
    return from(this.firestore.collection(collectionName).doc(id).set(document, {merge: true})).pipe(take(1));
  }
}
