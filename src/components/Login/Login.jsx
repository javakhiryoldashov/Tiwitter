import React from 'react'
import Twitter from '../../assets/Images/twitter.svg'
function Login({setToken}) {

    const handleSubmitLogin = (evt) => {
        evt.preventDefault();
        const data = {
            email:evt.target.email.value,
            password:evt.target.password.value
        }
        setToken(data)
        window.localStorage.setItem("token", JSON.stringify(data))
    }
  return (
      <form onSubmit={handleSubmitLogin} className='w-[450px] mx-auto pt-[60px] flex flex-col'>
        <img className='mb-[36px]' src={Twitter} alt="Twiteer Icon" width={50} height={40} />
        <h1 className='font-bold text-[35px] mb-[36px]'>Login in to Twitter</h1>
        <input name='email' className='p-3 mb-[25px] rounded-md outline-none border-[1px] border-slate-300' type="email" placeholder='Phone number, email address' />
        <input name='password' className='p-3 mb-[25px] rounded-md outline-none border-[1px] border-slate-300' type="password" placeholder='Password' />
        <button className='bg-blue-400 p-3 rounded-[20px] text-white font-semibold'>Log in</button>
      </form>
  )
}

export default Login
