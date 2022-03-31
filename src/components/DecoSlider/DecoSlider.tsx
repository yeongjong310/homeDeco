/* eslint-disable react/jsx-pascal-case */
import React, { ReactElement } from 'react';
import { Slider } from 'components/common';
import DecoSliderProps from './DecoSlider.type';

export default function DecoSlider({
  productList,
  selectedProduct,
  setSelectedProduct,
}: DecoSliderProps): ReactElement {
  return (
    <Slider gap={12} swapeSpeed={2}>
      {productList.map(({ productId, imageUrl, discountRate }) => (
        <Slider.ImgItem
          key={productId}
          src={imageUrl}
          discountRate={discountRate}
          className={selectedProduct === productId ? 'active' : ''}
          onClick={() => {
            setSelectedProduct(selectedProduct === productId ? null : productId);
          }}
        />
      ))}
    </Slider>
  );
}
