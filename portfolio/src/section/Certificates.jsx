import React, { useState } from 'react'
import Tabs from '../components/Tabs';
import { motion } from 'framer-motion';
import { CERTIFICATES, CERTIFICATES_TABS } from '../utils/data';
import CertificatesCard from '../components/CertificatesCard';

const Certificates = () => {
  const [tabData, setTabData] = useState(CERTIFICATES);
  const [activeTab, setActiveTab] = useState("all");
  const handleTabValue = (value) => {
    if (value == "all") {
      setTabData(CERTIFICATES);
      setActiveTab("all");
      return;
    }
    const updatedList = CERTIFICATES.filter((skill) => skill.name === value);
    setTabData(updatedList);
    setActiveTab(value);
  }
  return (
    <section id='certificates' className='bg-background mt-20 mx-auto max-w-7xl rounded-lg scroll-mt-20'>
      <div className='container mx-auto p-10'>
        <div className='w-full lg:w-[60vw] mx-auto'>
          <h4 className='sec-title'>
            Certificates
          </h4>
          <p className='text text-center mt-4 leading-6'>Dedicated Computer Science student with experience in full
                                                        stack and backend development. Built academic projects using
                                                        Python, MERN stack, and MySQL with focus on responsiveness
                                                        and clean UI. Curious how software enables real-time systems,
                                                        simulations, and data handling
          </p>

        </div>

        <Tabs 
        tabList={CERTIFICATES_TABS}
        activeTab={activeTab}
        onChange={handleTabValue}
        />
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 min-h-[430px]'>
        {tabData.map((skill, index) => (
          <motion.div key={skill.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <CertificatesCard
               icon={<skill.icon className='w-6 h-6 text-primary' />}
               courseName = {skill.name}
               organization = {skill.organization}
               description = {skill.description}
               link = {skill.link} 
            />
          </motion.div>
        ))}
        </div>
      </div>
    </section>
  )
}

export default Certificates