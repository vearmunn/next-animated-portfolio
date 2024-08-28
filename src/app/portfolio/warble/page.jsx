import PortofolioDetail from '@/components/portfolioDetail'
import React from 'react'

const ChatAppDetailPage = () => {
  return (
    <PortofolioDetail
      title="Warble Social Media"
      imgUrl="warble"
      repoUrl="https://github.com/vearmunn/warble_social_media"
      descripton=
      <div>
        Warble is a straightforward social media platform designed to bring people together. Share your moments, stay updated with friends and family, and discover new connections—all in one easy-to-use app. This app utilizes a state management called GetX, Firebase as its backend.
        <ul className='mt-5 flex flex-col gap-2'>
          <li>Features:</li>
          <li>- Create Posts: Share text updates to express yourself and keep your friends in the loop.</li>
          <li>- Like and Comment: Engage with your friends' posts by liking and commenting to show your support and stay connected.</li>
          <li>- Follow Friends and Discover New People: Build your network by following friends and finding new people to connect with.</li>
          <li>- Activity Feed: See all the latest posts and updates from the people you follow in one convenient place.</li>
        </ul>
      </div>
    />
  )
}

export default ChatAppDetailPage