import React, { ReactElement, useEffect, useState } from 'react';
import { DecoSlider, DecoPicture } from 'components';
import { Room } from 'api/models/Room.type';
import { get } from 'api/room';
import * as S from './DecoViewer.style';

export default function DecoViewer(): ReactElement {
  const [data, setData] = useState<Room | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<number | null>(null);

  useEffect(() => {
    get
      .productList()
      .then(res => setData(res))
      .catch(e => console.error(e));
  }, []);

  return (
    <S.DecoViewer>
      {data && (
        <>
          <DecoPicture
            data={data}
            selectedProduct={selectedProduct}
            setSelectedProduct={setSelectedProduct}
          />
          <DecoSlider
            productList={data.productList}
            selectedProduct={selectedProduct}
            setSelectedProduct={setSelectedProduct}
          />
        </>
      )}
    </S.DecoViewer>
  );
}
