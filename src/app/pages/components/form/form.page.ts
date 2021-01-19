import {
  keys,
  hasChild,
  nthItems,
  toBoolean,
  XResourceIDs,
  toNormalString,
  XOneOrManyType,
  XColorIdentifier,
  isNullOrEmptyString,
  XColorWithBrightness,
  XBaseDataPagerQueryResult,
} from 'x-framework-core';
import { Subject } from 'rxjs';
import {
  XListItem,
  XIconNames,
  XFormConfig,
  XFormUpdateOn,
  XMarkdownMode,
  XFormControlType,
  XFormControlConfig,
  XFormIconDescriptor,
  XFormMapControlConfig,
  XFormControlAppearance,
  XControlIconDescriptor,
  XFormRadioControlConfig,
  XFormSelectControlConfig,
  XFormSelectControlOption,
  XFormSliderControlConfig,
  XFormMarkdownControlConfig,
  XFormMapControlPresentType,
  XFormCheckBoxControlConfig,
  XFormControlIconDescriptor,
  XFormSelectorControlConfig,
  XFormValueChangeEventModel,
  XBaseFormControlActionModel,
  XFormControlEventsDescriptor,
  XFormDatePickerControlConfig,
  XFormColorPickerControlConfig,
  XFormControlAutoCompleteConfig,
  XFormAvatarUploadControlConfig,
  XFormControlActionProviderModel,
  XFormControlAppearanceIdentifier,
  XFormControlValueChangeEventModel,
  XFormControlStatusChangeEventModel,
  XFormColorPickerControlPresentType,
  XFormDatePickerControlPickerPosition,
} from 'x-framework-components';
import { Validators } from '@angular/forms';
import { Component, TemplateRef, ViewChild } from '@angular/core';
import { VPageComponent } from '../../../views/v-page/v-page.component';
import { AppResourceIDs } from 'src/app/config/app.localization.config';

enum ContentType {
  POST = 'post',
  NEWS = 'news',
}

enum ContentVisibility {
  VISIBLE = 'visible',
  HIDDEN = 'hidden',
}

enum Car {
  GMC = 'gmc',
  BMD = 'bmw',
  JAC = 'jac',
  TOYOTA = 'toyota',
  NISSAN = 'nissan',
}

interface XFormModel {
  firstName: string;
  lastName: string;
  content: string;
  contentType: ContentType;
  visibility: ContentVisibility;
  publish: boolean;
  brithDate: Date;
  weddingState: boolean;
  numberOfChilds: number;
  avatar: File;
  latLong: string;
  color: string;
  phoneNumber: string;
  medias: XOneOrManyType<File>;
  car: Car;
}

interface XFormControlModel {
  hasIcon: boolean;
  showHint: boolean;
  showTooltip: boolean;
  disabledByDefault: boolean;
  hasRequiredValidator: boolean;
  applyIconsStateColor: boolean;
  applyStatusOnControls: boolean;
  FormControlAppearance: XFormControlAppearanceIdentifier;
  iconsDefaultColor: XColorIdentifier;
}

@Component({
  selector: 'app-form',
  templateUrl: './form.page.html',
  styleUrls: ['./form.page.scss'],
})
// tslint:disable-next-line:component-class-suffix
export class FormPage extends VPageComponent {
  //
  //#region Props ...
  //
  //#region Page Props ...
  titleRes = AppResourceIDs.form;
  toolbarTitle = this.resourceProvider(this.titleRes);
  toolbarSubTitle = this.resourceProvider(AppResourceIDs.form_description);
  toolbarShowSubTitle = true;
  //#endregion

  //
  // Prepare All Resource IDs ...
  readonly ResourceIDs: any = Object.assign(
    Object.assign({}, XResourceIDs),
    AppResourceIDs
  );

  //
  readonly ColorNames = Object.assign({}, XColorWithBrightness);
  readonly IconNames = Object.assign({}, XIconNames);
  //#endregion

  //
  // Content ...
  readonly contentFa = `
  # ${this.toolbarTitle}
  فرم ها بستر دریافت اطلاعات از کاربر هستند.
  این مولفه امکانات لازم برای تسهیل فرایند ایجاد فرم ها را فراهم می کند.
  `;

