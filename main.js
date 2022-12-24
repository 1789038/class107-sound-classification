function startClassification(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/kXdr6FY71/', modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}