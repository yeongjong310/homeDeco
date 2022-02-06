import styled from 'styled-components/macro';
import { ImgItemProps } from './ImgItem.type';

export const Li = styled.li<Pick<ImgItemProps, 'discountRate'>>`
  position: relative;

  &::before {
    content: ${({ discountRate }) => (discountRate === 0 ? '' : `'${discountRate}%'`)};
    position: absolute;
    top: 0;
    right: 5px;
    background-image: url(//cdn.ggumim.co.kr/storage/20211117191419RW6JS6bjRm.png);
    width: 24px;
    height: 28px;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: contain;
    font-size: 11px;
    font-weight: bold;
    line-height: 25px;
    color: white;
    text-align: center;
    padding-left: 1px;
  }
`;

export const ImgItem = styled.img`
  width: 106px;
  height: 106px;
  border-radius: 16px;
  border: 0.5px solid #aaafb9;
  object-position: center center;
  object-fit: cover;
  user-select: none;
`;
