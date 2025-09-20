import { tajawal, geist } from '../fonts/module';
import Image from 'next/image'
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { IoIosSearch } from "react-icons/io";
import { MdLanguage } from "react-icons/md";

export default function Header() {



  return (
    <header className="flex flex-col" style={tajawal.style}>
    <div className="navbar bg-[#1C1C1E] text-white flex  md:items-end">
       <div className="navbar-start mb-2">
          <ul  className="px-1 gap-10  hidden md:flex font-normal text-[18px]">
             <li className='cursor-pointer hover:border-b-[var(--text-hover)] hover:border-b-[1px] ml-[6vh]'><a>She</a></li>
             <li className='cursor-pointer hover:border-b-[var(--text-hover)] hover:border-b-[1px]'><a>He</a></li>
             <li className='cursor-pointer hover:border-b-[var(--text-hover)] hover:border-b-[1px]'><a>Kids</a></li>
          </ul>    
           
       </div>
       <div className='navbar-center'>
          <a href='example.com'>
            <Image 
              src = './logo.svg'
              className='cursor-pointer'
              width={60}
              height={60}
              alt="logo"
    
            ></Image>
          </a>     
       </div>

      <div className="navbar-end flex flex-row gap-6 md:gap-10 text-xl font-extrabold  mb-2 ">
          <a className='cursor-pointer hover:text-[var(--text-hover)] hover:scale-[1.2]'><MdLanguage className='md:text-[25px]  text-[30px]' /></a>
          <a className='cursor-pointer hover:text-[var(--text-hover)] hover:scale-[1.2] mr-3 md:mr-14'> <HiOutlineShoppingBag className='md:text-[25px] text-[30px]' /></a>
      </div>

    </div>
    <div className='flex flex-row items-center justify-center md:justify-between border-b-[1px] border-[#D9D9D9] h-[8vh]'>
    <div className='md:flex flex-row justify-end ml-[7vh] gap-12 hidden'>
      <a className='cursor-pointer hover:text-[var(--text-hover)] '>In Stock</a>
      <a className='cursor-pointer hover:text-[var(--text-hover)] '>Pre-Oreder</a>
    </div>
    <div className='flex md:mr-14 text-[#3C3C4399]'>
      <div className='flex items-center justify-start p-4 gap-2 w-fit h-[4vh] md:h-[3.5vh] rounded-[10px] bg-[#7676801F]'>
        <IoIosSearch/>
        <input placeholder="Search" type="text" className='bg-transparent border-none outline-none w-[26vh] md:w-[25vh]'  ></input>
      </div>
    </div>

    </div>
    </header>
  );
}
