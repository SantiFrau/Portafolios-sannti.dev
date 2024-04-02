import { proyectos } from "../data/proyectos"
import { stack } from "../data/stack"
export default function Proyectos(){

    
    return(
        <aside className="w-full h-max bg-zinc-900 flex flex-row items-center justify-center flex-wrap gap-5 p-10">
            
            {
              proyectos.map((proyecto ,i)=>{
                 
                return(
                    <div className="flex flex-col items-center justify-center gap-3  w-96  bg-zinc-800 pt-5 rounded-l-2xl animacion1">
                        <div className="flex flex-row rounded-l-full bg-zinc-900 p-2 h-40 shadow-b">
                        <img className="w-64 h-full rounded-l-full" src={`/proyectos/${proyecto.id}/1.webp`} alt="" />
                           <ul className={`flex flex-col gap-2 justify-center overflow-auto items-center w-full h-full p-3 ${(proyecto.id==0) ? "pt-24" : null}`}>
                             {
                                proyecto.stack.map((s,i)=>{
                                    return(
                                        <li key={i} className={`w-10 ${stack[s].color} p-1.5 bg-opacity-30 rounded-xl `}> 
                                            <img className="w-full" src={`/icons/${stack[s].img}`} alt="" />
                                        </li>
                                    )
                                })
                             }

                           </ul>
                        </div>
                        
                        <p className="text-lg kalam font-bold bg-white-200 w-full h-full py-5 text-center">{proyecto.name}</p>
                        
                    </div>
                )
              })
            }


        </aside>
    )

}