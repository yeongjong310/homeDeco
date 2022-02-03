import React, { forwardRef, ReactElement } from 'react';
import { PictureProps } from './Picture.typs';

const Picture = forwardRef<HTMLImageElement, PictureProps>(
  // eslint-disable-next-line react/prop-types
  ({ className, srcSets, mainSrc, alt }: PictureProps, ref): ReactElement => (
    <picture className={className}>
      {/* {srcSets.map(src => (
        <source key={src} srcSet={src} />
      ))} */}
      <img ref={ref} src={mainSrc} alt={alt} />
    </picture>
  ),
);

export default Picture;

Picture.defaultProps = {
  alt: '',
};
