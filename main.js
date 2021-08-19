function raor() {
   navigator.mediaDevices.getUserMedia({audio:true});
   li=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/sqw96fYbS/model.json',modelReady);

}

function modelReady(){
    li.classify(gotResults);
}