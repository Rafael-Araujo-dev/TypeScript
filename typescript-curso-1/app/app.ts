//import { Negociacao } from "./models/negociacao.js";

import { NegociacaoController } from "./controllers/negociacao-controller.js";


// const negociacao = new Negociacao(new Date(), 10, 100)
// console.log(negociacao.data)

const controller = new NegociacaoController();

const form = document.querySelector('.form');
alert('a');
form.addEventListener('submit', event => {
    event.preventDefault();
    controller.adiciona();
});
