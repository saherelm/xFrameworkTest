import {
  XResourceIDs,
  isNullOrEmptyString,
  XColorWithBrightness,
} from 'x-framework-core';
import {
  XIconNames,
  XTableConfig,
  XTableItemPosition,
} from 'x-framework-components';
import { Component } from '@angular/core';
import { VPageComponent } from '../../../views/v-page/v-page.component';
import { AppResourceIDs } from 'src/app/config/app.localization.config';

interface Temp {
  id?: string;
  name: string;
  family: string;
  phoneNumber: string;
  value: string;
  slided: boolean;
  checked: boolean;
  level: number;
  person: string;
  dob: Date;
}

@Component({
  selector: 'app-table',
  templateUrl: './table.page.html',
  styleUrls: ['./table.page.scss'],
})
// tslint:disable-next-line:component-class-suffix
export class TablePage extends VPageComponent {
  //
  //#region Props ...
  //
  //#region Page Props ...
  titleRes = AppResourceIDs.table;
  toolbarTitle = this.resourceProvider(this.titleRes);
  toolbarSubTitle = this.resourceProvider(AppResourceIDs.table_description);
  toolbarShowSubTitle = true;
  //#endregion

  //
  // Prepare All Resource IDs ...
  readonly ResourceIDs = Object.assign(
    Object.assign({}, XResourceIDs),
    AppResourceIDs
  ) as any;

  //
  readonly IconNames = Object.assign({}, XIconNames);
  readonly ColorNames = Object.assign({}, XColorWithBrightness);
  //#endregion

  //
  //#region Data Preparation For Table ...
  //
  readonly TableItemPositions = Object.assign({}, XTableItemPosition);

