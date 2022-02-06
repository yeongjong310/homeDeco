import React, { ReactElement } from 'react';
import * as S from './ImgItem.styled';
import { ImgItemProps } from './ImgItem.type';

export default function ImgItem({ src, alt, discountRate }: ImgItemProps): ReactElement {
  return (
    <S.Li discountRate={discountRate}>
      <S.ImgItem src={src} alt={alt} draggable="false" />
    </S.Li>
  );
}

ImgItem.defaultProps = {
  alt: '',
};
