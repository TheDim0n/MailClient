import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NzUploadFile } from 'ng-zorro-antd/upload';
import { environment } from 'src/environments/environment';
import { MailData } from '../interfaces/mail';

@Injectable({
  providedIn: 'root',
})
export class MailService {
  constructor(private http: HttpClient) {}

  public sendMail(data: MailData): void {
    let form_data = new FormData();

    form_data.append('recipients', data.recipients as any);
    form_data.append('subject', data.subject);
    form_data.append('message', data.message);

    for (let attachment of data.attachments)
      form_data.append('attachments', attachment as any);

    this.http
      .post(environment.apiUrl + '/email', form_data)
      .subscribe();
  }

  public sendCSV(attachment: NzUploadFile) {
    let form_data = new FormData();

    form_data.append('csv_file', attachment as any);
    this.http
      .post(environment.apiUrl + '/csv', form_data)
      .subscribe(() => {
        console.log("Sended")
      });
  }
}
