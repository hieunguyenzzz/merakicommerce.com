import Container from '@components/common/Container';
import Image from '@components/common/Image';
import React, { useEffect, useRef, useState } from 'react';

export function Hero({ banner, title, children } = {}) {
  const [top, setTop] = useState('0');
  const containerRef = useRef();
  const backgroundRef = useRef();
  useEffect(() => {
    const handleScroll = ((timestamp) => {
      const containerClientRect = containerRef.current.getBoundingClientRect();
      const backgrounHeight = -Math.floor(containerClientRect.top / 2);
      setTop(backgrounHeight + 'px');
      window.requestAnimationFrame(handleScroll);
    });
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return <div
    style={{
      "--backgroundHeight": top
    }}
    ref={containerRef} className="h-screen -mt-header relative  overflow-hidden">
    <div ref={backgroundRef} className='absolute bottom-0 transform translate-y-[var(--backgroundHeight)] left-0 w-full flex items-center z-[-1] transition-all duration-[30ms]'>
      <div className='relative w-full h-screen'>
        <Image className="z-[-1] bg-gray-200 brightness-75 object-cover" image={banner} provider="strapi" />
      </div>
    </div>
    <Container className="w-full min-h-full container mx-auto flex flex-col justify-center items-center text-white">
      <h1 className="text-6xl mb-6 lg:text-8xl font-bold text-center leading-snug text-white font-heading animate__animated animate__fadeInUp">
        {title}
      </h1>
      {children}
    </Container>
  </div>;
}

