import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Slider from './Slider';

export default {
  title: 'Component/Slider',
  component: Slider,
  parameters: {
    docs: {
      description: {
        component: `**Slider**는 li 엘리먼트를 요소로 가진 배열을 children으로 입력받아, 슬라이드를 만들어주는 컴포넌트입니다. 
        기본적으로 swape 기능이 탑제되어 있으며, 필요에 따라 li의 자식 요소를 바꾸어주면 다양한 컨텐츠를 아이템으로 가질 수 있습니다.
        `,
      },
    },
  },
  argTypes: {
    className: {
      table: {
        disable: true,
      },
    },
    onClick: {
      table: {
        disable: true,
      },
    },
  },
  args: {
    gap: 12,
    swapeSpeed: 4,
  },
} as ComponentMeta<typeof Slider>;

const productList = [
  {
    productId: 1,
    imageUrl: '//cdn.ggumim.co.kr/cache/furniture/300/20220110174102naCtctXTxY.png',
    alt: '애틱 타일 이지케어 발수러그',
    discountRate: 0,
  },
  {
    productId: 2,
    imageUrl: '//cdn.ggumim.co.kr/cache/furniture/300/20200916133257f6yBWCxVRR.jpg',
    alt: '플로윙 화이트 원형 테이블',
    discountRate: 0,
  },
  {
    productId: 3,
    imageUrl: '//cdn.ggumim.co.kr/cache/furniture/300/202104291640198PeKIa8W06.JPG',
    alt: '트리니 벽난로콘솔',
    discountRate: 0,
  },
  {
    productId: 4,
    imageUrl: '//cdn.ggumim.co.kr/cache/furniture/300/20220110174732fFP0woxpov.png',
    alt: '루아 자수 레이스 커튼',
    discountRate: 0,
  },
  {
    productId: 5,
    imageUrl: '//cdn.ggumim.co.kr/cache/furniture/300/202104021708586U3uKKEJqa.PNG',
    alt: 'TÄLLBYN 텔뷘',
    discountRate: 10,
  },
  {
    productId: 6,
    imageUrl: '//cdn.ggumim.co.kr/cache/furniture/300/2020041308532933wiLOaPrO.jpg',
    alt: 'GRUET 사이드테이블/트롤리 시리즈',
    discountRate: 0,
  },
  {
    productId: 7,
    imageUrl: '//cdn.ggumim.co.kr/cache/furniture/300/202106251732335MqWBmo5tQ.jpg',
    alt: '마크라메 자개모빌 풍성형',
    discountRate: 50,
  },
];

export const ImgSlider: ComponentStory<typeof Slider> = function ({ ...args }) {
  return (
    <Slider {...args}>
      {productList.map(({ productId, imageUrl, discountRate }) => (
        <Slider.ImgItem key={productId} src={imageUrl} discountRate={discountRate} />
      ))}
    </Slider>
  );
};

export const TagSlider: ComponentStory<typeof Slider> = function ({ ...args }) {
  return (
    <Slider {...args}>
      {[
        'testTag1',
        'testTag2',
        'testTag3',
        'testTag4',
        'testTag5',
        'testTag1',
        'testTag2',
        'testTag3',
        'testTag4',
        'testTag5',
      ].map((tag, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <li key={index}>
          <button style={{ cursor: 'pointer', userSelect: 'none' }} type="button">
            {tag}
          </button>
        </li>
      ))}
    </Slider>
  );
};
