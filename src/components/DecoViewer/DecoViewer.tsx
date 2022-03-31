import React, { ReactElement, useEffect, useRef, useState } from 'react';
import { DecoCard, DecoSlider } from 'components';
import { extensions } from 'consts';
import { replaceExtension } from 'utils';
import { Room } from 'api/models/Room.type';
import { get } from 'api/room';
import { icon } from 'assets';
import { DecoCardProps } from '../DecoCard/DecoCard.type';
import * as S from './DecoViewer.style';

const RATIOX = 1.6;
const RATIOY = 1.73;

export default function DecoViewer(): ReactElement {
  const [data, setData] = useState<Room | null>(null);
  const [imageRect, setImageRect] = useState<{ width: number; height: number }>({
    width: 0,
    height: 0,
  });
  const [selectedProduct, setSelectedProduct] = useState<number | null>(null);

  const imageRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    get
      .productList()
      .then(res => setData(res))
      .catch(e => console.error(e));
  }, []);

  useEffect(() => {
    if (imageRef.current) {
      setImageRect({
        width: imageRef.current.width,
        height: imageRef.current.height,
      });
    }
  }, []);

  return (
    <S.DecoViewer>
      {data && (
        <>
          <S.RoomPicture
            ref={imageRef}
            srcSets={extensions.map(extension => replaceExtension(data.imageUrl, extension))}
            mainSrc={data.imageUrl}
            onClick={() => {
              setSelectedProduct(null);
            }}
          />
          {data.productList.map(
            ({
              pointX,
              pointY,
              productId,
              imageUrl,
              productName,
              priceDiscount,
              discountRate,
              outside,
            }) => {
              const positionX = pointX * RATIOX;
              const positionY = pointY * RATIOY;

              const cardDirection = ((): DecoCardProps['direction'] => {
                const directionY = imageRect.height / 2 > positionX ? 'b' : 't';
                const directionX = imageRect.width / 2 > positionY ? 'r' : 'l';

                return (directionY + directionX) as DecoCardProps['direction'];
              })();

              return (
                <S.DecoCardWrapper key={productId} pointX={positionX} pointY={positionY}>
                  <DecoCard
                    thunmNailSrc={imageUrl}
                    productName={productName}
                    price={priceDiscount}
                    discountRate={discountRate}
                    outside={outside}
                    direction={cardDirection}
                    $display={selectedProduct === productId}
                  />
                  <S.DecoOpenner
                    src={
                      (process.env.REACT_APP_BASE_URL as string) +
                      (selectedProduct === productId ? icon.canceler : icon.finder)
                    }
                    onClick={() =>
                      setSelectedProduct(selectedProduct === productId ? null : productId)
                    }
                  />
                </S.DecoCardWrapper>
              );
            },
          )}
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
