
import {useLocation} from 'react-router-dom';
import {useState, useEffect} from 'react'
import {MdMode,MdOutlineDeleteOutline} from 'react-icons/md'
import {FaRegBell,FaBell} from 'react-icons/fa'
import Menu from './Menu';
import Menu2 from './Menu2';

interface ProdutoProps { // tipo de dado
  id: number,
  name: string,
  description: string,
  price: number,
  qty: number
}

interface OrderProps { // tipo de dado
  id: number,
  product_id: number,
  price: number,
  qty: number,
  type: string
}

export function ProdutoP() {
  // esta variável vai conter o username passado na navegação
  const location = useLocation();
  // recupera o username
  const username = location.state?.username || '';

  
  // vetor de produtos
  const [products, setProducts] = useState<ProdutoProps[]>([])
  // vetor de orders
  const [orders, setOrders] = useState<OrderProps[]>([])

  // variáveis de estado para os campos do formulário
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState(0)
  const [qty, setQty] = useState(0)
  // diferencia se vai inserir (id = 0) ou editar (id não for 0) um produto
  const [id, setId] = useState(0)

  // fazer o hook useEffect para carregar os produtos da API
  // quando a página for carregada ou o username for alterado
  useEffect( () => {
    const buscaProdutos = async () => {
      try {
        const resp = await fetch(`http://localhost:3000/products`)
        const produtos = await resp.json()
        if (resp.ok){
          setProducts(produtos) // atualiza vetor de produtos com dados da API
        }
        else {
          console.log('Falha na busca por dados')
        }
      }
      catch(error) {
        console.log(error)
      }
    }
      buscaProdutos()
  } , [username])

  // quando o vetor de produtos for alterado, executa a função useEffect
  useEffect( () => {
    setProducts(products) // atualiza a lista de produtos
  }, [products] ) 
  
  // função para cadastrar um produto
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault() // evita que a página seja recarregada
    // monta o objeto produto
    console.log(`${id} handle` )
    let produto
    if (id == 0) { // insere
      produto = {
        name,
        description,
        price,
        qty
      }
    } 
    else {
      produto = { // atualiza
        name,
        description,
        price,
        qty
      }
    }
    let url
    let verb
    if (id == 0) { // insere
      url = `http://localhost:3000/products`
      verb = 'POST'
    }
    else {
      url = `http://localhost:3000/products/${id}`
      verb = 'PUT'
    }

    try {
      // chamar a API para cadastrar o produto]
      console.log(url)
      console.log(verb)
      const produtoCadastrado = await fetch(url, {
        method: verb,
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(produto)
      })
      .then ( resp => { // quando o servidor respondeu
        return resp.json() // transforma em json
      })
       // atualiza a lista de produtos
       // monta uma nova lista com a lista anterior + produto cadastrado
       if (id == 0) { // insere
          setProducts([...products, produtoCadastrado])
       }
       else { // atualiza na lista o produto alterado
          setProducts(products.map( (product) => {
            if (product.id === id) {
              return produtoCadastrado
            }
            else {
              return product
            }
          }))
       }
      }
    catch(error) {
      console.log(error)
    }
  }
  // função para remover um produto
  const handleRemove = async (id: number) => {
      let confirma = confirm('Confirma a remoção do produto?')
      if (confirma) {
        // requisição DELETE para remover um produto através da API
        await fetch(`http://localhost:3000/products/${id}`, {
          method: 'DELETE'
        })
        .then( response => {
          return response.json()
        })
        .catch(error => {
            alert(error)
        })
        // atualiza a lista de produtos - removendo o produto deletado
        // setProducts vai receber como parâmetro a lista de produtos atual
        // retirando o produto que foi removido
        setProducts(products.filter( (product) => product.id !== id ))
      }
    }

    const handleEdit = (product: ProdutoProps) => {
      setName(product.name)
      setDescription(product.description)
      setPrice(product.price)
      setQty(product.qty)
      console.log(product.id)
      setId(product.id) // vai nos ajudar na criação/edição do produto
    }

    const handleNotification = async () => {
      const resposta: boolean = window.confirm("Deseja que esse item tenha uma notificação caso ele esteja em falta ?");

      if (resposta === true) {
        // Código a ser executado se o usuário escolher "Sim"
        console.log("O usuário escolheu Sim.");

      } else {
        // Código a ser executado se o usuário escolher "Não" ou fechar o diálogo
        console.log("O usuário escolheu Não ou fechou o diálogo.");
      }
        // chamamos a API para inserir a compra no banco de dados
        const newOrder = await fetch(`http://localhost:3000/orders`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },  
        })
        .then( response => {
            return response.json()
        })  
        .catch(error => {
            alert(error)
        })
        
          // atualiza a lista de orders
       // monta uma nova lista com a lista anterior + ordem cadastrado
      setOrders([...orders, newOrder])
      }
      
    return (
      <>
      <div className="flex-col">
          <Menu username={username}/>
      </div>
      <div className="flex-row place-content-start bg-[#FFF6E8]">
        <div className="flex-col">
          <Menu2 username={username}/>
        </div> 
        <div className="flex flex-col ">
        <div className="max-w-md mx-10 my-5 mb-4">
          {/* formulário para cadastro de um produto */}
          <form onSubmit={handleSubmit} className="max-w-md mx-auto mb-4">
            <div>
              <label htmlFor="name" className="text-[#0B1661] text-1xl block font-bold mb-2">
                Nome
              </label>
              <input type="text" id="name" value={name} 
                     onChange={ (e) => setName(e.target.value) } 
                     className="w-full text-[#0B1661] pl-3 border  border-gray-300 rounded-full bg-[#C0D8ED] shadow-sm mb-2" />
            </div>
            <div>
              <label htmlFor="description" className="text-[#0B1661] text-1xl block font-bold mb-2">
                Descrição
              </label>
              <textarea id="description" value={description}
                        onChange={ (e) => setDescription(e.target.value) }
                        className="w-full text-[#0B1661] pl-3 border border-gray-300 rounded-lg bg-[#C0D8ED] shadow-sm mb-2" />
            </div>
            <div>
              <label htmlFor="price" className="text-[#0B1661] text-1xl block font-bold mb-2">
                Preço
              </label>
              <input type="number" id="price" value={price}
                      onChange={ (e) => setPrice(Number(e.target.value)) }
                      className="w-full text-[#0B1661] pl-3 border border-gray-300 rounded-full bg-[#C0D8ED] shadow-sm mb-2" />
            </div>
            <div>
              <label htmlFor="qty" className="text-[#0B1661] text-1xl block font-bold mb-2">
                Quantidade 
              </label>
              <input type="number" id="qty" value={qty}
                      onChange={ (e) => setQty(Number(e.target.value))}
                      className="w-full text-[#0B1661] pl-3 border border-gray-300 rounded-full bg-[#C0D8ED] shadow-sm mb-2" />
            </div>
            <button type="submit" 
              className="w-full bg-blue-500 text-white font-bold rounded">
              Criar/Editar Produto
            </button>
          </form>
          {/* lista de produtos dentro de uma tabela */}
          <h2 className="font-bold mb-4"> Lista de Produtos </h2>
          <table className="w-full border border-gray-300">
            <thead>
              <tr className="bg-gray-200">
                <th className="border border-gray-300 px-4 py-2">ID</th>
                <th className="border border-gray-300 px-4 py-2">Nome</th>
                <th className="border border-gray-300 px-4 py-2">Descrição</th>
                <th className="border border-gray-300 px-4 py-2">Preço</th>
                <th className="border border-gray-300 px-4 py-2">Quantidade</th>
                <th className="border border-gray-300 px-4 py-2">Editar</th>
                <th className="border border-gray-300 px-4 py-2">Remove</th>
                <th className="border border-gray-300 px-4 py-2">Compra</th>
              </tr>
            </thead>
            <tbody>
              {
                products.map( (product) => (
                  <tr key={product.id}>
                    <td className="border border-gray-300 px-4 py-2">{product.id}</td>
                    <td className="border border-gray-300 px-4 py-2">{product.name}</td>
                    <td className="border border-gray-300 px-4 py-2">{product.description}</td>
                    <td className="border border-gray-300 px-4 py-2">{product.price}</td>
                    <td className="border border-gray-300 px-4 py-2">{product.qty}</td>
                    <td className="border border-gray-300 px-4 py-2">
                      <button onClick={() => handleEdit(product)}> 
                        <MdMode size={20}/>
                      </button>
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      <button onClick={() => handleRemove(product.id)}> 
                        <MdOutlineDeleteOutline size={20}/>
                      </button>
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      <button onClick={() => handleNotification()}> 
                        <FaRegBell size={20}/>
                      </button>
                    </td>
                  </tr>
                ) /* fim da função dentro do map */
                ) /* fim do map */
              } {/* fim do reactjs */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
      </>
    )
}