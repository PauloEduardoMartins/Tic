import { Produto } from "./Produto";

export class prodNaoperecivel extends Produto{
    private origem: string

    constructor(nome: string, ID: number, prioridade: number, qntd: number,
                categoria: string, data_cadastro: Date, local: string, origem: string){
        super(nome, ID, prioridade, qntd,categoria, data_cadastro, local)
        this.origem = origem
    }

    toString(): string {
        return `${super.toString()} origem: ${this.origem}}`
    }
}