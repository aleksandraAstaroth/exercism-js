"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.totalBirdCount = totalBirdCount;
exports.birdsInWeek = birdsInWeek;
exports.fixBirdCountLog = fixBirdCountLog;

// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Calculates the total bird count.
 *
 * @param {number[]} birdsPerDay
 * @returns {number} total bird count
 */
function totalBirdCount(birdsPerDay) {
  var sum = 0;

  for (var i = 0; i < birdsPerDay.length; i++) {
    sum += birdsPerDay[i];
  }

  return sum;
}
/**
 * Calculates the total number of birds seen in a specific week.
 *
 * @param {number[]} birdsPerDay
 * @param {number} week
 * @returns {number} birds counted in the given week
 */


function birdsInWeek(birdsPerDay, week) {
  var startingDayIndex = (week - 1) * 7;
  var endingDayIndex = week * 7;
  birdsPerDay.slice(startingDayIndex, endingDayIndex);
  return totalBirdCount(birdsPerDay.slice(startingDayIndex, endingDayIndex));
}
/**
 * Fixes the counting mistake by increasing the bird count
 * by one for every second day.
 *
 * @param {number[]} birdsPerDay
 * @returns {number[]} corrected bird count data
 */


function fixBirdCountLog(birdsPerDay) {
  for (var i = 0; i < birdsPerDay.length; i++) {
    if (i % 2 == 0) {
      birdsPerDay[i] += 1;
    }
  }

  return birdsPerDay;
}