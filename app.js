const yesBtn = document.querySelector('#yesBtn');

yesBtn.addEventListener('click',function () {
    swal("SABIA QUE DIRIAS SI, OBVIAMEENTE💅.!")
.then((value) => {
  swal(`Te quiero muchooo mi vida!!`);
});
});

const noBtn = document.querySelector('#noBtn');

noBtn.addEventListener('mouseover', function () {
    const randomX = parseInt(Math.random()*100);
    const randomY = parseInt(Math.random()*100);
    noBtn.style.setProperty('top',randomY+'%');
    noBtn.style.setProperty('left',randomX+'%');
    noBtn.style.setProperty('transform',`translate(-${randomX}%,-${randomY}%)`);
})
//corazones
function heart(){
    const heart =document.createElement("div");
    heart.classList.add("heart");
    heart.style.left=Math.random()*100+"vw";
    heart.style.animationDirection=Math.random()*2+3;
    heart.innerText="❤";
    document.body.appendChild(heart);
    setTimeout(()=>{
        heart.remove();
    },3000)
}
setInterval(heart,200); 