  readonly contentEn = `
  # ${this.toolbarTitle}
  Forms used to get data from users.
  this Component provides usefull tools to make form creation easy.
  `;

  //
  readonly sample1 =
    '```html' +
    `
<x-form
  [isInPage]="true"
  *ngIf="xFormConfig"
  [wrapWithCard]="true"
  [formConfig]="xFormConfig"
  [fillColor]="ColorNames.Dark"
  [regularColor]="ColorNames.Light"
  [activeColor]="ColorNames.Primary"
  [actionProvider]="formActionProvider"
  [invalidColor]="ColorNames.DangerShade"
></x-form>
  ` +
    '```';

  //
  private NAME_AUTO_CONMPLETE_REF: TemplateRef<any>;

  @ViewChild('nameAutoCompleteRef')
  set nameAutoCompleteRef(v: TemplateRef<any>) {
    //
    if (!v) {
      return;
    }

    //
    this.NAME_AUTO_CONMPLETE_REF = v;
    this.prepareFormConfig();
    this.detectChanges();
  }

  get nameAutoCompleteRef() {
    return this.NAME_AUTO_CONMPLETE_REF;
  }

  //
  readonly Cars = Object.assign({}, Car);
  readonly ContentTypes = Object.assign({}, ContentType);
  readonly ContentVisibilities = Object.assign({}, ContentVisibility);

  //
  readonly formActionProvider = new Subject<XFormControlActionProviderModel>();

  //
  private firstNameAutoCompleteIsOpened = false;
  private firstNameAutoCompleteQuery = '';
  private firstNameAutoCompleteItems: XListItem<string>[] = this.getFirstNameAutoCompleteItems();

  //
  private readonly FormControlAppearances = Object.assign(
    {},
    XFormControlAppearance
  );

  //
  applyStatusOnControls = false;

  //
  private nameStrings: string[] = [
    'Hadi',
    'Hamid',
    'Hesam',
    'Mehdi',
    'Kourosh',
    'Daruosh',
    'Raymond Reed',
    'Willie Ward',
    'Stephen Edwards',
    'Albert Johnson',
    'Scott Long',
    'Samuel Bailey',
    'Louis Ramirez',
    'Philip Henderson',
    'Jacqueline Bennett',
    'Sharon Hernandez',
    'Karen Morris',
    'Theresa Parker',
    'Judith Coleman',
    'Martha White',
    'Jose Mitchell',
    'Carl Powell',
    'Sandra Lopez',
    'Douglas Wright',
    'Helen Young',
    'Kathryn Hughes',
    'Kathy Bell',
    'Jonathan Price',
    'Paul Morgan',
    'Deborah Roberts',
    'Teresa Martinez',
    'Brenda Williams',
    'Todd Phillips',
    'Clarence Collins',
    'Alan Butler',
    'Donna Torres',
    'Mildred Perry',
    'Katherine Walker',
    'William Flores',
    'Marilyn Brooks',
    'Timothy Clark',
    'Ronald Cook',
    'Frank Hall',
    'Pamela Rogers',
    'Harold Sanders',
    'Harry Hill',
    'Evelyn Thompson',
    'Charles Jenkins',
    'Andrew Murphy',
    'Juan Simmons',
    'Patricia Diaz',
    'Doris Smith',
    'Janice Turner',
    'Matthew Rivera',
    'Joyce Adams',
    'Joe Moore',
    'Nancy Kelly',
    'Peter Garcia',
    'Virginia Ross',
    'Rose James',
    'Donald Nelson',
    'Joan Lewis',
    'Julia Perez',
    'Gerald Washington',
    'Irene Allen',
    'Brandon Green',
    'Melissa Cooper',
    'Sara Taylor',
    'Kelly Martin',
    'Daniel Brown',
    'Robert Evans',
    'Susan Carter',
    'James Thomas',
    'Jack Bryant',
    'Eugene Sanchez',
    'Shirley Davis',
    'Carol Wilson',
    'Ryan Robinson',
    'Roy Griffin',
    'Phillip Alexander',
    'Thomas Miller',
    'Keith Russell',
    'Frances Rodriguez',
    'Diana Wood',
    'Brian Jones',
    'Gregory Jackson',
    'Kenneth Patterson',
    'Anne Stewart',
    'Justin King',
    'Benjamin Scott',
    'Judy Watson',
    'Ruth Gonzalez',
    'Walter Anderson',
    'Steven Peterson',
    'Heather Gonzales',
    'Billy Lee',
    'Betty Campbell',
    'Carolyn Richardson',
    'Jesse Gray',
    'Kevin Cox',
    'Denise Foster',
    'Fred Barnes',
    'Nicholas Howard',
    'Christina Baker',
    'Laura Harris',
    'Jennifer',
  ];

