import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { CommonModule } from '@angular/common'; 
import { HeaderComponent } from './components/header/header.component';
import { ProductCardComponent } from './components/product-card/product-card.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, CommonModule, HeaderComponent, ProductCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  busca: string = '';
  mostrarProdutos: boolean = true; 

  produtos = [
    { nome: 'Notebook Gamer', preco: 4500 },
    { nome: 'Mouse Óptico', preco: 150 },
    { nome: 'Teclado Mecânico', preco: 250 }
  ];

  toggleProdutos() {
    this.mostrarProdutos = !this.mostrarProdutos;
  }
}