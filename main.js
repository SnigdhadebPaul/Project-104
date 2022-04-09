Webcam.set

    ({
        height: 300,
        width: 350,
        image_format: "png",
        png_quality: 100



    });
camera = document.getElementById("camera");


Webcam.attach(camera);
function take_snapshot() {
    Webcam.snap(function (data_uri) {
        document.getElementById("result").innerHTML = '<img id="img" src="' + data_uri + '"/>';

    });


}
console.log("ml5 version", ml5.version);
var v1 = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/_W63t7-At/model.json", BMW);


function Check() {
    var img = document.getElementById("img");
    v1.classify(img, gotresult);




}
function BMW() {
    console.log("model is loaded");



}
function gotresult(error, results) {
    if (error) {
        console.error(error);
    } else {

        console.log(results);
        document.getElementById("object").innerHTML = results[0].label;
        document.getElementById("Accuracy").innerHTML = results[0].confidence.toFixed(3);
    }





}
