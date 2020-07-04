import {
  XColor,
  XResourceIDs,
  isNullOrEmptyString,
  XColorWithBrightness,
  toNormalString,
} from 'x-framework-core';
import { Subject, BehaviorSubject } from 'rxjs';
import {
  XListItem,
  XIconNames,
  XFormConfig,
  XFormUpdateOn,
  XFormControlType,
  XFormControlValueChangeEventModel,
  XFormControlStatusChangeEventModel,
} from 'x-framework-components';
import { Component, TemplateRef, ViewChild } from '@angular/core';
import { VPageComponent } from '../../../views/v-page/v-page.component';
import { AppResourceIDs } from 'src/app/config/app.localization.config';

interface XFormModel {
  firstName: string;
  lastName: string;
  brithDate: Date;
  phoneNumber: string;
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
  readonly ResourceIDs = Object.assign(
    Object.assign({}, XResourceIDs),
    AppResourceIDs
  );

  //
  readonly ColorNames = Object.assign({}, XColor);
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
  readonly sample1 = '```' + '```';

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
  private nameAutoCompleteQuery = '';
  private autoCompleteItems: XListItem<string>[] = ['HADI'].map((i) => {
    return {
      data: i,
    } as XListItem<string>;
  });

  //
  nameStrings: string[] = [
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
  private handleAutoCompleteNames() {
    // //
    // const q = toNormalString(v);
    // if (q === nameAutoCompleteQuery) {
    //   return [];
    // }
    // //
    // nameAutoCompleteQuery = q;
    // console.log('qqqq: ', q);
    // //
    // const filteredItems = this.nameStrings.filter(
    //   (n) => toNormalString(n).includes(q) && toNormalString(n) !== q
    // );
    // console.log('filteredItems: ', filteredItems);
    // if (this.hasChild(filteredItems)) {
    //   return filteredItems;
    // }
    // //
    // return [];
  }

  private prepareFormConfig() {
    //
    this.xFormConfig = {
      name: 'PersonalForm',
      model: {
        firstName: 'Hadi',
        lastName: 'Khazaee Asl',
      },
      updateOn: XFormUpdateOn.CHANGE,
      controls: [
        {
          index: 0,
          propName: 'firstName',
          type: {
            type: XFormControlType.Text,
          },
          appearance: {
            label: 'First Name',
            icons: {
              suffix: {
                name: this.IconNames.first_name,
                applyStateColor: true,
              },
            },
            //
            // TODO: Fix Form auto Complete ...
            autoComplete: {
              itemTemplate: this.NAME_AUTO_CONMPLETE_REF,
              color: XColorWithBrightness.Tertiary,
              items: () => {
                return this.autoCompleteItems;
              },
              //   onSelect: (item: string) => {
              //     console.log('auto complete selected: ', item);
              //   },
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
        },
        {
          index: 1,
          propName: 'lastName',
          type: {
            type: XFormControlType.Text,
          },
          appearance: {
            label: 'Last Name',
            tooltip: 'Insert your Last Name here ...',
            icons: {
              prefix: {
                applyStateColor: true,
                name: this.IconNames.first_name,
                color: XColorWithBrightness.Dark,
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
        },
      ],
    };
  }
  //#endregion
}
