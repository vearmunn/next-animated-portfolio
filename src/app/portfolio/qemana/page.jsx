import PortofolioDetail from '@/components/portfolioDetail'
import React from 'react'

const ChatAppDetailPage = () => {
  return (
    <PortofolioDetail 
    title="Qemana" 
    imgUrl="qemana"
    repoUrl="https://github.com/vearmunn/qemana"
    descripton=
    <div>
    Qemana is your ultimate travel companion, designed to make your adventures effortless and enjoyable. From planning your itinerary to navigating new destinations, our app provides everything you need for a seamless travel experience. For now backend has not yet been implemented to Qemana.
        <ul className='mt-5 flex flex-col gap-2'>
          <li>Features:</li>
          <li>- Travel Guides and Recommendations: Access curated travel guides and local recommendations to discover top attractions, restaurants, and hidden gems.</li>
          <li>- Trip Management: Organize and manage your trip details in one place, including reservations, itinerary updates, and travel documents.</li>
          <li>- Navigation: Navigate confidently with integrated maps and GPS, providing real-time directions and route information.</li>
        </ul>
      </div>
    />
  )
}

export default ChatAppDetailPage