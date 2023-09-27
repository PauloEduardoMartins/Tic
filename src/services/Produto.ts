export class Produto {
    protected nome: string
    protected ID: number 
    protected prioridade: number
    protected qntd: number
    protected categoria: string 
    protected data_cadastro: Date
    protected local: string
    constructor(nome: string, ID: number, prioridade: number, qntd: number,
                categoria: string, data_cadastro: Date, local: string){
        this.nome = nome
        this.ID = ID
        if (prioridade <= 5 && prioridade > 0) {
            this.prioridade = prioridade
        } else {
            throw new Error("A prioridade deve estar entre 1 e 5.")
        }
        this.qntd = qntd
        this.categoria = categoria
        this.data_cadastro = data_cadastro
        this.local = local
    }
    toString(): string {
        return `{Nome ${this.nome} ID: ${this.ID} prioridade: ${this.prioridade} 
                qntd: ${this.qntd} categoria: ${this.categoria} data_cadastro: ${this.data_cadastro} local: ${this.local}}`
    }
}