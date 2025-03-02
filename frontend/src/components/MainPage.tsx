import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useOnDemandContent } from '../api/fetchOnDemand'
import { OnDemandItem } from '../types/OnDemand'
import Card from './Card'
import Title from './Title'

const MainPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<"highlights" | "fullShows" | null>(null)
  const {data, isLoading, error} = useOnDemandContent()

  const navigate = useNavigate()

      const handleCardClick = (item: OnDemandItem) => {
      navigate('/player', { state: item})
    }
  
    if (error) return <h2>The NINE Radio site is currently down for maintenance</h2>

    if (isLoading) return (
      <div>
        <Title />
        <img src="https://media1.tenor.com/m/tga0EoNOH-8AAAAd/loading-load.gif"  alt="Loading Logo" />
        <h1>Loading available radio clips and shows</h1>
      </div>
      )      
    
    if (selectedCategory) return (
      <>
      <Title />
      {/* not the same as HomeButton because we are using state based rendering for the page */}
      <div className ='button-container'>
        <button onClick={() => setSelectedCategory(null)}>Back to show selection</button>
      </div>

      <div className='card-container'>
        {data?.[selectedCategory]?.map((item: OnDemandItem) => (
          <div onClick={() => handleCardClick(item)}>
          <Card key={item.title} {...item} />
          </div>
        ))
        }
      </div>
      </>
    )
  
    else return (
    <>
    <Title />
      <div className="container">
        <div className="button-container">
          <button onClick={() => setSelectedCategory("highlights")}>Highlights</button>
          <button onClick={() => setSelectedCategory("fullShows")}>Full Shows</button>
        </div>
      </div>
    </>
    )

}
export default MainPage