import PortofolioDetail from '@/components/portfolioDetail'
import React from 'react'

const ChatAppDetailPage = () => {
  return (
    <PortofolioDetail
      title="Quiz Odyssey"
      imgUrl="quiz_odyssey"
      repoUrl="https://github.com/vearmunn/quiz_odyssey"
      descripton=
      <div>
        Quiz Odyssey is a quiz application designed for those who seek to challenge their intellect and broaden their horizons. Offering a diverse range of categories—from history and science to arts and entertainment—our app caters to users of all interests and knowledge levels. Quiz Odyssey implements GetX as the state management, Firebase as its authentication and storage, also it fetchs quizzes from Open Trivia DB API.
        <ul className='mt-5 flex flex-col gap-2'>
          <li>Features:</li>
          <li>- Extensive Category Selection: Choose from a wide array of quiz categories to match your interests and expertise.</li>
          <li>- Multiple Difficulties: There are three difficulties that you can choose from. Easy, Medium and Hard.</li>
          <li>- Global Leaderboards: Compete with users worldwide and track your progress through dynamic leaderboards.</li>
        </ul>
      </div>

    />
  )
}

export default ChatAppDetailPage