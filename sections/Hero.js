import Image from '@components/common/Image';
import { Container } from '@components/ui';
import React, { useEffect, useRef, useState } from 'react';

export function Hero({ banner, title, children } = {}) {
  const [backgrounHeight, setBackgrounHeight] = useState('100%');
  const containerRef = useRef();
  const backgroundRef = useRef();
  useEffect(() => {
    const handleScroll = (e) => {
      const containerClientRect = containerRef.current.getBoundingClientRect();
      const backgrounHeight = Math.max(Math.min(containerClientRect.height + containerClientRect.top, containerClientRect.height), 0);
      setBackgrounHeight(backgrounHeight + 'px');
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return <div
    style={{
      "--backgroundHeight": backgrounHeight
    }}
    ref={containerRef} className="h-screen -mt-header relative  overflow-hidden">
    <div ref={backgroundRef} className='absolute bottom-0 h-[var(--backgroundHeight)] left-0 w-full flex items-center z-[-1]'>
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

