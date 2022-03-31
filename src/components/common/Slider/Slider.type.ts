/* eslint-disable spaced-comment */
import { ReactNode } from 'react';

export interface SliderProps {
  className?: string;
  /** slider 컨텐츠 간격을 설정합니다.*/
  gap: number;
  children: ReactNode;
  onClick?: () => void;
  onMouseMove?: () => void;
  /** swape 속도를 조절 할 수 있습니다. 1이 기준이며 높아질수록 속도가 낮이집니다.*/
  swapeSpeed?: number;
}
