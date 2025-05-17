// Copyright (c) 2025 Isaac Ip All rights reserved
//
// Created by: Isaac Ip
// Created on: Mar 2025
// This file contains the JS functions for index.html

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICD2O-Unit-3-03-Isaac-Ip/sw.js", {
    scope: "/ICD2O-Unit-3-03-Isaac-Ip/",
  });
}

/**
* Do basic math.
*/
function doMathClicked() {
    // input
    const radius = parseFloat(document.getElementById("radius").value)

    // process
    const volumeOfSphere = (4 / 3) * Math.PI * radius ** 3
    localStorage.setItem("volume", "volumeOfSphere");

    // output
    document.getElementById("volume").innerHTML =
        "<p>The volume is: " + volumeOfSphere.toFixed(2) + " mm³. </p>"
}

function updateVolume(){
    localStorage.getItem("volume")
        document.getElementById("volume").innerHTML =
        "<p>The volume is: " + volume + " mm³. </p>"
}