  //
  tempTableProps: XTableConfig<Partial<Temp>> = {
    items: [
      {
        id: '71f14439-262f-44bf-8dc8-ee85929c349c',
        name: 'Deidre',
        family: 'Thomas',
        phoneNumber: '+98 (864) 472-3812',
      },
      {
        id: 'caa22853-dd2d-4669-8b63-b1fe4a38ea07',
        name: 'Hubbard',
        family: 'Preston',
        phoneNumber: '+98 (899) 452-3720',
      },
      {
        id: 'ccb62dc4-a06b-412d-800d-02d18f54a0e0',
        name: 'Cooley',
        family: 'Nixon',
        phoneNumber: '+98 (926) 459-2360',
      },
      {
        id: '6a946279-fe01-4e17-bb2c-a1931780ce9d',
        name: 'Becky',
        family: 'Wallace',
        phoneNumber: '+98 (914) 519-3589',
      },
      {
        id: '8601242a-f2ff-465f-8275-5b991b4a8ade',
        name: 'Kidd',
        family: 'Shelton',
        phoneNumber: '+98 (848) 570-3661',
      },
      {
        id: '1f4bd5e8-d7be-460d-9bfb-f0738957bc4b',
        name: 'Caitlin',
        family: 'Camacho',
        phoneNumber: '+98 (959) 453-2722',
      },
      {
        id: '18a874dc-1f3d-4cdc-a3c7-69d2f417e18e',
        name: 'Estes',
        family: 'Rivera',
        phoneNumber: '+98 (917) 436-3237',
      },
      {
        id: '5a5f2a8e-d20e-4fe9-ae6f-84dde7602e9f',
        name: 'Ines',
        family: 'Powell',
        phoneNumber: '+98 (917) 539-3108',
      },
      {
        id: '663c8403-e525-4b51-b262-e876e97d4532',
        name: 'Carrillo',
        family: 'Acevedo',
        phoneNumber: '+98 (828) 556-3742',
      },
      {
        id: '7e6d0bb6-4180-4329-96cc-364a9a534a04',
        name: 'Ina',
        family: 'Wilkinson',
        phoneNumber: '+98 (933) 560-3834',
      },
      {
        id: '19c21deb-f8b7-40c7-a0bb-da203193c114',
        name: 'Mercer',
        family: 'Adkins',
        phoneNumber: '+98 (981) 480-3459',
      },
      {
        id: 'c2e4de31-d406-4611-9dbe-cd7bdefdc5bc',
        name: 'Donaldson',
        family: 'Vega',
        phoneNumber: '+98 (986) 554-2571',
      },
      {
        id: 'cf846f56-b381-447b-96a1-0d7c29736f4f',
        name: 'Natalie',
        family: 'Cantu',
        phoneNumber: '+98 (857) 445-2595',
      },
      {
        id: 'c5252e01-8a26-44f1-846d-28c8810b10b8',
        name: 'Christa',
        family: 'Higgins',
        phoneNumber: '+98 (983) 498-3785',
      },
      {
        id: 'e7e5b97a-67f8-4bff-8c8c-b68cf6a24b2f',
        name: 'Kelley',
        family: 'Pitts',
        phoneNumber: '+98 (948) 588-3437',
      },
      {
        id: '9db9d0ab-a2c4-4edb-8d0b-e664c86c4e55',
        name: 'Shelby',
        family: 'Macdonald',
        phoneNumber: '+98 (882) 401-2642',
      },
      {
        id: '41305b10-aa7a-415d-a819-5e6ab05e0a49',
        name: 'Preston',
        family: 'Patton',
        phoneNumber: '+98 (923) 509-3278',
      },
      {
        id: '35acdcfe-7015-4a27-a5de-0f5c701a9152',
        name: 'Allen',
        family: 'Flores',
        phoneNumber: '+98 (957) 587-3471',
      },
      {
        id: '31f568b8-272a-43c5-bb7a-bf25c2fa6da9',
        name: 'Margaret',
        family: 'Neal',
        phoneNumber: '+98 (870) 480-3528',
      },
      {
        id: '5ef4be35-3d02-45f7-9c25-bf828b4a3845',
        name: 'Kirkland',
        family: 'Hewitt',
        phoneNumber: '+98 (958) 466-2957',
      },
      {
        id: 'e581d671-5d35-4c21-af77-71f881f8d764',
        name: 'Herminia',
        family: 'Silva',
        phoneNumber: '+98 (925) 546-3981',
      },
      {
        id: '4242bc21-945e-4cbe-b73c-bacc0c8b2013',
        name: 'Galloway',
        family: 'Tyler',
        phoneNumber: '+98 (971) 468-2144',
      },
      {
        id: '58f91369-8718-4c01-aff8-8a5d65527948',
        name: 'Hull',
        family: 'Rojas',
        phoneNumber: '+98 (950) 439-3702',
      },
      {
        id: 'e6d25e18-f272-4ac3-b7f6-54c8bae985b5',
        name: 'Sandoval',
        family: 'Norton',
        phoneNumber: '+98 (920) 439-2511',
      },
      {
        id: 'bff9bdad-2947-4fd9-a18a-92388e32aa0b',
        name: 'Alba',
        family: 'Collins',
        phoneNumber: '+98 (957) 445-2714',
      },
      {
        id: '8272763a-6a67-41da-924e-0f417fb259da',
        name: 'Montoya',
        family: 'Stein',
        phoneNumber: '+98 (889) 585-3578',
      },
      {
        id: '29a6ff2c-746e-4214-b28f-073ac201ea96',
        name: 'Grant',
        family: 'Gilliam',
        phoneNumber: '+98 (814) 562-3575',
      },
      {
        id: '416cb3f4-30ae-4874-a7c3-ffd401cf6c3f',
        name: 'Meadows',
        family: 'Mcknight',
        phoneNumber: '+98 (994) 589-2830',
      },
      {
        id: 'd061721e-ca9c-4054-9aa1-1196a51a0256',
        name: 'Harris',
        family: 'Rhodes',
        phoneNumber: '+98 (853) 489-2436',
      },
      {
        id: 'd01323d5-5126-4c8a-ad89-0298acf4d82d',
        name: 'Frieda',
        family: 'Hayden',
        phoneNumber: '+98 (930) 436-2770',
      },
      {
        id: '34225f99-0986-4294-95f2-3c8961b15036',
        name: 'Rasmussen',
        family: 'Ross',
        phoneNumber: '+98 (821) 599-2812',
      },
      {
        id: '6f7a24d4-8b82-45c4-8b5b-a3053c5a7023',
        name: 'Mitzi',
        family: 'Gregory',
        phoneNumber: '+98 (838) 404-3840',
      },
      {
        id: 'acba244a-12b5-4291-beb2-66a64127121d',
        name: 'Washington',
        family: 'Cruz',
        phoneNumber: '+98 (975) 465-2025',
      },
      {
        id: '2c70c776-80dd-4be9-b32f-6af7d6cea5b0',
        name: 'Jewell',
        family: 'Rios',
        phoneNumber: '+98 (909) 453-3851',
      },
      {
        id: '5f98d7a6-c98b-4dc7-bf90-4df04074b57e',
        name: 'Heath',
        family: 'Bush',
        phoneNumber: '+98 (976) 516-3200',
      },
      {
        id: 'bc51bdc5-47f6-45b4-8c51-6d86324b90d2',
        name: 'Laura',
        family: 'Edwards',
        phoneNumber: '+98 (966) 546-3720',
      },
      {
        id: 'f1f47337-cc3f-49e4-acb7-5989f5eb1a30',
        name: 'Harriett',
        family: 'Sanders',
        phoneNumber: '+98 (816) 579-3042',
      },
      {
        id: '2fce8cd5-398c-4d73-8151-3d0fb375ff49',
        name: 'Milagros',
        family: 'Vazquez',
        phoneNumber: '+98 (941) 437-2907',
      },
      {
        id: 'b725ce24-b08d-4c8e-95ec-5926804ccde3',
        name: 'Sheila',
        family: 'Aguilar',
        phoneNumber: '+98 (855) 509-3995',
      },
      {
        id: 'f7d64d31-43d2-416f-ba19-397b407afeba',
        name: 'Eunice',
        family: 'Langley',
        phoneNumber: '+98 (959) 564-2615',
      },
      {
        id: '6f73fd66-2931-4f1f-9cd1-95803724ff38',
        name: 'Valerie',
        family: 'House',
        phoneNumber: '+98 (985) 550-3203',
      },
      {
        id: '17fab0f9-f37d-4ed0-8656-98b9f9c65333',
        name: 'Carmella',
        family: 'Young',
        phoneNumber: '+98 (964) 548-3625',
      },
      {
        id: '7e9e3057-34df-4727-8a7e-750e876a7ca8',
        name: 'Brittany',
        family: 'Pennington',
        phoneNumber: '+98 (840) 499-3543',
      },
      {
        id: '4ca1aebb-8d6f-4c62-9633-353abf1cab06',
        name: 'Polly',
        family: 'Roberts',
        phoneNumber: '+98 (821) 554-2791',
      },
      {
        id: '147c9f63-800a-4600-94dd-7fa39e233cd7',
        name: 'Estrada',
        family: 'Tate',
        phoneNumber: '+98 (844) 586-3191',
      },
      {
        id: 'decca57e-7d69-4152-99f0-3a56262db788',
        name: 'Aimee',
        family: 'Morrow',
        phoneNumber: '+98 (920) 522-2471',
      },
      {
        id: '1b7d57b2-0169-4949-a1e9-42137085dcda',
        name: 'Elinor',
        family: 'Gill',
        phoneNumber: '+98 (981) 525-3212',
      },
      {
        id: 'db3e2d62-d8cf-4809-9226-49a34a4fbea1',
        name: 'Velasquez',
        family: 'Taylor',
        phoneNumber: '+98 (879) 440-2756',
      },
      {
        id: 'a3f6bda0-0975-4e4e-8bcd-1a9be84777ac',
        name: 'Hardin',
        family: 'Rowe',
        phoneNumber: '+98 (945) 564-3793',
      },
      {
        id: '17c0c061-3215-429d-9172-be3d8ca69119',
        name: 'Miranda',
        family: 'Hendrix',
        phoneNumber: '+98 (804) 519-2572',
      },
      {
        id: '634862e6-09bf-41c3-8553-c8807aab2b22',
        name: 'Kristin',
        family: 'Mcgowan',
        phoneNumber: '+98 (974) 533-3607',
      },
      {
        id: '4214933e-a57c-495c-8c32-ddb9960556f6',
        name: 'Ila',
        family: 'Gutierrez',
        phoneNumber: '+98 (814) 546-2444',
      },
      {
        id: '74f62419-a4eb-414f-9a84-d82dfd117917',
        name: 'Sophie',
        family: 'Pena',
        phoneNumber: '+98 (962) 458-3451',
      },
      {
        id: 'c3cc6ff3-d0ef-45fb-b6a7-b499ff13fedf',
        name: 'Sara',
        family: 'Burton',
        phoneNumber: '+98 (937) 516-2702',
      },
      {
        id: '969ca3e7-78ad-4fbe-b413-0e12021d07b9',
        name: 'Valeria',
        family: 'Spence',
        phoneNumber: '+98 (968) 403-2227',
      },
      {
        id: 'e73ba5bb-adb7-423e-a6e9-22be1501987c',
        name: 'Stefanie',
        family: 'Erickson',
        phoneNumber: '+98 (950) 545-2095',
      },
      {
        id: '83ae1198-c533-43dd-ae1a-85bc5f503293',
        name: 'Bean',
        family: 'Newman',
        phoneNumber: '+98 (824) 504-2755',
      },
      {
        id: 'a2f3949a-7d24-4c42-ac6d-573c11c903fd',
        name: 'Tracie',
        family: 'Keith',
        phoneNumber: '+98 (981) 499-3453',
      },
      {
        id: '7f52c00e-4ccb-4458-ad0c-bb7d9ff759a4',
        name: 'Cardenas',
        family: 'Trevino',
        phoneNumber: '+98 (942) 476-2939',
      },
      {
        id: '48f9d38e-9211-420f-968e-098f7a3dfeaf',
        name: 'Yolanda',
        family: 'Hamilton',
        phoneNumber: '+98 (936) 418-3047',
      },
      {
        id: '0f739ca9-1a2a-41f1-b703-9ddc98e7b328',
        name: 'Mendoza',
        family: 'Cunningham',
        phoneNumber: '+98 (980) 547-3912',
      },
      {
        id: '3e3e68cc-053a-4811-9987-7c700fcc32ee',
        name: 'Singleton',
        family: 'Harmon',
        phoneNumber: '+98 (975) 564-3890',
      },
      {
        id: 'd7d6e72b-5a63-440d-bdf0-125bd9d8d4dd',
        name: 'Witt',
        family: 'Huffman',
        phoneNumber: '+98 (867) 475-3332',
      },
      {
        id: '46c951e3-ab31-44ca-b5eb-2f988dd57562',
        name: 'James',
        family: 'Mccullough',
        phoneNumber: '+98 (895) 507-2233',
      },
      {
        id: '9b7b2396-5758-44be-9d5d-4eef04742a53',
        name: 'Stevenson',
        family: 'Robles',
        phoneNumber: '+98 (847) 587-3623',
      },
      {
        id: 'a0db4093-ec6b-41ed-8ca5-a9b43ee302b7',
        name: 'Mcknight',
        family: 'Perry',
        phoneNumber: '+98 (881) 443-2991',
      },
      {
        id: '1ad02420-9ac0-4250-940c-fc0ea24964a8',
        name: 'Flowers',
        family: 'Emerson',
        phoneNumber: '+98 (933) 514-3019',
      },
      {
        id: 'b2ffa8f4-4f95-4b9d-a219-780d5f4dbd69',
        name: 'Karin',
        family: 'James',
        phoneNumber: '+98 (958) 486-2623',
      },
      {
        id: 'd87e51b3-80db-4e7c-b0d0-9f39c633b70a',
        name: 'Marisol',
        family: 'William',
        phoneNumber: '+98 (961) 533-3778',
      },
      {
        id: '1ce985cc-f810-4972-8e9b-59dfb67b161c',
        name: 'Emilia',
        family: 'Black',
        phoneNumber: '+98 (984) 592-2589',
      },
      {
        id: '4b5be713-cb7e-46cb-b72b-e8c4f644693a',
        name: 'Irene',
        family: 'Miles',
        phoneNumber: '+98 (950) 431-2351',
      },
      {
        id: 'c1ff3dfd-21b4-4824-aeef-d3b6a36ba3ab',
        name: 'Tonia',
        family: 'Serrano',
        phoneNumber: '+98 (955) 511-2933',
      },
      {
        id: '97eec6ce-ccb0-4050-b413-96a0a4afce7a',
        name: 'Thelma',
        family: 'Odom',
        phoneNumber: '+98 (844) 524-2142',
      },
      {
        id: 'e9111905-fc22-4e35-a3a6-4a4c0b6bc0c0',
        name: 'Kerry',
        family: 'Rose',
        phoneNumber: '+98 (947) 581-2952',
      },
      {
        id: '9129d569-5acd-43b7-8eac-de7a9f4f7336',
        name: 'Mcgee',
        family: 'Hernandez',
        phoneNumber: '+98 (865) 521-3785',
      },
      {
        id: '221e68ec-0462-4418-88c9-d433f1d60ae1',
        name: 'Shepard',
        family: 'Santiago',
        phoneNumber: '+98 (892) 446-3690',
      },
      {
        id: '429b8bcc-028d-4989-89d9-5519dc6fec0f',
        name: 'Emily',
        family: 'French',
        phoneNumber: '+98 (836) 537-3964',
      },
      {
        id: 'c750ebd9-9aa0-426f-b668-5702500f7178',
        name: 'Clements',
        family: 'Carson',
        phoneNumber: '+98 (916) 460-3168',
      },
      {
        id: '2f75f87c-65f9-479b-bec4-5c83fbbfb96a',
        name: 'Gibbs',
        family: 'Burch',
        phoneNumber: '+98 (950) 543-2339',
      },
      {
        id: '6dbf72ff-5761-4c0b-9781-93cd4606fd4b',
        name: 'Pearson',
        family: 'Petersen',
        phoneNumber: '+98 (889) 591-2938',
      },
      {
        id: '8944a741-1f18-4d30-8536-a306ab1b5b8f',
        name: 'Stout',
        family: 'Castillo',
        phoneNumber: '+98 (938) 578-3360',
      },
      {
        id: 'aca707ac-97fe-4f7f-8665-ab34d863bc3a',
        name: 'Leonard',
        family: 'Finch',
        phoneNumber: '+98 (821) 441-3242',
      },
      {
        id: '43cc621c-17fb-4196-a28e-658f1fc4752e',
        name: 'Nelson',
        family: 'Kirkland',
        phoneNumber: '+98 (869) 431-2288',
      },
      {
        id: '63292aab-ddc3-4dd8-851a-6430c85f3ad3',
        name: 'Olson',
        family: 'Sherman',
        phoneNumber: '+98 (865) 446-3664',
      },
      {
        id: '40f28107-6a4d-4c1c-a506-a8dc4d65c6e4',
        name: 'Bray',
        family: 'Hansen',
        phoneNumber: '+98 (808) 532-3820',
      },
      {
        id: '02ab1c0b-654f-4277-92dd-1a0219bda442',
        name: 'Antonia',
        family: 'Bell',
        phoneNumber: '+98 (802) 572-3045',
      },
      {
        id: '15019624-9683-4977-a2d8-dc47e434f086',
        name: 'Cecile',
        family: 'Maxwell',
        phoneNumber: '+98 (804) 452-2908',
      },
    ],
    columns: [
      {
        name: 'name',
        title: 'Name',
        sortable: true,
        description: 'Name of Person',
      },
      {
        name: 'family',
        title: 'Family',
        sortable: true,
        description: 'LastName of Person',
        // hidden: this.managerService.isMobileUi$
      },
      {
        name: 'phoneNumber',
        title: 'Phone Number',
        description: 'Phone Number of Person',
        // hidden: this.managerService.isMobileUi$
      },
      {
        customColumn: true,
        name: 'Actions',
        title: 'Actions',
        description: 'row Action',
      },
    ],
  };
  //#endregion

