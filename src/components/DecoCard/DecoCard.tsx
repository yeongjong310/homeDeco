import React, { ReactElement } from 'react';
import StyledDecoCard from './DecoCard.styled';
import { DecoCardProps } from './DecoCard.type';

export default function DecoCard({
  thunmNailSrc,
  productName,
  price,
  discountRate,
  outside,
  direction,
}: DecoCardProps): ReactElement {
  return (
    <StyledDecoCard direction={direction}>
      <img src={thunmNailSrc} alt="" title={`${productName} 이동`} />
      <div className="desc">
        <div className="furniture-name">{productName}</div>
        <div className="furniture-price">
          <span className="expected-price-label">{outside ? '예상가' : discountRate && ''}</span>
          <span className="price-discount">{price}</span>
        </div>
      </div>
      <div className="move-icon-wrapper">
        <img
          src="//cdn.ggumim.co.kr/storage/20211102181936xqHzyWAmb8.png"
          alt="상품보기"
          width="20"
          height="20"
        />
      </div>
    </StyledDecoCard>
  );
}
