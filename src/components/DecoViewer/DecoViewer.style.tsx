import styled from 'styled-components';
import { Picture } from 'components';
import { CardOpenerProps, DecoCardWrapperProps } from './DecoViewer.type';

export const DecoViewer = styled.div`
  position: relative;
`;

export const DecoCardWrapper = styled.div<DecoCardWrapperProps>`
  position: absolute;
  top: ${({ pointX }) => pointX}px;
  left: ${({ pointY }) => pointY}px;
`;

export const DecoOpenner = styled.img.attrs<CardOpenerProps>(({ src }) => ({
  src,
}))<CardOpenerProps>`
  position: absolute;
  cursor: pointer;
  width: 32px;
  height: 32px;
`;

export const RoomPicture = styled(Picture)`
  > img {
    width: 800px;
    cursor: pointer;
  }
`;
