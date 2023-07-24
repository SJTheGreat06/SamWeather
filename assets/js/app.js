"use strict";

import { fetchData, url } from "./api.js";
import * as module from "./module.js";

/**
 * Add even listener on multiple elements
 * @param {NodeList} elements Elements Node Array
 * @param {string} eventType Event Type. eg: "Click", "Mouseover"
 * @param {Function} callback Callback Function
 */
const addEventOnElements = function (elements, eventType, callback) {
  for (const element of elements) element.addEventListener(eventType, callback);
};

/**
 * Toggle Search in Mobile Devices
 */
const searchView = document.querySelector("[data-search-view]");
const searchTogglers = document.querySelectorAll("[data-search-toggler]");

const toggleSearch = () => searchView.classList.toggle("active");
addEventOnElements(searchTogglers, "click", toggleSearch);
