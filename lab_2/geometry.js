
'use strict'
function volumeOfRectangularPrism(length, width, height){

  if(isNaN(length) || isNaN(width) || isNaN(height)){
    throw `THE INPUT MUST BE A NUMBER`;
  }
  if(length == null || width == null || height == null){
    throw `INVALID INPUT`;
  }
  if(length <= 0 || width <= 0 ||  height <=0){
    throw "Volume cannot be less than or equal to 0";
  }
  let volume  = length * width * height;
  return volume;
}

function surfaceAreaOfRectangularPrism(length,width, height) {
  if(isNaN(length) || isNaN(width) || isNaN(height)){
    throw `THE INPUT MUST BE A NUMBER`;
  }
  if(length == null || width == null || height == null){
    throw `INVALID INPUT`;
  }
  if(length <= 0 || width <= 0 ||  height <=0){
    console.log("A dimension of a 3D object cannot be less than or equal to 0")
  }
  let surfaceArea = 2*((width*length)+(height*length)+ (height*width));
  return surfaceArea;
}

function volumeOfSphere(radius){
    if(isNaN(radius)){
      return `THE INPUT MUST BE A NUMBER`;
    }
    if(radius == null){
      console.logs("Radius cannot be null");
    }
    if(radius <= 0){
      console.log("Radius cannot be less than or equal to 0");
    }
    let rad = Math.abs(radius)
    let sphereVolume = (4/3)*Math.PI*Math.pow(rad, 3);
    return sphereVolume;
}

function surfaceAreaOfSphere(radius){
  if(isNaN(radius)){
    return `THE INPUT MUST BE A NUMBER`;
  }
  if(radius == null){
    console.logs("Radius cannot be null");
  }
  if(radius <= 0){
    console.log("Radius cannot be less than or equal to 0");
  }
  let sphere = 4*Math.PI*Math.pow(radius, 2);
  return sphere;
}



module.exports = {
    firstName: "Ryan",
    lastName: "Edelstein",
    studentId: "10410555",
    volumeOfRectangularPrism,
    volumeOfSphere,
    surfaceAreaOfSphere,
    surfaceAreaOfRectangularPrism
};
