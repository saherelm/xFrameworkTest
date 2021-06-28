import {
  XResourceIDs,
  isNullOrEmptyString,
  XColorWithBrightness,
} from 'x-framework-core';
import { Component } from '@angular/core';
import { VPageComponent } from 'src/app/views/v-page/v-page.component';
import { AppResourceIDs } from 'src/app/config/app.localization.config';
import { XFormConfig, XFormControlAppearance, XFormControlType, XIconNames } from 'x-framework-components';
import { Validators } from '@angular/forms';

export interface TestModel {
  name: string,
}

@Component({
  selector: 'app-services-user-device',
  templateUrl: './user-device.page.html',
  styleUrls: ['./user-device.page.scss'],
})
// tslint:disable-next-line:component-class-suffix
export class UserDevicePage extends VPageComponent {
  //
  //#region Props ...
  //
  //#region Page Props ...
  titleRes = AppResourceIDs.user_device;
  toolbarTitle = this.resourceProvider(this.titleRes);
  toolbarSubTitle = this.resourceProvider(
    AppResourceIDs.user_device_description
  );
  toolbarShowSubTitle = true;
  //#endregion

  //
  // Prepare All Resource IDs ...
  readonly ResourceIDs = Object.assign(
    Object.assign({}, XResourceIDs),
    AppResourceIDs
  ) as any;

  //
  // Color Names ...
  readonly ColorNames = Object.assign({}, XColorWithBrightness);
  //#endregion

  device = this.managerService.settingsService.device;

  //
  readonly formConfig: XFormConfig<TestModel> = {
    name: 'TestModelForm',
    model: {
      name: 'Hadi Khazaee Asl'
    },
    controls: [
      {
        index: 0,
        propName: 'name',
        type: {
          type: XFormControlType.Text
        },
        appearance: {
          hint: 'Name',
          label: 'Name',
          tooltip: 'Name',
          placeholder: 'Name',
          icons: {
            suffix: {
              tooltip: 'icon',
              applyStateColor: true,
              name: XIconNames.avatars,
            },
            prefix: {
              tooltip: 'icon',
              name: XIconNames.add,
              applyStateColor: true,
            }
          },
          appearance: XFormControlAppearance.Fill
        },
        validators: {
          validators: [Validators.required]
        }
      }
    ]
  }
}
