import {
  Input,
  Inject,
  Output,
  NgZone,
  Renderer2,
  Component,
  ViewChild,
  ElementRef,
  TemplateRef,
  EventEmitter,
  ChangeDetectorRef,
  ChangeDetectionStrategy,
} from '@angular/core';
import {
  XColor,
  assign,
  nameof,
  XParam,
  XLocale,
  notValue,
  isFunction,
  XResourceIDs,
  XPickerColumn,
  XStandardType,
  XOneOrManyType,
  XColorIdentifier,
  XModalButtonRole,
  XPickerColumnOption,
  XColorWithBrightness,
} from 'x-framework-core';
import {
  XMenuSlot,
  XLogoSlot,
  XBackSlot,
  XSideType,
  XSideSlot,
  XListItem,
  XTitleSlot,
  XIconNames,
  XMenuState,
  XContentSlot,
  XPageComponent,
  XPopoverComponent,
  XNavigatorListItem,
  XBackSlotIdentifier,
  XLogoSlotIdentifier,
  XMenuSlotIdentifier,
  XPageSizeIdentifier,
  XSideSlotIdentifier,
  XSideTypeIdentifier,
  XTitleSlotIdentifier,
  XListItemSlideOption,
  XContentSlotIdentifier,
} from 'x-framework-components';
import { map } from 'rxjs/operators';
import { MenuController } from '@ionic/angular';
import { X_CONFIG } from 'src/app/config/x-config';
import { Pages } from 'src/app/config/page.config';
import { XConfig } from 'src/app/config/app-config';
import { ViewportRuler } from '@angular/cdk/overlay';
import { XManagerService } from 'x-framework-services';
import { NavPageItems } from 'src/app/config/page.config';
import { isNullOrUndefined, hasChild } from 'x-framework-core';
import { AppResourceIDs } from 'src/app/config/app.localization.config';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'v-page',
  templateUrl: './v-page.component.html',
  styleUrls: ['./v-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VPageComponent extends XPageComponent {
  //
  //#region Props ...
  //
  isMobileUi$ = this.managerService.isMobileUi$;
  isNotMobileUi$ = this.managerService.isNotMobileUi$;

  //
  readonly IconNames = Object.assign({}, XIconNames);
  readonly AppResourceIDs = Object.assign({}, AppResourceIDs);
  readonly ColorNames = Object.assign({}, XColorWithBrightness);

  //
  navPages = NavPageItems;

  //
  @Input()
  uiDisabled: boolean;

  //
  @Input()
  loading: boolean;

  //
  //#region CaptureMode ...
  @Input()
  enableCaptureMode: XStandardType<boolean> = false;

  @Input()
  downloadCapturedImage: XStandardType<boolean> = true;

  @Input()
  captureTopOffset: XStandardType<number> = 0;

  @Input()
  captureBottomOffset: XStandardType<number> = 0;

  @Output()
  imageCaptured = new EventEmitter<string | Blob>();
  //#endregion

  //
  //#region Page Props ...
  //
  //#region Toolbar Content ...
  @Input()
  showToolbarContent = true;

  private TOOLBAR_CONTENT_TEMPLATE: TemplateRef<any>;

  /**
   * the toolbar content ...
   */
  @ViewChild('toolbarContentTemplateRef', { static: false })
  set toolbarContentTemplateRef(v: TemplateRef<any>) {
    //
    if (isNullOrUndefined(v)) {
      return;
    }

    //
    this.TOOLBAR_CONTENT_TEMPLATE = v;
  }

  get toolbarContentTemplateRef() {
    return this.TOOLBAR_CONTENT_TEMPLATE;
  }
  //#endregion

  //
  //#region Toolbar End Slot ...
  @Input()
  showToolbarEndSlot = true;

  private TOOLBAR_END_SLOT_TEMPLATE: TemplateRef<any>;

  /**
   * the toolbar end slot content ...
   */
  @ViewChild('toolbarEndSlotButtonsTemplateRef', { static: false })
  set toolbarEndSlotButtonsTemplate(v: TemplateRef<any>) {
    //
    if (isNullOrUndefined(v)) {
      return;
    }

    //
    this.TOOLBAR_END_SLOT_TEMPLATE = v;
  }

  get toolbarEndSlotButtonsTemplate() {
    return this.showToolbarEndSlot ? this.TOOLBAR_END_SLOT_TEMPLATE : undefined;
  }
  //#endregion

  //
  @Input()
  color: XStandardType<XColorIdentifier> = 'light-shade';

  @Input()
  cssClass: XStandardType<XOneOrManyType<string>>;
  //#endregion

  //
  //#region Toolbar Props ...
  //
  //#region Toolbar Boundary ...
  //
  @Input()
  showToolbar: XStandardType<boolean> = true;

  //
  @Input()
  toolbarColor: XStandardType<XColor> = XColor.Primary;
  //#endregion

  //
  //#region Toolbar ProgressBar ...
  @Input()
  toolbarProgressBarColor: XStandardType<XColor> = XColor.Warning;
  //#endregion

  //
  //#region Toolbar Title and SubTitle ...
  //
  // Toolbar Title ...
  @Input()
  toolbarTitleSlot: XStandardType<XTitleSlotIdentifier> = XTitleSlot.End;

  @Input()
  toolbarShowTitle: XStandardType<boolean> = true;

  @Input()
  toolbarShowSubTitle: XStandardType<boolean> = false;

  @Input()
  toolbarTitle: XStandardType<string> = super.resourceProvider(
    this.ResourceIDs.app_name
  );
  //#endregion

  //
  //#region Toolbar Logo ...
  @Input()
  toolbarLogoSlot: XStandardType<XLogoSlotIdentifier> = XLogoSlot.End;

  @Input()
  toolbarShowLogo: XStandardType<boolean> = true;

  @Input()
  toolbarLogoUrl: XStandardType<string> = './assets/image/logo.png';
  //#endregion

  //
  //#region Toolbar Back ...
  @Input()
  toolbarBackSlot: XStandardType<XBackSlotIdentifier> = XBackSlot.Start;

  @Input()
  toolbarShowBack: XStandardType<boolean> = false;

  @Input()
  toolbarHasBack: XStandardType<boolean> = true;

  @Input()
  toolbarDefaultHref: string;
  //#endregion

  //
  //#region Toolbar Menu ...
  @Input()
  toolbarMenuSlot: XStandardType<XMenuSlotIdentifier> = XMenuSlot.Start;

  //
  @Input()
  menuState: XStandardType<XMenuState>;

  //
  @Input()
  toolbarShowMenu: XStandardType<boolean> = true;

  //
  @Input()
  toolbarHasMenu: XStandardType<boolean> = true;
  //#endregion

  //
  //#region Toolbar Templates ...
  @Input()
  toolbarContentSlot: XStandardType<XContentSlotIdentifier> =
    XContentSlot.Start;
  //#endregion
  //#endregion

  //
  //#region Scrolling Handlers ...
  @Input()
  provideScrollEvents: XStandardType<boolean> = true;

  @Input()
  scrollBehaviour: XOneOrManyType<string> = ['x-fab'];

  @Input()
  scrollStartClasses: XOneOrManyType<string> = 'start-scroll';

  @Input()
  scrollEndClasses: XOneOrManyType<string> = 'end-scroll';
  //#endregion

  //
  //#region Footer Props ...
  //
  @Input()
  footerColor: XStandardType<XColorIdentifier> = XColor.Primary;
  //#endregion

  //
  //#region Side Props ...
  //
  @Input()
  toggleMenuWhen: XStandardType<XPageSizeIdentifier> = 'md';

  @Input()
  hasSide: XStandardType<boolean> = true;

  @Input()
  sideSlot: XStandardType<XSideSlotIdentifier> = XSideSlot.Start;

  @Input()
  sideType: XStandardType<XSideTypeIdentifier> = XSideType.Overlay;

  @Input()
  sideColor: XStandardType<XColorIdentifier> = XColor.Primary;
  //#endregion
  //#endregion

  //
  //#region Constructor ...
  public constructor(
    public zone: NgZone,
    @Inject(X_CONFIG)
    public config: XConfig,
    public element: ElementRef,
    public renderer: Renderer2,
    public ruler: ViewportRuler,
    public menuController: MenuController,
    public managerService: XManagerService,
    public changeDetector: ChangeDetectorRef
  ) {
    super(
      zone,
      renderer,
      element,
      ruler,
      menuController,
      managerService,
      changeDetector,
      config
    );

    //
    this.isMobileUi$ = this.managerService.isMobileUi$;
    this.isNotMobileUi$ = notValue(this.isMobileUi$);
  }
  //#endregion

  //
  //#region LifeCycle ...
  onInit() {
    super.onInit();

    //
    this.menuState = this.isMobileUi$.pipe(
      map((isMobile) => (isMobile ? XMenuState.WillClose : XMenuState.Opened))
    );
  }

  async afterViewInit() {
    super.afterViewInit();

    //
    const showToolbar = await this.getValueAsync(this.showToolbar);
    if (showToolbar) {
      this.detectChanges();
    }

    //
    this.managerService.dispatchResizeEvent();
  }

  afterViewChecked() {
    super.afterViewChecked();

    //
    this.changeDetector.detectChanges();
  }

  async onChange(changeKeys: string[]) {
    super.onChange(changeKeys);

    //
    const isHasSideChanged = changeKeys.includes(
      nameof<VPageComponent>('hasSide')
    );
    if (isHasSideChanged) {
      await this.handleHasSideEffect();
    }

    //
    const isToolbarHasMenuChanged = changeKeys.includes(
      nameof<VPageComponent>('toolbarHasMenu')
    );
    const isToolbarShowMenuChanged = changeKeys.includes(
      nameof<VPageComponent>('toolbarShowMenu')
    );
    if (isToolbarHasMenuChanged || isToolbarShowMenuChanged) {
      this.detectChanges();
    }
  }
  //#endregion

  //
  //#region Register Handlers ...
  //#endregion

  //
  //#region Handlers ...
  //#endregion

  //
  //#region UI Providers ...
  //#endregion

  //
  //#region UI Handlers ...
  async handleNavigatorItemSelected(event: XNavigatorListItem) {
    //
    if (!event) {
      return;
    }

    //
    // TODO: Complete Special Actions on NavItems ...
  }

  async handleMoreButtonClicked(event: any) {
    //
    const onlyIcon = false;

    //
    const slideOptions: XListItemSlideOption[] = [];

    //
    // Landing Page ...
    if (!isNullOrUndefined(this.config.defaultLandingPage)) {
      //
      // Landing ...
      slideOptions.push({
        id: 'go_landing',
        icon: XIconNames.refresh,
        title: AppResourceIDs.landing_page_title,
        color: XColor.Tertiary,
        slot: 'start',
        onlyIcon,
        handler: async () => {
          // await this.managerService.navigateByPageReplace(Pages.Landing);
        },
      });

      //
      // Home ...
      slideOptions.push({
        id: 'go_home',
        icon: XIconNames.home,
        title: AppResourceIDs.home,
        color: XColor.Tertiary,
        slot: 'start',
        onlyIcon,
        handler: async () => {
          await this.managerService.navigateByPageReplace(Pages.Home);
        },
      });
    }

    //
    // Change Language ...
    slideOptions.push({
      id: 'change_language',
      icon: XIconNames.language,
      title: XResourceIDs.language,
      color: XColor.Tertiary,
      slot: 'start',
      onlyIcon,
      handler: async () => {
        await this.handleChangeLocale();
      },
    });

    //
    // Capture Mode ...
    const isCaptureModeEnabled = await this.getValueAsync(
      this.enableCaptureMode
    );
    const isNotMobileUi = await this.getValueAsync(this.isNotMobileUi$);
    if (isNotMobileUi) {
      if (isCaptureModeEnabled) {
        //
        slideOptions.push({
          id: 'disable_capture_mode',
          icon: XIconNames.crop,
          title: XResourceIDs.disable_capture_mode,
          color: XColor.Danger,
          slot: 'start',
          onlyIcon,
          handler: async () => {
            //
            this.enableCaptureMode = false;
            this.detectChanges();
          },
        });
      } else {
        //
        slideOptions.push({
          id: 'enable_capture_mode',
          icon: XIconNames.crop,
          title: XResourceIDs.enable_capture_mode,
          color: XColor.Tertiary,
          slot: 'start',
          onlyIcon,
          handler: async () => {
            //
            this.enableCaptureMode = true;
            this.detectChanges();
          },
        });
      }
    }

    //
    // Theme ...
    slideOptions.push({
      id: 'theme_manager',
      icon: XIconNames.color_palette,
      title: AppResourceIDs.theme_manager,
      color: XColor.Tertiary,
      slot: 'start',
      onlyIcon,
      handler: async () => {
        //
        const route = this.managerService.mergeRoutes(Pages.ThemeManager.route);
        await this.managerService.navigateByUrlReplace(route);
      },
    });

    //
    const item: XListItem<any> = {
      data: '',
      slideOptions,
    };

    //
    const popOver = await this.managerService.dialogService.presentPopover({
      component: XPopoverComponent,
      componentProps: assign({}, { key: XParam.Item, value: item }),
      translucent: true,
      showBackdrop: true,
      event,
    });

    //
    const { data } = await popOver.onWillDismiss();
    if (!data || !data.id || !data.data) {
      return;
    }

    //
    const optionId = data.id.toString() as string;
    const option =
      item && item.slideOptions
        ? item.slideOptions.find((so) => so.id === optionId)
        : null;
    if (!option) {
      return;
    }

    //
    const handler = option.handler;
    if (!handler || !isFunction(handler)) {
      return;
    }

    //
    // Run Handler ...
    await handler();
  }

  async handleImageCaptured(image: string | Blob) {
    //
    if (image) {
      this.imageCaptured.emit(image);
    }

    //
    this.enableCaptureMode = false;
    this.detectChanges();
  }
  //#endregion

  //
  //#region Provided Actions ...
  //#endregion

  //
  //#region Private ...
  private async handleHasSideEffect() {
    //
    const hasSide = await this.getValueAsync(this.hasSide);
    if (!hasSide) {
      //
      this.toolbarHasMenu = false;
      this.toolbarShowMenu = false;
      this.toggleMenuWhen = '';
    }
  }

  private async handleChangeLocale() {
    //
    const currentLocale = this.managerService.currentLocale;
    const availableLanguages = this.config.availableLanguages.map((ai) => {
      return {
        name: ai.name,
        locale: ai.locale,
      };
    });
    if (!hasChild(availableLanguages)) {
      return;
    }

    //
    const localOptions: XPickerColumnOption[] = availableLanguages.map((al) => {
      //
      const op: XPickerColumnOption = {
        text: al.name,
        value: al.locale,
        disabled: al.locale === currentLocale,
      };

      //
      return op;
    });
    const localColumn: XPickerColumn = {
      name: 'locales',
      options: localOptions,
    };

    //
    await this.managerService.dialogService.presentPicker({
      buttons: [
        {
          text: XResourceIDs.ok,
          role: XModalButtonRole.Selected,
          cssClass: ['btn-selected'],
          handler: async (value) => {
            //
            const selectedLocale: XLocale = value?.locales?.value;
            if (!selectedLocale) {
              return;
            }

            //
            await this.managerService.settingsService.changeLocale(
              selectedLocale,
              true
            );
          },
        },
        {
          text: XResourceIDs.cancel,
          role: XModalButtonRole.Cancel,
          cssClass: ['btn-cancel'],
          handler: () => {},
        },
      ],
      columns: [localColumn],
    });
  }
  //#endregion
}
