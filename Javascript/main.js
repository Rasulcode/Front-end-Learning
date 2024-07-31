document.getElementById("js-demo").innerHTML = "This site for practicing!";
document.getElementById("js-demo").style.fontSize = "30px";
document.getElementById("js-demo").style.color = "blue";
document.getElementById("js-demo").style.textAlign = "center";
document.getElementById("js-demo").style.backgroundImage = "../Images/ai-image-generator-one.webp"
document.getElementById("js-demo").style.marginBottom = "50px"


function light(sw){
    let pic;
    if(sw == 0){
        pic = "../Images/turn-off.jpg"
    }else{
        pic = "../Images/turn-on.jpg"
    }
    document.getElementById('bulbImage').src = pic;
}