
import { Link } from "react-router-dom";

interface MenuProps {
    username: string
}
export default function Menu2( {username}: MenuProps){
    return (
    <div>
        <div className="bg-gradient-to-b from-[#849ee6] to-[#6283A1] w-screen h-32 overflow-x-auto px-4 py-8 border-b">
        <aside> 
                <ul className="p-4 flex space-x-4">
                     <li className="pr-16 mb-16 flex-row">
                        <Link to="/produto" className=" flex hover:bg-[#686c81] hover:text-[#F4F7FF] border-2 border-indigo-200 border-x-indigo-500  w-48 h-12 text-center  px-12 py-2.5 text-[#0B1661] bg-[#F4F7FF]"> 
                            <span className="mx-4 font-medium ">Estoque</span>
                        </Link>
                    </li>
                    <li className="pr-16  mb-16 flex-row">
                        <Link to="/necessidades" className="flex hover:bg-[#686C81] hover:text-[#F4F7FF] border-2 border-indigo-200 border-x-indigo-500  w-48 h-12 text-center  px-8 py-2.5 text-[#0B1661] bg-[#F4F7FF]"> 
                            <span className="mx-4 font-medium ">Necessidades</span>
                        </Link>
                    </li>
                    <li className="pr-16 mb-16 flex-row ">
                        <Link to="/ajuda" className="flex hover:bg-[#686c81] hover:text-[#F4F7FF]  border-2 border-indigo-200 border-x-indigo-500  w-48 h-12 text-center  px-12 py-2.5 text-[#0B1661] bg-[#F4F7FF]"> 
                            <span className="mx-4 font-medium ">Ajuda</span>
                        </Link>
                    </li>
                    <li className="pr-16 mb-16 flex-row">
                        <Link to="/admin" className="flex hover:bg-[#686c81] hover:text-[#F4F7FF] border-2 border-indigo-200 border-x-indigo-500  w-48 h-12 text-center  px-12 py-2.5 text-[#0B1661] bg-[#F4F7FF]"> 
                            <span className="mx-4 font-medium ">Admin</span>
                        </Link>
                    </li>
                </ul>
            </aside>
        </div>
    </div>
)
}