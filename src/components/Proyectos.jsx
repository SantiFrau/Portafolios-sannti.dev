import Modal_info from "./modal"
import { proyectos } from "../data/proyectos"
import { stack } from "../data/stack"
import {  useState ,useEffect} from "react"


export default function Proyectos(){

    const [proyecto_info,setProyecto_info] = useState(false)

    //desactivar el scroll cuando se abre el modal
    useEffect(() => {
      if (proyecto_info) {
          // Agregar clase al body para deshabilitar el desplazamiento
          document.body.classList.add('modal-open');
      } else {
          // Eliminar clase del body para permitir el desplazamiento
          document.body.classList.remove('modal-open');
      }
  }, [proyecto_info]);

    return(
        <>
        <h4 className="w-full h-full p-10 text-center text-red-600 text-4xl font-bold kalam bg-black bg-opacity-80">Proyectos</h4>
        <aside id="proyectos" className="w-full h-max bg-zinc-900 flex flex-row items-center justify-center flex-wrap gap-10 p-1 sm:p-10 py-40">
            
            {
              proyectos.map((proyecto ,i)=>{
                 
                return(
                    <div onClick={()=>{setProyecto_info(proyecto)}} key={i+150} className="hover:scale-110 transition-all flex flex-col items-center justify-center gap-10 w-full  sm:w-96  bg-zinc-800 pt-5 rounded-l-2xl animacion1">
                        <div className="flex flex-col sm:flex-row rounded-xl sm:rounded-l-full w-11/12 bg-zinc-900 p-2 sm:h-40 h-56 shadow-b items-center">
                        <img className="w-64 h-full  sm:rounded-l-full" src={`/Portafolios-sannti.dev/proyectos/${proyecto.id}/1.webp`} alt="" />
                           <ul className={`flex flex-row sm:flex-col gap-2 justify-center overflow-auto items-center w-full h-full p-3 ${(proyecto.id==0) ? "sm:pt-24" : null}`}>
                             {
                                proyecto.stack.map((s,i)=>{
                                    return(
                                        <li key={i} className={`w-10 ${stack[s].color} p-1.5 bg-opacity-30 rounded-xl ${(stack[s].name=="TAILWIND") ? "py-3" : null} `}> 
                                            <img className="w-full" src={`/Portafolios-sannti.dev/icons/${stack[s].img}`} alt="" />
                                        </li>
                                    )
                                })
                             }

                           </ul>
                        </div>
                        
                        <p className="bg-opacity-70 text-lg kalam font-bold bg-zinc-900 text-white w-full h-full py-5 text-center">{proyecto.name}</p>
                        
                    </div>
                )
              })
            }


        </aside>
        
       
      {
       (proyecto_info) ?
        <Modal_info proyecto_info={proyecto_info} setProyecto_info={setProyecto_info}></Modal_info>
        : null
      }
     
        </>
    )

}