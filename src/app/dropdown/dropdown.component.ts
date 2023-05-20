import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent {
  @Input() options!: any[];
  @Input() defaultLabel: string = 'Select an option';
  selectedOption: any;

  selectOption(option: any) {
  if (this.selectedOption) {
    this.selectedOption.checked = false;
  }
  this.selectedOption = option;
  option.checked = true;
  
  this.options.forEach((item) => {
    if (item !== option) {
      item.checked = false;
    }
  });
}
}