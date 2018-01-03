const left = document.querySelector('.left');
const right = document.querySelector('.right');
const container = document.querySelector('.container');

left.addEventListener('mouseenter', () => {
    container.ClassList.add('hover-left');
})

left.addEventListener('mouseleave', () => {
    container.ClassList.remove('hover-left');
})

right.addEventListener('mouseenter', () => {
    container.ClassList.add('hover-right');
})

right.addEventListener('mouseleave', () => {
    container.ClassList.remove('hover-right');
})