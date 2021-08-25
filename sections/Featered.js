import { Search } from '@components/icons';
import classNames from 'classnames';
import React, { useEffect, useRef, useState } from 'react';

export function Featered({ services = [], column = 4 } = {}) {
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
  return <div ref={containerRef}>
    <div style={visible ? {
      "--opacity": "1",
      "--translate-y": "0px"
    } : {
      "--opacity": "0",
      "--translate-y": "80px"
    }} className={classNames("grid grid-cols-1 sm:grid-cols-2 gap-6 gap-y-12", {
      "lg:grid-cols-4": column === 4,
      "lg:grid-cols-3": column === 3,
    })}>
      {services.map((item, i) => (
        <div key={i} style={{
          transitionDelay: `${i}00ms`
        }} className=" lg:mb-0 p-4 transition-all opacity-[var(--opacity)] transform translate-y-[var(--translate-y)] duration-700 ease-in-out">
          <div className="h-full text-center flex flex-col items-center">
            <span className="mb-3 text-[70px] text-primary">
              <Search />
            </span>
            <h2 className="text-xl font-heading mb-3">{item.title}</h2>
            <p className="">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  </div>;
}
