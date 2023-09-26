
import { Link } from "react-router-dom";

interface MenuProps {
    username: string
}
export default function Menu2( {username}: MenuProps){
    return (
    <div>
        <div className="bg-[#6283A1] w-screen h-32 overflow-x-auto px-4 py-8 border-b">
        <aside> 
                <ul className="p-4 flex space-x-4">
                     <li className="mb-16 flex-row">
                        <Link to="/produto" className="flex w-48 h-12 text-center  px-8 py-4 text-[#0B1661] bg-[#F4F7FF]"> 
                            <span className="mx-4 font-medium ">Estoque</span>
                        </Link>
                    </li>
                    <li className="mb-16 flex-row">
                        <Link to="/admin" className="flex w-48 h-12 text-center  px-8 py-4 text-[#0B1661] bg-[#F4F7FF]"> 
                            <span className="mx-4 font-medium ">Necessidades</span>
                        </Link>
                    </li>
                    <li className="mb-16 flex-row ">
                        <Link to="/produto" className="flex w-48 h-12 text-center  px-8 py-4 text-[#0B1661] bg-[#F4F7FF]"> 
                            <span className="mx-4 font-medium ">Ajuda</span>
                        </Link>
                    </li>
                    <li className="mb-16 flex-row">
                        <Link to="/produto" className="flex w-48 h-12 text-center  px-8 py-4 text-[#0B1661] bg-[#F4F7FF]"> 
                            <span className="mx-4 font-medium ">Admin</span>
                        </Link>
                    </li>
                </ul>
            </aside>
        </div>
    </div>
)
}