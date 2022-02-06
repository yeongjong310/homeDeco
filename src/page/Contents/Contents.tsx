import React, { ReactElement } from 'react';
import * as S from './Contents.styled';
import { ContentsProps } from './Contents.type';

export default function contents({ children }: ContentsProps): ReactElement {
  return <S.Contents>{children}</S.Contents>;
}
