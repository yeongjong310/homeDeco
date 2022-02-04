import React, { ReactElement, useEffect, useRef, useState } from 'react';
import { extensions } from 'consts';
import { replaceExtension } from 'utils';
import { Room } from 'api/models/Room.type';
import { get } from 'api/room';
import { icon } from 'assets';
import { DecoCard } from 'components';
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
    <div>
      {data && (
        <>
          <S.RoomPicture
            ref={imageRef}
            srcSets={extensions.map(extension => replaceExtension(data.imageUrl, extension))}
            mainSrc="//cdn.ggumim.co.kr/cache/star/1000/2022011017094316oRcWeb8R.jpeg"
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
              priceOriginal,
              discountRate,
              outside,
            }) => {
              const positionX = pointX * RATIOX;
              const positionY = pointY * RATIOY;

              const cardDirection = ((): DecoCardProps['direction'] => {
                const directionY = imageRect.height / 2 < positionX ? 'b' : 't';
                const directionX = imageRect.width / 2 > positionY ? 'r' : 'l';

                return (directionY + directionX) as DecoCardProps['direction'];
              })();

              return (
                <S.DecoWrapper key={productId} pointX={positionX} pointY={positionY}>
                  <DecoCard
                    thunmNailSrc={imageUrl}
                    productName={productName}
                    price={priceOriginal}
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
                </S.DecoWrapper>
              );
            },
          )}
        </>
      )}
    </div>
  );
}
