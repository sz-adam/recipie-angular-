import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/model/ingredient';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss'],
})
export class ShoppingEditComponent {
  @ViewChild('nameInput') nameInputRef !: ElementRef<HTMLInputElement>;
  @ViewChild('amountInput') amountInputRef !: ElementRef<HTMLInputElement>;
 @Output() ingridientAdded =new EventEmitter<Ingredient>()

  onAddItemn() {
    const ingName = this.nameInputRef.nativeElement.value;
    const ingAmount: number = parseFloat(this.amountInputRef.nativeElement.value);
    const newIngredient = new Ingredient(ingName,ingAmount);
    this.ingridientAdded.emit(newIngredient);
  }
}
