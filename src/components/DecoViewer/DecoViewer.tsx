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
          />
          {data.productList.map(product => {
            const positionX = product.pointX * RATIOX;
            const positionY = product.pointY * RATIOY;

            const cardDirection = ((): DecoCardProps['direction'] => {
              const directionY = imageRect.height / 2 < positionX ? 'b' : 't';
              const directionX = imageRect.width / 2 > positionY ? 'r' : 'l';

              return (directionY + directionX) as DecoCardProps['direction'];
            })();

            return (
              <S.DecoWrapper key={product.productId} pointX={positionX} pointY={positionY}>
                <DecoCard
                  thunmNailSrc={product.imageUrl}
                  productName={product.productName}
                  price={product.priceOriginal}
                  discountRate={product.discountRate}
                  outside={product.outside}
                  direction={cardDirection}
                />
                <S.DecoOpenner src={(process.env.REACT_APP_BASE_URL as string) + icon.finder} />
              </S.DecoWrapper>
            );
          })}
        </>
      )}
    </div>
  );
}
