import { Component } from '@angular/core';
import {
  XIconNames,
  XFormConfig,
  XFormControlType,
  XFormStatusChangeEventModel,
  XFormComponent,
  XStepperType,
  XStepperTypeIdentifier,
} from 'x-framework-components';
import { VPageComponent } from '../../../views/v-page/v-page.component';
import { AppResourceIDs } from 'src/app/config/app.localization.config';
import { XResourceIDs, isNullOrEmptyString, XColor } from 'x-framework-core';

interface StepOne {
  id: number;
  name: string;
  family: string;
}

interface StepTwo {
  id: number;
  userName: string;
  password: string;
}

interface StepperPresentationType {
  type: XStepperTypeIdentifier;
}

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.page.html',
  styleUrls: ['./stepper.page.scss'],
})
// tslint:disable-next-line:component-class-suffix
export class StepperPage extends VPageComponent {
  //
  //#region Props ...
  //
  //#region Page Props ...
  titleRes = AppResourceIDs.stepper;
  toolbarTitle = this.resourceProvider(this.titleRes);
  toolbarSubTitle = this.resourceProvider(AppResourceIDs.stepper_description);
  toolbarShowSubTitle = true;
  //#endregion

  //
  // Prepare All Resource IDs ...
  readonly ResourceIDs = Object.assign(
    Object.assign({}, XResourceIDs),
    AppResourceIDs
  ) as any;

  //
  readonly ColorNames = Object.assign({}, XColor);
  readonly IconNames = Object.assign({}, XIconNames);
  //#endregion

  //
  // Content ...
  readonly contentFa = `
  # ${this.toolbarTitle}
  از این مولفه جهت دریافت یا نمایش اطلاعات در گام های مختلف از کاربر استفاده می گردد.
  `;

  readonly contentEn = `
  # ${this.toolbarTitle}
  this component used to get or show data to user in several steps.
  `;

  //
  readonly sample1 = '```' + '```';

  //
  readonly StepperTypes = Object.assign({}, XStepperType);

  //
  stepperPresentationTypes = [];
  // stepperPresentationTypeFormConfig: XFormConfig<StepperPresentationType> = {
  //   controls: [
  //     //
  //     // Id ...
  //     {
  //       index: 0,
  //       propName: 'type',
  //       type: {
  //         type: XFormControlType.Select,
  //         config: {

  //         }
  //       },
  //       appearance: {
  //         label: this.ResourceIDs.type,
  //       },
  //     },
  //   ],
  // };

  //
  stepOneModelConfig: XFormConfig<StepOne> = {
    name: 'StepOneForm',
    controls: [
      //
      // Id ...
      {
        index: 0,
        propName: 'id',
        type: {
          type: XFormControlType.Number,
        },
        appearance: {
          label: this.ResourceIDs.id,
        },
      },
      //
      // Name ...
      {
        index: 1,
        propName: 'name',
        type: {
          type: XFormControlType.Text,
        },
        appearance: {
          label: this.ResourceIDs.first_name,
        },
      },
      //
      // Family ...
      {
        index: 2,
        propName: 'family',
        type: {
          type: XFormControlType.Text,
        },
        appearance: {
          label: this.ResourceIDs.last_name,
        },
      },
    ],
  };

  //
  stepTwoModelConfig: XFormConfig<StepTwo> = {
    name: 'StepTwoForm',
    controls: [
      //
      // Id ...
      {
        index: 0,
        propName: 'id',
        type: {
          type: XFormControlType.Number,
        },
        appearance: {
          label: this.ResourceIDs.id,
        },
      },
      //
      // Username ...
      {
        index: 1,
        propName: 'userName',
        type: {
          type: XFormControlType.Text,
        },
        appearance: {
          label: this.ResourceIDs.username,
        },
      },
      //
      // Password ...
      {
        index: 2,
        propName: 'password',
        type: {
          type: XFormControlType.Password,
        },
        appearance: {
          label: this.ResourceIDs.password,
        },
      },
    ],
  };

  //
  //#region UI Providers ...
  //
  // Provide content based on current locale ...
  getContent(title: string) {
    //
    if (isNullOrEmptyString(title)) {
      return '';
    }

    //
    const currentLocale = this.managerService.currentLocale;

    //
    const varName =
      title +
      (currentLocale === 'en-US'
        ? 'En'
        : currentLocale === 'fa-IR'
        ? 'Fa'
        : '');

    const result = this[`${varName}`];

    //
    return result || '';
  }

  handleFormOneStatusChanged(
    event: XFormStatusChangeEventModel,
    form: XFormComponent
  ) {
    console.log('status changed: ', event, form.isStatusValid);
  }
  //#endregion
}
