import { XTranslationItem } from 'x-framework-core';

export enum AppResourceIDs {
  //
  //#region Global ...
  sample = 'sample',
  temp_label = 'temp_label',
  documentation = 'documentation',
  default_loading = 'default_loading',
  copy_to_clipboard = 'copy_to_clipboard',

  //
  english = 'english',
  persian = 'persian',
  //#endregion

  //
  //#region Home ...
  home = 'home',
  home_description = 'home_description',

  //
  //#region Tools ...
  tools = 'tools',
  tools_description = 'tools_description',
  //#endregion
  //#endregion

  //
  //#region Components ...
  components = 'components',
  components_description = 'components_description',

  //
  //#region Small Components ...
  small_components = 'small_components',
  small_components_description = 'small_components_description',

  //
  //#region Button ...
  button = 'button',
  button_description = 'button_description',
  //#endregion

  //
  //#region ActionBar ...
  action_bar = 'action_bar',
  action_bar_description = 'action_bar_description',
  //#endregion

  //
  //#region SearchBar ...
  search_bar = 'search_bar',
  search_bar_description = 'search_bar_description',
  //#endregion

  //
  //#region Alert ...
  alert = 'alert',
  alert_description = 'alert_description',
  //#endregion

  //
  //#region Notification ...
  notification = 'notification',
  notification_description = 'notification_description',
  //#endregion

  //
  //#region Spinner ...
  spinner = 'spinner',
  spinner_description = 'spinner_description',
  //#endregion

  //
  //#region Loading ...
  loading = 'loading',
  loading_description = 'loading_description',
  //#endregion

  //
  //#region Thumbnail ...
  thumbnail_component = 'thumbnail_component',
  thumbnail_description = 'thumbnail_description',
  //#endregion

  //
  //#region Prompt ...
  prompt = 'prompt',
  prompt_description = 'prompt_description',
  //#endregion

  //
  //#region Picker ...
  picker = 'picker',
  picker_description = 'picker_description',
  //#endregion

  //
  //#region Slotter ...
  slotter = 'slotter',
  slotter_description = 'slotter_description',

  //
  vertical = 'vertical',
  horizontal = 'horizontal',
  //#endregion

  //
  //#region Empty Component ...
  empty_component = 'empty_component',
  empty_component_description = 'empty_component_description',
  //#endregion
  //#endregion

  //
  //#region Card ...
  card = 'card',
  card_description = 'card_description',

  //
  header = 'header',
  actions = 'actions',
  footer = 'footer',
  //#endregion

  //
  //#region Icon ...
  icon = 'icon',
  icon_description = 'icon_description',

  icon_list = 'icon_list',
  //#endregion

  //
  //#region Counter ...
  counter = 'counter',
  counter_description = 'counter_description',

  //
  pause = 'pause',
  //#endregion

  //
  //#region Fab ...
  fab = 'fab',
  fab_description = 'fab_description',
  //#endregion

  //
  //#region FileUpload ...
  file_components = 'file_components',
  file_components_description = 'file_components_description',

  //
  image_cropper = 'image_cropper',
  image_cropper_description = 'image_cropper_description',

  //
  file_drop_area = 'file_drop_area',
  file_drop_area_description = 'file_drop_area_description',

  //
  file_upload = 'file_upload',
  file_upload_description = 'file_upload_description',
  //#endregion

  //
  //#region Form ...
  form = 'form',
  form_description = 'form_description',
  //#endregion

  //
  //#region Grid ...
  grid = 'grid',
  grid_description = 'grid_description',
  //#endregion

  //
  //#region List ...
  list = 'list',
  list_description = 'list_description',
  //#endregion

  //
  //#region Map ...
  map = 'map',
  map_description = 'map_description',
  //#endregion

  //
  //#region Markdown ...
  markdown = 'markdown',
  markdown_description = 'markdown_description',
  //#endregion

  //
  //#region ExpandableList ...
  expandable_list = 'expandable_list',
  expandable_list_description = 'expandable_list_description',
  //#endregion

  //
  //#region ExpandableList ...
  expandable_panel = 'expandable_panel',
  expandable_panel_description = 'expandable_panel_description',
  //#endregion

  //
  //#region Slider ...
  slider = 'slider',
  slider_description = 'slider_description',
  //#endregion

  //
  //#region Stepper ...
  stepper = 'stepper',
  stepper_description = 'stepper_description',
  //#endregion

  //
  //#region Tabs ...
  tabs = 'tabs',
  tabs_description = 'tabs_description',
  //#endregion

