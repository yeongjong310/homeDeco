import styled from 'styled-components';
import { DecoCardProps } from './DecoCard.type';

const StyledDecoCard = styled.div<Pick<DecoCardProps, 'direction'>>`
  position: absolute;
  display: flex;
  align-items: center;
  width: 220px;
  height: 86px;
  padding: 8px 0 8px 8px;
  border-radius: 7px;
  box-shadow: 3px 3px 8px 0 rgb(0 0 0 / 20%);
  font-size: 14px;
  color: #4a4a4a;
  > img {
    width: 70px;
    height: 70px;
    object-position: center;
    object-fit: cover;
    border-radius: 4px;
    margin-right: 8px;
    flex-shrink: 0;
  }
  .desc {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    padding-bottom: 2px;
    overflow: hidden;
    text-align: left;
  }
  .move-icon-wrapper {
    margin-top: auto;
    margin-right: 2px;
    display: flex;
    align-items: flex-end;
  }
  .furniture-name {
    line-height: 1.3em;
  }
  .furniture-price {
    display: flex;
    align-items: center;
    margin-top: 4px;
  }
  .expected-price-label {
    color: #898f94;
    font-size: 11px;
    line-height: 1.2em;
    font-weight: bold;
    margin-right: 4px;
  }
  .price-discount {
    display: flex;
    align-items: center;
    color: #181d1f;
    font-size: 16px;
    line-height: 16px;
    font-weight: bold;
    line-height: 1.2em;
  }
  &::before {
    position: absolute;
    top: ${({ direction }) => (direction === 'bl' || direction === 'br' ? '-8px' : 'unset')};
    left: ${({ direction }) => (direction === 'br' || direction === 'tr' ? '34px' : 'unset')};
    right: ${({ direction }) => (direction === 'bl' || direction === 'tl' ? '34px' : 'unset')};
    bottom: ${({ direction }) => (direction === 'tr' || direction === 'tl' ? '-8px' : 'unset')};
    transform: ${({ direction }) =>
      direction === 'tr' || direction === 'tl' ? 'rotate(180deg)' : 'unset'};
    content: '';
    width: 12px;
    height: 8px;
    background-image: url(//cdn.ggumim.co.kr/storage/20211118152728RO3OXnhkrC.png);
    background-size: cover;
    background-repeat: no-repeat;
  }
`;

export default StyledDecoCard;
