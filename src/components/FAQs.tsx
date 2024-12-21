"use client";
import { useState } from "react"
import PlusIcon from "../assets/icons/plus.svg"
import MinusIcon from "../assets/icons/minus.svg"
import clsx from "clsx";
import { AnimatePresence, motion } from "framer-motion";

const items = [
  {
    question: "What are the key benefits of participating in LinkedIn Week mentorship?",
    answer: "Participating in LinkedIn Week gives you access to experienced mentors, personalized feedback, skill development, and the opportunity to connect with like-minded professionals. You'll expand your network, gain valuable insights, and accelerate your professional growth."
  },
  {
    question: "How can I earn the LinkedIn Week certificate?",
    answer: "To earn your certificate, ensure active participation in sessions, engage with mentors and peers, and complete any assigned activities. Following the provided guidelines and being actively involved will help you secure your certificate."
  },
  {
    question: "Do LinkedIn Week certificates hold any value or recognition?",
    answer: "Yes, LinkedIn Week certificates serve as proof of your professional development. They can be showcased on your LinkedIn profile, demonstrating your commitment to learning and growth, and enhancing your credibility in your professional field."
  },
  {
    question: "Are there any additional perks for highly engaged participants?",
    answer: "Absolutely! Highly engaged participants may receive bonuses like exclusive event invitations, premium networking opportunities with mentors, access to additional resources, and recognition in LinkedIn Week publications or groups."
  }
];


const AccordionItem = ({ question, answer } : { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="py-7 border-b border-white/30">
      <div className="flex items-center" onClick={() => setIsOpen(prev => !prev)}>
        <span className="flex-1 text-lg font-bold">{question}</span>
        { isOpen ? <MinusIcon /> : <PlusIcon /> }
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className={clsx({
              "hidden": !isOpen,
              "": isOpen === true,
            })}
            initial={{ opacity: 0, height: 0, marginTop: 0 }}
            animate={{ opacity: 1, height: "auto", marginTop: 16 }}
            exit={{ opacity: 0, height: 0, marginTop: 0 }}
          >
            {answer}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export const FAQs = () => {
  
  return (
    <div className="bg-black text-white bg-gradient-to-b from-[#5D2CA8] to-black py-[72px] sm:py-24">
      <div className="container">
        <h2 className="text-center text-5xl sm:text-6xl sm:max-w-[648px] mx-auto font-bold tracking-tighter">Frequently asked questions</h2>
        <div className="mt-12 max-w-[648px] mx-auto">
          {items.map((item, index) => (
            <AccordionItem key={index} question={item.question} answer={item.answer} />
          ))}
        </div>
      </div>
    </div>
  )
}