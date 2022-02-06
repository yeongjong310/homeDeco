/* eslint-disable spaced-comment */
import { ReactNode } from 'react';

export interface SliderProps {
  className?: string;
  /** slider 컨텐츠 간격을 설정합니다.*/
  gap: number;
  children: ReactNode;
  onClick?: () => void;
}
