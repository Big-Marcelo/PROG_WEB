// ==========================================
// EXERCÍCIO 1: Mensagem ao clicar [cite: 254, 255]
// ==========================================
const btnEx1 = document.querySelector("#btn-ex1");
btnEx1.addEventListener("click", function() {
    alert("Olá! Você clicou no botão."); // [cite: 257]
});

// ==========================================
// EXERCÍCIO 2: Alterar texto [cite: 258]
// ==========================================
const tituloEx2 = document.querySelector("#titulo-ex2");
const btnEx2 = document.querySelector("#btn-ex2");

btnEx2.addEventListener("click", function() {
    tituloEx2.textContent = "JavaScript é interativo!"; // [cite: 262, 263]
});

// ==========================================
// EXERCÍCIO 3: Alterar cor da página [cite: 265]
// ==========================================
const btnEx3 = document.querySelector("#btn-ex3");

btnEx3.addEventListener("click", function() {
    // Muda a cor de fundo para lightblue conforme a dica do roteiro [cite: 268]
    document.body.style.backgroundColor = "lightblue"; 
});

// ==========================================
// EXERCÍCIO 4: Contador simples [cite: 270]
// ==========================================
const btnEx4 = document.querySelector("#btn-ex4");
const textoContador = document.querySelector("#texto-contador");
let contador = 0; // Variável para guardar o número de cliques

btnEx4.addEventListener("click", function() {
    contador++; // Cada clique soma 1 [cite: 274]
    textoContador.textContent = `Contador: ${contador}`;
});

// ==========================================
// EXERCÍCIO 5: Mostrar e esconder texto [cite: 275]
// ==========================================
const btnEx5 = document.querySelector("#btn-ex5");
const paragrafoEx5 = document.querySelector("#paragrafo-ex5");

btnEx5.addEventListener("click", function() {
    // Se estiver escondido (none), mostramos. Senão, escondemos [cite: 279, 280, 281]
    if (paragrafoEx5.style.display === "none") {
        paragrafoEx5.style.display = "block";
    } else {
        paragrafoEx5.style.display = "none"; // [cite: 283]
    }
});

// ==========================================
// EXERCÍCIO 6: Alternar modo claro/escuro [cite: 284]
// ==========================================
const btnEx6 = document.querySelector("#btn-ex6");
let modoEscuro = false;

btnEx6.addEventListener("click", function() {
    if (modoEscuro) {
        // Volta para o modo claro [cite: 286, 287]
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
        modoEscuro = false;
    } else {
        // Ativa o modo escuro [cite: 286, 287]
        document.body.style.backgroundColor = "#222"; // Cinza bem escuro
        document.body.style.color = "white";
        modoEscuro = true;
    }
});