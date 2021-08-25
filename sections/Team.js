import Image from '@components/common/Image';
import React, { useEffect, useRef, useState } from 'react';

export function Team({ members = [] } = {}) {
  const [visible, setVisible] = useState();
  const containerRef = useRef();
  useEffect(() => {
    const node = containerRef.current;
    if (!node)
      return;
    const handleIntersection = (entries, observer) => {
      if (!entries[0].isIntersecting)
        return;
      observer.unobserve(node);
      setVisible(true);
    };
    const observer = new IntersectionObserver(handleIntersection, {
      rootMargin: '0px 0px 0px 0px'
    });
    observer.observe(node);
    return () => {
      observer.unobserve(node);
    };
  }, []);
  return <div style={visible ? {
    "--opacity": "1",
    "--translate-y": "0px"
  } : {
    "--opacity": "0",
    "--translate-y": "80px"
  }} ref={containerRef}>
    <h2 className="text-4xl font-semibold font-heading mb-8 text-center transition-all opacity-[var(--opacity)] transform translate-y-[var(--translate-y)] duration-700 ease-in-out">The Leadershi</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 py-14 gap-10 text-center gap-y-20">
      {members.map((item, i) => (
        <div key={i} style={{
          transitionDelay: `${i + 1}00ms`
        }} className=" lg:mb-0 transition-all opacity-[var(--opacity)] transform translate-y-[var(--translate-y)] duration-700 ease-in-out">
          <div className="h-full text-center flex flex-col items-center">
            <span className="text-[70px] text-primary relative w-full mb-8">
              <div style={{ paddingTop: '100%' }}></div>
              <Image provider="strapi" image={item.avatar} layout="fill" className="object-cover" />
            </span>
            <h2 className="text-xl font-heading mb-3">{item.name}</h2>
            <p className="">{item.role}</p>
          </div>
        </div>
      ))}
    </div>
  </div>;
}
