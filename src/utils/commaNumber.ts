export default function commaNumber(num: number | string) {
  if (typeof num !== 'string' && typeof num !== 'number') {
    return num;
  }

  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}
