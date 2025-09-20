import { useEffect } from "react";
import Splide from '@splidejs/splide';
import '@splidejs/splide/dist/css/splide.min.css'; 

export default function About() {
  useEffect(() => {
    const splide = new Splide('.splide', {
      type: 'loop',
      drag: 'free',
      focus: 'center',
      perPage: 4,
      autoScroll: {
        speed: 1, 
        pauseOnHover: true, 
        pauseOnFocus: true, 
      },
      pagination: false, 
      arrows: true,
    }).mount();

    return () => {
      splide.destroy();
    };
  }, []);

  return (
    <div className="flex flex-col">
      <div className="flex flex-row w-[100%] h-[100%] bg-black">
        <img src="./landing/1.svg" className="w-[100%] h-fit" alt="Landing Image" />
      </div>

      <div className="flex items-center w-full h-[24vh]">
        <section className="splide flex flex-row items-center brand-slider w-full h-[18vh]">
          <div className="splide__arrows">
            <button className="splide__arrow splide__arrow--prev">
              <img src="./landing/arrows/left.svg"></img>
            </button>
            <button className="splide__arrow splide__arrow--next">
            <img src="./landing/arrows/right.svg"></img>
            </button>
          </div>
          <div className="splide__track">
            <ul className="splide__list xl:gap-[1%] gap-[15%]">
            {Array.from({ length: 10 }).map((_, index) => (
                <li key={index} className="splide__slide">
                  <img
                    className="w-fit h-[10vh]"
                    src={`./landing/brands/image ${index + 1}.svg`}
                    alt={`Brand ${index + 1}`}
                  />
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}
