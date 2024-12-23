import React from 'react'
import Feature from './Feature'
import CountdownTimer from "./CountdownTimer";

const features = [
  {
    title: "What You'll Master in This Workshop",
    description: "For Students: Build a standout LinkedIn profile before graduation.You want to attract opportunities from global companies"
  },
  {
    title: "For Career Professionals:",
    description: "Optimize your profile to showcase your expertise.Position yourself for international opportunities"
  },
  {
    title: "For Career Starters:",
    description: "Create a magnetic LinkedIn presence from scratch.Attract recruiters from global companies"
  }
];

const Features = () => {
  return (
      <div className='bg-black text-white py-[72px] sm:py-24'>
      <div className="container">
      <div className="mt-16 flex flex-col sm:flex-row gap-4 items-center justify-center">
      <div className="flex items-center">
    
    </div>
    </div>
      <div>
      </div>
        <div> <CountdownTimer /></div>
        <h2 className='text-center font-bold text-4xl sm:text-4xl tracking-tighter'>Everything you need to boost your career</h2>
        <div className="max-w-xl mx-auto">
          <p className='text-center mt-5 text-xl text-white/70'>Join us on December 29th for an exclusive live workshop that will transform your LinkedIn profile into a powerful magnet for job offers – whether you are a student, mid-career professional, or just starting out.
          </p>
        </div>
        <div className='mt-16 flex flex-col sm:flex-row gap-3 '>
          {features.map(({ title, description }) => (
            <Feature title={title} description={description} key={title} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Features