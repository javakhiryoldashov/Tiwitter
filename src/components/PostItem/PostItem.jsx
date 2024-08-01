import React from 'react'
import CommentIcon from '../../assets/Images/comment.svg'
import ReweetIcon from '../../assets/Images/retweet.svg'
import LikeIcon from '../../assets/Images/like.svg'
import SendIcon from '../../assets/Images/send.svg'
import ResultIcon from '../../assets/Images/frame2.svg'
import Vector from '../../assets/Images/Vector.svg'
import PostAction from '../PostAction/PostAction'
import TweetActiveIcon from '../../assets/Images/TweetActive.svg'
import LikeActiveIcon from '../../assets/Images/LikeActive.svg'


function PostItem({avatarIcon, userName, userEmail, postBody, commentCount, reweetCount, likeCount, postHeroImg}) {
  return (
    <li className='px-[25px] pt-[30px] pb-[21px] rounded-[1px] border-[#D8D8D8]'>
      <div className='flex items-center'>
        <div className='ml-[15px] flex flex-col'>
          <div className='flex items-center space-x-[150px]'>
            <div className='flex  w-[350px]  space-x-5'>
        <img src={avatarIcon} alt="Posted user Icon" width={60} height={50} />
                <h2 className='text-[#000000] text-[20px] font-bold'>{userName}</h2>
                <p className='text-[18px] pt-[3px] text-[#000000] opacity-60'>{userEmail}</p>
            </div>
        <img 
            className=' mt-[-20px]'
            src={Vector}
            alt='VectorIcon'
            width={17}
            height={4}
        />
          </div>
            <div className='ml-[80px]'>
                <p className='pb-[10px] mt-[-30px] text-[18px] text-[#111]'>{postBody}</p>
            </div>
            {postHeroImg ? 
            <img className='max-w-[550px] mt-[10px] ml-[-20px] max-h-[453px]' src={postHeroImg} alt="Post Hero Img" width={550}height={453} />
            : ""}

            <ul className='mt-[22px] ml-[-60px] flex pr-[10px]'>
                <PostAction activeIcon={CommentIcon} actionIcon={CommentIcon} actionCount={commentCount}/>
                <PostAction activeColor={"text-green-500"} activeIcon={TweetActiveIcon} actionIcon={ReweetIcon} actionCount={reweetCount}/>
                <PostAction activeColor={"text-red-500"} activeIcon={LikeActiveIcon} actionIcon={LikeIcon} actionCount={likeCount}/>
                <PostAction activeIcon={SendIcon} actionIcon={SendIcon}/>
                <PostAction activeIcon={ResultIcon} actionIcon={ResultIcon}/>
            </ul>
        </div>
      </div>
      
    </li>
  )
}

export default PostItem
