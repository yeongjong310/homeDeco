export interface PictureProps {
  className?: string;
  onClick?: (e?: Event) => void;
  srcSets: string[];
  mainSrc: string;
  alt?: string;
}
