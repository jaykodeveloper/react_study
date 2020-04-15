import React, { Component } from 'react';
import '../App.scss';

const starcal = {
    sum: arr => arr.reduce((acc, curr) => acc + curr, 0),
    range: (min, max) => Array.from({ length: max - min + 1}, (_, i) => min + i),
    random: (min, max) => min + Math.floor(Math.random() * (max - min + 1)),

  randomSumIn: (arr, max) => {
    const sets = [[]];
    const sums = [];
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0, len = sets.length; j < len; j++) {
        const candidateSet = sets[j].concat(arr[i]);
        const candidateSum = starcal.sum(candidateSet);
        if (candidateSum <= max) {
          sets.push(candidateSet);
          sums.push(candidateSum);
        }
      }
    }
        return sums[starcal.random(0, sums.length - 1)]
    }
}

export default starcal;