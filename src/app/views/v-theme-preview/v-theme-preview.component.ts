import {
  Input,
  Inject,
  NgZone,
  Component,
  Renderer2,
  ElementRef,
  ChangeDetectorRef,
  ChangeDetectionStrategy,
} from '@angular/core';
import { X_CONFIG } from 'src/app/config/x-config';
import { XConfig } from 'src/app/config/app-config';
import { ViewportRuler } from '@angular/cdk/overlay';
import { XManagerService } from 'x-framework-services';
import { XBaseComponent, XListItem } from 'x-framework-components';
import {
  XStandardType,
  XThemePack,
  XThemeType,
  XColorWithBrightness,
  XColorDescribtor,
  XThemeColors,
  keys,
  XColorIdentifier,
} from 'x-framework-core';
import { concatMap } from 'rxjs/operators';

interface ColorKeyValue {
  key: string;
  value: string;
}

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'v-theme-preview',
  templateUrl: './v-theme-preview.component.html',
  styleUrls: ['./v-theme-preview.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VThemePreviewComponent extends XBaseComponent {
  //
  //#region Props ...
  //
  readonly ThemeTypes = Object.assign({}, XThemeType);
  readonly ColorNames = Object.assign({}, XColorWithBrightness);

  //
  @Input()
  theme: XStandardType<XThemePack>;

  //
  @Input()
  color: XStandardType<XColorIdentifier> = XColorWithBrightness.Light;

  @Input()
  titleColor: XStandardType<XColorIdentifier> = XColorWithBrightness.Primary;

  @Input()
  searchBarColor: XStandardType<XColorIdentifier> = XColorWithBrightness.Light;

  @Input()
  searchBarInputColor: XStandardType<XColorIdentifier> =
    XColorWithBrightness.Primary;

  @Input()
  activeThemeTypeColor: XStandardType<XColorIdentifier> =
    XColorWithBrightness.PrimaryShade;

  @Input()
  themeTypesColor: XStandardType<XColorIdentifier> =
    XColorWithBrightness.Primary;

  @Input()
  themeTypeIndicatorColor: XStandardType<XColorIdentifier> =
    XColorWithBrightness.Warning;
  //#endregion

  //
  //#region Constructor ...
  public constructor(
    @Inject(X_CONFIG) public config: XConfig,
    public managerService: XManagerService,
    public element: ElementRef,
    public renderer: Renderer2,
    public ruler: ViewportRuler,
    public zone: NgZone,
    public changeDetector: ChangeDetectorRef
  ) {
    super(
      config,
      managerService,
      element,
      renderer,
      ruler,
      zone,
      changeDetector
    );
  }
  //#endregion

  //
  //#region LifeCycles ...
  //#endregion

  //
  //#region UI Provider ...
  getTabLabel(type: XThemeType) {
    return this.resourceProvider(`theme_${type}`);
  }

  getThemeColorsListItems(colors: XThemeColors) {
    return this.getValue(colors ? keys(colors) : []).pipe(
      concatMap((colorKeys) => {
        //
        let result: XListItem<ColorKeyValue>[] = [];
        if (this.hasChild(colorKeys)) {
          result = colorKeys.map((k) => {
            return {
              data: {
                key: k,
                value: '',
              },
            } as XListItem<ColorKeyValue>;
          });
        }

        //
        return this.getValue(result);
      })
    );
  }
  //#endregion

  //
  //#region UI Actions ...
  //#endregion

  //
  //#region Actions ...
  //#endregion

  //
  //#region Private ...
  //#endregion
}
