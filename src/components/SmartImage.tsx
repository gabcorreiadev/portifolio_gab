"use client";

import { useEffect, useRef, useState } from "react";

type Props = React.ImgHTMLAttributes<HTMLImageElement> & { wrapperClassName?: string };

/** <img> com skeleton até carregar e lazy loading nativo. */
export default function SmartImage({ wrapperClassName, className, onLoad, ...img }: Props) {
  const ref = useRef<HTMLImageElement>(null);
  const [carregada, setCarregada] = useState(false);

  useEffect(() => {
    if (ref.current?.complete && ref.current.naturalWidth > 0) setCarregada(true);
  }, []);

  return (
    <span className={`${wrapperClassName ?? ""} ${carregada ? "" : "skeleton"}`}
      style={{ display: "block", overflow: "hidden" }}>
      {/* eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text */}
      <img ref={ref} loading="lazy" decoding="async" {...img} className={className}
        style={{ opacity: carregada ? 1 : 0, transition: "opacity .4s ease", ...img.style }}
        onLoad={(e) => { setCarregada(true); onLoad?.(e); }} />
    </span>
  );
}
