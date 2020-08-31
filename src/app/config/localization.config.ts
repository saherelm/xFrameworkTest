import { XLocale, XLanguageDescriptor } from 'x-framework-core';
import { XFaIRExceptions, XEnUSExceptions } from './exceptions.config';
import { EnCustomLocales, FaCustomLocales } from './app.localization.config';

export const DefaultLocale: XLocale = 'fa-IR';

export const AvailableTranslationResources: XLanguageDescriptor[] = [
  {
    name: 'persian',
    locale: 'fa-IR',
    language: 'fa',
    direction: 'rtl',
    resources: [
      //
      //#region App ...
      // TODO: Customize this ...
      {
        id: 'app_name',
        value: 'چارچوب ایکس',
      },
      //
      // TODO: Customize this ...
      {
        id: 'company',
        value: 'فن آوران ساحر علم',
      },
      //#endregion

      //
      //#region Commons ...
      {
        id: 'id',
        value: 'شناسه',
      },
      {
        id: 'file_name',
        value: 'نام فایل',
      },

      //
      {
        id: 'error',
        value: 'خطا',
      },

      //
      {
        id: 'username',
        value: 'نام کاربری',
      },
      {
        id: 'password',
        value: 'کلمه عبور',
      },

      //
      {
        id: 'first_name',
        value: 'نام',
      },
      {
        id: 'last_name',
        value: 'نام خانوادگی',
      },

      //
      {
        id: 'verified',
        value: 'تایید شده',
      },
      {
        id: 'unverified',
        value: 'تایید نشده',
      },

      //
      {
        id: 'thumbnail',
        value: 'پیش نمایش',
      },

      //
      {
        id: 'language',
        value: 'زبان',
      },

      //
      {
        id: 'take_screenshot',
        value: 'تصویر برداری ازمحیط',
      },
      {
        id: 'enable_capture_mode',
        value: 'فعالسازی حالت تصویر برداری',
      },
      {
        id: 'disable_capture_mode',
        value: 'غیرفعالسازی حالت تصویر برداری',
      },
      //#endregion

      //
      //#region File Types ...
      {
        id: 'audio',
        value: 'صوت',
      },
      {
        id: 'video',
        value: 'فیلم',
      },
      {
        id: 'document',
        value: 'سند',
      },
      {
        id: 'cover_image',
        value: 'تصویر',
      },
      {
        id: 'image',
        value: 'تصویر',
      },
      {
        id: 'avatar',
        value: 'تصویر پروفایل',
      },
      {
        id: 'unknown',
        value: 'ناشناس',
      },
      {
        id: 'location',
        value: 'موقعیت جغرافیای',
      },
      //#endregion

      //
      //#region Messages ...
      {
        id: 'are_you_sure',
        value: 'اطمینان دارید ؟',
      },
      {
        id: 'success_msg',
        value: 'عملیات با موفقیت انجام شد',
      },
      {
        id: 'locked_msg',
        value:
          'برای ترک این صفحه باید فعالیت جاری را لغو کرده و یا به اتمام برسانید',
      },
      {
        id: 'empty_content',
        value: 'خالی است',
      },
      {
        id: 'no_item',
        value: 'محتوایی ثبت نشده است',
      },
      {
        id: 'drag_drop_here',
        value: 'محل رها کردن فایل',
      },
      //#endregion

      //
      //#region Components ...
      {
        id: 'map_dialog_title',
        value: 'نمایش موقعیت مکانی',
      },
      {
        id: 'map_dialog_select_title',
        value: 'انتخاب موقعیت جغرافیایی',
      },
      {
        id: 'color_picker_dialog_title',
        value: 'انتخاب رنگ',
      },
      //#endregion

      //
      //#region Verbs ...
      {
        id: 'dismiss',
        value: 'رد کردن',
      },
      {
        id: 'accept',
        value: 'می پذیرم',
      },
      {
        id: 'ok',
        value: 'بسیار خب',
      },
      {
        id: 'cancel',
        value: 'لغو',
      },
      {
        id: 'retry',
        value: 'سعی مجدد',
      },
      {
        id: 'edit',
        value: 'ویرایش',
      },
      {
        id: 'reset',
        value: 'باز نشاندن',
      },
      {
        id: 'change',
        value: 'تغییر',
      },
      {
        id: 'start',
        value: 'آغاز',
      },
      {
        id: 'yes',
        value: 'بله',
      },
      {
        id: 'no',
        value: 'خیر',
      },
      {
        id: 'verify',
        value: 'تایید کردن',
      },
      {
        id: 'confirm',
        value: 'تاییدیه',
      },
      {
        id: 'crop',
        value: 'برش',
      },
      {
        id: 'clear',
        value: 'پاک کردن',
      },
      //
      {
        id: 'set',
        value: 'تنظیم',
      },
      {
        id: 'select',
        value: 'انتخاب',
      },
      {
        id: 'send',
        value: 'ارسال',
      },
      {
        id: 'show',
        value: 'نمایش دادن',
      },
      {
        id: 'hide',
        value: 'پنهان کردن',
      },
      {
        id: 'search',
        value: 'جستجو',
      },
      {
        id: 'delete',
        value: 'حذف',
      },
      {
        id: 'select_all',
        value: 'انتخاب همه',
      },
      {
        id: 'select_file',
        value: 'انتخاب فایل(ها)',
      },
      {
        id: 'select_all_group',
        value: 'انتخاب همه موارد فیلتر شده',
      },
      {
        id: 'deselect_all',
        value: 'لغو همه انتخاب ها',
      },
      {
        id: 'deselect_all_group',
        value: 'لغو انتخاب همه موارد فیلتر شده',
      },
      {
        id: 'inverse_selection',
        value: 'انتخاب معکوس',
      },
      //
      {
        id: 'selected_location',
        value: 'انتخاب محل',
      },
      {
        id: 'preset_colors',
        value: 'رنگ های پیش فرض',
      },
      {
        id: 'copy_to_clipboard',
        value: 'ثبت در حافظه موقت',
      },
      {
        id: 'color',
        value: 'رنگ',
      },
      {
        id: 'upload',
        value: 'بارگزاری',
      },
      {
        id: 'continue',
        value: 'ادامه',
      },
      {
        id: 'finish',
        value: 'پایان',
      },
      {
        id: 'enable',
        value: 'فعال',
      },
      {
        id: 'disable',
        value: 'غیر فعال',
      },
      {
        id: 'all',
        value: 'همه',
      },
      {
        id: 'new',
        value: 'جدید',
      },
      {
        id: 'add',
        value: 'افزودن',
      },
      {
        id: 'update',
        value: 'بروز رسانی',
      },
      {
        id: 'details',
        value: 'جزئیات',
      },
      {
        id: 'translation',
        value: 'ترجمه',
      },
      {
        id: 'download',
        value: 'دریافت',
      },
      {
        id: 'list',
        value: 'فهرست',
      },
      {
        id: 'options',
        value: 'انتخاب ها',
      },
      {
        id: 'descriptions',
        value: 'توضیحات',
      },

      //
      {
        id: 'type',
        value: 'نوع',
      },
      //
      {
        id: 'media',
        value: 'رسانه',
      },
      {
        id: 'medias',
        value: 'رسانه ها',
      },

      //
      {
        id: 'go',
        value: 'رفتن',
      },
      {
        id: 'preview',
        value: 'پیش نمایش',
      },
      //#endregion

      //
      //#region Pagination ...
      {
        id: 'first',
        value: 'نخستین',
      },
      {
        id: 'last',
        value: 'آخرین',
      },
      {
        id: 'previous',
        value: 'قبلی',
      },
      {
        id: 'next',
        value: 'بعدی',
      },
      //#endregion

      //
      //#region Markdown ...
      {
        id: 'x_markdown_preview',
        value: 'پیش نمایش',
      },
      {
        id: 'x_markdown_image',
        value: 'تصویر',
      },
      {
        id: 'x_markdown_link',
        value: 'پیوند',
      },
      {
        id: 'x_markdown_ol',
        value: 'فهرست ترتیبی',
      },
      {
        id: 'x_markdown_ul',
        value: 'فهرست بدون ترتیب',
      },
      {
        id: 'x_markdown_quote',
        value: 'نقل قول',
      },
      {
        id: 'x_markdown_code',
        value: 'کد منبع',
      },
      {
        id: 'x_markdown_heading',
        value: 'عنوان',
      },
      {
        id: 'x_markdown_italic',
        value: 'ایتالیک',
      },
      {
        id: 'x_markdown_bold',
        value: 'پر رنگ',
      },
      {
        id: 'x_markdown_guide',
        value: 'راهنمای نگارش',
      },
      //#endregion

      //
      // Custom Translations ...
      ...FaCustomLocales,

      //
      // Persian Translated Exceptions ...
      ...XFaIRExceptions,
    ],
  },
  {
    name: 'english',
    locale: 'en-US',
    language: 'en',
    direction: 'ltr',
    resources: [
      //
      //#region App ...
      // TODO: Customize this ...
      {
        id: 'app_name',
        value: 'XFramework',
      },
      //
      // TODO: Customize this ...
      {
        id: 'company',
        value: 'SaherElm IT Center',
      },
      //#endregion

      //
      //#region Commons ...
      {
        id: 'id',
        value: 'ID',
      },
      {
        id: 'file_name',
        value: 'File Name',
      },

      //
      {
        id: 'error',
        value: 'Error',
      },

      //
      {
        id: 'username',
        value: 'Username',
      },
      {
        id: 'password',
        value: 'Password',
      },

      //
      {
        id: 'first_name',
        value: 'Firstname',
      },
      {
        id: 'last_name',
        value: 'Lastname',
      },

      //
      {
        id: 'verified',
        value: 'Verified',
      },
      {
        id: 'unverified',
        value: 'Unverified',
      },

      //
      {
        id: 'thumbnail',
        value: 'Thumbnail',
      },

      //
      {
        id: 'language',
        value: 'Language',
      },

      //
      {
        id: 'take_screenshot',
        value: 'Take Screenshot',
      },
      {
        id: 'enable_capture_mode',
        value: 'Enable Capture Mode',
      },
      {
        id: 'disable_capture_mode',
        value: 'Disable Capture Mode',
      },
      //#endregion

      //
      //#region File Types ...
      {
        id: 'audio',
        value: 'Audio',
      },
      {
        id: 'video',
        value: 'Video',
      },
      {
        id: 'document',
        value: 'Document',
      },
      {
        id: 'cover_image',
        value: 'Cover Image',
      },
      {
        id: 'image',
        value: 'Image',
      },
      {
        id: 'avatar',
        value: 'Avatar',
      },
      {
        id: 'unknown',
        value: 'Unknown',
      },
      {
        id: 'location',
        value: 'Location',
      },
      //#endregion

      //
      //#region Messages ...
      {
        id: 'are_you_sure',
        value: 'Are You Sure ?',
      },
      {
        id: 'success_msg',
        value: 'Operation done Successfully ...',
      },
      {
        id: 'locked_msg',
        value: 'You have to finish/cancel current proccess for leaving',
      },
      {
        id: 'empty_content',
        value: 'Empty',
      },
      {
        id: 'no_item',
        value: 'there is no Content',
      },
      {
        id: 'drag_drop_here',
        value: 'Drop File Here',
      },
      //#endregion

      //
      //#region Components ...
      {
        id: 'map_dialog_title',
        value: 'Show Location',
      },
      {
        id: 'map_dialog_select_title',
        value: 'Select Location',
      },
      {
        id: 'color_picker_dialog_title',
        value: 'Select Color',
      },
      //#endregion

      //
      //#region Verbs ...
      {
        id: 'dismiss',
        value: 'dismiss',
      },
      {
        id: 'accept',
        value: 'Accept',
      },
      {
        id: 'ok',
        value: 'Ok',
      },
      {
        id: 'cancel',
        value: 'Cancel',
      },
      {
        id: 'retry',
        value: 'Retry',
      },
      {
        id: 'edit',
        value: 'Edit',
      },
      {
        id: 'reset',
        value: 'Reset',
      },
      {
        id: 'change',
        value: 'Change',
      },
      {
        id: 'start',
        value: 'Start',
      },
      {
        id: 'yes',
        value: 'Yes',
      },
      {
        id: 'no',
        value: 'No',
      },
      {
        id: 'verify',
        value: 'Verify',
      },
      {
        id: 'confirm',
        value: 'Confirm',
      },
      {
        id: 'crop',
        value: 'Crop',
      },
      {
        id: 'clear',
        value: 'Clear',
      },
      //
      {
        id: 'set',
        value: 'Set',
      },
      {
        id: 'select',
        value: 'Select',
      },
      {
        id: 'send',
        value: 'Send',
      },
      {
        id: 'show',
        value: 'Show',
      },
      {
        id: 'hide',
        value: 'Hide',
      },
      {
        id: 'search',
        value: 'Search',
      },
      {
        id: 'delete',
        value: 'Delete',
      },
      {
        id: 'select_all',
        value: 'Select All',
      },
      {
        id: 'select_file',
        value: 'Select File(s)',
      },
      {
        id: 'select_all_group',
        value: 'Select All Filtered Items',
      },
      {
        id: 'deselect_all',
        value: 'Deselect All',
      },
      {
        id: 'deselect_all_group',
        value: 'Deselect All Filtered Items',
      },
      {
        id: 'inverse_selection',
        value: 'Inverse Selection',
      },
      //
      {
        id: 'selected_location',
        value: 'Selected Location',
      },
      {
        id: 'preset_colors',
        value: 'Preset Colors',
      },
      {
        id: 'copy_to_clipboard',
        value: 'Copy to Clipboard',
      },
      {
        id: 'color',
        value: 'Color',
      },
      //
      {
        id: 'upload',
        value: 'Upload',
      },
      {
        id: 'continue',
        value: 'Continue',
      },
      {
        id: 'finish',
        value: 'Finish',
      },
      {
        id: 'enable',
        value: 'Enable',
      },
      {
        id: 'disable',
        value: 'Disable',
      },
      {
        id: 'all',
        value: 'All',
      },
      {
        id: 'new',
        value: 'New',
      },
      {
        id: 'add',
        value: 'Add',
      },
      {
        id: 'update',
        value: 'Update',
      },
      {
        id: 'details',
        value: 'Details',
      },
      {
        id: 'translation',
        value: 'Translation',
      },
      {
        id: 'download',
        value: 'Download',
      },
      {
        id: 'list',
        value: 'List',
      },
      {
        id: 'options',
        value: 'Options',
      },
      {
        id: 'descriptions',
        value: 'Description',
      },

      //
      {
        id: 'type',
        value: 'Type',
      },
      //
      {
        id: 'media',
        value: 'Media',
      },
      {
        id: 'medias',
        value: 'Medias',
      },

      //
      {
        id: 'go',
        value: 'Go',
      },
      {
        id: 'preview',
        value: 'Preview',
      },
      //#endregion

      //
      //#region Pagination ...
      {
        id: 'first',
        value: 'First',
      },
      {
        id: 'last',
        value: 'Last',
      },
      {
        id: 'previous',
        value: 'Previous',
      },
      {
        id: 'next',
        value: 'Next',
      },
      //#endregion

      //
      //#region Markdown ...
      {
        id: 'x_markdown_preview',
        value: 'Preview',
      },
      {
        id: 'x_markdown_image',
        value: 'Image',
      },
      {
        id: 'x_markdown_link',
        value: 'Link',
      },
      {
        id: 'x_markdown_ol',
        value: 'Ordered List',
      },
      {
        id: 'x_markdown_ul',
        value: 'Unordered List',
      },
      {
        id: 'x_markdown_quote',
        value: 'Quote',
      },
      {
        id: 'x_markdown_code',
        value: 'Code',
      },
      {
        id: 'x_markdown_heading',
        value: 'Heading',
      },
      {
        id: 'x_markdown_italic',
        value: 'Italic',
      },
      {
        id: 'x_markdown_bold',
        value: 'Bold',
      },
      {
        id: 'x_markdown_guide',
        value: 'Markdown Guide',
      },
      //#endregion

      //
      // Custom Translations ...
      ...EnCustomLocales,

      //
      // Persian Translated Exceptions ...
      ...XEnUSExceptions,
    ],
  },
];
