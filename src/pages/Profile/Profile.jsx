import React, { useEffect, useState } from 'react'
import ImgProfile from '../../assets/Images/profile-img.png'
import Arrow from '../../assets/Images/arrow.svg'
import BoburAvatar from '../../assets/Images/Avatar.svg'
import { Link } from 'react-router-dom'
import { MapIcon, LinkIcon, BirthIcon, DataIcon } from '../../assets/Images/Icons'

import { Outlet } from 'react-router-dom'

function Profile() {
  const [activeLink, setActiveLink] = useState("Tweets")
  // useEffect(() => {
  // window.localStorage.setItem("location", location.pathname)
  // },[])
  return (
    <div>
      <div className='py-[22px] px-[31px] flex items-center space-x-[40px]'>
        <button>
          <img src={Arrow} alt='Arrow back' width={30} />
        </button>
        <div className='flex flex-col'>
          <strong className='font-bold text-[20px]'>Bobur</strong>
          <p>1,070 Tweets</p>
        </div>
      </div>
      <img src={ImgProfile} alt="Profile Img" width={"100%"} height={280} />
      <div className='flex items-center justify-between px-5'>
        <img className='-mt-[78px]' src={BoburAvatar} alt="Bobur Avatar" width={150} height={150} />
        <button className='w-[120px] py-[10px] border-[1px] rounded-[30px] border-slate-400'>Edit Profile</button>
      </div>
      <div className='mt-[10px] px-[25px]'>
        <h2>Bobur</h2>
        <p>@bobur_mavlonov</p>
        <p>UX&UI designer at <Link className='text-[#1DA1F2]' to={"#"}>@abutechuz</Link></p>
        <div className='flex items-center space-x-[6px] mt-[15px]'>
          <Link to={"#"} className='flex items-center text-[12px] '>
            <MapIcon/>
            <span>Mashag'daman</span>
          </Link>
          <Link to={"#"} className='flex items-center text-[12px] '>
            <LinkIcon/>
            <span className='text-[#1DA1F2]'>t.me/boburjon_mavlonov</span>
          </Link>
          <Link to={"#"} className='flex items-center text-[12px] '>
            <BirthIcon/>
            <span>Born November 24, 2000</span>
          </Link>
          <Link to={"#"} className='flex items-center text-[12px] '>
            <DataIcon/>
            <span>Joined May 2020</span>
          </Link>
        </div>
        <div className='flex items-center space-x-[30px] mt-[15px]'>
          <p>
            <strong className='font-bold'>67 </strong>Following
          </p>
          <p>
            <strong className='font-bold'>47 </strong>Followers
          </p>
        </div>

      </div>
      <div className='mt-[40px] flex items-center justify-between px-[25px] border-b-[1px] border-slate-400'>
        <Link onClick={() => setActiveLink("Tweets")} className={`${activeLink == "Tweets" ? "font-bold border-blue-500" : "border-transparent"} border-b-[4px]`} to={''}>Tweets</Link>
        <Link onClick={() => setActiveLink("Tweets & replies")} className={`${activeLink == "Tweets & replies" ? "font-bold border-blue-500" : "border-transparent"} border-b-[4px]`} to={'tweets-replies'}>Tweets & replies</Link>
        <Link onClick={() => setActiveLink("Media")} className={`${activeLink == "Media" ? "font-bold border-blue-500" : "border-transparent"} border-b-[4px]`} to={'media'}>Media</Link>
        <Link onClick={() => setActiveLink("Like")} className={`${activeLink == "Like" ? "font-bold border-blue-500" : "border-transparent"} border-b-[4px]`} to={'likes'}>Like</Link>
      </div>
      <div>
        <Outlet/>
      </div>
    </div>
  )
}

export default Profile
 