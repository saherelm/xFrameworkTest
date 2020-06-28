import { Component, Input } from '@angular/core';
import { XBaseComponent } from 'x-framework-components';

@Component({
  selector: 'app-sample-modal',
  templateUrl: './sample-modal.component.html',
  styleUrls: ['./sample-modal.component.scss'],
})
export class SampleModalComponent extends XBaseComponent {
  @Input()
  context: string;

  handleClosePopup() {
    this.managerService.dialogService.popoverController.dismiss();
  }
}
