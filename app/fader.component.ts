import { Component, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'my-fader',
  template: `
  <div *ngIf="visibility == 'shown'" >
      <ng-content></ng-content><br/>
     
  </div>
  `
})
export class FaderComponent implements OnChanges {
  visibility = 'shown';

  @Input() isVisible : boolean = true;

  ngOnChanges() {
     this.visibility = this.isVisible ? 'shown' : 'hidden';
  }
}
