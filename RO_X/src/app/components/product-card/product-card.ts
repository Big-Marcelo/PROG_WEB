import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-card',
  standalone: true,
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {
  @Input() nome: string = '';
  @Input() preco: number = 0;

  comprar() {
    alert('Produto adicionado ao carrinho!');
  }
}