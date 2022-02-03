import { Ref } from 'react';

export interface PictureProps {
  className?: string;
  srcSets: string[];
  mainSrc: string;
  alt?: string;
  ref?: Ref<HTMLImageElement>;
}
