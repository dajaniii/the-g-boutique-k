import { tajawal, geist, poppins } from '../fonts/module';

export default function NewIn() {
  return (
    <div className="flex items-center justify-center w-[100%] h-[100vh]" style={poppins.style}>
            <div className='flex flex-row items-center justify-center bg-[#7676801F] w-[100%] h-fit'>
                <div className='flex flex-col items-center justify-center w-[45%] h-fit space-y-6 ml-[3%] mr-[20%]'>
                    <div className='text-[48px]'>NEW IN</div>
                    <div className='text-[20px]'>The latest arrivals</div>
                    <div className='border-[1px] border-[#1C1C1E] px-14 py-2'>See All</div>
                </div>
                <div className='w-full h-full '><img className='w-fit h-fit' src='./landing/new.svg'></img></div>
            </div>

    </div>
  );
}