  //
  showFormControlCenter = true;
  formConfigModel: XFormControlModel = {
    hasIcon: true,
    showHint: true,
    showTooltip: true,
    disabledByDefault: false,
    hasRequiredValidator: true,
    applyIconsStateColor: true,
    applyStatusOnControls: true,
    iconsDefaultColor: XColorWithBrightness.WarningShade,
    FormControlAppearance: XFormControlAppearance.Outline,
  };
  xFormControlConfig: XFormConfig<XFormControlModel> = {
    name: 'FormControlModel',
    model: {
      ...this.formConfigModel,
    },
    controls: [
      //
      // HasIcon ...
      {
        index: 0,
        propName: 'hasIcon',
        type: {
          type: XFormControlType.CheckBox,
        },
        appearance: {
          label: 'HasIcon',
          appearance: XFormControlAppearance.Outline,
        },
      },
      //
      // ShowHint ...
      {
        index: 1,
        propName: 'showHint',
        type: {
          type: XFormControlType.CheckBox,
        },
        appearance: {
          label: 'ShowHint',
          appearance: XFormControlAppearance.Outline,
        },
      },
      //
      // ShowTooltip ...
      {
        index: 2,
        propName: 'showTooltip',
        type: {
          type: XFormControlType.CheckBox,
        },
        appearance: {
          label: 'ShowTooltip',
          appearance: XFormControlAppearance.Outline,
        },
      },
      //
      // Disabled Controls ...
      {
        index: 3,
        propName: 'disabledByDefault',
        type: {
          type: XFormControlType.CheckBox,
        },
        appearance: {
          label: 'Disabled Controls',
          appearance: XFormControlAppearance.Outline,
        },
      },
      //
      // Has Required Validator ...
      {
        index: 4,
        propName: 'hasRequiredValidator',
        type: {
          type: XFormControlType.CheckBox,
        },
        appearance: {
          label: 'Has Required Validator',
          appearance: XFormControlAppearance.Outline,
        },
      },
      //
      // Apply Icon State Color ...
      {
        index: 5,
        propName: 'applyIconsStateColor',
        type: {
          type: XFormControlType.CheckBox,
        },
        appearance: {
          label: 'Apply Icon State Color',
          appearance: XFormControlAppearance.Outline,
        },
      },
      //
      // Apply Status On Controls ...
      {
        index: 6,
        propName: 'applyStatusOnControls',
        type: {
          type: XFormControlType.CheckBox,
        },
        appearance: {
          label: 'Apply Status On Controls',
          appearance: XFormControlAppearance.Outline,
        },
      },
      //
      // Controls Appearance ...
      {
        index: 6,
        propName: 'FormControlAppearance',
        type: {
          type: XFormControlType.Select,
          config: {
            options: keys(this.FormControlAppearances).map((k) => {
              return {
                value: this.FormControlAppearances[k],
                viewValue: this.resourceProvider(
                  this.FormControlAppearances[k]
                ),
              } as XFormSelectControlOption<ContentType>;
            }),
          } as XFormSelectControlConfig,
        },
        appearance: {
          label: 'Controls Appearance',
          appearance: XFormControlAppearance.Outline,
        },
      },
      //
      // Icons Default Color ...
      {
        index: 7,
        propName: 'iconsDefaultColor',
        type: {
          type: XFormControlType.Select,
          config: {
            options: keys(this.ColorNames).map((k) => {
              return {
                value: this.ColorNames[k],
                viewValue: this.resourceProvider(this.ColorNames[k]),
              } as XFormSelectControlOption<ContentType>;
            }),
          } as XFormSelectControlConfig,
        },
        appearance: {
          label: 'Icons Default Color',
          appearance: XFormControlAppearance.Outline,
        },
      },
    ],
  };
  xFormConfig: XFormConfig<XFormModel>;

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
  //#endregion

