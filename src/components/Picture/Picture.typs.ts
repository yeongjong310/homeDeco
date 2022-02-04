import { Ref } from 'react';

export interface PictureProps {
  className?: string;
  onClick?: (e?: Event) => void;
  srcSets: string[];
  mainSrc: string;
  alt?: string;
  ref?: Ref<HTMLImageElement>;
}
