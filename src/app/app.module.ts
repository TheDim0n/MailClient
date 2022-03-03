import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { IconDefinition } from '@ant-design/icons-angular';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzNotificationModule } from 'ng-zorro-antd/notification';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzLayoutModule } from 'ng-zorro-antd/layout';

import { PlusOutline } from '@ant-design/icons-angular/icons';
import { MailFormComponent } from 'src/app/components/mail-form/mail-form.component';
import { FormsModule } from '@angular/forms';

import { MailService } from './services/mail.service';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { ru_RU } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import ru from '@angular/common/locales/ru';

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
    NzLayoutModule
  ],
  providers: [MailService, { provide: NZ_I18N, useValue: ru_RU }],
  bootstrap: [AppComponent]
})
export class AppModule { }