  //
  //#region UI Handlers ...
  public async handleFormControlCenterValueChanged(
    event: XFormValueChangeEventModel
  ) {
    //
    if (event && event.value) {
      //
      this.formConfigModel = {
        ...this.formConfigModel,
        ...event.value,
      };

      //
      this.prepareFormConfig();
    }

    //
    this.detectChanges();
  }
  //#endregion

  //
  //#region Private ...
  private prepareFormConfig() {
    //
    this.xFormConfig = {
      name: 'PersonalForm',
      model: {
        firstName: 'Hadi',
        lastName: 'Khazaee Asl',
        weddingState: true,
        numberOfChilds: 0,
        latLong: '50.958799848165526,35.82254339947069',
        color: '#9847a6ff',
        car: Car.BMD,
      },
      updateOn: XFormUpdateOn.CHANGE,
      controls: [],
    };

    //
    let cIdx = 0;

    //
    const hasIcon = this.formConfigModel.hasIcon;
    const showHint = this.formConfigModel.showHint;
    const showTooltip = this.formConfigModel.showTooltip;
    const disabledByDefault = this.formConfigModel.disabledByDefault;
    const iconsDefaultColor = this.formConfigModel.iconsDefaultColor;
    const hasRequiredValidator = this.formConfigModel.hasRequiredValidator;
    const applyIconsStateColor = this.formConfigModel.applyIconsStateColor;
    this.applyStatusOnControls = this.formConfigModel.applyStatusOnControls;
    const FormControlAppearance = this.formConfigModel.FormControlAppearance;

    //
    const isPrefixIcon = true;
    const defaultIconObject = {
      applyStateColor: applyIconsStateColor || false,
      name: this.IconNames.first_name,
      color: iconsDefaultColor,
    } as XFormIconDescriptor;
    const defaultIcon: XFormControlIconDescriptor = hasIcon
      ? {
          prefix: isPrefixIcon ? defaultIconObject : undefined,
          suffix: !isPrefixIcon ? defaultIconObject : undefined,
        }
      : undefined;
    const clearIcon: XControlIconDescriptor = {
      applyStateColor: false, //applyIconsStateColor || false,
      name: this.IconNames.clear,
      color: this.ColorNames.Danger,
    };
    const selectIcon: XControlIconDescriptor = {
      applyStateColor: false, // applyIconsStateColor || false,
      name: this.IconNames.touch,
      color: this.ColorNames.SuccessShade,
    };
    const eventHandlers: XFormControlEventsDescriptor = {
      onBlured: (model: XBaseFormControlActionModel) =>
        console.log('blured: ', model),
      onFocused: (model: XBaseFormControlActionModel) =>
        console.log('focused: ', model),
      valueChanged: (event) =>
        console.log(event.name.toString(), ' value changed: ', event.value),
      statusChanged: (event) =>
        console.log(
          event.name.toString(),
          ' status changed: ',
          event.status.toString()
        ),
    };

    //
    //#region First Name ...
    this.xFormConfig.controls[cIdx] = {
      index: cIdx,
      propName: 'firstName',
      type: {
        type: XFormControlType.Text,
      },
      appearance: {
        disabled: disabledByDefault || false,
        appearance: FormControlAppearance,
        hint: showHint ? this.ResourceIDs.first_name : undefined,
        tooltip: showTooltip ? this.ResourceIDs.first_name : undefined,
        label: this.ResourceIDs.first_name,
        icons: defaultIcon,
      },
      validators: hasRequiredValidator
        ? {
            validators: [Validators.required],
          }
        : undefined,
      errorHandlers: [
        {
          errorName: 'required',
          errorMessage: 'Required Field ...',
        },
      ],
      eventHandlers: {
        ...eventHandlers,
        onBlured: (name) => {
          //
          eventHandlers.onBlured(name);
          this.prepareFirstNameAutoComplete({ opened: false });
        },
        valueChanged: async (event) => {
          //
          eventHandlers.valueChanged(event);
          await this.handleFilterAutoCompleteFirstName(event.value);
        },
      },
    } as XFormControlConfig<XFormModel>;
    cIdx++;

    //
    this.prepareFirstNameAutoComplete();
    //#endregion

    //
    //#region Last Name ...
    this.xFormConfig.controls[cIdx] = {
      index: cIdx,
      propName: 'lastName',
      type: {
        type: XFormControlType.Text,
      },
      appearance: {
        disabled: disabledByDefault || false,
        label: this.ResourceIDs.last_name,
        appearance: FormControlAppearance,
        hint: showHint ? this.ResourceIDs.last_name : undefined,
        tooltip: showTooltip ? this.ResourceIDs.last_name : undefined,
        icons: defaultIcon,
      },
      validators: hasRequiredValidator
        ? {
            validators: [Validators.required],
          }
        : undefined,
      errorHandlers: [
        {
          errorName: 'required',
          errorMessage: 'Required Field ...',
        },
      ],
      eventHandlers,
    } as XFormControlConfig<XFormModel>;
    cIdx++;
    //#endregion

    //
    //#region Content ...
    this.xFormConfig.controls[cIdx] = {
      index: cIdx,
      propName: 'content',
      type: {
        type: XFormControlType.MarkDown,
        config: {
          hasToolbar: true,
          mode: XMarkdownMode.BOTH,
          toolbarColor: this.ColorNames.Light,
          contentChanged: (content: string) => {
            console.log('markdown new content: ', content);
          },
        } as XFormMarkdownControlConfig,
      },
      appearance: {
        label: AppResourceIDs.content,
        hint: showHint ? AppResourceIDs.content : undefined,
        tooltip: showTooltip ? AppResourceIDs.content : undefined,
        appearance: FormControlAppearance,
        disabled: disabledByDefault || false,
        icons: defaultIcon,
      },
      eventHandlers,
    } as XFormControlConfig<XFormModel>;
    cIdx++;
    //#endregion

    //
    //#region Content Type ...
    this.xFormConfig.controls[cIdx] = {
      index: cIdx,
      propName: 'contentType',
      type: {
        type: XFormControlType.Select,
        config: {
          multiple: true,
          options: keys(this.ContentTypes).map((k) => {
            return {
              value: this.ContentTypes[k],
              viewValue: this.resourceProvider(this.ContentTypes[k]),
            } as XFormSelectControlOption<ContentType>;
          }),
        } as XFormSelectControlConfig,
      },
      appearance: {
        disabled: disabledByDefault || false,
        label: AppResourceIDs.content_type,
        hint: showHint ? AppResourceIDs.content_type : undefined,
        tooltip: showTooltip ? AppResourceIDs.content_type : undefined,
        placeholder: AppResourceIDs.content_type,
        appearance: FormControlAppearance,
        icons: defaultIcon,
      },
      eventHandlers,
      validators: hasRequiredValidator
        ? {
            validators: [Validators.required],
          }
        : undefined,
      errorHandlers: [
        {
          errorName: 'required',
          errorMessage: 'Required Field ...',
        },
      ],
    } as XFormControlConfig<XFormModel>;
    cIdx++;
    //#endregion

    //
    //#region Content Visibility ...
    this.xFormConfig.controls[cIdx] = {
      index: cIdx,
      propName: 'visibility',
      type: {
        type: XFormControlType.Radio,
        config: {
          options: keys(this.ContentVisibilities).map((k) => {
            return {
              value: this.ContentVisibilities[k],
              viewValue: this.resourceProvider(this.ContentVisibilities[k]),
            } as XFormSelectControlOption<ContentType>;
          }),
        } as XFormRadioControlConfig,
      },
      appearance: {
        label: AppResourceIDs.visibility,
        hint: showHint ? AppResourceIDs.visibility : undefined,
        tooltip: showTooltip ? AppResourceIDs.visibility : undefined,
        disabled: disabledByDefault || false,
        appearance: FormControlAppearance,
        icons: defaultIcon,
      },
      validators: hasRequiredValidator
        ? {
            validators: [Validators.required],
          }
        : undefined,
      errorHandlers: [
        {
          errorName: 'required',
          errorMessage: 'Required Field ...',
        },
      ],
      eventHandlers,
    } as XFormControlConfig<XFormModel>;
    cIdx++;
    //#endregion

    //
    //#region Publish ...
    this.xFormConfig.controls[cIdx] = {
      index: cIdx,
      propName: 'publish',
      type: {
        type: XFormControlType.CheckBox,
        config: {
          checkedChanged: (checked: boolean) => {
            console.log('checked change: ', checked);
          },
        } as XFormCheckBoxControlConfig,
      },
      appearance: {
        label: this.ResourceIDs.publish,
        hint: showHint ? this.ResourceIDs.publish : undefined,
        tooltip: showTooltip ? this.ResourceIDs.publish : undefined,
        disabled: disabledByDefault || false,
        appearance: FormControlAppearance,
        icons: defaultIcon,
      },
      validators: hasRequiredValidator
        ? {
            validators: [Validators.requiredTrue],
          }
        : undefined,
      errorHandlers: [
        {
          errorName: 'requiredTrue',
          errorMessage: 'Required Field ...',
        },
      ],
      eventHandlers,
    } as XFormControlConfig<XFormModel>;
    cIdx++;
    //#endregion

    //
    //#region BrithDate ...
    this.xFormConfig.controls[cIdx] = {
      index: cIdx,
      propName: 'brithDate',
      type: {
        type: XFormControlType.Date,
        config: {
          iconColor: iconsDefaultColor,
          toggleIcon: XIconNames.calendar,
          applyStateColor: applyIconsStateColor || false,
          datePickerPosition: XFormDatePickerControlPickerPosition.Prefix,
        } as XFormDatePickerControlConfig,
      },
      appearance: {
        label: this.ResourceIDs.brithDate,
        hint: showHint ? this.ResourceIDs.brithDate : undefined,
        tooltip: showTooltip ? this.ResourceIDs.brithDate : undefined,
        disabled: disabledByDefault || false,
        appearance: FormControlAppearance,
        icons: defaultIcon,
      },
      validators: hasRequiredValidator
        ? {
            validators: [Validators.required],
          }
        : undefined,
      errorHandlers: [
        {
          errorName: 'required',
          errorMessage: 'Required Field ...',
        },
      ],
      eventHandlers,
    } as XFormControlConfig<XFormModel>;
    cIdx++;
    //#endregion

    //
    //#region Wedding State ...
    this.xFormConfig.controls[cIdx] = {
      index: cIdx,
      propName: 'weddingState',
      type: {
        type: XFormControlType.Toggle,
      },
      appearance: {
        label: this.ResourceIDs.wedding_state,
        hint: showHint ? this.ResourceIDs.wedding_state : undefined,
        tooltip: showTooltip ? this.ResourceIDs.wedding_state : undefined,
        disabled: disabledByDefault || false,
        appearance: FormControlAppearance,
        icons: defaultIcon,
      },
      validators: hasRequiredValidator
        ? {
            validators: [Validators.requiredTrue],
          }
        : undefined,
      errorHandlers: [
        {
          errorName: 'requiredTrue',
          errorMessage: 'Required Field ...',
        },
      ],
      eventHandlers: {
        ...eventHandlers,
        valueChanged: (model) => {
          eventHandlers.valueChanged(model);
          this.handleHasNumberOfChild(toBoolean(model.value));
        },
      },
    } as XFormControlConfig<XFormModel>;
    cIdx++;
    //#endregion

    //
    //#region Number Of Childs ...
    this.xFormConfig.controls[cIdx] = {
      index: cIdx,
      propName: 'numberOfChilds',
      type: {
        type: XFormControlType.Hidden,
        config: {
          min: 0,
          max: 15,
          step: 1,
          vertical: false,
          thumbLabel: true,
          formatter: (value) => this.applyLocale(value),
        } as XFormSliderControlConfig,
      },
      appearance: {
        label: this.ResourceIDs.num_of_childs,
        hint: showHint ? this.ResourceIDs.num_of_childs : undefined,
        tooltip: showTooltip ? this.ResourceIDs.num_of_childs : undefined,
        disabled: disabledByDefault || false,
        appearance: FormControlAppearance,
        icons: defaultIcon,
      },
      validators: hasRequiredValidator
        ? {
            validators: [Validators.min(1)],
          }
        : undefined,
      errorHandlers: [
        {
          errorName: 'required',
          errorMessage: 'Required Field ...',
        },
      ],
      eventHandlers,
    } as XFormControlConfig<XFormModel>;
    cIdx++;
    //#endregion

    //
    //#region Avatar ...
    this.xFormConfig.controls[cIdx] = {
      index: cIdx,
      propName: 'avatar',
      type: {
        type: XFormControlType.AvatarUpload,
        config: {
          canDrop: true,
          color: this.ColorNames.Light,
          fileDropAreaColor: this.ColorNames.Light,
          placeHolderAvatar: './assets/image/default-user-image.png',
        } as XFormAvatarUploadControlConfig,
      },
      appearance: {
        label: this.ResourceIDs.avatar,
        hint: showHint ? this.ResourceIDs.avatar : undefined,
        tooltip: showTooltip ? this.ResourceIDs.avatar : undefined,
        disabled: disabledByDefault || false,
        appearance: FormControlAppearance,
      },
      validators: hasRequiredValidator
        ? {
            validators: [Validators.required],
          }
        : undefined,
      errorHandlers: [
        {
          errorName: 'required',
          errorMessage: 'Required Field ...',
        },
      ],
      eventHandlers,
    } as XFormControlConfig<XFormModel>;
    cIdx++;
    //#endregion

    //
    //#region Map ...
    this.xFormConfig.controls[cIdx] = {
      index: cIdx,
      propName: 'latLong',
      type: {
        type: XFormControlType.Map,
        config: {
          zoom: 2,
          clearIcon,
          selectIcon,
          showZoom: true,
          canSelect: true,
          showRotate: true,
          showLocate: true,
          disableInput: true,
          showSearchBar: true,
          showClearMarker: true,
          centerAfterInit: true,
          showGoMarkedPlace: true,
          showSelectedPosition: true,
          inputCssClass: 'ion-text-end',
          searchBarColor: XColorWithBrightness.Dark,
          progressBarColor: XColorWithBrightness.Warning,
          presentType: XFormMapControlPresentType.WithDialog,
        } as XFormMapControlConfig,
      },
      appearance: {
        label: this.ResourceIDs.location,
        hint: showHint ? this.ResourceIDs.location : undefined,
        tooltip: showTooltip ? this.ResourceIDs.location : undefined,
        disabled: disabledByDefault || false,
        appearance: FormControlAppearance,
        placeholder: this.ResourceIDs.location,
        icons: defaultIcon,
      },
      validators: hasRequiredValidator
        ? {
            validators: [Validators.required],
          }
        : undefined,
      errorHandlers: [
        {
          errorName: 'required',
          errorMessage: 'Required Field ...',
        },
      ],
      eventHandlers,
    } as XFormControlConfig<XFormModel>;
    cIdx++;
    //#endregion

    //
    //#region Color Picker ...
    this.xFormConfig.controls[cIdx] = {
      index: cIdx,
      propName: 'color',
      type: {
        type: XFormControlType.ColorPicker,
        config: {
          clearIcon,
          selectIcon,
          showCopyToClipboard: true,
          inputCssClass: 'ion-text-end',
          presentType: XFormColorPickerControlPresentType.WithDialog,
        } as XFormColorPickerControlConfig,
      },
      appearance: {
        label: this.ResourceIDs.color,
        hint: showHint ? this.ResourceIDs.color : undefined,
        tooltip: showTooltip ? this.ResourceIDs.color : undefined,
        disabled: disabledByDefault || false,
        appearance: FormControlAppearance,
        placeholder: this.ResourceIDs.color,
        icons: defaultIcon,
      },
      validators: hasRequiredValidator
        ? {
            validators: [Validators.required],
          }
        : undefined,
      errorHandlers: [
        {
          errorName: 'required',
          errorMessage: 'Required Field ...',
        },
      ],
      eventHandlers,
    } as XFormControlConfig<XFormModel>;
    cIdx++;
    //#endregion

    //
    //#region Selector ...
    this.xFormConfig.controls[cIdx] = {
      index: cIdx,
      propName: 'car',
      type: {
        type: XFormControlType.Selector,
        config: {
          clearIcon,
          selectIcon,
          title: 'Select Car',
          showPaginator: true,
          taskName: 'load-cars',
          queryFetcher: (query) => {
            //
            const result: XBaseDataPagerQueryResult<Car> = {
              count: keys(this.Cars).length,
              items: keys(this.Cars).map((k) => k as Car),
            };

            //
            return this.getValue(result);
          },
          formatSelectedItem: (item: Car) => this.resourceProvider(item),
          onTaskFinished: (name) => {
            console.log('Task Finished: ', name);
          },
        } as XFormSelectorControlConfig,
      },
      appearance: {
        label: this.ResourceIDs.color,
        hint: showHint ? this.ResourceIDs.color : undefined,
        tooltip: showTooltip ? this.ResourceIDs.color : undefined,
        disabled: disabledByDefault || false,
        appearance: FormControlAppearance,
        placeholder: this.ResourceIDs.color,
        icons: defaultIcon,
      },
      validators: hasRequiredValidator
        ? {
            validators: [Validators.required],
          }
        : undefined,
      errorHandlers: [
        {
          errorName: 'required',
          errorMessage: 'Required Field ...',
        },
      ],
      eventHandlers,
    } as XFormControlConfig<XFormModel>;
    cIdx++;
    //#endregion

    //
    this.detectChanges();
  }

