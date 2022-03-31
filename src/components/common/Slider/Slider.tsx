import React, { ReactElement, useEffect, useRef } from 'react';
import * as S from './Slider.styled';
import { SliderProps } from './Slider.type';
import ImgItem from './ImgItem/ImgItem';

const defaultProps = {
  className: '',
  onClick: () => null,
  swapeSpeed: 1,
};
function Slider({
  className,
  gap,
  onClick,
  children,
  swapeSpeed,
}: SliderProps & typeof defaultProps): ReactElement {
  const listRef = useRef<HTMLUListElement>(null);
  let offsetX = 0;

  const removeEventHandlers = () => {
    document.onmousemove = null;
    document.onmouseup = null;
  };

  const SwapeEnd = () => {
    const $ul = listRef.current;
    if (!$ul) return;

    const leftValidScrollX = 0;
    const rightValidScrollX = $ul.clientWidth - $ul.scrollWidth;

    if (offsetX > leftValidScrollX) {
      offsetX = leftValidScrollX;
      $ul.style.transition = `transform 300ms`;
      $ul.style.transform = `translateX(${offsetX}px)`;
    } else if (offsetX < rightValidScrollX) {
      offsetX = rightValidScrollX;
      $ul.style.transition = `transform 300ms`;
      $ul.style.transform = `translateX(${offsetX}px)`;
    }

    removeEventHandlers();
  };

  const SwapeStart: React.MouseEventHandler<HTMLUListElement> = e => {
    const $ul = listRef.current;
    if (!$ul) return;

    const initialOffset = offsetX;

    $ul.style.transition = `transform 0ms`;

    document.onmousemove = event => {
      offsetX = (event.clientX - e.clientX) / swapeSpeed + initialOffset;
      $ul.style.transform = `translateX(${offsetX}px)`;
    };

    document.onmouseup = SwapeEnd;
  };

  useEffect(() => removeEventHandlers);

  return (
    <S.Slider>
      <S.List
        ref={listRef}
        className={className}
        role="presentation"
        gap={gap}
        onClick={onClick}
        onMouseDown={e => SwapeStart(e)}
      >
        {children}
      </S.List>
    </S.Slider>
  );
}

Slider.defaultProps = defaultProps;

Slider.ImgItem = ImgItem;

export default Slider;
