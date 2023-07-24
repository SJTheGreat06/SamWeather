"use strict";

export const weekDayNames = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

export const monthNames = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

/**
 * @param {number} dateUnix Unix date in Seconds
 * @param {number} timezone Timezone shift from UTC in Seconds
 * @returns {string} Date String.  Format: "Monday 24, Jul"
 */
export const getDate = function (dateUnix, timezone) {
  const date = new Date((dateUnix + timezone) * 1000);
  const weekDayName = weekDayNames[date.getUTCDay()];
  const monthName = monthNames[date.getUTCMonth()];

  return `${weekDayName} ${date.getUTCDate()}, ${monthName}`;
};

/**
 * @param {number} timeUnix Unix Dates in Seconds
 * @param {number} timezone Timezone shift from UTC in seconds
 * @returns {string} Time String. Format: "HH:MM PM/AM"
 */
export const getTime = function (timeUnix, timezone) {
  const date = new Date((timeUnix + timezone) * 1000);
  const hours = date.getUTCHours();
  const minutes = date.getUTCMinutes();
  const period = hours >= 12 ? "PM" : "AM";

  return `${hours % 12 || 12}:${minutes} ${period}`;
};

/**
 * @param {number} timeUnix Unix Dates in Seconds
 * @param {number} timezone Timezone shift from UTC in seconds
 * @returns {string} Time String. Format: "HH PM/AM"
 */
export const getHours = function (timeUnix, timezone) {
  const date = new Date((timeUnix + timezone) * 1000);
  const hours = date.getUTCHours();
  const period = hours >= 12 ? "PM" : "AM";

  return `${hours % 12 || 12} ${period}`;
};

/**
 * @param {number} mps Meter per Second
 * @returns {number} Kilometer per Hour
 */
export const mps_to_kmh = (mps) => {
  const mph = mps * 3600;
  return mph / 1000;
};

export const aqiText = {
  1: {
    level: "Good",
    message:
      "Air quality is considered satisfactory with little or no presence of air pollutants.",
  },
  2: {
    level: "Fair",
    message:
      "Air quality is acceptable, but the level of pollutants may pose a moderate health concern for people sensitive to air pollution.",
  },
  3: {
    level: "Moderate",
    message:
      "Air quality is moderate, and the level of pollutants may pose a health threat to individuals sensitive to air pollution.",
  },
  4: {
    level: "Poor",
    message:
      "Air quality is poor, and the level of pollutants may pose a serious threat to individuals sensitive to air pollution and those with respiratory problems. The general public may also experience moderate health concerns.",
  },
  5: {
    level: "Very Poor",
    message:
      "Air quality is severely poor with pollutant levels exceeding safe limits. Individuals sensitive to air pollution and those with respiratory problems are strongly advised to stay indoors. The general public's health will also be seriously affected.",
  },
};
