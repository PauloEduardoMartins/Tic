import { Produto } from "./Produto";

export class Historico {
    private tempo: Date = new Date()
    private produto: Produto
    private nomeUsuario: string
    constructor (produto: Produto, nomeUsuario : string){
        this.produto = produto
        this.nomeUsuario = nomeUsuario
    }
    toString(): string {
        return `O produto ${this.produto} foi adicionado por ${this.nomeUsuario} em ${this.tempo}`
    }
}