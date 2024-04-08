import { useEffect, useState } from "react";
import { useRef } from "react";
import InstagramIcon from '@mui/icons-material/Instagram';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

export default function Inicio () {
    
    const [menu,setMenu] = useState(false)

    const animationRef = useRef(null);
    useEffect(() => {
        // Función para ejecutar la animación
        const runAnimation = () => {
          if (animationRef.current) {
            animationRef.current.classList.remove('text'); // Reiniciar la animación
            void animationRef.current.offsetWidth; // Reiniciar la animación
            animationRef.current.classList.add('text'); // Agregar la clase para iniciar la animación
          }
          setTimeout(runAnimation, 7000); // Volver a ejecutar la animación después de 5 segundos
        };
    
        // Iniciar la primera animación al montar el componente
        runAnimation();
    
        // Limpiar el temporizador cuando el componente se desmonte
        return () => clearTimeout(runAnimation);
      }, []);

    return(
      
         
        <div id="top" className="bg-black bg-opacity-60 w-full h-screen ">

                <nav className="hidden md:flex bg-zinc-900 bg-opacity-80 w-full h-12 fixed mt-8 nav z-10 flex-row justify-between items-center">
                   <h3 className="hover:text-zinc-400 cursor-pointer text-white px-5 w-1/4"><a href="https://www.instagram.com/sannti.dev/" target="_blank"><InstagramIcon></InstagramIcon> Sannti.dev</a> </h3>
                  <ul className="h-full w-full flex flex-row gap-10 items-center justify-center">
                    <li className="text-white kalam hover:text-zinc-400 "><a className="w-full h-full" href="#top">Inicio</a></li>
                    <li className="text-white kalam hover:text-zinc-400 "><a className="w-full h-full" href="#sobre-mi">Sobre mi</a></li>
                    <li className="text-white kalam hover:text-zinc-400 "><a className="w-full h-full" href="#stack">Stack</a></li>
                    <li className="text-white kalam hover:text-zinc-400 "><a className="w-full h-full" href="#proyectos">Proyectos</a></li>
                    <li className="text-white kalam hover:text-zinc-400 "><a className="w-full h-full" href="#end">Contacto</a></li>
                    
                  </ul>
                  <div className="w-1/4 px-5 flex justify-end">
         
                  <img className="w-10 h-10 object-cover rounded-full" style={{aspectRatio:1/1}} src="/Portafolios-sannti.dev/perfil.webp" alt="" />
                  </div>
               </nav>



               <nav className="md:hidden bg-zinc-900 bg-opacity-80 w-full h-max fixed block mt-8 nav z-10">
                 <div className="flex-row items-center justify-between flex w-full h-10">
                   <h3 className="hover:text-zinc-400 cursor-pointer text-white px-5 w-max">
                     <a href="https://www.instagram.com/sannti.dev/" target="_blank">
                       <InstagramIcon></InstagramIcon> Sannti.dev
                      </a>
                   </h3>
                   
                  <button onClick={() => { setMenu(!menu) }} className="w-max text-white p-2">
                   <MoreHorizIcon></MoreHorizIcon>
                  </button>
                  </div>
  
              <ul className={`transicion ${menu ? "flex" : "hidden"} h-full w-full flex-col gap-3 items-center justify-center bg-zinc-900 bg-opacity-80`}>
                 <li onClick={()=>{setMenu(!menu)}} className="focus:bg-zinc-800 hover:bg-zinc-800 text-white kalam hover:text-zinc-400 w-full "><a className="w-full h-full" href="#top"><p className="w-full text-center">Inicio</p></a></li>
                 <li onClick={()=>{setMenu(!menu)}} className="focus:bg-zinc-800 hover:bg-zinc-800 text-white kalam hover:text-zinc-400 w-full"><a className="w-full h-full" href="#sobre-mi"><p className="w-full text-center">Sobre mi</p></a></li>
                 <li onClick={()=>{setMenu(!menu)}} className="focus:bg-zinc-800 hover:bg-zinc-800 text-white kalam hover:text-zinc-400 w-full"><a className="w-full h-full" href="#stack"><p className="w-full text-center">Stack</p></a></li>
                 <li onClick={()=>{setMenu(!menu)}} className="focus:bg-zinc-800 hover:bg-zinc-800 text-white kalam hover:text-zinc-400 w-full"><a className="w-full h-full" href="#proyectos"><p className="w-full text-center">Proyectos</p></a></li>
                 <li onClick={()=>{setMenu(!menu)}} className="focus:bg-zinc-800 hover:bg-zinc-800 text-white kalam hover:text-zinc-400 w-full"><a className="w-full h-full" href="#end"><p className="w-full text-center">Contacto</p></a></li>
              </ul>
             </nav> 


        
               <div className="flex flex-col gap-2 items-center justify-center h-full w-full">
                 <div className="text-container">
                 <h1 ref={animationRef} className="font-bold text-5xl text-red-600 kalam text-shadow-r text">Santiago Frau</h1>
                 </div>
                
                 <p className="text-amber-500 text-shadow-y">Desarrollador web</p>
               </div>
        </div>
  
    )
}