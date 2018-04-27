import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default function TempList(props) {
  const temps = props.temps;
  const listItems = temps.map((temp) =>
    <li>{temp}</li>
  );
  return (
    <ul>{listItems}</ul>
  );
}