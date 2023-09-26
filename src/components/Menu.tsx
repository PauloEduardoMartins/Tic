
import { Link } from "react-router-dom";

interface MenuProps {
    username: string
}
export default function Menu( {username}: MenuProps){
    return (
    <div>
        <div className="bg-[#6283A1] flex flex-col w-64 h-screen overflow-y-auto px-4 py-8 border-r">
        <h2 className="text-[#0B1661] font-semibold text-center text-3xl"> [Adicione logo aqui]</h2>
        <h3 className="text-[#0B1661] font-semibold text-center text-2xl mt-16"> {username} </h3>
        <div className="flex items-center justify-between mt-6">
            <aside> 
                <ul>   
                    <li className="mb-16">
                        <Link to="/adicionaritens" className="flex items-center text-center  px-8 py-4 text-[#0B1661] bg-[#F4F7FF]"> 
                            <span className="mx-4 font-medium ">Adicionar Itens</span>
                        </Link>
                    </li>
                    <li className="mb-16">
                        <Link to="/produto" className="flex items-center text-center  px-8 py-4 text-[#0B1661] bg-[#F4F7FF]"> 
                            <span className="mx-4 font-medium ">Adicionar Itens</span>
                        </Link>
                    </li>
                </ul>
            </aside>
        </div>
    </div>
</div>
)
}
