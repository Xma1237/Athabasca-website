/* 
Author: Xiangyu Ma
Last day of modification: 2023-4-9
js file for fetching most recent Japan travel guid video using Youtube API
*/

// asynchronous function to get COVID-19 data
async function getCovidData() {
  try {
    // make a GET request to the API to get current state data
    const response = await fetch("https://api.covidtracking.com/v1/states/current.json");
    
    // check if the response was successful
    if (!response.ok) {
      // throw an error if fails
      throw new Error("HTTP error " + response.status);
    }

    // parse the response JSON data
    const data = await response.json();
    let positiveCases = 0;
    let negativeCases = 0;

    // loop through all the states data and sum up the positive and negative cases
    for (let i = 0; i < data.length; i++) {
      positiveCases += data[i].positive;
      negativeCases += data[i].negative;
    }

    // update the HTML elements with the total positive and negative cases
    document.getElementById("positive-cases").textContent = positiveCases;
    document.getElementById("negative-cases").textContent = negativeCases;
  } catch (error) {
    // log the error
    console.error("Error:", error);
  }
}

// call the function
getCovidData();
