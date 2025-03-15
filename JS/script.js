const resize =function()
{
const width =window.innerWidth;
const height = window.innerHeight;
console.log(width);
console.log(height);
gorizontal_size=(width*0.85)/240;
vertical_size=(height*0.85)/80;
document.documentElement.style.setProperty('--size',`${Math.min(gorizontal_size,vertical_size)}px`);
}
resize();