  //
  // Content ...
  readonly contentFa = `
# ${this.toolbarTitle}
این مولفه جهت نمایش داده های مرتبط بصورت جدول بکار می رود.
`;

  readonly contentEn = `
# ${this.toolbarTitle}
this Component used to show a collection of related Data in a Table.
`;

  //
  readonly sample1 =
    '```typescript' +
    `
  //
  interface Temp {
    id?: string;
    name: string;
    family: string;
    phoneNumber: string;
    value: string;
    slided: boolean;
    checked: boolean;
    level: number;
    person: string;
    dob: Date;
  }

  //
  tempTableProps: XTableProps<Partial<Temp>> = {
    items: [
      {
        id: '
          71f14439-262f-44bf-8dc8-ee85929c349c',
        name: 'Deidre',
        family: 'Thomas',
        phoneNumber: '+98 (864) 472-3812'
      },
      {
        id: '
          caa22853-dd2d-4669-8b63-b1fe4a38ea07',
        name: 'Hubbard',
        family: 'Preston',
        phoneNumber: '+98 (899) 452-3720'
      },
      {
        id: '
          ccb62dc4-a06b-412d-800d-02d18f54a0e0',
        name: 'Cooley',
        family: 'Nixon',
        phoneNumber: '+98 (926) 459-2360'
      },
      {
        ...
      },
      ...
    ],
    columns: [
      {
        name: 'name',
        title: 'Name',
        sortable: true,
        description: 'Name of Person'
      },
      {
        name: 'family',
        title: 'Family',
        sortable: true,
        description: 'LastName of Person'
      },
      {
        name: 'phoneNumber',
        title: 'Phone Number',
        description: 'Phone Number of Person'
      },
      {
        customColumn: true,
        name: 'Actions',
        title: 'Actions',
        description: 'row Action'
      }
    ]
  };
` +
    '```';

  //
  readonly sample2 =
    '```html' +
    `
<x-table
    [showHeader]="true"
    [showSearchBar]="true"
    [showPaginator]="true"
    [showActionBar]="true"
    [selectableRows]="true"
    [color]="ColorNames.Medium"
    [properties]="tempTableProps"
    [headerColor]="ColorNames.Dark"
    [actionBarColor]="ColorNames.Primary"
    [searchBarColor]="ColorNames.Primary"
    [paginatorColor]="ColorNames.Primary"
    (rowSelected)="handleRowSelected($event)"
    [searchBarPosition]="
      TableItemPositions.TOP"
    [actionBarPosition]="
      TableItemPositions.TOP"
    [paginatorPosition]="
      TableItemPositions.BOTTOM"
    (rowSelectionChanged)="
      handleRowSelectionChanged($event)"
>
</x-table>
` +
    '```';

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

  //
  handleRowSelected(row: any) {
    console.log('handleRowSelected: ', row);
  }

  //
  handleRowSelectionChanged(selectedRows: any[]) {
    console.log('handleRowSelectionChanged: ', selectedRows);
  }
  //#endregion
}
