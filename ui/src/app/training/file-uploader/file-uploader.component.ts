import { Component, OnInit, Input, Output } from '@angular/core';
import { TrainingService } from 'app/service/training/training.service';
import { HttpClientModule, HttpClient, HttpRequest, HttpResponse, HttpEventType } from '@angular/common/http';
import { Http, ResponseContentType } from '@angular/http';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { IUploadResponse } from 'app/models/i-upload-response';
import { switchMap, debounceTime, tap, finalize } from 'rxjs/operators';
import { map, startWith } from 'rxjs/operators';
import { ErrorService } from 'app/service/error/error.service';
@Component({
  selector: 'ms-file-uploader',
  templateUrl: './file-uploader.component.html',
  styleUrls: ['./file-uploader.component.scss']
})
export class FileUploaderComponent implements OnInit {


  @Input() type: String = 'image';
  @Input() single: Boolean = true;

  @Output() public fileName: String
  imageDate: IUploadResponse
  imageurl: any
  percentDone: number;
  uploadSuccess: boolean;
  imageDatas: any;
  constructor(private service: TrainingService, private sanitizer: DomSanitizer,
    private errorService:ErrorService ) {
    this.fileName = "";
    this.blankView()
  }

  ngOnInit() {
  }

  upload(files: File[]) {
    this.uploadAndProgress(files);
  }

  uploadAndProgress(files: File[]) {
    console.log(files)
    var formData = new FormData();
    Array.from(files).forEach(f => formData.append('file', f))
    this.service.putFile(formData)
      .subscribe(event => {
        if (event.type === HttpEventType.UploadProgress) {
          this.percentDone = Math.round(100 * event.loaded / event.total);
        } else if (event instanceof HttpResponse) {
          if (event.status == 200) {
            this.uploadSuccess = true;
            this.imageDate = event.body as IUploadResponse
            this.imageurl = this.imageDate.fileDownloadUri
            var filename = this.imageurl.substring(this.imageurl.lastIndexOf('/') + 1);
            this.fileName = filename;
            this.updateView(this.imageurl)
          } else {
            this.uploadSuccess = false;
          }
        } else {
          this.uploadSuccess = false;
        }
      });
  }

  updateView(fileName) {
    var url = fileName.split('/').pop().split('?')[0]
    this.service.getFile(url).subscribe(
      res => {
        var blob = new Blob([res], { type: res.type });
        let urlCreator = window.URL;
        this.imageDatas = this.sanitizer.bypassSecurityTrustUrl(
          urlCreator.createObjectURL(blob));
      },
      error => { console.error(error); console.log("Downloading isssue"); }
    )
  }

  blankView() {
    this.imageDatas = "assets/img/face.jpg";
  }

}
