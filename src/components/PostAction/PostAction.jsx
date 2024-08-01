import React, { useState } from 'react'

function PostAction({actionIcon, actionCount, activeIcon, activeColor}) {
    const [changeAction, setchangeAction] = useState(false)
    const handleClickAction = () =>  {
        setchangeAction(!changeAction)
    } 
  return (
    <li onClick={handleClickAction} className='cursor-pointer pl-[80px] pt-[20px] items-center space-x-[5px] flex'>
        <img  src={changeAction ? activeIcon : actionIcon} alt="Post Icon" width={24} height={24} />
        <span className={`${changeAction ? activeColor : "text-gray-500"}`}>
          {actionCount ==0 ? changeAction ? actionCount + 1 : actionCount : ""}</span>
    </li>
  )
}

export default PostAction
