import Image from '@components/common/Image';
import heroImage from 'assets/images/hero.webp';
import { useKeenSlider } from "keen-slider/react";
import React, { cloneElement } from 'react';
export function Slider({ items = [] }) {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [pause, setPause] = React.useState(false);
  const timer = React.useRef();
  const [sliderRef, slider] = useKeenSlider({
    spacing: 10,
    duration: 2000,
    slidesPerView: 1,
    loop: true,
    breakpoints: {
      "(min-width: 768px)": {
        slidesPerView: 2,
      },
    },
    slideChanged(s) {
      setCurrentSlide(s.details().relativeSlide);
    },
  });
  React.useEffect(() => {
    sliderRef.current.addEventListener("mouseover", () => {
      setPause(true);
    });
    sliderRef.current.addEventListener("mouseout", () => {
      setPause(false);
    });
  }, [sliderRef]);

  React.useEffect(() => {
    timer.current = setInterval(() => {
      if (!pause && slider) {
        slider.next();
      }
    }, 2000);
    return () => {
      clearInterval(timer.current);
    };
  }, [pause, slider]);
  return (
    <>
      <div ref={sliderRef} className="keen-slider w-full py-12 relative">
        {items.map(
          (item, i) => {
            return <div key={i} className="keen-slider__slide p-3">
              <div className="flex flex-col space-y-6 max-w-prose mx-auto">
                <div className="flex items-center space-x-6">
                  <div className="w-16 h-16 relative rounded-full overflow-hidden flex-shrink-0">
                    <Image className="" src={heroImage} provider="strapi" image={item.image} width="80" height="80" layout="responsive" />
                  </div>
                  <div className="">
                    <h3 className="font-heading text-lg">{item?.client?.name}</h3>
                    <span className="meta">{item?.client?.website}</span>
                  </div>
                </div>
                <div className="text">
                  <blockquote>
                    <p>” {item?.client?.testimonial} “</p>
                  </blockquote>
                </div>
              </div>
            </div>;
          }
        ).map((item, i) => cloneElement(item, {
          key: i,
          ...item.props
        }))}
      </div>
      {slider && (
        <div className="flex justify-center left-0 w-full ">
          {[...Array(slider.details().size).keys()].map((idx) => {
            return (
              <button
                key={idx}
                onClick={() => {
                  slider.moveToSlideRelative(idx);
                }}
                className={"p-2" + (currentSlide === idx ? " text-primary" : " text-gray-200")}
              >
                <div className="w-2 h-2 bg-current rounded-full transition-all"></div>
              </button>
            );
          })}
        </div>
      )}
    </>
  );
}
