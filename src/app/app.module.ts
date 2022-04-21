import { registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import ru from '@angular/common/locales/ru';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IconDefinition } from '@ant-design/icons-angular';
import { PlusOutline } from '@ant-design/icons-angular/icons';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NZ_I18N, ru_RU } from 'ng-zorro-antd/i18n';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzNotificationModule } from 'ng-zorro-antd/notification';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzUploadModule } from 'ng-zorro-antd/upload';
import { MailFormComponent } from 'src/app/components/mail-form/mail-form.component';
import { AppComponent } from './app.component';
import { MailService } from './services/mail.service';





registerLocaleData(ru);


const icons: IconDefinition[] = [ PlusOutline ];

@NgModule({
  declarations: [
    AppComponent,
    MailFormComponent
  ],
  imports: [
    BrowserModule,
    NzButtonModule,
    NzFormModule,
    NzGridModule,
    NzIconModule.forRoot(icons),
    NzDividerModule,
    FormsModule,
    NzTagModule,
    NzTypographyModule,
    HttpClientModule,
    NzNotificationModule,
    BrowserAnimationsModule,
    NzAlertModule,
    NzLayoutModule,
    NzUploadModule
  ],
  providers: [MailService, { provide: NZ_I18N, useValue: ru_RU }],
  bootstrap: [AppComponent]
})
export class AppModule { }
