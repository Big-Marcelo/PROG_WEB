// src/components/ProductCard.jsx
// Reutilização usando props de nome e preco [cite: 713-715]
function ProductCard(props) {
    // Lógica do desafio extra: preço promocional [cite: 805]
    const precoPromocional = props.preco * 1.2;
  
    return (
      <div className="card">
        <div className="fake-img"></div> {/* Desafio extra: imagem fake [cite: 804] */}
        <h2>{props.nome}</h2> {/* [cite: 598] */}
        <p className="preco-promo">De: R$ {precoPromocional.toFixed(2)}</p>
        <p>Por: R$ {props.preco}</p> {/* [cite: 599] */}
        <button>Comprar</button> {/* [cite: 600, 601] */}
      </div>
    )
  }
  export default ProductCard