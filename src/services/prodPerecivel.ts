import { Produto } from "./Produto";

export class prodPerecivel extends Produto{
    private validade: Date

    constructor(nome: string, ID: number, prioridade: number, qntd: number,
                categoria: string, data_cadastro: Date, local: string, validade: Date){
        super(nome, ID, prioridade, qntd,categoria, data_cadastro, local)
        this.validade = validade
    }

    toString(): string {
        return `${super.toString()} validade: ${this.validade}}`
    }
}