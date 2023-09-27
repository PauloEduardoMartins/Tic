import { Produto } from "./Produto";
import { prodPerecivel } from "./prodPerecivel";
import { prodNaoperecivel } from "./prodNaoperecivel";
import { Historico } from "./Historico";
import { Necessidades } from "./Necessidades";
import { Usuario } from "./Usuario";

// Criando objetos de teste para as classes

// Criando produtos
const produto1 = new Produto("Produto1", 1, 3, 10, "Categoria1", new Date(), "Local1");
const produto2 = new prodPerecivel("Produto2", 2, 4, 5, "Categoria2", new Date(), "Local2", new Date("2023-05-12"));
const produto3 = new prodNaoperecivel("Produto3", 3, 2, 8, "Categoria3", new Date(), "Local3", "Origem1");

// Testando método toString() das classes Produto, prodPerecivel e prodNaoperecivel
console.log(produto1.toString());
console.log(produto2.toString());
console.log(produto3.toString());

// Criando objeto de teste para a classe Historico
const historico1 = new Historico(produto1, "Usuário1");

// Testando método toString() da classe Historico
console.log(historico1.toString());

// Criando objeto de teste para a classe Necessidades
const necessidade1 = new Necessidades("Título1", "Descrição1", new Date(), 3);

// Adicionando produtos à lista de produtos da classe Necessidades
necessidade1.addProduto(produto1);
necessidade1.addProduto(produto2);
necessidade1.addProduto(produto3);

// Testando método toString() da classe Necessidades
console.log(necessidade1.toString());

// Criando objeto de teste para a classe Usuario
const usuario1 = new Usuario(1, "Usuário1", "Senha1");

// Testando método cadastra() da classe Usuario
usuario1.cadastra(2, "Usuário2", "Senha2");

// Testando método login() da classe Usuario
console.log(usuario1.login("Usuário1", "Senha1")); // Esperado: false
console.log(usuario1.login("Usuário2", "Senha2")); // Esperado: true

// Testando método criarNecess() da classe Usuario
usuario1.criarNecess("Título2", "Descrição2", new Date(), 4);

// Testando método registroItem() da classe Usuario
usuario1.registroItem("Produto4", 4, 1, 3, "Categoria4", new Date(), "Local4", new Date("2023-06-12"));
usuario1.registroItem("Produto5", 5, 5, 2, "Categoria5", new Date(), "Local5", undefined, "Origem2");

// Testando método toString() da classe Usuario
console.log(usuario1.toString());
