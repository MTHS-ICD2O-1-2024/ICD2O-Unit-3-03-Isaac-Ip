// Copyright (c) 2025 Isaac Ip All rights reserved
//
// Created by: Isaac Ip
// Created on: Mar 2025
// This file contains the JS functions for index.html


/**
* Do basic math.
*/
function doMathClicked() {
    // input
    const radius = parseFloat(document.getElementById("radius").value)
    
    
    // process
    const volumeOfSphere = (4 / 3) * Math.PI * radius**3


    // output
    document.getElementById("volume").innerHTML =
      "<p>The volume is: " + volumeOfSphere.toFixed(2) + " mm³. </p>"
   }
  