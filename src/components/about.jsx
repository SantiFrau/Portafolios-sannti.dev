

export default function About() {

    return (
        <div id="sobre-mi" className="w-full h-max flex flex-row gap-10 pb-20 pt-20 bg-white-200">

                                  <div className="relative bg-white-200 w-1/3 flex items-center justify-center py-10 animacion1">
                                    <div className="z-20 w-64 h-40 relative"> 
                                      <div className="frame"></div>
                                      <img className="w-full h-full object-cover img" src="/perfil.webp" alt="" />
                                    </div>
                                  </div>

            <div className="w-2/3 py-10 flex justify-center animacion1 ">
                
                <section className=" flex flex-col justify-center bg-white-200 gap-2 px-10 ">
                 <h3 className=" kalam text-4xl font-thin ">Santiago Frau</h3>
                 <p className="text-red-600 text-xl">Desarrollador web</p>
                 <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod nesciunt voluptatum, error quos qui quia explicabo, dicta natus sit suscipit possimus consequuntur. Cumque eum sit eaque tempore autem. Adipisci, illum!</p>
                 <ul className="flex flex-col ">
                    <li><span className="text-red-800 font-bold text-lg">From :</span> Argentina</li>
                    <li><span className="text-red-800 font-bold text-lg">Edad :</span> 19</li>
                 </ul>
                 </section>
            </div>

        </div>
    )
}