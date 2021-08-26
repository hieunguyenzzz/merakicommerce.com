import classNames from 'classnames';
import React, { useEffect, useRef, useState } from 'react';

export function AnimationGroup({ className, children } = {}) {
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
    }} className={className}>
      {children((i, className) => {
        return {
          style: {
            transitionDelay: `${i}00ms`
          },
          className: classNames(className, "transition-all opacity-[var(--opacity)] transform translate-y-[var(--translate-y)] duration-700 ease-in-out")
        }
      })}
    </div>
  </div>;
}
