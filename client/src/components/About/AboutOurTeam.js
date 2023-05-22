import React from 'react'
import TeamCard from '../../Crads/TeamCard'
import { ExecutiveManagementData, GovernanceData, OperationsData, SupportData } from '../../constants/AboutUsData'
import { Divider } from 'antd'

const AboutOurTeam = () => {
  return (
    <div className='sm:px-16 px-4 py-20 bg-[#E8E8E8]'>
        <div className='lg:text-5xl text-2xl sm:pb-4 text-[#111439] font-semibold'>
            Our Team
        </div>
            <div>
                <div className='flex flex-col lg:flex-row py-4 sm:py-8'>
                    <div className='flex flex-row  w-1/3'>
                        <div className='hover:text-[#FF731D] text-[#11143980] text-2xl font-medium pb-4 sm:pb-0'>
                            Governance
                            <Divider className='hidden lg:block hover:bg-[#FF731D] bg-[#11143980] h-[2px] w-[171px] sm:w-[325px]'/>
                        </div>
                    </div>
                    <div className='w-full grid grid-cols-3 lg:grid-cols-4 pt-'>
                        {GovernanceData.map((items,index) => (
                            <TeamCard items={items} key={index}/>
                        ))}
                    </div>
                </div>
                <div className='flex flex-col lg:flex-row sm:py-8'>
                    <div className='flex flex-col w-1/3'>
                        <div className='hover:text-[#FF731D] text-[#11143980] text-2xl font-medium pb-4 sm:pb-0'>
                            Executive Management
                            <Divider className='hidden lg:block hover:bg-[#FF731D] bg-[#11143980] h-[2px] w-[171px] sm:w-[325px]'/>
                        </div>
                    </div>
                    <div className='w-full grid grid-cols-3 lg:grid-cols-4'>
                        {ExecutiveManagementData.map((items,index) => (
                            <TeamCard items={items} key={index}/>
                        ))}
                    </div>
                </div>
                <div className='flex flex-col lg:flex-row sm:py-8'>
                    <div className='flex flex-col w-1/3'>
                        <div className='hover:text-[#FF731D] text-[#11143980] text-2xl font-medium pb-4 sm:pb-0'>
                            Operations
                            <Divider className=' hidden lg:block hover:bg-[#FF731D] bg-[#11143980] h-[2px] w-[171px] sm:w-[325px]'/>
                        </div>
                    </div>
                    <div className='w-full grid grid-cols-3 lg:grid-cols-4'>
                        {OperationsData.map((items,index) => (
                            <TeamCard items={items} key={index}/>
                        ))}
                    </div>
                </div>
                <div className='flex flex-col lg:flex-row py-8'>
                    <div className='flex flex-col w-1/3'>
                        <div className='hover:text-[#FF731D] text-[#11143980] text-2xl font-medium pb-4 sm:pb-0'>
                            Support
                            <Divider className='hidden lg:block hover:bg-[#FF731D] bg-[#11143980] h-[2px] w-[171px] sm:w-[325px]'/>
                        </div>
                    </div>
                    <div className='w-full grid grid-cols-3 lg:grid-cols-4'>
                    {SupportData.map((items,index) => (
                            <TeamCard items={items} key={index}/>
                        ))}
                    </div>
                </div>
            </div>
        </div>
  )
}

export default AboutOurTeam