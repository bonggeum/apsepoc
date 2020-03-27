const wrapper = document.querySelector('.wrapper')

const onMouseMove = ({clientX}) => {
  const x = (clientX / innerWidth * 2 - 1) * (innerWidth / 4)

  TweenLite.to('.first__name .text__name, .second__name .text__name', 1, {
    x: x,
    ease: Sine.easeOut
  })
}
wrapper.addEventListener('mousemove', onMouseMove)