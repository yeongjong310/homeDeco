import styled from 'styled-components';
import { SliderProps } from './Slider.type';

export const Slider = styled.ul<Pick<SliderProps, 'gap'>>`
  display: flex;
  list-style: none;
  gap: ${({ gap }) => gap}px;
  overflow-y: hidden;
  overflow-x: auto;
  padding: 28px 10px;
`;
