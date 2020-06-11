import { XTranslationItem } from 'x-framework-core';

export enum AppResourceIDs {
  //
  //#region Home ...
  home = 'home',
  home_description = 'home_description',
  //#endregion

  //
  //#region Tools ...
  tools = 'tools',
  tools_description = 'tools_description',
  //#endregion
}

//
export const FaCustomLocales: XTranslationItem[] = [
  //
  //#region Home ...
  {
    id: 'home',
    value: 'فریم ورک ایکس',
  },
  {
    id: 'home_description',
    value: 'شرح امکانات موجود',
  },
  //#endregion

  //
  //#region Tools ...
  {
    id: 'tools',
    value: 'ابزارهای سودمند',
  },
  {
    id: 'tools_description',
    value: 'مستندات مربوط به ابزارهای سودمند موجود',
  },
  //#endregion
];

//
export const EnCustomLocales: XTranslationItem[] = [
  //
  //#region Home ...
  {
    id: 'home',
    value: 'XFramework',
  },
  {
    id: 'home_description',
    value: 'Describe available tools and options ...',
  },
  //#endregion

  //
  //#region Tools ...
  {
    id: 'tools',
    value: 'ابزارهای سودمند',
  },
  {
    id: 'tools_description',
    value: 'مستندات مربوط به ابزارهای سودمند موجود',
  },
  //#endregion
];
