import { Produto } from "./Produto";
import { prodPerecivel } from "./prodPerecivel"
import { prodNaoperecivel } from "./prodNaoperecivel"

export class Necessidades {
    private titulo : string;
    private descricao: string; 
    private data: Date;
    private prioridade: number;
    private listaProdutos: Produto[] = [];

    constructor(titulo: string,  descricao: string,  data: Date, prioridade: number){
        this.titulo = titulo
        this.descricao = descricao
        this.data = data
        this.prioridade = prioridade
    }

    addProduto(produto: Produto): void{
        this.listaProdutos.push(produto)
    }
    toString(): string {
        return `{titulo: ${this.titulo} descricao: ${this.descricao} data: ${this.data} prioridade: ${this.prioridade} lista de produtos: ${this.listaProdutos}}`
    }
}