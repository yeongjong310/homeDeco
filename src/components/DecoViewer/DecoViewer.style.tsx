import styled from 'styled-components';
import { Picture } from 'components';
import { CardOpenerProps, DecoWrapperProps } from './DecoViewer.type';

export const DecoWrapper = styled.div<DecoWrapperProps>`
  position: absolute;
  top: ${({ pointX }) => pointX}px;
  left: ${({ pointY }) => pointY}px;
`;

export const DecoOpenner = styled.img.attrs<CardOpenerProps>(({ src }) => ({
  src,
}))<CardOpenerProps>`
  position: absolute;
  width: 32px;
  height: 32px;
`;

export const RoomPicture = styled(Picture)`
  > img {
    width: 800px;
    cursor: pointer;
  }
`;
