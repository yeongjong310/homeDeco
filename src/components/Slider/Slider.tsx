import React, { ReactElement } from 'react';
import * as S from './Slider.styled';
import { SliderProps } from './Slider.type';

export default function Slider({ className, gap, onClick, children }: SliderProps): ReactElement {
  return (
    <S.Slider className={className} role="presentation" gap={gap} onClick={onClick}>
      {children}
    </S.Slider>
  );
}

Slider.defaultProps = {
  className: '',
  onClick: () => null,
};
