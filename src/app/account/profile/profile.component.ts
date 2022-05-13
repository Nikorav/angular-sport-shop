import {ChangeDetectionStrategy, Component} from '@angular/core';
import {UploadService} from "../../services/upload.service";
import {filter, Observable, of, switchMap, takeWhile} from "rxjs";
import {CrudService} from "../../services/crud.service";
import {Collection} from "../../data-types/collections";
import {AuthService} from "../../services/auth.service";
import firebase from "firebase/compat";


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {

  public userImageLink: string | null = '';

  public user: Observable<any | null> = this.authService.selectUser()
    .pipe(
      switchMap((user: firebase.User | null) => {
        if (!user) {
          return of(null)
        }
        return this.crudService.fetchOneDocumentFromFirestore<Partial<firebase.User>>(Collection.USERS, user.uid)
      })
    )


  constructor(private uploadService: UploadService,
              private crudService: CrudService,
              private authService: AuthService) {
  }


  public onImageUpload(event: Event): void {
    const {files} = event.target as HTMLInputElement;
    if (!files) {
      return;
    }

    this.uploadService.uploadFileAndGetMetadata("profile", files[0])
      .pipe(
        filter(url => !!url),
        switchMap(url => this.crudService.updateDocument(Collection.USERS, this.authService.getUser()?.uid as string, {
            photoURL: url,
          })
        ),
        takeWhile((value: void) => {
          return typeof value !== undefined;
        }, true),
      ).subscribe()
  }
}