  //
  //#region Table ...
  table = 'table',
  table_description = 'table_description',
  //#endregion

  //
  //#region Table ...
  page = 'page',
  page_description = 'page_description',
  //#endregion

  //
  //#region TabNavigation ...
  tab_navigator = 'tab_navigator',
  tab_navigator_description = 'tab_navigator_description',
  //#endregion
  //#endregion
}

//
export const FaCustomLocales: XTranslationItem[] = [
  //
  //#region Global ...
  {
    id: 'sample',
    value: 'نمونه',
  },
  {
    id: 'temp_label',
    value: 'برچسب پیش فرض',
  },
  {
    id: 'documentation',
    value: 'مستندات',
  },
  {
    id: 'default_loading',
    value: 'در حال بارگزاری',
  },
  {
    id: 'copy_to_clipboard',
    value: 'ثبت در حافظه موقت',
  },

  //
  {
    id: 'persian',
    value: 'فارسی',
  },
  {
    id: 'english',
    value: 'انگلیسی',
  },
  //#endregion

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
  //#endregion

  //
  //#region Components ...
  {
    id: 'components',
    value: 'مولفه ها',
  },
  {
    id: 'components_description',
    value: 'توضیح کامل مجموعه مولفه های ارائه شده توسط فریمورک ایکس',
  },

  //
  //#region Small Components ...
  {
    id: 'small_components',
    value: 'مولفه های جزئی',
  },
  {
    id: 'small_components_description',
    value: 'ارائه مستندات مربوط به مولفه های جزئی',
  },

  //
  //#region Button ...
  {
    id: 'button',
    value: 'دکمه',
  },
  {
    id: 'button_description',
    value: 'مستندات مربوط به مولفه دکمه',
  },
  //#endregion

  //
  //#region ActionBar ...
  {
    id: 'action_bar',
    value: 'میله فرمان',
  },
  {
    id: 'action_bar_description',
    value: 'مستندات مربوط به مولفه میله فرمان',
  },
  //#endregion

  //
  //#region SearchBar ...
  {
    id: 'search_bar',
    value: 'میله جستجو',
  },
  {
    id: 'search_bar_description',
    value: 'مستندات مربوط به مولفه میله جستجو',
  },
  //#endregion

  //
  //#region Alert ...
  {
    id: 'alert',
    value: 'هشدار',
  },
  {
    id: 'alert_description',
    value: 'مستندات مربوط به مولفه هشدار',
  },
  //#endregion

  //
  //#region Notification ...
  {
    id: 'notification',
    value: 'اعلان',
  },
  {
    id: 'notification_description',
    value: 'مستندات مربوط به مولفه اعلان',
  },
  //#endregion

  //
  //#region Spinner ...
  {
    id: 'spinner',
    value: 'فرفره',
  },
  {
    id: 'spinner_description',
    value: 'مستندات مربوط به مولفه فرفره',
  },
  //#endregion

  //
  //#region Loading ...
  {
    id: 'loading',
    value: 'بارگزاری',
  },
  {
    id: 'loading_description',
    value: 'مستندات مربوط به مولفه بارگزاری',
  },
  //#endregion

  //
  //#region Thumbnail ...
  {
    id: 'thumbnail_component',
    value: 'تصویر بند انگشتی',
  },
  {
    id: 'thumbnail_description',
    value: 'مستندات مربوط به مولفه بند انگشتی',
  },
  //#endregion

  //
  //#region Prompt ...
  {
    id: 'prompt',
    value: 'سوال',
  },
  {
    id: 'prompt_description',
    value: 'مستندات مربوط به مولفه سوال',
  },
  //#endregion

  //
  //#region Picker ...
  {
    id: 'picker',
    value: 'انتخاب',
  },
  {
    id: 'picker_description',
    value: 'مستندات مربوط به مولفه انتخاب',
  },
  //#endregion

  //
  //#region Slotter ...
  {
    id: 'slotter',
    value: 'جورچین',
  },
  {
    id: 'slotter_description',
    value: 'مستندات مربوط به مولفه جورچین',
  },

  //
  {
    id: 'vertical',
    value: 'عمودی',
  },
  {
    id: 'horizontal',
    value: 'افقی',
  },
  //#endregion

  //
  //#region Empty Component ...
  {
    id: 'empty_component',
    value: 'محتوای خالی',
  },
  {
    id: 'empty_component_description',
    value: 'مستندات مربوط به مولفه محتوای خالی',
  },
  //#endregion
  //#endregion

  //
  //#region Card ...
  {
    id: 'card',
    value: 'کارت',
  },
  {
    id: 'card_description',
    value: 'مستندات مربوط به مولفه کارت',
  },

  //
  {
    id: 'header',
    value: 'ناحیه فوقانی',
  },
  {
    id: 'actions',
    value: 'فعالیت ها و فرمان ها',
  },
  {
    id: 'footer',
    value: 'ناحیه تحتانی',
  },
  //#endregion

  //
  //#region Icon ...
  {
    id: 'icon',
    value: 'شمایل',
  },
  {
    id: 'icon_description',
    value: 'مستندات مربوط به مولفه شمایل',
  },

  //
  {
    id: 'icon_list',
    value: 'فهرست شمایل های موجود',
  },
  //#endregion

  //
  //#region Counter ...
  {
    id: 'counter',
    value: 'شمارنده',
  },
  {
    id: 'counter_description',
    value: 'مستندات مربوط به مولفه شمارنده',
  },

  //
  {
    id: 'pause',
    value: 'توقف',
  },
  //#endregion

  //
  //#region Fab ...
  {
    id: 'fab',
    value: 'دکمه شناور',
  },
  {
    id: 'fab_description',
    value: 'مستندات مربوط به مولفه دکمه شناور',
  },
  //#endregion

  //
  //#region FileUpload ...
  {
    id: 'file_components',
    value: 'مولفه های مرتبط با فایل',
  },
  {
    id: 'file_components_description',
    value: 'مستندات مربوط به مولفه های مرتبط با فایل',
  },

  //
  {
    id: 'image_cropper',
    value: 'برشگر تصویر',
  },
  {
    id: 'image_cropper_description',
    value: 'مستندات مربوط به برشگر تصویر',
  },

  //
  {
    id: 'file_drop_area',
    value: 'جایگذاری فایل',
  },
  {
    id: 'file_drop_area_description',
    value: 'مستندات مربوط به مولفه جایگذاری فایل',
  },

  //
  {
    id: 'file_upload',
    value: 'بارگزاری فایل',
  },
  {
    id: 'file_upload_description',
    value: 'مستندات مربوط به مولفه بارگزاری فایل',
  },
  //#endregion

  //
  //#region Form ...
  {
    id: 'form',
    value: 'فرم',
  },
  {
    id: 'form_description',
    value: 'مستندات مربوط به مولفه فرم',
  },
  //#endregion

  //
  //#region Grid ...
  {
    id: 'grid',
    value: 'توری',
  },
  {
    id: 'grid_description',
    value: 'مستندات مربوط به مولفه توری',
  },
  //#endregion

  //
  //#region List ...
  {
    id: 'list',
    value: 'فهرست',
  },
  {
    id: 'list_description',
    value: 'مستندات مربوط به مولفه فهرست',
  },
  //#endregion

  //
  //#region Map ...
  {
    id: 'map',
    value: 'نقشه',
  },
  {
    id: 'map_description',
    value: 'مستندات مربوط به مولفه نقشه',
  },
  //#endregion

  //
  //#region Markdown ...
  {
    id: 'markdown',
    value: 'نشانه گزاری',
  },
  {
    id: 'markdown_description',
    value: 'مستندات مربوط به مولفه نشانه گزاری',
  },
  //#endregion

  //
  //#region ExpandableList ...
  {
    id: 'expandable_list',
    value: 'فهرست باز شونده',
  },
  {
    id: 'expandable_list_description',
    value: 'مستندات مربوط به مولفه فهرست باز شونده',
  },
  //#endregion

  //
  //#region ExpandableList ...
  {
    id: 'expandable_panel',
    value: 'قطعه بازشونده',
  },
  {
    id: 'expandable_panel_description',
    value: 'مستندات مربوط به مولفه قطعه بازشونده',
  },
  //#endregion

  //
  //#region Slider ...
  {
    id: 'slider',
    value: 'لغزنده',
  },
  {
    id: 'slider_description',
    value: 'مستندات مربوط به مولفه لغزنده',
  },
  //#endregion

  //
  //#region Stepper ...
  {
    id: 'stepper',
    value: 'پله ساز',
  },
  {
    id: 'stepper_description',
    value: 'مستندات مربوط به مولفه پله ساز',
  },
  //#endregion

  //
  //#region Tabs ...
  {
    id: 'tabs',
    value: 'برگه ها',
  },
  {
    id: 'tabs_description',
    value: 'مستندات مربوط به مولفه برگه ها',
  },
  //#endregion

  //
  //#region Table ...
  {
    id: 'table',
    value: 'جدول',
  },
  {
    id: 'table_description',
    value: 'مستندات مربوط به مولفه جدول',
  },
  //#endregion

  //
  //#region Page ...
  {
    id: 'page',
    value: 'صفحه',
  },
  {
    id: 'page_description',
    value: 'مستندات مربوط به مولفه صفحه',
  },
  //#endregion

  //
  //#region TabNavigation ...
  {
    id: 'tab_navigator',
    value: 'پیمایشگر برگه',
  },
  {
    id: 'tab_navigator_description',
    value: 'مستندات مربوط به مولفه پیمایشگر برگه',
  },
  //#endregion
  //#endregion
];

