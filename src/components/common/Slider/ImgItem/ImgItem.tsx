import React, { ReactElement } from 'react';
import * as S from './ImgItem.styled';
import { ImgItemProps } from './ImgItem.type';

export default function ImgItem({
  className,
  onClick,
  src,
  alt,
  discountRate,
}: ImgItemProps): ReactElement {
  return (
    <S.Li className={className} discountRate={discountRate}>
      <S.ImgItem src={src} alt={alt} draggable="false" onClick={onClick} />
    </S.Li>
  );
}

ImgItem.defaultProps = {
  alt: '',
  className: '',
};
