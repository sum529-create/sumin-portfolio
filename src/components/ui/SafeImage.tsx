'use client';

import Image, { ImageProps } from 'next/image';
import { useRef, useState } from 'react';
import { withBasePath } from '@/constants/site';

type SafeImageProps = ImageProps & {
  fallbackSrc: string;
};

const SafeImage = ({
  src,
  fallbackSrc,
  onError,
  ...props
}: SafeImageProps) => {
  const resolvedSrc = typeof src === 'string' ? withBasePath(src) : src;
  const resolvedFallback = withBasePath(fallbackSrc);
  const [currentSrc, setCurrentSrc] = useState(resolvedSrc);
  const didFallback = useRef(false);

  return (
    <Image
      {...props}
      src={currentSrc}
      onError={(event) => {
        if (didFallback.current) return;
        didFallback.current = true;
        setCurrentSrc(resolvedFallback);
        onError?.(event);
      }}
    />
  );
};

export default SafeImage;
