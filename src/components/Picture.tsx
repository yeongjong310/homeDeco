import React, { ReactElement } from 'react';

interface PictureProps {
  srcSets: string[];
  mainSrc: string;
  alt?: string;
}

export default function Picture({ srcSets, mainSrc, alt }: PictureProps): ReactElement {
  return (
    <picture>
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
