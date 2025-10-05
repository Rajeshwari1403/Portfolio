import React, { useState } from 'react'
import icon_1 from '../assets/Images/icon.jpg'
import I2 from '../assets/Images/backend.png'
import I1 from '../assets/Images/javascript.png'
import I3 from '../assets/Images/Program.png'
import I4 from '../assets/Images/frontend.png'
import { STATS } from '../utils/data'
import StatInfoCard from '../components/StatInforCard'

const Hero = () => {
  const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";
  const [showConfirm, setShowConfirm] = useState(false);

  const handleDownloadClick = (e) => {
    e.preventDefault(); // prevent direct navigation
    setShowConfirm(true); // show popup
  };

const confirmDownload = () => {
  setShowConfirm(false);
  window.open(`${API_URL}/download-resume`, "_blank");
};



  return (
    <section id='hero' className='container mx-auto max-w-7xl px-8 scroll-mt-28'>
      <div className='flex flex-col lg:flex-row gap-14 items-center justify-between mt-[80px]'>
        <div className='order-2 lg:order-1 text-center lg:text-left mt-16 lg:mt-0'>
          <h3 className='text-xl lg:text-2xl font-medium text-black'>👋 Hi, I'm Rajeshwari R</h3>
          <h1 className='w-full lg:w-[480px] text-3xl lg:text-5xl font-bold leading-[50px] lg:leading-[60px] mt-3 bg-primary bg-clip-text text-transparent'>
            Full-Stack & Automation
          </h1>
          <p className='w-full lg:w-[500px] text-sm lg:text-base mt-4'>
            Passionate about full-stack development, automation, and AI, constantly refining skills to build efficient solutions.
          </p>
          <div className='flex justify-center lg:justify-start gap-4 md:gap-8 mt-6'>
            <button
              onClick={() => {
                const element = document.getElementById('about');
                if (element) element.scrollIntoView({ behavior: 'auto' });
              }}
              className='flex-1 md:flex-none action-btn-outline btn-scale-anim'
            >
              View My work
            </button>
            {/* Instead of direct link, show popup */}
            <button 
              onClick={handleDownloadClick} 
              className="flex-1 md:flex-none action-btn btn-scale-anim"
            >
              Download Resume
            </button>
          </div>
        </div>
        
        {/* Profile Image Section */}
        <div className='w-[250px] md:w-[320px] h-[280px] md:h-[358px] bg-blue-100/100 rounded-3xl relative order-1 lg:order-2'>
          <img src={icon_1} alt='Profile_Pic' className='profile-pic' />
          <img src={I1} alt='Icon 1' className='icon-img -left-10 bottom-20 rotate-[1.75deg]' />
          <img src={I2} alt='Icon 2' className='icon-img left-5 md:left-10 -bottom-12 rotate-[2.75deg]'/>
          <img src={I3} alt='Icon 3' className='icon-img left-[110px] md:left-[170px] -bottom-16 rotate-[3.75deg]'/>
          <img src={I4} alt='Icon 4' className='icon-img left-[200px] md:left-[285px] -bottom-9 md:bottom-10 rotate-[4.75deg]'/>
        </div>
      </div>

      <div className='flex gap-12 mt-16 md:mt-24 flex-wrap'>
        {STATS.map((item) => (
          <StatInfoCard key={item.id} count={item.count} label={item.label} />
        ))}
      </div>

      {/* Confirmation Popup */}
      {showConfirm && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-xl shadow-lg text-center w-[300px]">
            <h2 className="text-lg font-semibold mb-4">Do you want to download the resume?</h2>
            <div className="flex justify-center gap-4">
              <button 
                onClick={confirmDownload} 
                className="bg-primary hover:bg-white hover:text-primary hover:border-2 hover:border-primary hover:font-semibold text-white px-4 py-2 rounded-lg"
              >
                Yes
              </button>
              <button 
                onClick={() => setShowConfirm(false)} 
                className="bg-gray-300 hover:bg-black hover:text-white border-2 border-black px-4 py-2 rounded-lg"
              >
                No
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default Hero
