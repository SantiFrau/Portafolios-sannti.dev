import { stack } from "../data/stack"
import {  useState ,useEffect} from "react"

import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export default function Modal_info({setProyecto_info,proyecto_info}) {
    
  

    const [imagen,setImagen] = useState(1);
    const [prevSource, setPrevSrc] = useState("");  // estado para la  imgane previa 
    const [animacion, setAnimacion] = useState(""); //estado para signarle la animacion

    const previous = (imagenes) =>{
        setAnimacion({desaparecer:"desaparecer_derecha",movimiento:"derecha"});
      //si es la primera fuente del array seteamos la ultima
      if (imagen === 1) {
        setImagen(imagenes);
        setPrevSrc(imagen);
      }//si no setemos la anterior 
      else {
        setImagen(imagen-1);
        setPrevSrc(imagen);
      }
    }
    
    const next = (imagenes) =>{
        setAnimacion({desaparecer:"desaparecer_izquierda",movimiento:"izquierda"});
      //si la fuente es la ultima posision del array seteamos al prinsipio
      if (imagen === imagenes) {
        setImagen(1);
        setPrevSrc(imagen); 
      } //si no seteamos la siguiente 
      else {
        setImagen(imagen+1); //setemos la siguiente con el id
        setPrevSrc(imagen) //setemos la fuente actual que va a pasar a ser la previa
      }
    }

    function Img({ className, src }) {
        return (
          <img className={`rounded-lg w-img ${className}`} src={src} alt="" />
        );
      }

    return (
        <div onClick={()=>{setProyecto_info(false);setImagen(1)}}  className={`z-20  w-full h-full fixed top-0 left-0 bg-black bg-opacity-60 flex flex-col items-center justify-center`} >
       
          <div className="animacion2 relative bg-zinc-900 w-2/3 h-max flex flex-col gap-5 p-5 py-10 justify-center items-center rounded-lg">
          <button className="text-white hover:text-zinc-400 text-2xl absolute top-0 right-0 p-3 px-5" onClick={()=>{setProyecto_info(false);setImagen(1)}}>x</button>
            <div className="flex flex-row gap-3 text-white items-center justify-center">

            <div className="w-max h-full flex items-center justify-center hover:text-zinc-400 cursor-pointer px-3" onClick={(event)=>{event.stopPropagation(); previous(proyecto_info.imagenes)}} >
            <ArrowBackIosIcon  style={{fontSize:36}}></ArrowBackIosIcon>
            </div>
            
           
            <Img className={`${animacion.movimiento} z-10 w-2/3 `} src={`/proyectos/${proyecto_info.id}/${imagen}.webp`}  />
            <Img className={`w-2/3 ${animacion.movimiento} ${animacion.desaparecer}  absolute z-0 `} src={`/proyectos/${proyecto_info.id}/${prevSource}.webp`}
             />
             <div className="w-max h-full flex items-center justify-center hover:text-zinc-400 cursor-pointer px-3" onClick={(event)=>{event.stopPropagation(); next(proyecto_info.imagenes)}} >
             <ArrowForwardIosIcon  style={{fontSize:36}}></ArrowForwardIosIcon>
             </div>
            
            
            
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