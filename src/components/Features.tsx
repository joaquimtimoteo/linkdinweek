import React from 'react'
import Feature from './Feature'
import CountdownTimer from "./CountdownTimer";

const features = [
  {
    title: "Effortless Networking & Connections",
    description: "Seamlessly connect with mentors, peers, and professionals to expand your network and unlock new opportunities during LinkedIn Week."
  },
  {
    title: "Goal Achievement and Progress Tracking",
    description: "Set clear goals, track your progress, and stay motivated as you advance through LinkedIn Week activities and milestones."
  },
  {
    title: "Enhanced Data Security and Privacy",
    description: "Your information remains secure with us. We prioritize privacy and ensure that your data is protected throughout LinkedIn Week."
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
          <p className='text-center mt-5 text-xl text-white/70'>Unlock smarter productivity during LinkedIn Week! Experience customizable task lists, seamless team collaboration, and intuitive progress tracking—all in one place. Take charge of your goals and elevate your professional journey effortlessly.</p>
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