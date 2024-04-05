import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function Footer(){

    return (
        <footer className="w-full h-max  flex flex-col">
         <div className=' w-full h-max  bg-white-200 flex flex-row gap-5 py-10 justify-between'>
         <div className='flex flex-row w-max h-max gap-5 p-3 px-8'>
            <div className='text-black kalam font-bold text-4xl'>
                {
                    "</>"
                }
            </div>
            <div className='flex flex-col '>
               <h5 className='text-black kalam font-bold text-xl'>sannti.dev</h5>
                <p>Desarrollador web</p>
            </div>
         </div>

         <div>
            <h5 className='font-bold text-xl kalam'>Redes</h5>
            <ul className='flex flex-row gap-2'>
                <li><a href=""><InstagramIcon style={{fontSize:38}}></InstagramIcon></a></li>
                <li><a href=""><GitHubIcon style={{fontSize:38}}></GitHubIcon></a></li>
                <li><a href=""><LinkedInIcon style={{fontSize:38}}></LinkedInIcon></a></li>
            </ul>
         </div>

         <div className='flex flex-col items-center justify-center w-max h-max p-5'>
            <h5 className=''><span className='kalam text-lg font-bold'>Email: </span> santiagofrau3@gmail.com</h5>
         </div>
         
         </div>
          
          <div className='bg-zinc-900 flex flex-row items-center justify-center text-zinc-300 p-8'>
            <p>Copyright © 2024 - sannti.dev -</p>
          </div>
        </footer>
    )
}