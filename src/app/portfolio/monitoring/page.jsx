import PortofolioDetail from '@/components/portfolioDetail'
import React from 'react'

const ChatAppDetailPage = () => {
  return (
    <PortofolioDetail
      title="Aplikasi Monitoring PKL"
      imgUrl="monitoring"
      repoUrl="https://github.com/vearmunn/app_monitoring_pkl"
      descripton=
      <div>
        This app is the ultimate internship companion app designed to help students and teachers stay informed and engaged with all internship activities. With a user-friendly interface and a variety of essential features, Aplikasi Monitoring PKL makes managing intership monitoring easier and more efficient. This app utilizes BLOC state management and supabase as its backend.
        <ul className='mt-5 flex flex-col gap-2'>
          <li>Features:</li>
          <li>- Guidance(Bimbingan): Take notes every time you finish an internship guidance with your professors.</li>
          <li>- Scheduling(Penjadwalan): Easily view when a student will have their thesis defence.</li>
          <li>- Assesment(Penilaian): Post thesis defence result for students to see.</li>
          <li>- Registration(Pendaftaran): Register intership for students by filling in their personal data and desired company.</li>
        </ul>
      </div>
    />
  )
}

export default ChatAppDetailPage