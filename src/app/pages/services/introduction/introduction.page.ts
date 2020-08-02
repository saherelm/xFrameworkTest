import { Component } from '@angular/core';
import { VPageComponent } from 'src/app/views/v-page/v-page.component';
import { AppResourceIDs } from 'src/app/config/app.localization.config';

@Component({
  selector: 'app-components-introduction',
  templateUrl: './introduction.page.html',
  styleUrls: ['./introduction.page.scss'],
})
// tslint:disable-next-line:component-class-suffix
export class IntroductionPage extends VPageComponent {
  //
  //#region Props ...
  //
  //#region Page Props ...
  titleRes = AppResourceIDs.services_introduction;
  toolbarTitle = this.resourceProvider(this.titleRes);
  toolbarSubTitle = this.resourceProvider(
    AppResourceIDs.services_introduction_description
  );
  toolbarShowSubTitle = true;
  //#endregion
  //#endregion
}
