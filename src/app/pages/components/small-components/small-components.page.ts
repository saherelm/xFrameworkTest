import {
  XColor,
  XSpinner,
  XResourceIDs,
  XModalButtonRole,
  isNullOrEmptyString,
} from 'x-framework-core';
import { Component } from '@angular/core';
import { XButtonType, XSlotName, XSlotLayout } from 'x-framework-components';
import { VPageComponent } from '../../../views/v-page/v-page.component';
import { AppResourceIDs } from 'src/app/config/app.localization.config';

@Component({
  selector: 'app-small-components',
  templateUrl: './small-components.page.html',
  styleUrls: ['./small-components.page.scss'],
})
// tslint:disable-next-line:component-class-suffix
export class SmallComponentsPage extends VPageComponent {
  //
  //#region Props ...
  //
  //#region Page Props ...
  titleRes = AppResourceIDs.small_components;
  toolbarTitle = this.resourceProvider(this.titleRes);
  toolbarSubTitle = this.resourceProvider(
    AppResourceIDs.small_components_description
  );
  toolbarShowSubTitle = true;
  //#endregion

  //
  // Prepare All Resource IDs ...
  readonly ResourceIDs = Object.assign(
    Object.assign({}, XResourceIDs),
    AppResourceIDs
  );

  //
  // Color Names ...
  readonly ColorNames = Object.assign({}, XColor);

  //
  // Content ...
  readonly content = `
  # مولفه های جزئی

  مولفه هایی هستند که بسیار جزئی و پرکاربرد هستند و شامل پیکربندی های پیچیده نیستند.
  این مولفه ها را بسادگی می توان مورد بهره برداری قرار داد.

  در ادامه فهرستی از این مولفه ها بهمراه مستندات مربوط به هریک به تفکیک ارائه می گردد:
  `;

  //
  // Button Content ...
  readonly ButtonTypes = Object.assign({}, XButtonType);
  readonly buttonContent = `
  دکمه ها در زمره پرکاربرد ترین مولفه ها در برنامه های کاربردی هستند.

  در این چارچوب مجموعه ای از دکمه ها قابل بهره برداری هستند که در ادامه به آنها اشاره خواهد شد.
  `;

  //
  // Button Sample 1 ...
  readonly buttonSample1 =
    '```' +
    '<x-button [color]="\'primary\'" ' +
    '[type]="ButtonTypes.Raised"  ' +
    'class="ion-margin-horizontal"  ' +
    '(click)="handleButtonClicked()"  ' +
    '[title]="ResourceIDs.temp_label">  ' +
    '</x-button>' +
    '```';

  //
  // Button Sample 1 ...
  readonly buttonSample2 =
    '```' +
    '<x-button [color]="\'secondary\'" ' +
    '[foregroundColor]="true" ' +
    '[type]="ButtonTypes.Raised" ' +
    'class="ion-margin-horizontal" ' +
    '(click)="handleButtonClicked()" ' +
    '[title]="ResourceIDs.temp_label"> ' +
    '</x-button>' +
    '```';

  //
  // Button Sample 1 ...
  readonly buttonSample3 =
    '```' +
    '<x-button [color]="\'tertiary\'" ' +
    '[type]="ButtonTypes.Icon" ' +
    'class="ion-margin-horizontal" ' +
    '(click)="handleButtonClicked()" ' +
    '[title]="ResourceIDs.temp_label"> ' +
    '  <x-icon [name]="\'list\'" [color]="\'light\'"></x-icon>' +
    '</x-button>' +
    '```';

  //
  // Alert Content ...
  readonly alertContent = `
  این مولفه زمانی کاربرد دارد که قصد داریم پیام خاصی را به کاربر نمایش دهیم.

  گونه های مختلفی از هشدارهای از پیش تعریف شده جهت سهولت استفاده فراهم شده اند که با مطالعه مستندات می توانید آن ها را مورد بهره برداری قرار دهید.

  برای نمایش اعلان باید بصورت زیر عمل کنیم:

  `;

  readonly alertSample1 =
    '```' +
    'await this.managerService.dialogService.presentAlert(' +
    '{' +
    'header: AppResourceIDs.alert, ' +
    "subHeader: 'sub title', " +
    "message: 'dialog message', " +
    'buttons: [ ' +
    '{' +
    "text: 'OK', " +
    'role: XModalButtonRole.Selected, ' +
    'handler: () => {} ' +
    '}]});' +
    '```';

