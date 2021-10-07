//Criação da classe negociação
export class Negociacao {
    //Criação de atributos privados
    #data;
    #quantidade;
    #valor;
    
    //Atribuição de valores aos atributos
    constructor(data, quantidade, valor) {
        this.#data = data;
        this.#quantidade = quantidade;
        this.#valor = valor;
    }

    //Método que irá retornar o valor do atributo privado #data
    get data() {
        return this.#data
    }

    get quantidade() {
        return this.#quantidade
    }

    get valor() {
        return this.#valor
    }

    get volume() {
        return this.#quantidade * this.#valor
    }
}