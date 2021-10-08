//encapsula e lista negociacoes
import { Negociacao } from "./negociacao.js";

export class Negociacoes {
    private negociacoes: Array<Negociacao> = [];

    adiciona(negociacao: Negociacao) {
        this.negociacoes.push(negociacao);
        console.log("inserido push");
    }

    lista(): Array<Negociacao> {
        return this.negociacoes;
    }
}
