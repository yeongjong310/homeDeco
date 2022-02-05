import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import ImgSlider from './ImgSlider';

export default {
  title: 'Component/ImgSlider',
  component: ImgSlider,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    imgs: [
      {
        src: '//cdn.ggumim.co.kr/cache/furniture/300/20220110174102naCtctXTxY.png',
        alt: '애틱 타일 이지케어 발수러그',
      },
      {
        src: '//cdn.ggumim.co.kr/cache/furniture/300/20200916133257f6yBWCxVRR.jpg',
        alt: '플로윙 화이트 원형 테이블',
      },
      {
        src: '//cdn.ggumim.co.kr/cache/furniture/300/202104291640198PeKIa8W06.JPG',
        alt: '트리니 벽난로콘솔',
      },
      {
        src: '//cdn.ggumim.co.kr/cache/furniture/300/20220110174732fFP0woxpov.png',
        alt: '루아 자수 레이스 커튼',
      },
      {
        src: '//cdn.ggumim.co.kr/cache/furniture/300/202104021708586U3uKKEJqa.PNG',
        alt: 'TÄLLBYN 텔뷘',
      },
      {
        src: '//cdn.ggumim.co.kr/cache/furniture/300/2020041308532933wiLOaPrO.jpg',
        alt: 'GRUET 사이드테이블/트롤리 시리즈',
      },
      {
        src: '//cdn.ggumim.co.kr/cache/furniture/300/202106251732335MqWBmo5tQ.jpg',
        alt: '마크라메 자개모빌 풍성형',
      },
    ],
  },
} as ComponentMeta<typeof ImgSlider>;

const Template: ComponentStory<typeof ImgSlider> = function (args) {
  return <ImgSlider {...args} />;
};

export const Default = Template.bind({});

// Default.args = {};
