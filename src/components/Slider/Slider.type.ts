import { ReactNode } from 'react';

export interface SliderProps {
  className?: string;
  gap: number;
  children: ReactNode;
  onClick?: () => void;
}
