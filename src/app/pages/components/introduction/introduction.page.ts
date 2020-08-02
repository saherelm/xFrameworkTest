import { Component } from '@angular/core';
import { VPageComponent } from '../../../views/v-page/v-page.component';
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
  titleRes = AppResourceIDs.components_introduction;
  toolbarTitle = this.resourceProvider(this.titleRes);
  toolbarSubTitle = this.resourceProvider(
    AppResourceIDs.components_introduction_description
  );
  toolbarShowSubTitle = true;
  //#endregion
  //#endregion
}
