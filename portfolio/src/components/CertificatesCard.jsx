import React from 'react'

const CertificatesCard = ({icon, courseName, organization, description, link}) => {
  return (
    <div className='mx-auto max-w-7xl bg-primary rounded-2xl border border-[#fce8d4] p-4'>
      <div className='flex gap-3'>
        <div className='w-10 h-10 flex items-center justify-center bg-gradient-to-b from-[#fdeddd] to-[#ffffff] rounded-[7px]'>{icon}</div>

        <div className='flex-1'>
          <div className='flex items-center justify-between'>
            <p className='text-[13px] text-white font-medium'>{courseName} ({organization})</p>
             {/* View Certificate Link */}
            {link && (
              <a 
                href={link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-xs text-background hover:text-accent"
              >
                View Certificate
              </a>
            )}
          </div>

          <div className='w-full bg-background rounded-md h-[1px] relative mt-2'></div>
        </div>
      </div>

     <p className='text-xs text-accent text-justify leading-5 mt-2'>{description}</p>
    </div>
  )
}

export default CertificatesCard