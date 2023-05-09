import { Component } from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent {
  items!: NodeListOf<HTMLElement>;

  constructor() {
    this.items = document.querySelectorAll('.grid-item');

    this.items.forEach((item: HTMLElement) => {
      item.addEventListener('click', () => {
        item.classList.add('animate');
      });
    });
  }
}
