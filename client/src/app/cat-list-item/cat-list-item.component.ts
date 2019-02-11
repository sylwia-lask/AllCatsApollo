import { Component, Input } from '@angular/core';
import { CatListItem } from '../types';

@Component({
  selector: 'cat-list-item',
  templateUrl: './cat-list-item.component.html',
  styleUrls: ['./cat-list-item.component.scss']
})
export class CatListItemComponent {
  @Input() cat: CatListItem;
  loading: boolean = false;
}
