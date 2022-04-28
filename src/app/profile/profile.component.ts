import {ChangeDetectionStrategy, ChangeDetectorRef, Component} from '@angular/core';
import {UploadService} from "../services/upload.service";
import {combineLatest, takeWhile, tap} from "rxjs";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {

  public userImageLink: string | null = '';


  constructor(private uploadService: UploadService,
              private cdr: ChangeDetectorRef) {
  }

  public onImageUpload(event: Event): void {
    const {files} = event.target as HTMLInputElement;
    if (!files) {
      return;
    }
    combineLatest(
      this.uploadService.uploadFileAndGetMetadata("profile", files[0])
    ).pipe(
      tap(([, link]) => {
        this.userImageLink = link;
        this.cdr.detectChanges();
      }),
      takeWhile(([, link]) => !link, true),
    ).subscribe()
  }

}
