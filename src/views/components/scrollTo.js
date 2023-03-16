const cubic = value => Math.pow(value, 3);
const easeInOutCubic = value =>
  value < 0.5 ? cubic(value * 2) / 2 : 1 - cubic((1 - value) * 2) / 2;

export default (container, target, offset = 0) => {
  let endValue = target.offsetTop + offset;
  console.log('xxxx', target.parentElement, target);
  while (target.parentElement && container !== target.parentElement) {
    target = target.parentElement;
    endValue += target.offsetTop;
    console.log('xxxx', target.offsetTop);
  }
  console.log('endvalue', endValue);
  const beginTime = Date.now();
  const beginValue = container.scrollTop;
  const diff = endValue - beginValue;
  const rAF = window.requestAnimationFrame || (func => setTimeout(func, 16));
  const frameFunc = () => {
    const progress = (Date.now() - beginTime) / 500;
    if (progress < 1) {
      container.scrollTop = beginValue + diff * easeInOutCubic(progress);
      rAF(frameFunc);
    } else {
      container.scrollTop = endValue;
    }
  };
  rAF(frameFunc);
};
