import {
  XFrameworkCoreModule,
  XDirectivesModule as XFrameworkCoreDirectivesModule,
} from 'x-framework-core';
import {
  XManagerService,
  XHttpInterceptorService,
  XFrameworkServicesModule,
  XDirectivesModule as XFrameworkServicesDirectivesModule,
} from 'x-framework-services';
import {
  XFabModule,
  XMapModule,
  XTabsModule,
  XPageModule,
  XCardModule,
  XIconModule,
  XListModule,
  XGridModule,
  XFormModule,
  XTableModule,
  XEmptyModule,
  XButtonModule,
  XSliderModule,
  XSpinnerModule,
  XSlotterModule,
  XCounterModule,
  XStepperModule,
  XMarkdownModule,
  XThumbnailModule,
  XFileUploadModule,
  XTabNavigatorModule,
  XFileDropAreaModule,
  XBaseComponentModule,
  XExpandableListModule,
  XExpandablePanelModule,
  XFrameworkComponentsModule,
} from 'x-framework-components';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { VPageComponent } from './v-page/v-page.component';

@NgModule({
  declarations: [VPageComponent],
  providers: [
    XManagerService,
    //
    // Register Http Interceptor ...
    {
      provide: HTTP_INTERCEPTORS,
      useClass: XHttpInterceptorService,
      multi: true,
    },
  ],
  imports: [
    //
    IonicModule,
    CommonModule,

    //
    XFrameworkCoreModule,
    XFrameworkCoreDirectivesModule,

    //
    XFrameworkServicesModule,
    XFrameworkServicesDirectivesModule,

    //
    XEmptyModule,
    XBaseComponentModule,
    XFrameworkComponentsModule,

    //
    XPageModule,
    XCardModule,
    XIconModule,
    XFormModule,
    XTabsModule,
    XFabModule,
    XMapModule,
    XTabsModule,
    XPageModule,
    XIconModule,
    XListModule,
    XGridModule,
    XFormModule,
    CommonModule,
    XTableModule,
    XButtonModule,
    XSliderModule,
    XSpinnerModule,
    XStepperModule,
    XSlotterModule,
    XCounterModule,
    XMarkdownModule,
    XThumbnailModule,
    XFileUploadModule,
    XFileDropAreaModule,
    XTabNavigatorModule,
    XExpandableListModule,
    XExpandablePanelModule,
  ],
  exports: [
    //
    IonicModule,
    CommonModule,

    //
    XFrameworkCoreModule,
    XFrameworkCoreDirectivesModule,

    //
    XFrameworkServicesModule,
    XFrameworkServicesDirectivesModule,

    //
    XEmptyModule,
    XBaseComponentModule,

    //
    XPageModule,
    XIconModule,
    XFormModule,
    XTabsModule,
    XFabModule,
    XMapModule,
    XTabsModule,
    XPageModule,
    XCardModule,
    XIconModule,
    XListModule,
    XGridModule,
    XFormModule,
    CommonModule,
    XTableModule,
    XButtonModule,
    XSliderModule,
    XSpinnerModule,
    XStepperModule,
    XSlotterModule,
    XCounterModule,
    XMarkdownModule,
    XThumbnailModule,
    XFileUploadModule,
    XFileDropAreaModule,
    XTabNavigatorModule,
    XExpandableListModule,
    XExpandablePanelModule,

    //
    VPageComponent,
  ],
})
export class ViewsModule {}
