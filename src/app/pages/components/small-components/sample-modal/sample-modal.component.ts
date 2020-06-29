import { Component, Input } from '@angular/core';
import { ModalController, PopoverController } from '@ionic/angular';

export enum XModalContext {
  Modal = 'modal',
  PopOver = 'pop_over',
}

@Component({
  selector: 'app-sample-modal',
  templateUrl: './sample-modal.component.html',
  styleUrls: ['./sample-modal.component.scss'],
})
export class SampleModalComponent {
  @Input()
  context: XModalContext;

  constructor(
    private modalController: ModalController,
    private popOverController: PopoverController
  ) {}

  handleClosePopup() {
    //
    if (!this.context) {
      return;
    }

    //
    switch (this.context) {
      //
      case XModalContext.Modal:
        this.modalController.dismiss();
        break;

      //
      case XModalContext.PopOver:
        this.popOverController.dismiss();
        break;
    }
  }
}
