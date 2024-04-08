import { lenguajes } from "../data/stack"
import { otros } from "../data/stack"
import { frameworks } from "../data/stack"
export default function Stack () {

    return (<>
      
        <h2 className=" w-full font-bold text-red-600 h-full p-20 text-center text-4xl kalam bg-black bg-opacity-80">Stack de Tecnologias</h2>
        
        <div id="stack" className="w-full flex flex-col h-full md:grid md:grid-cols-2 text-white gap-4 bg-white-200 px-5 py-40">

            <section className=" col-span-1 grid grid-rows-2 gap-4">
                <div className="animacion1 row-span-1 p-4 bg-zinc-900 rounded-lg justify-center flex flex-col items-center justify-center">
                <h3 className=" text-xl p-3">Lenguajes</h3>
                <div className="flex flex-row gap-10">
                {
                 lenguajes.map((lenguaje,i)=>{
                    return(
                        <div key={i} className="flex flex-col items-center justify-center  w-max">
                         <img className="w-12" src={`/Portafolios-sannti.dev/icons/${lenguaje.img}`} alt={`img ${lenguaje.name}`} />
                         <p>{lenguaje.name}</p>
                        </div>
                    )
                 })
                }
                </div>
                </div>
                <div className="animacion1 md:row-span-1 p-4 bg-zinc-900 flex flex-col rounded-lg justify-center items-center">
                <h3 className=" text-xl p-3">Herramientas</h3>
                <div className="flex flex-row gap-10">
                   {
                    otros.map((otro,i)=>{
                        return(
                            <div key={i+30} className="flex flex-col items-center justify-center w-max">
                                <img className="w-12" src={`/Portafolios-sannti.dev/icons/${otro.img}`} alt={`img ${otro.name}`} />
                                <p>{otro.name}</p>
                            </div>
                        )
                    })
                   }
                   </div>
                </div>
            </section>
            <section className="animacion1 md:col-span-1 p-4 bg-zinc-900 rounded-lg  flex flex-col items-center gap-4 ">
                <h3 className="text-xl p-3">Frameworks</h3>
                <div className="grid grid-cols-[1fr,1fr] grid-rows-auto gap-4 w-full h-max">
                {
                    frameworks.map((framework,i)=>{
                        return(
                            <div key={i+60} className="flex flex-col items-center justify-center ">
                                <img className="w-12" src={`/Portafolios-sannti.dev/icons/${framework.img}`} alt={`img ${framework.name}`} />
                                <p>{framework.name}</p>
                            </div>
                        )
                    })
                }
           </div>
            </section>

        </div>

        </>  )
}