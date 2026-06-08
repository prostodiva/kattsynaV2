export function getCardStyle(diff: number) {
  const offset = Math.abs(diff);
  const translateX = diff === -1 ? '30%' : diff === 1 ? '-30%' : '0%';

  return {
    transform: `translateX(${translateX}) scale(${offset === 0 ? 1 : 0.70}) rotateY(${diff * -12}deg)`,
    opacity: offset === 0 ? 1 : 0.55,
    zIndex: offset === 0 ? 10 : 5,
  };
}