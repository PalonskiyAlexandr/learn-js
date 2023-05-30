"use strict";

async function loadJson(url) { // (1)
  let response = await fetch(url); // (2)

  if (response.status == 200) {
    let json = await response.json(); // (3)
    return json;
  }

  
}

loadJson('no-such-user.json')
  .catch(alert); // Error: 404 (4)