let rect = document.querySelector("#center");

rect.addEventListener("mousemove", function(dets){
    let rectangleLocation = rect.getBoundingClientRect(); //Gives the exact length from the corner of the screen to end points.
    let exactLocationLeft = dets.x - rectangleLocation.left;

    if(exactLocationLeft < rectangleLocation.width/2){
        let redColor = gsap.utils.mapRange(0, rectangleLocation.width/2, 255, 0, exactLocationLeft);

        gsap.to(rect, {
            backgroundColor: `rbg(${redColor}, 0, 0)`, 
            ease: Power4
        });
    }
    // else{
        
    // }
      
})