function createCanvas() {
    var canvas = document.createElement('canvas');
    canvas.width = 0;
    canvas.height = 0;
    document.getElementsByTagName("body")[0].appendChild(canvas);
    return canvas
}

function drawImgToCanvas(imgSrc, canvas) {
    var ctx = canvas.getContext("2d");
    let img = document.createElement('img');
    img.src = imgSrc
    ctx.drawImage(img, 0, 0, 0, 0);
}