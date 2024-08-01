import React from 'react'
import DotsFrom from '../../assets/Images/Vector.svg'
import BoburIcon from '../../assets/Images/Avatar.svg'


function ProfileItem({userName, userEmail, userBody, isPostImg
}) {
  return (
    <li className='pt-[10px] relative px-[25px] pb-[21px]'>
        <button className='absolute top-[21px] right-[25px]'>
          <img src={DotsFrom} alt="Dots" width={17} height={4} />
        </button>
      <div className='flex space-x-[15px]'>
          <img src={BoburIcon} alt="Bobur Icon" width={60} height={60} />
        <div>
          <div className='flex items-center space-x-[10px]'>
            <strong className='font-bold text-[17px]'>{userName}</strong>
            <p className='text-slate-500 text-[14px]'>{userEmail}</p>
          </div>
          <p className='text-[14px]'>{userBody}</p>
          {isPostImg ? 
         <img className='mt-[15px]' src={isPostImg} alt="ProfileBoburImg" width={"100%"} height={453} />
          : ""}
        </div>
      </div>
      </li>
  )
}

export default ProfileItem
