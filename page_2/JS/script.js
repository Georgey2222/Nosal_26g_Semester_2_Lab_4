const resize =function()
{
const width =window.innerWidth;
const height = window.innerHeight;
gorizontal_size=(width*0.85)/120;
vertical_size=(height*0.85)/80;
document.documentElement.style.setProperty('--size',`${Math.min(gorizontal_size,vertical_size)}px`);
}
resize();
const create_comment = function()
{
    const numbs=Array.from(arguments);
    const numb=numbs[0];
    const coomnts=["left","right"];
    return function()
    {
        const dynamic_comments = document.querySelector(".dynamic_comments");
        let a=document.getElementById(`text-${numb}`).value;
        if(numbs.length==2)
        {
            a=numbs[1];
        }
        if(a!="")
        {
            const div=document.createElement("div");
            const p=document.createElement("p");
            const but=document.createElement("button");
            but.innerText="⨉";
            but.classList.add("but_close")
            but.addEventListener( "click", function() {   but.parentElement.remove();   });
            p.innerText=a;
            div.classList.add(`${coomnts[numb-1]}-comment`);
            if(numb==1)
            {
                div.appendChild(p);
                div.appendChild(but);
            }
            else
            {
                div.appendChild(but);
                div.appendChild(p);
            }
            dynamic_comments.appendChild(div);
            if(numbs.length==1)
            {
                document.getElementById(`text-${numb}`).value="";
            }
        }
        else
        {
            alert("Incorrect input");
        }
    }
}
const comm1=document.getElementById("comment-1");
comm1.addEventListener("click",create_comment(1));
const comm2=document.getElementById("comment-2");
comm2.addEventListener("click",create_comment(2));
create_comment(1,"Слава Україні!")();
create_comment(2,"Героям Слава!")();

