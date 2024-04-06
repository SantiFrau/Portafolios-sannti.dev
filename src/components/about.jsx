

export default function About() {

    return (
        <div id="sobre-mi" className="w-full h-full flex md:flex-row flex-col gap-10 pb-20 pt-20 bg-white-200">

                                  <div className="relative bg-white-200 w-11/12 md:w-1/3 flex items-center justify-center py-10 animacion1">
                                    <div className="z-20 w-64 h-40 relative"> 
                                      <div className="frame"></div>
                                      <img className="w-full h-full object-cover img" src="/perfil.webp" alt="" />
                                    </div>
                                  </div>

            <div className="md:w-2/3 w-full py-10 flex justify-center animacion1 ">
                
                <section className=" flex flex-col justify-center bg-white-200 gap-2 px-10 ">
                 <h3 className=" kalam text-4xl font-thin ">Santiago Frau</h3>
                 <p className="text-red-600 text-xl">Desarrollador web</p>
                 <p>¡Hola! Soy Santiago Frau, un apasionado desarrollador web front-end de Argentina.
                     Empece en la programacion web en un curso de la facultad UADER y luego segui estudiando de forma autodidacta, 
                     mi fascinación por la tecnología me impulsa a mantenerme constantemente actualizado con las últimas tendencias y herramientas en
                     el mundo del desarrollo web.
                     Considero que cada proyecto es una oportunidad para explorar nuevas tecnologías y técnicas,
                     llevando mis habilidades al siguiente y comprometido con la excelencia y la mejora constante.</p>
                 <ul className="flex flex-col ">
                    <li><span className="text-red-800 font-bold text-lg">Ubicacion :</span> Argentina</li>
                    <li><span className="text-red-800 font-bold text-lg">Edad :</span> 19</li>
                 </ul>
                 </section>
            </div>

        </div>
    )
}