// vamos definir as props (propriedades) do componente Produto}
//Validade e Data de inserção ainda não implementados
interface ProdutoProps {
    nome: string,
    descricao: string,
    origem:string,
    qtde: number
}
export function Produto(prod: ProdutoProps) {

    return (
        <div className="bg-zinc-900 w-full h-10 text- rounded m-2 flex items-center justify-center">
            Nome: {prod.nome}
            Descrição: {prod.descricao}
            Qtde: {prod.qtde}
            Origem: {prod.origem}
        </div>
    )
}


function App() {
  return (
    <Produto nome="Product Name" descricao="Product Description" origem="Product Origin" qtde={10} />
  );
}

export default App;
