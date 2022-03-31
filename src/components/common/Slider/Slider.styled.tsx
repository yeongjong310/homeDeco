import styled from 'styled-components';
import { SliderProps } from './Slider.type';

export const Slider = styled.div`
  overflow-y: hidden;
  overflow-x: auto;
  -ms-overflow-style: none; /* Internet Explorer 10+ */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none; /* Safari and Chrome */
  }
`;

export const List = styled.ul<Pick<SliderProps, 'gap'>>`
  display: flex;
  list-style: none;
  gap: ${({ gap }) => gap}px;
  padding: 28px 10px;
  transition: transform ease;
  cursor: pointer;
`;
