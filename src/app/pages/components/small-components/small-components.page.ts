import { Component } from '@angular/core';
import { XResourceIDs } from 'x-framework-core';
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
  async handleButtonClicked() {
    await this.managerService.notificationService.presentSuccessNotification({
      message: this.resourceProvider(AppResourceIDs.temp_label),
      dissmissable: true,
    });
  }
}
