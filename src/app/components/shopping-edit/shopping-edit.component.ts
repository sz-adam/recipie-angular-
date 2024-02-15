import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/model/ingredient';
import { ShoppingService } from 'src/app/services/shopping.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss'],
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef!: ElementRef<HTMLInputElement>;
  @ViewChild('amountInput') amountInputRef!: ElementRef<HTMLInputElement>;
  ngOnInit(): void {
    
  }

  constructor(private shoppingService: ShoppingService) {}

  onAddItemn() {
    const ingName = this.nameInputRef.nativeElement.value;
    const ingAmount: number = parseFloat(
      this.amountInputRef.nativeElement.value
    );
    const newIngredient = new Ingredient(ingName, ingAmount);
    this.shoppingService.addIngredient(newIngredient)
  }
}
