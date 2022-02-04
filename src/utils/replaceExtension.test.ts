import replaceFileExtension from './replaceExtension';

test('jpeg 확장자를 webp 확장자로 변경합니다.', () => {
  expect(replaceFileExtension('http://123123.naver.com/nklsdf.jpeg?123123', 'jpeg')).toBe(
    'http://123123.naver.com/nklsdf.jpeg?123123',
  );
});

test('jpeg 등의 확장자 명이 우연치 않게 src에 포함되어 있더라도 확장자명 만을 찾아서 변경합니다.', () => {
  expect(replaceFileExtension('http://jpeg.com/nklsdf.jpeg?123123', 'webp')).toBe(
    'http://jpeg.com/nklsdf.webp?123123',
  );
});
