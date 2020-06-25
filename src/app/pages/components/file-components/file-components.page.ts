import {
  Inject,
  NgZone,
  Component,
  ViewChild,
  Renderer2,
  ElementRef,
  ChangeDetectorRef,
} from '@angular/core';
import {
  XColor,
  toArray,
  isArray,
  hasChild,
  getArrayOf,
  XResourceIDs,
  XExceptionIDs,
  isExtensionOk,
  getImageDimensions,
  isNullOrEmptyString,
} from 'x-framework-core';
import {
  XIconNames,
  XSlotName,
  XSlotLayout,
  XFileStatus,
  XButtonType,
  XDialogResult,
  XThumbnailType,
  XImageCropperService,
} from 'x-framework-components';
import { MenuController } from '@ionic/angular';
import { X_CONFIG } from 'src/app/config/x-config';
import { XConfig } from 'src/app/config/app-config';
import { ViewportRuler } from '@angular/cdk/overlay';
import { XManagerService } from 'x-framework-services';
import { VPageComponent } from '../../../views/v-page/v-page.component';
import { AppResourceIDs } from 'src/app/config/app.localization.config';

@Component({
  selector: 'app-file-components',
  templateUrl: './file-components.page.html',
  styleUrls: ['./file-components.page.scss'],
})
// tslint:disable-next-line:component-class-suffix
export class FileComponentsPage extends VPageComponent {
  //
  //#region Props ...
  //
  //#region Page Props ...
  titleRes = AppResourceIDs.file_components;
  toolbarTitle = this.resourceProvider(this.titleRes);
  toolbarSubTitle = this.resourceProvider(
    AppResourceIDs.file_components_description
  );
  toolbarShowSubTitle = true;
  //#endregion

  //
  //#region image cropper props ...
  readonly SlotNames = Object.assign({}, XSlotName);
  readonly SlotLayout = Object.assign({}, XSlotLayout);
  readonly ButtonTypes = Object.assign({}, XButtonType);

  //
  @ViewChild('fileInput', { static: false })
  private fileInputRef!: ElementRef;

  //
  //#region Selected File ...
  private SELECTED_FILE: File;

  set file(v: File) {
    //
    this.SELECTED_FILE = v;

    //
    if (!v) {
      return;
    }

    //
    getImageDimensions(v).then((dimension) => {
      if (dimension) {
        //
        this.selectedFileWidth = dimension.width;
        this.selectedFileHeight = dimension.height;

        //
        this.detectChanges();
      }
    });
  }

  get file() {
    return this.SELECTED_FILE;
  }

  //
  selectedFileWidth = 0;
  selectedFileHeight = 0;

  //
  preparedMaxAllowedFileSize = this.config.maxProfileImageSize;
  preparedAllowedExtensions = this.config.allowedImageExtensions;
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
  # ${this.resourceProvider(this.ResourceIDs.file_components)}
  در این کتابخانه مجموعه ای از مولفه ها جهت سهولت کار با فایل ها ارائه شده است که در ادامه به بررسی هر یک بتفصیل پرداخته خواهد شد:
`;

  readonly contentEn = `
  # ${this.resourceProvider(this.ResourceIDs.file_components)}
  this framework provides several components to make working with files so easy. in the following section they will be documented:
  `;

  //
  // Thumbnail ...
  readonly ThumbnailTypes = Object.assign({}, XThumbnailType);

  readonly thumbnailContentFa = `
  این مولفه جهت نمایش تصاویر بند انگشتی و یا تعیین نوع فایل در حالت عمومی کاربرد دارد.
  `;
  readonly thumbnailContentEn = `
  this component used to show a thumbnail of an image or file general types.
  `;

  readonly fileUrl = this.managerService.getFullUrl('/assets/icon/favicon.png');

  readonly thumbnailSample1 =
    '```html' +
    `
<x-thumbnail
  [identifier]="fileUrl"
  [type]="ThumbnailTypes.CUSTOM"
>
</x-thumbnail>
` +
    '```';

  readonly thumbnailSample2 =
    '```html' +
    `
<x-thumbnail
  [identifier]="fileUrl"
  [type]="ThumbnailTypes.GENERAL"
>
</x-thumbnail>
` +
    '```';

  //
  // File Drop Area ...
  readonly fileDropAreaContentFa = `
  این مولفه جهت فراهم کردن فضایی برای کشیدن فایل ها و رها کردن آن ها در فضای مناسب مورد استفاده قرار می گیرد.
  `;
  readonly fileDropAreaContentEn = `
  this component use to provide an area for dropping file(s)
  `;

