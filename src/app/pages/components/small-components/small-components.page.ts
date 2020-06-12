import { Component } from '@angular/core';
import { XResourceIDs, XModalButtonRole } from 'x-framework-core';
import { XButtonType } from 'x-framework-components';
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
  // Button Types ...
  readonly ButtonTypes = Object.assign({}, XButtonType);
  //#endregion

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

  برای نمایش اعلان باید بصورت زیر عمل کنیم:

  `;

  readonly alertSample1 = '```' + '' + '```';

  //
  // Notification Content ...
  readonly notificationContent = '';

  //
  // Spinner Content ...
  readonly spinnerContent = '';

  //
  // Loading Content ...
  readonly loadingContent = '';

  //
  // Prompt Content ...
  readonly promptContent = '';

  //
  // Picker Content ...
  readonly pickerContent = '';

  //
  // Slotter Content ...
  readonly slotterContent = '';

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
    console.log('handleShowAlert');

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
}
