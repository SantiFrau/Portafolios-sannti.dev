import { stack } from "../data/stack"
import {  useState } from "react"

import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export default function Modal_info({setProyecto_info,proyecto_info}) {

    const [imagen,setImagen] = useState(1);
    
    const previous = (imagenes) =>{
        if(1===imagen){
         setImagen(imagenes)
        }else{
            setImagen(imagen-1)
        }
    }
    
    const next = (imagenes) =>{
        if(imagenes===imagen){
            setImagen(1)
           }else{
               setImagen(imagen+1)
           }
    }

    return (
        <div onClick={()=>{setProyecto_info(false);setImagen(1)}}  className={`z-20  w-full h-full fixed top-0 left-0 bg-black bg-opacity-60 flex flex-col items-center justify-center`} >
       
          <div className="animacion2 relative bg-zinc-900 w-2/3 h-max flex flex-col gap-5 p-5 py-10 justify-center items-center rounded-lg">
          <button className="text-white hover:text-zinc-400 text-2xl absolute top-0 right-0 p-3 px-5" onClick={()=>{setProyecto_info(false);setImagen(1)}}>x</button>
            <div className="flex flex-row gap-3 text-white items-center justify-center">
            <ArrowBackIosIcon onClick={(event)=>{event.stopPropagation(); previous(proyecto_info.imagenes)}} className="hover:text-zinc-400 cursor-pointer" style={{fontSize:40}}></ArrowBackIosIcon>
            <img className="w-2/3" src={`/proyectos/${proyecto_info.id}/${imagen}.webp`} alt="" />
            <ArrowForwardIosIcon onClick={(event)=>{event.stopPropagation(); next(proyecto_info.imagenes)}} className="hover:text-zinc-400 cursor-pointer" style={{fontSize:40}}></ArrowForwardIosIcon>
            </div>
            
            <p className="text-zinc-200">{proyecto_info.descripcion}</p>

            <ul className="flex flex-row flex-wrap gap-3">
                {
                  proyecto_info.stack.map((s,i)=>{
                    return(
                        <li className={`${stack[s].color} bg-opacity-20 p-2 px-8 flex items-center justify-center rounded-lg`} key={`a${i}`}>
                            <img className="w-8" src={`/icons/${stack[s].img}`} alt="" />
                        </li>
                    )
                  })
                }

            </ul>
            
          </div>
        </div>
      );
}