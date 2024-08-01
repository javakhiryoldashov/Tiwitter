import React from 'react'
import Settings from '../../assets/Images/settings.svg'
import Group from '../../assets/Images/group.svg'
import Profile1 from '../../assets/Images/profile 1.svg'
import Profile2 from '../../assets/Images/profile 2.svg'
import SearchPart from '../../assets/Images/search-part.svg'


function About() {
  return (
    <div>
      <input type='text' placeholder='Search Twitter' className='w-[250px] h-[40px] ml-[20px] mt-[20px] rounded-[30px] bg-[#EFF3F4] outline-none pl-5 pb-1' />


      <div className='w-[250px]  ml-[20px] pt-[20px]'>

      <img className='' src={SearchPart} alt="SearchPart" />
      </div>



      <div className='w-[250px] h-[300px] bg-[#EFF3F4] m-[20px] rounded-[10px]'>
        <div className='flex items-center justify-between p-[10px] pt-[20px]'>
        <h2 className='font-bold text-[24px]'>Trends for you</h2>
        <img src={Settings} alt="Settings" />
        </div>
        <div className='flex flex-col space-y-[10px] p-[10px]'>
        <img src={Group} alt="Group" />
        <img src={Group} alt="Group" />
        <img src={Group} alt="Group" />
        </div>
      </div>  
      <div className='p-[10px] flec-col space-y-5 bg-[#EFF3F4] w-[250px] ml-[20px] rounded-[10px] h-[230px]'>
        <h2 className='font-bold p-[10px] text-[24px]'>You might like</h2>
        <img src={Profile1} alt="profile" />
        <img src={Profile2} alt="profile" />
        </div>  
    </div>
  )
}

export default About
