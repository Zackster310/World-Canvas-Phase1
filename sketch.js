var drawing = [];
var current = [];

function setup(){
    var canvas = createCanvas(1500,700);

    canvas.mousePressed(startPath);
}

function startPath(){
    current = [];
    drawing.push(current);
}

function draw(){
    background(200);

    if(mouseIsPressed){
        var point = {
            x : mouseX,
            y : mouseY
        }

        current.push(point);
    }

    
    stroke(0);
    noFill();

    for(var i = 0; i < drawing.length ; i++){
        var path = drawing[i];

        beginShape();
        for(var a = 0; a < path.length ; a++){
            vertex(path[a].x,path[a].y);
        }
        endShape();

    }

    

}