  //
  // Prompt Content ...
  readonly promptContent = `
  در برخی موارد احتیاج داریم تا اطلاعات خاصی را از کاربر تحت عنوان ورودی دریافت کنیم:
  `;
  readonly promptSample1 =
    '```' +
    'await this.managerService.dialogService.presentAlert(' +
    '{ ' +
    "header: 'عنوان', " +
    "subHeader: 'توضیحات', " +
    "message: 'نام شما چیست ؟', " +
    'inputs: [ ' +
    '{ ' +
    "type: 'text', " +
    "name: 'name', " +
    "label: 'نام', " +
    "placeholder: 'نام و نام خانوادگی ...', " +
    '}, ' +
    '], ' +
    'buttons: [ ' +
    '{ ' +
    "text: 'ثبت', " +
    'role: XModalButtonRole.Selected, ' +
    "cssClass: ['btn-selected'], " +
    'handler: async (value) => { ' +
    'if (value && value.name && !isNullOrEmptyString(value.name)) { ' +
    'await this.managerService.notificationService.presentInfoNotification( ' +
    '{ ' +
    'message: value.name, ' +
    'dissmissable: true ' +
    '} ' +
    '); ' +
    '} ' +
    '} ' +
    '}, ' +
    '{ ' +
    "text: 'لغو', " +
    'role: XModalButtonRole.Cancel, ' +
    "cssClass: ['btn-cancel'], " +
    'handler: () => { ' +
    '}, ' +
    '}, ' +
    '], ' +
    '}); ' +
    '```';

  //
  // Notification Content ...
  readonly notificationContent = `
  اعلان ها اغلب جهت اطلاع از نتیجه انجام یک عملیات به کار می روند.
  `;

  readonly notificationSample1 =
    '```' +
    'await this.managerService.notificationService.presentDangerNotification(' +
    '{ ' +
    'message: XResourceIDs.error, ' +
    'dissmissable: true' +
    '});' +
    '```';

  //
  // Spinner Content ...
  readonly SpinnerNames = Object.assign({}, XSpinner);
  readonly spinnerContent = `این مولفه اغلب جهت نمایش وضعیت در حال انجام کار در سایر مولفه ها کاربرد دارد.`;
  readonly spinnerSample1 =
    '```' +
    '<x-spinner [color]="ColorNames.Primary" [name]="SpinnerNames.Circular">' +
    '</x-spinner>' +
    '```';

  //
  // Loading Content ...
  readonly loadingContent = `
  این مولفه در مواردی کاربرد دارد که قصد داریم روال اجرای برنامه را تا اتمام یک فرآیند خاص متوقف کنیم.
  `;

  //
  // Picker Content ...
  readonly pickerContent = `
  انتخاب یک یا چند گزینه از میان مجموعه ای از انتخاب ها مهمترین کاربرد این مولفه است.
  `;

  readonly pickerSample1 =
    '```' +
    'await this.managerService.dialogService.presentPicker(' +
    '{' +
    'buttons: [' +
    '{' +
    "text: 'Ok'," +
    'role: XModalButtonRole.Selected,' +
    "cssClass: ['btn-selected']," +
    'handler: (value) => {' +
    "console.log('OK Clicked ...', value);" +
    '},' +
    '},' +
    '{' +
    "text: 'Cancel'," +
    'role: XModalButtonRole.Cancel,' +
    "cssClass: ['btn-cancel']," +
    'handler: () => {' +
    "console.log('Cancel Clicked ...');" +
    '},' +
    '},' +
    '],' +
    'columns: [' +
    '{' +
    "name: 'Col_1'," +
    'options: [' +
    '{' +
    "text: 'S 1'," +
    'value: 1,' +
    '},' +
    '{' +
    "text: 'S 2'," +
    'value: 2,' +
    '},' +
    '{' +
    "text: 'S 3'," +
    'value: 3,' +
    '},' +
    '{' +
    '...' +
    '},' +
    '],' +
    '}' +
    '],' +
    '}); ' +
    '```';

  //
  // Slotter Content ...
  readonly SlotNames = Object.assign({}, XSlotName);
  readonly SlotLayout = Object.assign({}, XSlotLayout);
  readonly slotterContent = `
  این مولفه جهت تقسیم فضای در دسترس بکار میرود.

   توسط بکارگری این مولفه می توان چینش محتوا را مدیریت کرد
  `;
  readonly slotterSample1 =
    '```' +
    '<x-slotter [layout]="SlotLayout.HORIZONTAL">' +
    '  <x-slot [name]="SlotNames.START" [cssClass]="\'ion-text-start\'">' +
    '    Start' +
    '  </x-slot>' +
    '  <x-slot [name]="SlotNames.CENTER" [cssClass]="\'ion-text-center\'">' +
    '    Center' +
    '  </x-slot>' +
    '  <x-slot [name]="SlotNames.END" [cssClass]="\'ion-text-end\'">' +
    '    End' +
    '  </x-slot>' +
    '</x-slotter>' +
    '```';

