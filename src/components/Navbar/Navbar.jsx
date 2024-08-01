import React from 'react'
import NavbarLink from '../NavarLink/NavbarLink'
import Twitter from '../../assets/Images/twitter.svg'
import { Bookmarks, Explore, Home, Lists, Messages, More, Notifications, Profile } from '../../assets/Images/Icons'

function Navbar() {
  return (
    <nav>
        <img src={Twitter} alt="Twitter icon" width={40} height={33} />
        <div className='pt-[35px]'> 

        <NavbarLink url={'/'} title={"Home"}>
            <Home/>
        </NavbarLink>
        <NavbarLink url={'/explore'} title={"Explore"}>
            <Explore/>
        </NavbarLink>
        <NavbarLink url={'/notifications'} title={"Notification"}>
            <Notifications/>
        </NavbarLink>
        <NavbarLink url={'/messengers'} title={"Messengers"}>
            <Messages/>
        </NavbarLink>
        <NavbarLink url={'/bookmakrs'} title={"Bookmakrs"}>
            <Bookmarks/>
        </NavbarLink>
        <NavbarLink url={'/lists'} title={"Lists"}>
            <Lists/>
        </NavbarLink>
        <NavbarLink url={'/profile'} title={"Profile"}>
            <Profile/>
        </NavbarLink>
        <NavbarLink url={'/more'} title={"More"}>
            <More/>
        </NavbarLink>
        </div>
    </nav>
  )
}

export default Navbar
