import { Component, OnInit } from '@angular/core';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { NzUploadFile } from 'ng-zorro-antd/upload';
import { MailData } from 'src/app/interfaces/mail';
import { MailService } from 'src/app/services/mail.service';


@Component({
  selector: 'app-mail-form',
  templateUrl: './mail-form.component.html',
  styleUrls: ['./mail-form.component.css']
})
export class MailFormComponent implements OnInit {

  public email: string | undefined = undefined;
  public recipientes: Array<string> = [];
  public subject: string = '';
  public message: string | undefined = undefined;
  public attachments: NzUploadFile[] = [];
  public csvFile: NzUploadFile | undefined = undefined;

  constructor(
    private mailService: MailService,
    private notify: NzNotificationService
  ) { }

  ngOnInit(): void {
  }

  public addRecipiens() {
    console.log(this.email)
    if (this.email != undefined) {
      this.recipientes.push(this.email);
      this.email = '';
      console.log(this.recipientes);
    }
  }

  public onCloseTag(recipiens: string) {
    const index = this.recipientes.indexOf(recipiens);
    if (index != -1) {
      this.recipientes.splice(index, 1);
    }
    console.log(this.recipientes);
  }

  public checkEmailType() {
    let emailregExp = new RegExp('.+@.+');
    if (this.email != undefined) return !emailregExp.test(this.email);
    else return true
  }

  public checkValidate() {
    return !(this.recipientes.length > 0 && this.message != undefined);
  }

  public remove(file: NzUploadFile) {
    this.attachments = this.attachments.filter((f) => f !== file)
    console.log(this.attachments)
  }

  public submit() {
    if (this.message !== undefined) {
      if (this.attachments === undefined) this.attachments = [];
      let data: MailData = {
        recipients: this.recipientes,
        subject: this.subject,
        message: this.message,
        attachments: this.attachments
      }
      console.log(data);
      this.mailService.sendMail(data);
      this.notify.success("Your email successfully sent", "", {
        nzPlacement: "bottomRight",
        nzDuration: 2000,
      });
    }
  }

  public sendCSV() {
    if (this.csvFile !== undefined) {
      this.mailService.sendCSV(this.csvFile);
      this.notify.success("Your email successfully sent", "", {
        nzPlacement: "bottomRight",
        nzDuration: 2000,
      });
    }

    }

  beforeUpload = (file: NzUploadFile): boolean => {
    const reader = new FileReader();
    reader.readAsArrayBuffer(file as any);
    this.attachments.push(file);
    return false;
  }

  beforeUploadCSV = (file: NzUploadFile): boolean => {
    const reader = new FileReader();
    reader.readAsArrayBuffer(file as any);
    this.csvFile = file;
    return false;
  }
}
