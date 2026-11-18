import React, { Suspense, lazy, useEffect, useRef, useState } from 'react';

/**
 * Loads a below-fold section only when it nears the viewport.
 * Uses a stable reserved height to avoid CLS when the chunk mounts.
 */
const LazySection = ({ loader, minHeight = 640, rootMargin = '80px 0px' }) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  const [Component, setComponent] = useState(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setComponent(() => lazy(loader));
        setVisible(true);
        observer.disconnect();
      },
      { rootMargin }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [loader, rootMargin]);

  return (
    <div
      ref={ref}
      style={{
        minHeight,
        contentVisibility: 'auto',
        containIntrinsicSize: `auto ${minHeight}px`,
      }}
    >
      {visible && Component ? (
        <Suspense fallback={null}>
          <Component />
        </Suspense>
      ) : null}
    </div>
  );
};

export default LazySection;
