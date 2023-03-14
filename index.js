function distanceFromHqInBlocks(someNumbers){
    if (someNumbers<42) {
    return 42-someNumbers;
  }else if (someNumbers>42) {
    return someNumbers-42;
  }
}
function distanceFromHqInFeet(someNumbers) {
    if (someNumbers<42) {
        return (42-someNumbers)*264;
    }else if(someNumbers>42){
        return (someNumbers-42)*264;
    }
}

 function distanceTravelledInFeet(start, destination) {
    if (destination>start) {
        return (destination-start)*264;
    } else {
        return (start-destination)*264;
          }
 }       
  function calculatesFarePrice(start, destination) {
    let distance = distanceTravelledInFeet(start, destination);
    let fare;
    if(distance <= 400){
      fare = 0
    }
    else if(distance>400 && distance<2000){
      fare=(distance-400)*0.02
    }else if(distance>2000 && distance<=2500){
      fare=25
    }else{
      fare='cannot travel that far'
    }
    return fare
    
  }
