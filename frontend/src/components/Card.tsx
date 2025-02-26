import React from 'react'
import CardData from '../types/CardData'

function Card(data: CardData) {
  return (
    <div>
      <h2>{data.title}</h2>
      <image>{data.image}</image>
      <p>Duration: {secondsToHms(data.duration)}</p>
    </div>
  )
}

//Time formatting helper
function secondsToHms(seconds: number) {

  if(seconds <= 0){
     return '00:00:00'
  }else{
    // let h = Math.floor(seconds / 3600);
    let m = Math.floor(seconds % 3600 / 60);
    let s = Math.floor(seconds % 3600 % 60);

    // let hDisplay = h <= 9 ? '0'+ h+':' : h+ ":";
    let mDisplay = m <= 9 ? '0'+ m+':' : m+ ":";
    let sDisplay = s <= 9 ? '0'+ s : s;

    // hDisplay + 
    return mDisplay + sDisplay; 

  }}

export default Card