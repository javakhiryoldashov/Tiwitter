import React, { useState } from 'react'
import ModeIcon from '../../assets/Images/Customize.svg'
import BoburAvatar from '../../assets/Images/Avatar.svg'
import Avatar1 from '../../assets/Images/avatar1.svg'
import Avatar2 from '../../assets/Images/avatar2.svg'
import Avatar3 from '../../assets/Images/avatar3.svg'
import FoodImg from '../../assets/Images/food.svg'

import PicFile from '../../assets/Images/card.svg'
import Gif from '../../assets/Images/gif.svg'
import Statistic from '../../assets/Images/stats.svg'
import Smile from '../../assets/Images/smile.svg'
import Date from '../../assets/Images/frame.svg'
import PostItem from '../../components/PostItem/PostItem'


function Home() {
  // useEffect(() => {
  //   window.localStorage.setItem("location", location.pathname)
  //   },[])
     
  const [posts, setPosts] = useState([
 
    {
      id:1,
      avatarIcon:Avatar1,
      userName:'Designsta',
      userEmail:'@inner',
      postBody:'Twitterdagi ayol-erkak qarama-qarshiliginglardan ozinglar zerikmadinglarmi?',
      commentCount:10,
      reweetCount:1,
      likeCount:8,
      postHeroImg:null,
    },
    {
      id:2,
      avatarIcon:Avatar2,
      userName:'cloutexhibition',
      userEmail:'@RajLahoti',
      postBody:"YPIP dasturining bu yilgi sezoni ham o’z nihoyasiga yetmoqda. Mentorlik davomida talaba va yangi bitiruvchilarni o’sayotganini ko’rib hursand bo’ladi odam.",
      commentCount:0,
      reweetCount:5,
      likeCount:9,
      postHeroImg:0,
    },
    {
      id:3,
      avatarIcon:Avatar3,
      userName:'CreativePhoto',
      userEmail:'@@cloutexhibition',
      postBody:"Обетда.....Кечиринглар",
      commentCount:10,
      reweetCount:1,
      likeCount:8,
      postHeroImg:FoodImg,
    },
  ])
 

  const [postImgUrl, setPostImgUrl] = useState(null)
  const handleChangeImg = (evt) => {
    setPostImgUrl(URL.createObjectURL(evt.target.files[0]))
  }

  const handleAddPost = (evt) => {
    evt.preventDefault()
    const data = {
      id:posts.length ? posts[posts.length - 1].id + 1 : 1,
      avatarIcon:BoburAvatar,
      userName:'Bobur',
      userEmail:'@bobur_mavlonov',
      postBody:evt.target.userValue.value,
      commentCount:0,
      reweetCount:0,
      likeCount:0,
      postHeroImg:postImgUrl ? postImgUrl : 0,
    }
    setPosts([data,...posts])
    evt.target.reset()
  }
  return (
    <div>
      <div className='flex items-center justify-between p-[20px] border-b-[1px] border-slate-400'>
        <h2 className='font-bold text-[22px]'>Home</h2>
        <button>
          <img  src={ModeIcon} alt="Mode Icon" width={24} height={22} />
        </button>
      </div>
      <form onSubmit={handleAddPost} className='p-5 pt-2 pb-[48px] border-b-[1px] relative border-slate-400'>
        <div className='w-full'>
        <div className='flex'>

          <img src={BoburAvatar} alt="Bobur Icon" width={60} height={60} />
          <input required name='userValue' className='absalute w-full  p-2 outline-none border-b-[1px] focus:border-b-blue-700 placeholder:text-[18px] font-samibold text-gray-500 ' type="text" placeholder="What's happening" />
        </div>
          <div className='flex mt-[32px] ml-[70px] items-center space-x-[15px]'>
            <label className='w-[24px] h-[24px] cursor-pointer' type='button'>
              <img className='cursor-pointer' src={PicFile} alt="Icon" width={24} height={24} />
              <input onChange={handleChangeImg} className='scale-0 opacity-0' type="file" />
            </label>
            <button type='button'>
              <img src={Gif} alt="Icon" width={20} height={20} />
            </button>
            <button type='button'>
              <img src={Statistic} alt="Icon" width={20} height={20} />
            </button>
            <button type='button'>
              <img src={Smile} alt="Icon" width={20} height={20} />
            </button>
            <button type='button'>
              <img src={Date} alt="Icon" width={20} height={20} />
            </button>
          </div>
        </div>
        <button className='bg-[#1D9BF0] w-[108px] py-[13px] rounded-[40px] text-[20px] opacity-50 hover:opacity-100 transition text-white font-semibold absolute bottom-[5px] right-[18px] '>Tweet</button>
      </form>

      <ul>
        {posts.map(item => (
          <PostItem key={item.id} avatarIcon={item.avatarIcon} userName={item.userName} userEmail={item.userEmail} postBody={item.postBody} commentCount={item.commentCount} reweetCount={item.reweetCount} likeCount={item.likeCount} postHeroImg={item.postHeroImg}/>
        ))}
      </ul>
    </div>
  )
}

export default Home
