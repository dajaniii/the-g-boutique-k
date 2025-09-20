import { tajawal, geist, poppins } from '../fonts/module';
import { useEffect } from "react";
import Splide from '@splidejs/splide';
import '@splidejs/splide/dist/css/splide.min.css';

export default function Best() {
    useEffect(() => {
        const splide = new Splide("#splide", {
          perPage: 5,
          drag: "free",
          focus: "center",
          pagination: false,
          arrows: true,
        });
    
        splide.mount();
    
        return () => splide.destroy();
      }, []);

  return (
    <div className="flex flex-col" style={poppins.style}>
      <div className="flex flex-row w-full h-fit">
        <div className="font-medium text-[48px] h-[12vh] ml-[10%]">
          OUR BESTSELLERS
        </div>
      </div>
      
      <div className="w-full mt-16">
        <section id="splide" className="splide">
          <div className="splide__arrows">
            <button className="splide__arrow splide__arrow--prev">
              <img src="./landing/arrows/2-left.svg" alt="Previous" />
            </button>
            <button className="splide__arrow splide__arrow--next">
              <img src="./landing/arrows/2-right.svg" alt="Next" />
            </button>
          </div>
          <div className="splide__track">
            <ul className="splide__list md:gap-[25%] xl:gap-[3%]">
              {[...Array(10)].map((_, index) => (
                <li key={index} className="splide__slide cursor-pointer flex-col ml-[10%]  w-[320px] h-[57vh] space-y-1">
                  <div className="flex items-end justify-center bg-[#F6F6F6] w-[320px] h-[80%] rounded">
                    <img className="mb-2" src="./landing/test.png" alt={`Product ${index + 1}`} />
                  </div>
                  <div className="text-[14px] md:text-[13px]">Michael Kors Bag</div>
                  <div className="text-[14px] text-[#999999] md:text-[13px]">In Stock</div>
                  <div className="text-[14px] md:text-[13px]">550 NIS</div>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}
