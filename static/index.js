"use strict";
/**
 * @type {HTMLFormElement}
 */
const form = document.getElementById("uv-form");
/**
 * @type {HTMLInputElement}
 */
const address = document.getElementById("uv-address");
/**
 * @type {HTMLInputElement}
 */
const searchEngine = document.getElementById("uv-search-engine");
/**
 * @type {HTMLParagraphElement}
 */
const error = document.getElementById("uv-error");
/**
 * @type {HTMLPreElement}
 */
const errorCode = document.getElementById("uv-error-code");

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  try {
    await registerSW();
  } catch (err) {
    error.textContent = "Failed to register service worker.";
    errorCode.textContent = err.toString();
    throw err;
  }
function getRandomUpTo(max) {
 return Math.floor(Math.random() * Math.floor(max)) + 1;
}
  var alert = localStorage.getItem('alert');
  if (alert === 'true'){
  }
  else {
    alert('To make the proxy function, right-click the screen and select reload/refresh frame. You should only need to do this once.');
    localStorage.setItem('alert', 'true')
  } 
  const url = search(address.value, searchEngine.value);
  location.href = '//dont-sue-me-topvaz.topvazgeo.online/launch.html?domain=' + url;

});
