import React, { useState } from 'react'
import Navbar from '../components/Navbar/Navbar'
import { Routes, Route } from 'react-router-dom'

import Home from '../pages/Home/Home'
import Explore from '../pages/Explore/Explore'
import Notifications from '../pages/Notifications/Notifications'
import Messages from '../pages/Messages/Messages'
import Bookmarks from '../pages/Bookmarks/Bookmarks'
import Lists from '../pages/Lists/Lists'
import Profile from '../pages/Profile/Profile'
import More from '../pages/More/More'
import About from '../components/About/About'

import Tweets from '../pages/Profile/ProfileNested/Tweets'
import TweetsReplies from '../pages/Profile/ProfileNested/TweetsReplies'
import Media from '../pages/Profile/ProfileNested/Media'
import Likes from '../pages/Profile/ProfileNested/Likes'

function AuthenticationApp() {
  // const [SearchBug, setSearchBug] = useState(false)
  return (
    <div className='flex container mx-auto px-5'>
      <div className='navbar w-[25%] h-[100vh] overflow-y-auto pt-[33px] pr-[53px]'>
        <Navbar/>
        </div>

      <div className='routes w-[50%] h-[100vh] border-r-[1px] border-l-[1px] overflow-y-auto'>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/explore' element={<Explore/>}/>
            <Route path='/notifications' element={<Notifications/>}/>
            <Route path='/messages' element={<Messages/>}/>
            <Route path='/bookmakrs' element={<Bookmarks/>}/>
            <Route path='/lists' element={<Lists/>}/>
            <Route path='/profile' element={<Profile/>}>
              <Route path='' element={<Tweets/>}/>
              <Route path='tweets-replies' element={<TweetsReplies/>}/>
              <Route path='media' element={<Media/>}/>
              <Route path='likes' element={<Likes/>}/>
            </Route>
            <Route path='/more' element={<More/>}/>
        </Routes>
      </div>

      <div className='about w-[25%] h-[100vh] overflow-y-auto'>
        <About/>
        
      </div>

    </div>
  )
}

export default AuthenticationApp
