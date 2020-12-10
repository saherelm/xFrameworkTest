import {
  keys,
  hasChild,
  nthItems,
  toBoolean,
  XResourceIDs,
  toNormalString,
  XOneOrManyType,
  isNullOrEmptyString,
  XColorWithBrightness,
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
  XFormMapControlConfig,
  XFormRadioControlConfig,
  XFormSelectControlConfig,
  XFormSelectControlOption,
  XFormSliderControlConfig,
  XFormMarkdownControlConfig,
  XFormMapControlPresentType,
  XFormCheckBoxControlConfig,
  XFormDatePickerControlConfig,
  XFormColorPickerControlConfig,
  XFormControlAutoCompleteConfig,
  XFormAvatarUploadControlConfig,
  XFormControlActionProviderModel,
  XFormControlValueChangeEventModel,
  XFormControlStatusChangeEventModel,
  XFormColorPickerControlPresentType,
  XFormDatePickerControlPickerPosition,
  XFormControlAppearance,
} from 'x-framework-components';
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

  //
  readonly FormControlAppearance = XFormControlAppearance.Legacy;
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
  readonly sample2 =
    '```typescript' +
    `
  //
  xFormConfig: XFormConfig<XFormModel>;

  //
  private prepareFormConfig() {
    //
    this.xFormConfig = {
      name: 'PersonalForm',
      model: {
        firstName: 'Ali',
        lastName: 'Akhavan',
        weddingState: true,
      },
      updateOn: XFormUpdateOn.CHANGE,
      controls: [],
    };

    //
    // First Name ...
    this.xFormConfig.controls[0] = {
      index: 0,
      propName: 'firstName',
      type: {
        type: XFormControlType.Text,
      },
      appearance: {
        label: this.ResourceIDs.first_name,
        icons: {
          prefix: {
            applyStateColor: true,
            name: this.IconNames.first_name,
            color: XColorWithBrightness.SuccessShade,
          },
        },
      },
      eventHandlers: {
        onBlured: (name: any) => {
          console.log('control: ', name, ', was blured ...');
          this.prepareFirstNameAutoComplete(
            { opened: false }
          );
        },
        onFocused: (name: any) => {
          console.log(
            'control: ', name, ', was focused ...');
        },
        statusChanged: (
          model: XFormControlStatusChangeEventModel) => {
          // console.log('status changed: ', model);
        },
        valueChanged: async (
          model: XFormControlValueChangeEventModel) => {
          //
          console.log('value changed: ', model);
          await this.handleFilterAutoCompleteFirstName(
            model.value);
        },
      },
    } as XFormControlConfig<XFormModel>;

    //
    this.prepareFirstNameAutoComplete();

    //
    // Last Name ...
    this.xFormConfig.controls[1] = {
      index: 1,
      propName: 'lastName',
      type: {
        type: XFormControlType.Text,
      },
      appearance: {
        label: this.ResourceIDs.last_name,
        tooltip: 'Insert your Last Name here ...',
        icons: {
          prefix: {
            applyStateColor: true,
            name: this.IconNames.first_name,
            color: XColorWithBrightness.SuccessShade,
          },
        },
      },
      eventHandlers: {
        onBlured: (name: any) => {
          console.log('control: ', name, ', was blured ...');
        },
        onFocused: (name: any) => {
          console.log('control: ', name, ', was focused ...');
        },
        statusChanged: (
          model: XFormControlStatusChangeEventModel) => {
          console.log('status changed: ', model);
        },
        valueChanged: (
          model: XFormControlValueChangeEventModel) => {
          console.log('value changed: ', model);
        },
      },
    } as XFormControlConfig<XFormModel>;

    //
    // Content ...
    this.xFormConfig.controls[2] = {
      index: 2,
      propName: 'content',
      type: {
        type: XFormControlType.MarkDown,
        config: {
          hasToolbar: true,
          mode: XMarkdownMode.BOTH,
          toolbarColor: XColorWithBrightness.Dark,
          contentChanged: (content: string) => {
            console.log(
              'markdown new content: ', content);
          },
        } as XFormMarkdownControlConfig,
      },
      appearance: {
        label: AppResourceIDs.content,
      },
    } as XFormControlConfig<XFormModel>;

    //
    // Content Type ...
    this.xFormConfig.controls[3] = {
      index: 3,
      propName: 'contentType',
      type: {
        type: XFormControlType.Select,
        config: {
          multiple: false,
          options: keys(this.ContentTypes).map((k) => {
            return {
              value: this.ContentTypes[k],
              viewValue: this.resourceProvider(
                this.ContentTypes[k]),
            } as XFormSelectControlOption<ContentType>;
          }),
        } as XFormSelectControlConfig,
      },
      appearance: {
        label: AppResourceIDs.content_type,
        icons: {
          prefix: {
            applyStateColor: true,
            name: this.IconNames.customers_club,
            color: XColorWithBrightness.SuccessShade,
          },
        },
      },
      eventHandlers: {
        valueChanged: (
          value: XFormControlValueChangeEventModel) => {
          console.log('content type value changed: ', value);
        },
      },
    } as XFormControlConfig<XFormModel>;

    //
    // Content Visibility ...
    this.xFormConfig.controls[4] = {
      index: 4,
      propName: 'visibility',
      type: {
        type: XFormControlType.Radio,
        config: {
          options: keys(this.ContentVisibilities)
          .map((k) => {
            return {
              value: this.ContentVisibilities[k],
              viewValue: this.resourceProvider(
                this.ContentVisibilities[k]),
            } as XFormSelectControlOption<ContentType>;
          }),
        } as XFormRadioControlConfig,
      },
      appearance: {
        label: AppResourceIDs.visibility,
        icons: {
          prefix: {
            applyStateColor: true,
            name: this.IconNames.customers_club,
            color: XColorWithBrightness.SuccessShade,
          },
        },
      },
      eventHandlers: {
        valueChanged: (
          value: XFormControlValueChangeEventModel) => {
          console.log(
            'content visibility value changed: ', value);
        },
      },
    } as XFormControlConfig<XFormModel>;

    //
    // Publish ...
    this.xFormConfig.controls[5] = {
      index: 5,
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
      },
      eventHandlers: {
        valueChanged: (
          value: XFormControlValueChangeEventModel) => {
          console.log('Publish value changed: ', value);
        },
      },
    } as XFormControlConfig<XFormModel>;

    //
    // BrithDate ...
    this.xFormConfig.controls[6] = {
      index: 6,
      propName: 'brithDate',
      type: {
        type: XFormControlType.Date,
        config: {
          applyStateColor: true,
          toggleIcon: XIconNames.calendar,
          iconColor: XColorWithBrightness.SuccessShade,
          datePickerPosition:
            XFormDatePickerControlPickerPosition.Prefix,
        } as XFormDatePickerControlConfig,
      },
      appearance: {
        label: this.ResourceIDs.brithDate,
      },
      eventHandlers: {
        valueChanged: (
          value: XFormControlValueChangeEventModel) => {
          console.log('BirthDate value changed: ', value);
        },
      },
    } as XFormControlConfig<XFormModel>;

    //
    // Wedding State ...
    this.xFormConfig.controls[7] = {
      index: 7,
      propName: 'weddingState',
      type: {
        type: XFormControlType.Toggle,
      },
      appearance: {
        label: this.ResourceIDs.wedding_state,
      },
      eventHandlers: {
        valueChanged: async (
          value: XFormControlValueChangeEventModel) => {
          console.log(
            'Wedding state value changed: ', value);
          this.handsleHasNumberOfChild(
            toBoolean(value.value));
        },
      },
    } as XFormControlConfig<XFormModel>;

    //
    // Number Of Childs ...
    this.xFormConfig.controls[8] = {
      index: 8,
      propName: 'numberOfChilds',
      type: {
        type: XFormControlType.Hidden,
        config: {
          min: 0,
          max: 15,
          step: 1,
          vertical: false,
          thumbLabel: true,
        } as XFormSliderControlConfig,
      },
      appearance: {
        label: this.ResourceIDs.num_of_childs,
      },
      eventHandlers: {
        valueChanged: (
          value: XFormControlValueChangeEventModel) => {
          console.log(
            'Number of Childs value changed: ', value);
        },
      },
    } as XFormControlConfig<XFormModel>;

    //
    // Avatar ...
    this.xFormConfig.controls[9] = {
      index: 9,
      propName: 'avatar',
      type: {
        type: XFormControlType.AvatarUpload,
        config: {
          canDrop: true,
          color: XColorWithBrightness.Dark,
          fileDropAreaColor: XColorWithBrightness.DarkTint,
          placeHolderAvatar: this.managerService.getFullUrl(
            '/assets/image/default-user-image.png'
          ),
        } as XFormAvatarUploadControlConfig,
      },
      appearance: {
        label: this.ResourceIDs.avatar,
      },
      eventHandlers: {
        valueChanged:
        (value: XFormControlValueChangeEventModel) => {
          console.log('Avatar value changed: ', value);
        },
      },
    } as XFormControlConfig<XFormModel>;

    //
    // Map ...
    this.xFormConfig.controls[10] = {
      index: 10,
      propName: 'latLong',
      type: {
        type: XFormControlType.Map,
        config: {
          zoom: 2,
          showZoom: true,
          canSelect: true,
          showRotate: true,
          showLocate: true,
          showSearchBar: true,
          showClearMarker: true,
          showGoMarkedPlace: true,
          searchBarColor: XColorWithBrightness.Dark,
          progressBarColor: XColorWithBrightness.Warning,
          presentType: XFormMapControlPresentType.WithDialog,
        } as XFormMapControlConfig,
      },
      appearance: {
        label: this.ResourceIDs.location,
        placeholder: this.ResourceIDs.location,
        icons: {
          prefix: {
            applyStateColor: true,
            name: this.IconNames.locate,
            color: XColorWithBrightness.SuccessShade,
            tooltip: this.ResourceIDs.map_dialog_select_title,
          },
        },
      },
      eventHandlers: {
        valueChanged: (
          value: XFormControlValueChangeEventModel) => {
          console.log('Location value changed: ', value);
        },
      },
    } as XFormControlConfig<XFormModel>;
  }
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
  readonly ContentTypes = Object.assign({}, ContentType);
  readonly ContentVisibilities = Object.assign({}, ContentVisibility);

  //
  readonly formActionProvider = new Subject<XFormControlActionProviderModel>();

  //
  private firstNameAutoCompleteIsOpened = false;
  private firstNameAutoCompleteQuery = '';
  private firstNameAutoCompleteItems: XListItem<string>[] = this.getFirstNameAutoCompleteItems();

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
  //#region Private ...
  private prepareFormConfig() {
    //
    this.xFormConfig = {
      name: 'PersonalForm',
      model: {
        firstName: 'Hadi',
        lastName: 'Khazaee Asl',
        weddingState: true,
        latLong: '50.958799848165526,35.82254339947069',
        color: '#9847a6ff',
      },
      updateOn: XFormUpdateOn.CHANGE,
      controls: [],
    };

    //
    // First Name ...
    this.xFormConfig.controls[0] = {
      index: 0,
      propName: 'firstName',
      type: {
        type: XFormControlType.Text,
      },
      appearance: {
        disabled: false,
        appearance: this.FormControlAppearance,
        label: this.ResourceIDs.first_name,
        icons: {
          prefix: {
            applyStateColor: true,
            name: this.IconNames.first_name,
            color: XColorWithBrightness.SuccessShade,
          },
        },
      },
      eventHandlers: {
        onBlured: (name: any) => {
          console.log('control: ', name, ', was blured ...');
          this.prepareFirstNameAutoComplete({ opened: false });
        },
        onFocused: (name: any) => {
          console.log('control: ', name, ', was focused ...');
        },
        statusChanged: (model: XFormControlStatusChangeEventModel) => {
          // console.log('status changed: ', model);
        },
        valueChanged: async (model: XFormControlValueChangeEventModel) => {
          //
          console.log('value changed: ', model);
          await this.handleFilterAutoCompleteFirstName(model.value);
        },
      },
    } as XFormControlConfig<XFormModel>;

    //
    this.prepareFirstNameAutoComplete();

    //
    // Last Name ...
    this.xFormConfig.controls[1] = {
      index: 1,
      propName: 'lastName',
      type: {
        type: XFormControlType.Text,
      },
      appearance: {
        disabled: true,
        label: this.ResourceIDs.last_name,
        appearance: this.FormControlAppearance,
        tooltip: 'Insert your Last Name here ...',
        icons: {
          prefix: {
            applyStateColor: true,
            name: this.IconNames.first_name,
            color: XColorWithBrightness.SuccessShade,
          },
        },
      },
      eventHandlers: {
        onBlured: (name: any) => {
          console.log('control: ', name, ', was blured ...');
        },
        onFocused: (name: any) => {
          console.log('control: ', name, ', was focused ...');
        },
        statusChanged: (model: XFormControlStatusChangeEventModel) => {
          console.log('status changed: ', model);
        },
        valueChanged: (model: XFormControlValueChangeEventModel) => {
          console.log('value changed: ', model);
        },
      },
    } as XFormControlConfig<XFormModel>;

    //
    // Content ...
    this.xFormConfig.controls[2] = {
      index: 2,
      propName: 'content',
      type: {
        type: XFormControlType.MarkDown,
        config: {
          hasToolbar: true,
          mode: XMarkdownMode.BOTH,
          toolbarColor: XColorWithBrightness.Dark,
          contentChanged: (content: string) => {
            console.log('markdown new content: ', content);
          },
        } as XFormMarkdownControlConfig,
      },
      appearance: {
        label: AppResourceIDs.content,
        appearance: this.FormControlAppearance,
        icons: {
          prefix: {
            name: this.IconNames.account,
            color: this.ColorNames.Primary
          }
        }
      },
    } as XFormControlConfig<XFormModel>;

    //
    // Content Type ...
    this.xFormConfig.controls[3] = {
      index: 3,
      propName: 'contentType',
      type: {
        type: XFormControlType.Select,
        config: {
          multiple: false,
          options: keys(this.ContentTypes).map((k) => {
            return {
              value: this.ContentTypes[k],
              viewValue: this.resourceProvider(this.ContentTypes[k]),
            } as XFormSelectControlOption<ContentType>;
          }),
        } as XFormSelectControlConfig,
      },
      appearance: {
        label: AppResourceIDs.content_type,
        appearance: this.FormControlAppearance,
        icons: {
          prefix: {
            applyStateColor: true,
            name: this.IconNames.customers_club,
            color: XColorWithBrightness.SuccessShade,
          },
        },
      },
      eventHandlers: {
        valueChanged: (value: XFormControlValueChangeEventModel) => {
          console.log('content type value changed: ', value);
        },
      },
    } as XFormControlConfig<XFormModel>;

    //
    // Content Visibility ...
    this.xFormConfig.controls[4] = {
      index: 4,
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
        appearance: this.FormControlAppearance,
        icons: {
          prefix: {
            applyStateColor: true,
            name: this.IconNames.customers_club,
            color: XColorWithBrightness.SuccessShade,
          },
        },
      },
      eventHandlers: {
        valueChanged: (value: XFormControlValueChangeEventModel) => {
          console.log('content visibility value changed: ', value);
        },
      },
    } as XFormControlConfig<XFormModel>;

    //
    // Publish ...
    this.xFormConfig.controls[5] = {
      index: 5,
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
        appearance: this.FormControlAppearance,
      },
      eventHandlers: {
        valueChanged: (value: XFormControlValueChangeEventModel) => {
          console.log('Publish value changed: ', value);
        },
      },
    } as XFormControlConfig<XFormModel>;

    //
    // BrithDate ...
    this.xFormConfig.controls[6] = {
      index: 6,
      propName: 'brithDate',
      type: {
        type: XFormControlType.Date,
        config: {
          applyStateColor: true,
          toggleIcon: XIconNames.calendar,
          iconColor: XColorWithBrightness.SuccessShade,
          datePickerPosition: XFormDatePickerControlPickerPosition.Prefix,
        } as XFormDatePickerControlConfig,
      },
      appearance: {
        label: this.ResourceIDs.brithDate,
        appearance: this.FormControlAppearance,
      },
      eventHandlers: {
        valueChanged: (value: XFormControlValueChangeEventModel) => {
          console.log('BirthDate value changed: ', value);
        },
      },
    } as XFormControlConfig<XFormModel>;

    //
    // Wedding State ...
    this.xFormConfig.controls[7] = {
      index: 7,
      propName: 'weddingState',
      type: {
        type: XFormControlType.Toggle,
      },
      appearance: {
        label: this.ResourceIDs.wedding_state,
        appearance: this.FormControlAppearance,
      },
      eventHandlers: {
        valueChanged: async (value: XFormControlValueChangeEventModel) => {
          console.log('Wedding state value changed: ', value);
          this.handleHasNumberOfChild(toBoolean(value.value));
        },
      },
    } as XFormControlConfig<XFormModel>;

    //
    // Number Of Childs ...
    this.xFormConfig.controls[8] = {
      index: 8,
      propName: 'numberOfChilds',
      type: {
        type: XFormControlType.Hidden,
        config: {
          min: 0,
          max: 15,
          step: 1,
          vertical: false,
          thumbLabel: true,
        } as XFormSliderControlConfig,
      },
      appearance: {
        label: this.ResourceIDs.num_of_childs,
        appearance: this.FormControlAppearance,
      },
      eventHandlers: {
        valueChanged: (value: XFormControlValueChangeEventModel) => {
          console.log('Number of Childs value changed: ', value);
        },
      },
    } as XFormControlConfig<XFormModel>;

    //
    // Avatar ...
    this.xFormConfig.controls[9] = {
      index: 9,
      propName: 'avatar',
      type: {
        type: XFormControlType.AvatarUpload,
        config: {
          canDrop: true,
          color: XColorWithBrightness.Dark,
          fileDropAreaColor: XColorWithBrightness.DarkTint,
          placeHolderAvatar: this.managerService.getFullUrl(
            '/assets/image/default-user-image.png'
          ),
        } as XFormAvatarUploadControlConfig,
      },
      appearance: {
        label: this.ResourceIDs.avatar,
        appearance: this.FormControlAppearance,
      },
      eventHandlers: {
        valueChanged: (value: XFormControlValueChangeEventModel) => {
          console.log('Avatar value changed: ', value);
        },
      },
    } as XFormControlConfig<XFormModel>;

    //
    // Map ...
    this.xFormConfig.controls[10] = {
      index: 10,
      propName: 'latLong',
      type: {
        type: XFormControlType.Map,
        config: {
          zoom: 2,
          showZoom: true,
          canSelect: true,
          showRotate: true,
          showLocate: true,
          showSearchBar: true,
          showClearMarker: true,
          centerAfterInit: true,
          showGoMarkedPlace: true,
          showSelectedPosition: true,
          searchBarColor: XColorWithBrightness.Dark,
          progressBarColor: XColorWithBrightness.Warning,
          presentType: XFormMapControlPresentType.WithDialog,
        } as XFormMapControlConfig,
      },
      appearance: {
        disabled: false,
        label: this.ResourceIDs.location,
        appearance: this.FormControlAppearance,
        placeholder: this.ResourceIDs.location,
        icons: {
          prefix: {
            applyStateColor: true,
            name: this.IconNames.locate,
            color: XColorWithBrightness.SuccessShade,
            tooltip: this.ResourceIDs.map_dialog_select_title,
          },
        },
      },
      eventHandlers: {
        valueChanged: (value: XFormControlValueChangeEventModel) => {
          console.log('Location value changed: ', value);
        },
      },
    } as XFormControlConfig<XFormModel>;

    //
    // Color Picker ...
    this.xFormConfig.controls[11] = {
      index: 11,
      propName: 'color',
      type: {
        type: XFormControlType.ColorPicker,
        config: {
          showCopyToClipboard: true,
          presentType: XFormColorPickerControlPresentType.WithDialog,
        } as XFormColorPickerControlConfig,
      },
      appearance: {
        label: this.ResourceIDs.color,
        appearance: this.FormControlAppearance,
        placeholder: this.ResourceIDs.color,
        icons: {
          prefix: {
            applyStateColor: true,
            name: this.IconNames.color_palette,
            color: XColorWithBrightness.SuccessShade,
            tooltip: this.ResourceIDs.color_picker_dialog_title,
          },
        },
      },
      eventHandlers: {
        valueChanged: (value: XFormControlValueChangeEventModel) => {
          console.log('color value changed: ', value);
        },
      },
    } as XFormControlConfig<XFormModel>;
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
        type: XFormControlType.Range,
      };
    }

    //
    this.detectChanges();
  }
  //#endregion
}
