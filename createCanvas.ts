function createCanvas() {
    var canvas = document.createElement('canvas');
    canvas.width = 0;
    canvas.height = 0;
    document.getElementsByTagName("body")[0].appendChild(canvas);
    return canvas
}