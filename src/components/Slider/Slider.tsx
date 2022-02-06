import React, { ReactElement, useEffect, useRef } from 'react';
import * as S from './Slider.styled';
import { SliderProps } from './Slider.type';

export default function Slider({ className, gap, onClick, children }: SliderProps): ReactElement {
  const listRef = useRef<HTMLUListElement>(null);
  let initialX: number;
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

    initialX = e.clientX - offsetX;
    $ul.style.transition = `transform 0ms`;

    document.onmousemove = event => {
      offsetX = event.clientX - initialX;
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

Slider.defaultProps = {
  className: '',
  onClick: () => null,
};
