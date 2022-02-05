import React, { ReactElement } from 'react';

interface ImgSliderProps {
  imgs: { src: string; alt: string }[];
  onClick?: () => void;
}

export default function ImgSlider({ imgs, onClick }: ImgSliderProps): ReactElement {
  return (
    <ul role="presentation" onClick={onClick}>
      {imgs.map(({ src, alt }) => (
        <li>
          <img src={src} alt={alt} />
        </li>
      ))}
    </ul>
  );
}

ImgSlider.defaultProps = {
  onClick: () => null,
};
