const width =document.documentElement.clientWidth;
const height = document.documentElement.clientHeight;
gorizontal_size=(width*0.85)/240;
vertical_size=(height*0.85)/80;
document.documentElement.style.setProperty('--size',`${Math.min(gorizontal_size,vertical_size,10)}px`);