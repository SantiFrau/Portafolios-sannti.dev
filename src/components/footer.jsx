import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function Footer(){

    return (
        <footer id="end" className="w-full h-max text-white  flex flex-col">
         <div className=' w-full h-max  bg-black bg-opacity-90 flex flex-col md:flex-row gap-5 py-10 sm:justify-between'>
         <div className='flex flex-row h-max gap-5 p-3 px-8 items-center justify-center'>
            <div className=' kalam font-bold text-4xl'>
                {
                    "</>"
                }
            </div>
            <div className='flex flex-col '>
               <h5 className=' kalam font-bold text-xl'>sannti.dev</h5>
                <p>Desarrollador web</p>
            </div>
         </div>

         <div className='w-full flex items-center justify-center'>
            <h5 className='font-bold text-xl kalam hidden sm:block'>Redes:</h5>
            <ul className='flex flex-row gap-2'>
                <li><a target="_blank" href=""><InstagramIcon className='hover:text-zinc-400' style={{fontSize:38}}></InstagramIcon></a></li>
                <li><a target="_blank" href=""><GitHubIcon className='hover:text-zinc-400' style={{fontSize:38}}></GitHubIcon></a></li>
                <li><a target="_blank" href=""><LinkedInIcon className='hover:text-zinc-400' style={{fontSize:38}}></LinkedInIcon></a></li>
            </ul>
         </div>

         <div className='flex flex-col items-center justify-center  h-max p-5'>
            <h5 className=''><span className='kalam text-lg font-bold'>Email: </span> santiagofrau3@gmail.com</h5>
         </div>
         
         </div>
          
          <div className='bg-zinc-900 flex flex-row items-center justify-center text-zinc-300 p-8'>
            <p>Copyright © 2024 - sannti.dev -</p>
          </div>
        </footer>
    )
}