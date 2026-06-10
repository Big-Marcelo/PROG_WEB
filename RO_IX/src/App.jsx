// src/App.jsx
import './styles/global.css' // Importando CSS global [cite: 648]
import Header from './components/Header' // [cite: 529]
import Card from './components/Card'
import ProductCard from './components/ProductCard' // [cite: 565]

function App() {
  // Array de objetos do Exercício 4 [cite: 757-771]
  const produtos = [
    { id: 1, nome: 'Notebook', preco: 5000 }, // [cite: 764, 765, 717]
    { id: 2, nome: 'Mouse', preco: 150 }, // [cite: 766, 767, 718]
    { id: 3, nome: 'Teclado', preco: 350 }, // [cite: 719, 626, 627]
    { id: 4, nome: 'Monitor', preco: 1200 } // [cite: 768, 769, 720]
  ]

  return (
    <div>
      <Header /> {/* [cite: 533] */}
      
      <div className="container">
        <h3>Resultado do Exercício 1 (Card Estático):</h3>
        <Card />

        <h3>Resultado dos Exercícios 2 a 5 (Lista Dinâmica):</h3>
        <div className="produtos-lista">
          {/* Renderização dinâmica com map() [cite: 772, 777] */}
          {produtos.map((produto) => (
            <ProductCard 
              key={produto.id} 
              nome={produto.nome} 
              preco={produto.preco} 
            />
          ))}
        </div>
      </div>
    </div>
  )
}
export default App