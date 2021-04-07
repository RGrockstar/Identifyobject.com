Webcam.set({
height:300,
width:300,
image_format:'png',
png_quality:90,

constraints:{
facingMode:"environment"
}
});
camera=document.getElementById("camera");
Webcam.attach('#camera');

function take_snap(){
Webcam.snap(function (data_uri){
document.getElementById("result").innerHTML = '<img id="Captured_img" src="'+data_uri+'"/>';
});
}

console.log('ml5 version',ml5.version);

classifier=ml5.imageClassifier('MobileNet',modelLoaded);

function modelLoaded(){
console.log('modelLoaded');
}

function check(){
img=document.getElementById('Captured_img');
classifier.classify(img, gotResult);
}
function gotResult(error, results){
if (error){
console.error(error);
}
else{
console.log(results);
document.getElementById("object_name").innerHTML= results[0].label;
}
}