//
export const EnCustomLocales: XTranslationItem[] = [
  //
  //#region Global ...
  {
    id: 'sample',
    value: 'Sample',
  },
  {
    id: 'temp_label',
    value: 'Default Label',
  },
  {
    id: 'documentation',
    value: 'Documentation',
  },
  {
    id: 'default_loading',
    value: 'Loading',
  },
  {
    id: 'copy_to_clipboard',
    value: 'Copy to Clipboard',
  },

  //
  {
    id: 'persian',
    value: 'Persian',
  },
  {
    id: 'english',
    value: 'English',
  },
  //#endregion

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

  //
  //#region Tools ...
  {
    id: 'tools',
    value: 'Tools',
  },
  {
    id: 'tools_description',
    value: 'Provided Tools Documentations',
  },
  //#endregion
  //#endregion

  //
  //#region Components ...
  {
    id: 'components',
    value: 'Components',
  },
  {
    id: 'components_description',
    value: 'Describe all provided Components in XFramework',
  },

  //
  //#region Small Components ...
  {
    id: 'small_components',
    value: 'Small Components',
  },
  {
    id: 'small_components_description',
    value: 'Provide Small Components Documentation',
  },

  //
  //#region Button ...
  {
    id: 'button',
    value: 'Button',
  },
  {
    id: 'button_description',
    value: 'Button Component Documentation',
  },
  //#endregion

  //
  //#region ActionBar ...
  {
    id: 'action_bar',
    value: 'ActionBar',
  },
  {
    id: 'action_bar_description',
    value: 'ActionBar Component Documentation',
  },
  //#endregion

  //
  //#region SearchBar ...
  {
    id: 'search_bar',
    value: 'SearchBar',
  },
  {
    id: 'search_bar_description',
    value: 'SearchBar Component Documentation',
  },
  //#endregion

  //
  //#region Alert ...
  {
    id: 'alert',
    value: 'Alert',
  },
  {
    id: 'alert_description',
    value: 'Alert Component Documentation',
  },
  //#endregion

  //
  //#region Notification ...
  {
    id: 'notification',
    value: 'Notification',
  },
  {
    id: 'notification_description',
    value: 'Notification Component Documentation',
  },
  //#endregion

  //
  //#region Spinner ...
  {
    id: 'spinner',
    value: 'Spinner',
  },
  {
    id: 'spinner_description',
    value: 'Spinner Component Documentation',
  },
  //#endregion

  //
  //#region Loading ...
  {
    id: 'loading',
    value: 'Loading',
  },
  {
    id: 'loading_description',
    value: 'Loading Component Documentation',
  },
  //#endregion

  //
  //#region Thumbnail ...
  {
    id: 'thumbnail_component',
    value: 'Thumbnail',
  },
  {
    id: 'thumbnail_description',
    value: 'Thumbnail Component Documentation',
  },
  //#endregion

  //
  //#region Prompt ...
  {
    id: 'prompt',
    value: 'Prompt',
  },
  {
    id: 'prompt_description',
    value: 'Prompt Component Documentation',
  },
  //#endregion

  //
  //#region Picker ...
  {
    id: 'picker',
    value: 'Picker',
  },
  {
    id: 'picker_description',
    value: 'Picker Component Documentation',
  },
  //#endregion

  //
  //#region Slotter ...
  {
    id: 'slotter',
    value: 'Slotter',
  },
  {
    id: 'slotter_description',
    value: 'Slotter Component Documentation',
  },

  //
  {
    id: 'vertical',
    value: 'Vertical',
  },
  {
    id: 'horizontal',
    value: 'Horizontal',
  },
  //#endregion

  //
  //#region Empty Component ...
  {
    id: 'empty_component',
    value: 'Empty',
  },
  {
    id: 'empty_component_description',
    value: 'Empty Component Documentation',
  },
  //#endregion
  //#endregion

  //
  //#region Card ...
  {
    id: 'card',
    value: 'Card',
  },
  {
    id: 'card_description',
    value: 'Card Component Documentation',
  },

  //
  {
    id: 'header',
    value: 'Header',
  },
  {
    id: 'actions',
    value: 'Actions',
  },
  {
    id: 'footer',
    value: 'Footer',
  },
  //#endregion

  //
  //#region Icon ...
  {
    id: 'icon',
    value: 'Icon',
  },
  {
    id: 'icon_description',
    value: 'Icon Component Documentation',
  },

  //
  {
    id: 'icon_list',
    value: 'Icons List',
  },
  //#endregion

  //
  //#region Counter ...
  {
    id: 'counter',
    value: 'Counter',
  },
  {
    id: 'counter_description',
    value: 'Counter Component Documentation',
  },

  //
  {
    id: 'pause',
    value: 'Pause',
  },
  //#endregion

  //
  //#region Fab ...
  {
    id: 'fab',
    value: 'Floating Action Button',
  },
  {
    id: 'fab_description',
    value: 'FAB Component Documentation',
  },
  //#endregion

  //
  //#region FileUpload ...
  {
    id: 'file_components',
    value: 'Files Related Components',
  },
  {
    id: 'file_components_description',
    value: 'Files Related Components Documentation',
  },

  //
  {
    id: 'image_cropper',
    value: 'Image Cropper',
  },
  {
    id: 'image_cropper_description',
    value: 'Image Cropper Documentation',
  },

  //
  {
    id: 'file_drop_area',
    value: 'File Drop Area',
  },
  {
    id: 'file_drop_area_description',
    value: 'File Drop Area Documentation',
  },

  //
  {
    id: 'file_upload',
    value: 'FileUpload',
  },
  {
    id: 'file_upload_description',
    value: 'FileUpload Component Documentation',
  },
  //#endregion

  //
  //#region Form ...
  {
    id: 'form',
    value: 'Form',
  },
  {
    id: 'form_description',
    value: 'Form Component Documentation',
  },
  //#endregion

  //
  //#region Grid ...
  {
    id: 'grid',
    value: 'Grid',
  },
  {
    id: 'grid_description',
    value: 'Grid Component Documentation',
  },
  //#endregion

  //
  //#region List ...
  {
    id: 'list',
    value: 'List',
  },
  {
    id: 'list_description',
    value: 'List Component Documentation',
  },
  //#endregion

  //
  //#region Map ...
  {
    id: 'map',
    value: 'Map',
  },
  {
    id: 'map_description',
    value: 'Map Component Documentation',
  },
  //#endregion

  //
  //#region Markdown ...
  {
    id: 'markdown',
    value: 'Markdown',
  },
  {
    id: 'markdown_description',
    value: 'Markdown Component Documentation',
  },
  //#endregion

  //
  //#region ExpandableList ...
  {
    id: 'expandable_list',
    value: 'Expandable List',
  },
  {
    id: 'expandable_list_description',
    value: 'Expandable List Component Documentation',
  },
  //#endregion

  //
  //#region ExpandableList ...
  {
    id: 'expandable_panel',
    value: 'Expandable Panel',
  },
  {
    id: 'expandable_panel_description',
    value: 'Expandable Panel Component Documentation',
  },
  //#endregion

  //
  //#region Slider ...
  {
    id: 'slider',
    value: 'Slider',
  },
  {
    id: 'slider_description',
    value: 'Slider Component Documentation',
  },
  //#endregion

  //
  //#region Stepper ...
  {
    id: 'stepper',
    value: 'Stepper',
  },
  {
    id: 'stepper_description',
    value: 'Stepper Component Documentation',
  },
  //#endregion

  //
  //#region Tabs ...
  {
    id: 'tabs',
    value: 'Tabs',
  },
  {
    id: 'tabs_description',
    value: 'Tabs Component Documentation',
  },
  //#endregion

  //
  //#region Table ...
  {
    id: 'table',
    value: 'Table',
  },
  {
    id: 'table_description',
    value: 'Table Component Documentation',
  },
  //#endregion

  //
  //#region Page ...
  {
    id: 'page',
    value: 'Page',
  },
  {
    id: 'page_description',
    value: 'Page Component Documentation',
  },
  //#endregion

  //
  //#region TabNavigation ...
  {
    id: 'tab_navigator',
    value: 'Tab Navigator',
  },
  {
    id: 'tab_navigator_description',
    value: 'Tab Navigator Component Documentation',
  },
  //#endregion
  //#endregion
];
