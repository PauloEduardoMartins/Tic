import { Historico } from "./Historico";
import { Necessidades } from "./Necessidades";
import { Produto } from "./Produto";
import { prodNaoperecivel } from "./prodNaoperecivel";
import { prodPerecivel } from "./prodPerecivel";

export class Usuario{
    private ID: number
    private nome: string
    private senha: string
    private listaHistorico: Historico[] = [];
    private listaNecessidades: Necessidades[] = [];
    private listaProdutos: Produto[] = [];

    constructor (ID: number, nome: string, senha: string) {
        this.ID = ID
        this.nome = nome
        this.senha = senha
    }

    cadastra (ID: number, nome: string, senha: string): void{
        this.ID = ID
        this.nome = nome
        this.senha = senha
    }

    login (nome: string, senha: string): boolean{
        return this.nome === nome && this.senha === senha;
    }

    criarNecess(titulo: string,  descricao: string,  data: Date, prioridade: number): void {
        const necessidade = new Necessidades(titulo, descricao, data, prioridade);
        this.listaNecessidades.push(necessidade);
    }

    registroItem(nome: string, ID: number, prioridade: number, qntd: number, categoria: string, 
                data_cadastro: Date, local: string, validade?: Date, origem?: string): void {
        let novoProduto: Produto;
        if (validade !== undefined) { 
            novoProduto = new prodPerecivel(nome, ID, prioridade, qntd, categoria, data_cadastro, local, validade);
        } else if (origem !== undefined) { 
            novoProduto = new prodNaoperecivel(nome, ID, prioridade, qntd, categoria, data_cadastro, local, origem);
        } else {
            novoProduto = new Produto(nome, ID, prioridade, qntd, categoria, data_cadastro, local);
        }
        this.listaProdutos.push(novoProduto);
    
        const historico = new Historico(novoProduto, this.nome);
        this.listaHistorico.push(historico);
    }

    exibirProdutos(): void {
        console.log("Lista de Produtos:");
        for (const produto of this.listaProdutos) {
            console.log(produto.toString());
        }
    }
    exibirHistorico(): void {
        console.log("Histórico de Produtos:");
        for (const historico of this.listaHistorico) {
            console.log(historico.toString());
        }
    }
    exibirNecessidades(): void {
        console.log("Lista de Necessidades:");
        for (const necessidade of this.listaNecessidades) {
            console.log(necessidade.toString());
        }
    }

    toString(): string {
        return `ID: ${this.ID}, Nome: ${this.nome}, Senha: ${this.senha}, Lista de Histórico: ${this.listaHistorico.length} registros, Lista de Necessidades: ${this.listaNecessidades.length} itens, Lista de Produtos: ${this.listaProdutos.length} itens`;
    }
}