import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private httpClient: HttpClient) { }

  // postFile(fileToUpload: File): Observable<boolean> {
  //   const endpoint = 'your-destination-url';
  //   const formData: FormData = new FormData();
  //   // const headers = new Headers();
  //   // headers.append('content-type', 'application-json');
  //   const HttpUploadOptions = {
  //     headers: new HttpHeaders({ 'Content-Type':'multipart/form-data' })
  //   }

  //   formData.append('fileKey', fileToUpload, fileToUpload.name);
  //   return this.httpClient
  //     .post(endpoint, formData, HttpUploadOptions)
  // }
}