  //
  readonly fileDropAreaSample1 =
    '```html' +
    `
<x-file-drop-area
  [wrapWithCard]="true"
  [isPageFileDropArea]="true"
  [supportsMultipleFiles]="true"
  (filesChangeEmiter)="
    handleFilesChanged($event)"
></x-file-drop-area>
` +
    '```';

  readonly imageCropperContentFa = `
  این مولفه جهت فراهم کردن امکانات بریدن تصاویر کاربرد دارد که مهمترین مورد کاربرد آن در تصاویر پروفایل است.
  `;
  readonly imageCropperContentEn = `
  this component use to provide a way to cropping images before upload them, usually used for avatars.
  `;

  //
  readonly imageCropperSample1 =
    '```html' +
    `
<div class="container">
  <input
    hidden
    #fileInput
    type="file"
    multiple="false"
    (change)="
      handleFilesSelected()"
    [disabled]="
      isLoading || uiDisabled"
  />

  <x-button
    (click)="selectFile()"
    [type]="ButtonTypes.Raised"
    [color]="ColorNames.Primary"
    [title]="
    resourceProvider(
        ResourceIDs.select)
      + \' \' +
      resourceProvider(
          ResourceIDs.avatar)"
  >
  </x-button>

  <div
    *ngIf="file"
    class="thumbnail-wrapper"
  >
    <x-slotter
      [hasCenterSlot]="false"
      [layout]="
        SlotLayout.HORIZONTAL"
      [startTopSlotCssClass]="
        \'ion-text-start\'"
      [endBottomSlotCssClass]="
        \'ion-text-center\'"
    >
      <x-slot
        [name]="SlotNames.START">
        <div>
          <x-thumbnail
            class="x-thumb"
            [identifier]="file"
            [loading]="isLoading"
            [cssClass]="\'thumbnail\'"
            [uiDisabled]="uiDisabled"
            [type]="
              ThumbnailTypes.CUSTOM"
          >
          </x-thumbnail>
        </div>
      </x-slot>

      <x-slot [name]="SlotNames.END">
        <div
          class="
            avatar-actions
            ion-text-end">
          <div>
            <x-button
              *ngIf="
                croppableImage()"
              [type]="
                ButtonTypes.Icon"
              (click)="
                handleLoadCropper()"
              [color]="
                ColorNames.Secondary"
              [matTooltip]="
                resourceProvider(
                  ResourceIDs.crop)"
            >
              <x-icon
                [name]="
                  IconNames.crop">
              </x-icon>
            </x-button>

            <x-button
              [type]="
                ButtonTypes.Icon"
              (click)="
                handleClearFile()"
              [color]="
                ColorNames.Warning"
              [matTooltip]="
                resourceProvider(
                  ResourceIDs.clear)"
            >
              <x-icon
                [name]="
                  IconNames.clear"
                [color]="
                  ColorNames.Light"
              ></x-icon>
            </x-button>
          </div>
        </div>
      </x-slot>
    </x-slotter>
  </div>
</div>
` +
    '```';

  //
  // File Upload ...
  readonly fileUploadContentFa = `
  از این مولفه جهت مدیریت بارگزاری فایل ها استفاده می شود
  `;

  readonly fileUploadContentEn = `
  use this component to manage how files uploaded.
  `;

  readonly fileUploadSample1 =
    '```html' +
    `
<x-file-upload
  [canDrop]="
    isNotMobileUi$ | async"
  (fileChange)="
    handleFileChanged($event)"
  [maxAllowedSize]="
    config.maxAllowedSize"
  [maxAllowedFiles]="
    config.maxUploadFiles"
  [minAllowedFileSize]="
    config.minAllowedFileSize"
  [maxAllowedFileSize]="
    config.maxAllowedFileSize"
></x-file-upload>
` +
    '```';

  //
  //#region Constructor ...
  constructor(
    public zone: NgZone,
    public element: ElementRef,
    public renderer: Renderer2,
    public ruler: ViewportRuler,
    public menuController: MenuController,
    public managerService: XManagerService,
    public changeDetector: ChangeDetectorRef,
    @Inject(X_CONFIG) public config: XConfig,
    public imageCropperService: XImageCropperService
  ) {
    super(
      zone,
      element,
      renderer,
      ruler,
      menuController,
      managerService,
      changeDetector,
      config
    );
  }
  //#endregion

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

  croppableImage() {
    return (
      this.file &&
      this.selectedFileWidth > 0 &&
      this.selectedFileHeight > 0 &&
      this.selectedFileWidth >= this.config.minAllowedImageSize &&
      this.selectedFileHeight >= this.config.minAllowedImageSize
    );
  }
  //#endregion

