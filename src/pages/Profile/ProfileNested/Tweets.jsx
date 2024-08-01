import React from 'react'
import ProfileBoburImg from '../../../assets/Images/profile-bobur-img.png'
import ProfileItem from '../../../components/ProfileItem/ProfileItem'

function Tweets() {
  return (
    <ul>
      <ProfileItem userBody={"4-kursni tugatgunimcha kamida bitta biznesim bo'lishini, uylanish uchun moddiy jihatdan to'la-to'kis tayyor bo'lishni, sog'lik va jismoniy holatni normallashtirishni reja qildim"} userEmail={"@bobur_movlonov"} userName={"Bobur"}/>

      <ProfileItem userBody={"Bizda shunaqa bir illat bor: gap bo'lsa bo'ldi, nima deyayotganimizga qarab ham o'tirmaymiz."} userEmail={"@bobur_movlonov"} userName={"Bobur"}/>

      <ProfileItem isPostImg={ProfileBoburImg} userBody={"A bo'pti maskamasman"} userEmail={"@bobur_movlonov"} userName={"Bobur"}/>
    </ul>
  )
}

export default Tweets
