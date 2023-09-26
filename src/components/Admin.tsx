import { useLocation } from "react-router-dom";
import Menu from "./Menu"
import Menu2 from "./Menu2"

export default function Admin(){
    
         // esta variável vai conter o username passado na navegação
         //vamos utilizar Cookies para armazenar o username - BREVE
  const location = useLocation();
  // recupera o username
  const username = location.state?.username || '';
  
    return (
        <>
         <div className="flex-col">
        <Menu username={username}/>
      </div>
      <div className="flex-row place-content-start bg-[#FFF6E8]">
        <div className="flex-col">
          <Menu2 username={username}/>
        </div> 
          <div className="flex flex-col items-center justify-center ">
        <div className="max-w-md mx-10 my-5 mb-4">
                Pagina do admin
            </div>
        </div>
    </div>
  
        </>
    )
}