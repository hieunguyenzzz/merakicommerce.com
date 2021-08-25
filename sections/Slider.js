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
      <style>
        {`
        [class^="number-slide"],
        [class*=" number-slide"] {
          background: grey;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 50px;
          color: #fff;
          font-weight: 500;
          height: 300px;
          max-height: 100vh;
        }

        .number-slide1 {
          background: rgb(64, 175, 255);
          background: linear-gradient(
            128deg,
            rgba(64, 175, 255, 1) 0%,
            rgba(63, 97, 255, 1) 100%
          );
        }

        .number-slide2 {
          background: rgb(255, 75, 64);
          background: linear-gradient(
            128deg,
            rgba(255, 154, 63, 1) 0%,
            rgba(255, 75, 64, 1) 100%
          );
        }

        .number-slide3 {
          background: rgb(182, 255, 64);
          background: linear-gradient(
            128deg,
            rgba(182, 255, 64, 1) 0%,
            rgba(63, 255, 71, 1) 100%
          );
          background: linear-gradient(
            128deg,
            rgba(189, 255, 83, 1) 0%,
            rgba(43, 250, 82, 1) 100%
          );
        }

        .number-slide4 {
          background: rgb(64, 255, 242);
          background: linear-gradient(
            128deg,
            rgba(64, 255, 242, 1) 0%,
            rgba(63, 188, 255, 1) 100%
          );
        }

        .number-slide5 {
          background: rgb(255, 64, 156);
          background: linear-gradient(
            128deg,
            rgba(255, 64, 156, 1) 0%,
            rgba(255, 63, 63, 1) 100%
          );
        }
        .number-slide6 {
          background: rgb(64, 76, 255);
          background: linear-gradient(
            128deg,
            rgba(64, 76, 255, 1) 0%,
            rgba(174, 63, 255, 1) 100%
          );
        }
        `}
      </style>
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
