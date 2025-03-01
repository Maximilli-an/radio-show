import React, { useState } from 'react'
import { useOnDemandContent } from '../api/fetchOnDemand'
import { OnDemandItem } from '../types/OnDemand'
import Card from './Card'

const MainPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<"highlights" | "fullShows" | null>(null)
  const {data, isLoading, error} = useOnDemandContent()
  
    if (error) return <h2>The NINE Radio site is currently down for maintenance</h2>

    if (isLoading) return (
      <div>
        <img src="../assets/loading-wheel.gif" alt="Loading Logo" />
        <h1>Loading available radio clips and shows</h1>
      </div>
      )      

    if (selectedCategory) return (
      <div>
        {data?.[selectedCategory]?.map((item: OnDemandItem) => (
          <Card key={item.title} {...item} />
        ))
        }
      </div>
    )
  
    else return (
    <>
      <div>
        <button onClick={() => setSelectedCategory("highlights")}>Highlights</button>
        <button onClick={() => setSelectedCategory("fullShows")}>Full Shows</button>
      </div>
    </>
    )
    
}
export default MainPage