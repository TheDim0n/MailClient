import { Component, OnInit } from '@angular/core';
import { MailService } from 'src/app/services/mail.service';
import { MailData } from 'src/app/interfaces/mail';
import { NzNotificationService } from 'ng-zorro-antd/notification';


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

  public submit() {
    if (this.message != undefined) {
        let data: MailData = {
        recipients: this.recipientes,
        subject: this.subject,
        message: this.message
      };
      this.mailService.sendMail(data);
      this.notify.success("Your email successfully sent", "", {
        nzPlacement: "bottomRight",
        nzDuration: 2000,
      });
    }
  }
}