  readonly slotterSample2 =
    '```' +
    '  <x-slotter [layout]="SlotLayout.VERTICAL">' +
    '    <x-slot [name]="SlotNames.TOP" [cssClass]="\'ion-text-center\'">' +
    '      Top' +
    '    </x-slot>' +
    '    <x-slot [name]="SlotNames.CENTER" [cssClass]="\'ion-text-center\'">' +
    '      Center' +
    '    </x-slot>' +
    '    <x-slot [name]="SlotNames.BOTTOM" [cssClass]="\'ion-text-center\'">' +
    '      Bottom' +
    '    </x-slot>' +
    '  </x-slotter>' +
    '```';

  //
  // Content ...
  readonly Content = '';

  //
  async handleButtonClicked() {
    await this.managerService.notificationService.presentSuccessNotification({
      message: this.resourceProvider(AppResourceIDs.temp_label),
      dissmissable: true,
    });
  }

  //
  async handleShowAlert() {
    //
    await this.managerService.dialogService.presentAlert({
      header: AppResourceIDs.alert,
      subHeader: 'sub title',
      message: 'message',
      buttons: [
        {
          text: 'OK',
          role: XModalButtonRole.Selected,
          handler: () => {},
        },
      ],
    });
  }

  async handleShowPrompt() {
    //
    await this.managerService.dialogService.presentAlert({
      header: 'عنوان',
      subHeader: 'توضیحات',
      message: 'نام شما چیست ؟',
      inputs: [
        {
          type: 'text',
          name: 'name',
          label: 'نام',
          placeholder: 'نام و نام خانوادگی ...',
        },
      ],
      buttons: [
        {
          text: 'ثبت',
          role: XModalButtonRole.Selected,
          cssClass: ['btn-selected'],
          handler: async (value) => {
            //
            console.log('OK Clicked ...', value);

            //
            if (value && value.name && !isNullOrEmptyString(value.name)) {
              await this.managerService.notificationService.presentInfoNotification(
                {
                  message: value.name,
                  dissmissable: true,
                }
              );
            }
          },
        },
        {
          text: 'لغو',
          role: XModalButtonRole.Cancel,
          cssClass: ['btn-cancel'],
          handler: () => {
            console.log('Cancel Clicked ...');
          },
        },
      ],
    });
  }

  async handleShowNotification() {
    //
    await this.managerService.notificationService.presentDangerNotification({
      message: XResourceIDs.error,
      dissmissable: true,
    });
  }

  async handleShowLoading() {
    //
    const loading = await this.managerService.dialogService.presentLoading({
      message: this.resourceProvider(AppResourceIDs.temp_label),
      spinner: this.SpinnerNames.LinesSmall,
    });

    //
    // TODO: Do Actions ...

    //
    // This is for Sample tests ...
    setTimeout(() => {
      loading.dismiss();
    }, 2000);
  }

  async handleShowSelect() {
    //
    await this.managerService.dialogService.presentPicker({
      buttons: [
        {
          text: 'Ok',
          role: XModalButtonRole.Selected,
          cssClass: ['btn-selected'],
          handler: (value) => {
            console.log('OK Clicked ...', value);
          },
        },
        {
          text: 'Cancel',
          role: XModalButtonRole.Cancel,
          cssClass: ['btn-cancel'],
          handler: () => {
            console.log('Cancel Clicked ...');
          },
        },
      ],
      columns: [
        {
          name: 'Col_1',
          options: [
            {
              text: 'S 1',
              value: 1,
            },
            {
              text: 'S 2',
              value: 2,
            },
            {
              text: 'S 3',
              value: 3,
            },
            {
              text: 'S 4',
              value: 4,
            },
            {
              text: 'S 5',
              value: 5,
            },
            {
              text: 'S 6',
              value: 6,
            },
            {
              text: 'S 7',
              value: 7,
            },
            {
              text: 'S 8',
              value: 8,
            },
            {
              text: 'S 9',
              value: 9,
            },
            {
              text: 'S 10',
              value: 10,
            },
          ],
        },
      ],
    });
  }
}
