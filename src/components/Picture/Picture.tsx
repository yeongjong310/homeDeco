import React, { ReactElement } from 'react';
import { PictureProps } from './Picture.typs';

export default function Picture({ className, srcSets, mainSrc, alt }: PictureProps): ReactElement {
  return (
    <picture className={className}>
      {/* {srcSets.map(src => (
        <source key={src} srcSet={src} />
      ))} */}
      <img src={mainSrc} alt={alt} />
    </picture>
  );
}

Picture.defaultProps = {
  alt: '',
};