  //
  //#region UI Handlers ...
  //
  async handleFilesChanged(files: File | File[]) {
    //
    console.log('files changed: ', files);

    //
    await this.managerService.notificationService.presentInfoNotification({
      message: `Selected File(s): ${toArray(files).length}`,
      dissmissable: true,
    });
  }

  //
  handleFilesSelected() {
    //
    if (!this.fileInputRef) {
      return;
    }

    //
    const fileInput = this.fileInputRef.nativeElement;
    if (!fileInput || !fileInput.files) {
      return;
    }

    //
    const files = getArrayOf<File>(fileInput.files);

    //
    if (!files || files.length === 0) {
      return;
    }

    //
    const file = files[0];
    if (!file) {
      return;
    }

    //
    fileInput.value = null;

    //
    this.handleFileDropped(files);
  }

  //
  async handleFileDropped(files: File | File[]) {
    //
    if (!files) {
      return;
    }

    //
    this.loading = true;

    //
    let file: File;
    if (!isArray(files) && files instanceof File) {
      file = files as File;
    } else {
      //
      const filesArr = files as File[];
      if (hasChild(filesArr)) {
        file = filesArr[0];
      }
    }

    //
    this.loading = false;

    //
    if (!file) {
      return;
    }

    //
    const status = this.getFileStatus(file);
    if (status !== XFileStatus.OK) {
      this.loading = false;
      this.handleFileStatus(status);
      return;
    }

    //
    this.file = file;
  }

  //
  handleLoadCropper() {
    this.imageCropperService.showCropper(this.file);

    //
    const s = this.applyTakeUntilWrapper(
      this.imageCropperService.onResult.asObservable()
    ).subscribe((res) => {
      //
      if (res.result === XDialogResult.Ok && res.file) {
        //
        this.file = null;
        setTimeout(() => {
          this.file = res.file;
        }, 100);
      }

      //
      s.unsubscribe();
    });
  }

  //
  handleClearFile() {
    //
    this.file = null;
    this.selectedFileWidth = 0;
    this.selectedFileHeight = 0;
  }

  selectFile() {
    //
    if (!this.fileInputRef || !this.fileInputRef.nativeElement) {
      return;
    }

    //
    this.fileInputRef.nativeElement.click();
  }

  //
  // File Upload ...
  async handleFileChanged(files: File[]) {
    console.log('files: ', files);
  }
  //#endregion

  //
  //#region Private ...
  //
  //#region File Selection Policies ...
  private isExtensionOk(file: File) {
    //
    if (!file) {
      return false;
    }

    //
    if (!hasChild(this.preparedAllowedExtensions)) {
      return true;
    }

    //
    const result = isExtensionOk(file, this.preparedAllowedExtensions);
    return result;
  }

  private isMaxAllowedFileSizeOk(file: File) {
    //
    const result =
      this.preparedMaxAllowedFileSize && this.preparedMaxAllowedFileSize > 0
        ? file.size <= this.preparedMaxAllowedFileSize
        : true;

    //
    return result;
  }

  private getFileStatus(file: File) {
    //
    // Check Not Empty File ...
    if (!file || file.size === 0) {
      return XFileStatus.EMPTY;
    }

    //
    // Check File Extension Validation ...
    if (!this.isExtensionOk(file)) {
      return XFileStatus.NOT_ALLOWED_TYPE;
    }

    //
    // Check File Size Ok ...
    if (!this.isMaxAllowedFileSizeOk(file)) {
      return XFileStatus.SIZE_EXCEEDED;
    }

    //
    // Everythings Ok ...
    return XFileStatus.OK;
  }

  private handleFileStatus(status: XFileStatus) {
    //
    let exception: XExceptionIDs = null;
    switch (status) {
      //
      case XFileStatus.EMPTY:
        exception = this.ExceptionIDs.EmptyFile;
        break;

      //
      case XFileStatus.NOT_ALLOWED_TYPE:
        exception = this.ExceptionIDs.InavlidFile;
        break;

      //
      case XFileStatus.SIZE_EXCEEDED:
        exception = this.ExceptionIDs.MaxFileSizeExceeded;
        break;

      //
      case XFileStatus.MAX_ALLOWED_SIZE_REACHED:
        exception = this.ExceptionIDs.MaxFilesSizeExceeded;
        break;

      //
      case XFileStatus.MAX_ALLOWED_FILES_REACHED:
        exception = this.ExceptionIDs.MaxAllowedFilesExceeded;
        break;
    }

    //
    if (exception) {
      this.managerService.notificationService.presentErrorNotification({
        exception,
        dissmissable: true,
      });
    }
  }
  //#endregion
  //#endregion
}
