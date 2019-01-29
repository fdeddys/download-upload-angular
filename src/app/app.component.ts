import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const HttpUploadOptions = {
  headers: new HttpHeaders()
};
// 'Content-Type': 'multipart/form-data'
// { 'Content-Type' : ' multipart/mixed' }

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent  {

  imgURL;
  title = 'tes-upload';
  // fileToUpload: File[] = null;

  fileList2: File[] = [];
  constructor(public http: HttpClient) {}

//   handleFileInput(files: FileList) {
//     this.fileToUpload = files.item(0);
// }


// uploadFileToActivity() {
//   this.fileUploadService.postFile(this.fileToUpload).subscribe(data => {
//     // do something, if upload success
//     }, error => {
//       console.log(error);
//     });
// }

  loadImg() {
    this.imgURL = 'http://localhost:8080/api/prevFile';

    // this.http.get('http://localhost:8080/api/prevFile')
    //   .subscribe(
    //       data => this.imgURL = data.valueOf,
    //       error => console.log(error)
    //   );
  }


  fileChange(event): void {
    const fileList: FileList = event.target.files;

    if (fileList.length > 0) {
        const file = fileList[0];
        // this.fileToUpload.push(file);
        const reader = new FileReader();
        // this.imagePath = file;
        reader.readAsDataURL(file);
        reader.onload = (_event) => {
          this.imgURL = reader.result;
        };

        const formData = new FormData();
        formData.append('file', file, file.name);
        this.fileList2.push(file);
        console.log('upload', this.fileList2);
        this.http.post('http://localhost:8080/api/uploadfile', formData, HttpUploadOptions)
             .subscribe(
                 data => console.log('success'),
                 error => console.log(error)
             );
    }
  }
}
