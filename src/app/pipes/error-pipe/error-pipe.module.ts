import {NgModule} from "@angular/core";
import {ErrorPipe} from "./error-pipe";


@NgModule({
  declarations: [ErrorPipe],
  exports: [ErrorPipe],
})
export class ErrorPipeModule {}
