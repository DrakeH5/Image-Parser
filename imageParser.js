function ImageParser(fileLocation, pixilization = 1){
  var canvas = createCanvas()
  var imgSize = drawImgToCanvas(fileLocation, canvas)
  console.log(imgSize)
  collectionOfData = getData(canvas, imgSize[0], imgSize[1], pixilization)
  console.log(collectionOfData)
}
