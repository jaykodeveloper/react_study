import React, { Component, useState } from 'react';
import '../App.scss';
import starcal from '../utils/starcal'

const colors = {
    available : 'lightgray',
    used: 'lightgreen',
    wrong: 'lightcoral',
    candidate: 'deepskyblue'
}

const PlayNumber = props => {
    return (
        <button 
          className="number"
          style={{ backgroundColor: colors[props.status]}}
          onClick={() => props.onClick(props.num, props.status)}
          >
          {props.num}
          </button>
    )
}

export default PlayNumber;