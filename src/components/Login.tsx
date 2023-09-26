import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function Login(){
    // vamos criar duas variáveis de estado para username e password   
    // setUsername é uma função que altera o valor de username
    // useState é um hook do ReactJS, cria e inicia a variável de estado
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    // hook do React Router DOM para navegar entre páginas
    const navigate = useNavigate()

    // função que será executada quando o formulário for submetido
    const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
        // previne o comportamento padrão do formulário
        e.preventDefault()
        // vamos verificar se usuário e senha estão corretos
        // vamos conectar assincronamente no backend no endpoint /users?username=xxx
        const resp = await fetch(`http://localhost:3000/users?username=${username}`, {
            method: 'GET'
            })
            .then (resposta => {
                return resposta.json()
            })
        console.log(resp)
        if (resp.length === 0) {
            alert('Usuário / senha incorretos ')
        }
        else {
            // usuário encontrado
            // vamos verificar se a senha está correta
            if (resp[0].password !== password) {
                alert('Usuário / senha incorretos')
            }
            else {
                // senha correta
                // vamos navegar para a página de produtos
                navigate('/produto', {state: {username: username}})
            }
        }
    }
    return (
       <div className="bg-[#6283A1] flex items-center justify-center h-screen w-screen">
            <div className="bg-[#F4F7FF] border-4 border-[#0B1661] p-8 rounded-lg drop-shadow-2x1 w-96 flex flex-col items-center">
                <h2 className="text-2xl font-bold pb-6 pt-6 mb-4 text-[#0B1661] ">Racionamento Estoque </h2>
                <form onSubmit={handleLogin}>
                    <div className="mb-4">
                        <label className=" text-lg block mb-2 font-semibold text-[#0B1661]" htmlFor="username">
                            Nome
                        </label>
                        <input type="text" id="username" value={username}
                            onChange={e => setUsername(e.target.value)}
                            className=" bg-[#F4F7FF] w-full border rounded p-2 placeholder-shown:border-gray-500 text-[#0B1661]" placeholder="Insira seu nome aqui" />
                    </div>
                    <div className="mb-4 pb-8">
                        <label className=" text-lg block mb-2 font-semibold text-[#0B1661] " htmlFor="password">
                            Senha
                        </label>
                        <input type="password" id="password" value={password}
                            onChange={e => setPassword(e.target.value)}
                            className="bg-[#F4F7FF] w-full border rounded p-2 placeholder-shown:border-gray-500 text-[#0B1661]" placeholder="Insira sua senha aqui" />
                    </div>
                    <div className="flex justify-end">
                       <button 
                        type="submit" 
                        className=" w-24  hover:bg-[#444e8f] h-15 text-lg bg-[#0B1661] text-[#F4F7FF] font-semibold p-2 rounded">
                            Login
                    </button>   
                    </div>
                </form>
            </div>
       </div>
    )
}