import {Injectable} from "@angular/core";
import {AngularFireStorage, AngularFireUploadTask} from "@angular/fire/compat/storage";
import {from, Observable, startWith, switchMap} from "rxjs";

@Injectable({
  providedIn: "root",
})
export class UploadService {
  constructor(private storage: AngularFireStorage) {
  }

  public uploadFileAndGetMetadata(
    mediaFolderPath: string,
    fileToUpload: File,
  ): [percent: Observable<number | undefined>, link: Observable<string | null>] {
    const filePath = this.getFileMediaPath(mediaFolderPath, fileToUpload.name);
    const uploadTask = this.getUploadTask(filePath, fileToUpload);
    return [
      uploadTask.percentageChanges(),
      this.getDownloadUrl$(uploadTask, filePath)
        .pipe(
          startWith(null)
        ),
    ];
  }

  private getDownloadUrl$(uploadTask: AngularFireUploadTask, path: string): Observable<string> {
    return from(uploadTask)
      .pipe(
        switchMap((_) => {
          return this.storage.ref(path).getDownloadURL();
        }));
  }

  private getFileMediaPath(mediaFolderPath: string, name: string): string {
    return `${mediaFolderPath}/${new Date().getTime()}_${name}`;
  }

  private getUploadTask(filePath: string, fileToUpload: File): AngularFireUploadTask {
    return this.storage.upload(filePath, fileToUpload);
  }
}
