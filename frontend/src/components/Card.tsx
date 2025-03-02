import React from 'react'
import { OnDemandItem } from '../types/OnDemand'
import { useNavigate } from 'react-router-dom'

const Card: React.FC<OnDemandItem> = ({title, duration, lastPublished, image, audioURL}) => {

  return (
    <div className="card">
      <img src={image} alt={title} width="100" />
      <h2>{title}</h2>
      <p>Duration: {secondsToHms(duration)}</p>
      <p>Published: {publishedFormat(lastPublished)}</p>
    </div>
  )
}

//Time formatting helper
function secondsToHms(seconds: number) {

  if(seconds <= 0){
    return '00:00:00'
  }else{
    let h = Math.floor(seconds / 3600)
    let m = Math.floor(seconds % 3600 / 60)
    let s = Math.floor(seconds % 3600 % 60)

    let hDisplay = h <= 9 ? '0'+ h+':' : h+ ":"
    let mDisplay = m <= 9 ? '0'+ m+':' : m+ ":"
    let sDisplay = s <= 9 ? '0'+ s : s

    return hDisplay + mDisplay + sDisplay

  }}


// Stack Overflow helped with this one
function publishedFormat(lastPublished: string) {
  const publishedTime = new Date(lastPublished).getTime()
  const currentTime = new Date().getTime()
  const timeDiff = Math.floor((currentTime - publishedTime) / 1000)

  const days = Math.floor(timeDiff / (60 * 60 * 24))
  const hours = Math.floor((timeDiff % (60 * 60 * 24)) / (60 * 60))
  const minutes = Math.floor((timeDiff % (60 * 60)) / 60)

  let result = "This article was published "
  if (days > 1) result += `${days} days, `
  if (days > 0 && days < 2) result += `${days} day, `
  if (hours > 0) result += `${hours} hours, `
  if (minutes > 0) result += `${minutes} minutes ago`

  return result.trim()
}

export default Card