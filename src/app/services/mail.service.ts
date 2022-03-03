import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { MailData } from '../interfaces/mail';

@Injectable({
  providedIn: 'root'
})
export class MailService {

  constructor(private http: HttpClient) { }

  public sendMail(data: MailData): void {
    this.http.post(environment.apiUrl + "/email/", data).subscribe();
  }
}
