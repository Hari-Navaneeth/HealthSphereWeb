import { Component, Input } from '@angular/core';
import { ViewText } from '../../model/common-input-property.model';

@Component({
  selector: 'app-common-text-view',
  templateUrl: './common-text-view.component.html',
  styleUrls: ['./common-text-view.component.scss']
})
export class CommonTextViewComponent {

  @Input() viewData: ViewText[]= [];

}
