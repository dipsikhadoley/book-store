let about = document.querySelectorAll(".abt-img");
let count = 0;
about.forEach(function(card,index){
card.style.left=`${index*100}%`
})
function myName(){
    about.forEach(function(curValue){
curValue.style.transform=`translateX(-${count*100}%)`
    })
}
setInterval(function(){
    count++;
    if(count == about.length){
count=0;
    }
    myName()
},3000)




