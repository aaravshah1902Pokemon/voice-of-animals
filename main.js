//https://aaravshah1902pokemon.github.io/c-105-/

function startClassification(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/g3XoZ6tlk/model.json',modelReady);
}
function modelReady(){
    classifier.classify(gotResults);
}
function gotResults(error,results){
    if(error){
        console.error(error);
    }
    else {
        console.log(results);
        randomNumberR = Math.floor(Math.random()*255)+1;
        randomNumberG = Math.floor(Math.random()*255)+1;
        randomNumberB = Math.floor(Math.random()*255)+1;
        document.getElementById("result_label").innerHTML='I can hear- '+results[0].label;
        document.getElementById("resultconfidence").innerHTML='Accuracy-'+(results[0].confidence*100).toFixed(2)+"%";
        document.getElementById("result_label").style.color="rgb("+randomNumberR +","+randomNumberG+","+randomNumberB+")";
        document.getElementById("resultconfidence").style.color="rgb("+randomNumberR +","+randomNumberG+","+randomNumberB+")";
        img1=document.getElementById("cat");
        img2=document.getElementById("cow");
        img3=document.getElementById("dog");
        img4=document.getElementById("lion");
        img5=img.src='imageear.jpg'
        if(results[0].label=="Cat"){
            img1.src='cat.gif';
            img2.src='cow.jpg';
            img3.src='dog.jpg';
            img4.src='lion.jpg';
        }
        else if(results[0].label=="Cow"){
            img1.src='cat.jpg';
            img2.src='cow.gif';
            img3.src='dog.jpg';
            img4.src='lion.jpg';
        }
        else if(results[0].label=="Dog"){
            img1.src='cat.jpg';
            img2.src='cow.jpg';
            img3.src='dog.gif';
            img4.src='lion.jpg';
        }
        else if(results[0].label=="Lion"){
            img1.src='cat.jpg';
            img2.src='cow.jpg';
            img3.src='dog.jpg';
            img4.src='lion.gif';
        }

    }
}