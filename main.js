function startClassification()
{
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundclassifier('https://storage.googleapis.com/tm-model/kA4F-80yW/model.json', modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}
function gotResults(error,results)
{
    console.log("got result")
}