  private prepareFirstNameAutoComplete(
    dataProvider?: Partial<XFormControlAutoCompleteConfig>
  ) {
    //
    this.xFormConfig.controls[0].appearance.autoComplete = {
      ...this.xFormConfig.controls[0].appearance.autoComplete,
      //
      opened:
        dataProvider && dataProvider.opened
          ? dataProvider.opened
          : this.firstNameAutoCompleteIsOpened,
      itemTemplate:
        dataProvider && dataProvider.itemTemplate
          ? dataProvider.itemTemplate
          : this.NAME_AUTO_CONMPLETE_REF,
      color:
        dataProvider && dataProvider.color
          ? dataProvider.color
          : XColorWithBrightness.Tertiary,
      items:
        dataProvider && dataProvider.items
          ? dataProvider.items
          : () => {
              return this.firstNameAutoCompleteItems;
            },
      onSelect:
        dataProvider && dataProvider.onSelect
          ? dataProvider.onSelect
          : (item: string) => {
              console.log('auto complete selected: ', item);
            },
      cssClass:
        dataProvider && dataProvider.cssClass
          ? dataProvider.cssClass
          : ['x-auto-complete-margin'],
    };

    //
    this.detectChanges();
  }

  private async handleFilterAutoCompleteFirstName(value: string) {
    //
    if (toNormalString(value) === this.firstNameAutoCompleteQuery) {
      //
      if (hasChild(this.firstNameAutoCompleteItems)) {
        this.firstNameAutoCompleteIsOpened = true;
      } else {
        this.firstNameAutoCompleteIsOpened = false;
      }

      //
      this.prepareFirstNameAutoComplete();
      return;
    }

    //
    this.firstNameAutoCompleteQuery = toNormalString(value);
    this.firstNameAutoCompleteItems = this.getFirstNameAutoCompleteItems();

    //
    this.firstNameAutoCompleteIsOpened = hasChild(
      this.firstNameAutoCompleteItems
    );

    //
    this.prepareFirstNameAutoComplete();
  }

