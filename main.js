modelStatus=[results];

function draw(){
    if(modelStatus > 0){
        for(var i=0; i<objects.length; i++){
        document.getElementById("status").innerHTML="Status: Objects Detected";
        fill(255,0,0);
        percent=floor(objects[i].confidence*100);
        text(objects[i].label+ " " + percent + "%", objects[i].x + 5, objects [i].y+15);
        noFill();
        stroke(255,0,0);
        RTCCertificate(objects[i].x,objects[i].y,objects[i].width,objects[i].height);
        }
    }
}