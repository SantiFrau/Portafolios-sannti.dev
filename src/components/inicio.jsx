import { useEffect } from "react";
import { useRef } from "react";
export default function Inicio () {
    
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
      
         
        <div className="bg-zinc-800 bg-opacity-70 w-full h-screen ">
                <nav className="bg-zinc-900 bg-opacity-80 w-full h-12 fixed mt-8 nav z-10 flex flex-row justify-between items-center">
                   <h3 className="text-white px-5 w-1/4">Sannti.dev</h3>
                  <ul className="h-full w-full flex flex-row gap-10 items-center justify-center">
                    <li className="text-white kalam hover:text-zinc-400 ">Inicio</li>
                    <li className="text-white kalam hover:text-zinc-400 ">Sobre mi</li>
                    <li className="text-white kalam hover:text-zinc-400 ">Proyectos</li>
                    <li className="text-white kalam hover:text-zinc-400 ">Contacto</li>
                  </ul>
                  <div className="w-1/4 px-5 flex justify-end">
         
                  <img className="w-10 h-10 object-cover rounded-full" style={{aspectRatio:1/1}} src="/perfil.webp" alt="" />
                  </div>
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