  private getFirstNameAutoCompleteItems(): XListItem<string>[] {
    //
    if (isNullOrEmptyString(this.firstNameAutoCompleteQuery)) {
      return [];
    }

    //
    // Select Top 5 result of filtered Names ...
    const selectedItems = nthItems(
      0,
      5,
      this.nameStrings.filter(
        (n) =>
          toNormalString(n).includes(this.firstNameAutoCompleteQuery) &&
          toNormalString(n) !== this.firstNameAutoCompleteQuery
      )
    );
    if (!hasChild(selectedItems)) {
      return [];
    }

    return selectedItems.map((i) => {
      return {
        data: i,
      } as XListItem<string>;
    });
  }

  private handleHasNumberOfChild(isMarried?: boolean) {
    //
    if (!this.xFormConfig.controls[8]) {
      return;
    }

    //
    const hasChildCount = toBoolean(isMarried);
    if (!hasChildCount) {
      //
      this.xFormConfig.controls[8].type = {
        ...this.xFormConfig.controls[8].type,
        type: XFormControlType.Hidden,
      };
    } else {
      //
      this.xFormConfig.controls[8].type = {
        ...this.xFormConfig.controls[8].type,
        type: XFormControlType.Slider,
      };
    }

    //
    this.detectChanges();
  }
  //#endregion
}
