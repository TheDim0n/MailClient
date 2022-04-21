import { NzUploadFile } from "ng-zorro-antd/upload";

export interface MailData {
    recipients: Array<string>;
    subject: string;
    message: string;
    attachments: NzUploadFile[];
}
