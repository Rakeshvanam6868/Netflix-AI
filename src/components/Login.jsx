import {useState} from 'react';
import Header from './Header';

const Login = () => {
  const [isSignInForm, setIsSignForm] = useState(true);

  const toggleSignInForm= ()=>{
     setIsSignForm(!isSignInForm);
  }
  return (
    <div className="relative">
      <Header />
      <div className="absolute w-full h-dvh">
        <img
          className="w-full h-dvh   "
          src="https://assets.nflxext.com/ffe/siteui/vlv3/b2c3e95b-b7b5-4bb7-a883-f4bfc7472fb7/19fc1a4c-82db-4481-ad08-3a1dffbb8c39/IN-en-20240805-POP_SIGNUP_TWO_WEEKS-perspective_WEB_24a485f6-1820-42be-9b60-1b066f1eb869_small.jpg"
          alt=""
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 w-full h-dvh"></div>
      </div>
      <div className="flex justify-center items-center  pt-96">
      <form action="" className="absolute bg-black bg-opacity-70 p-16 flex gap-4 flex-col rounded-sm mt-10">
        <h1 className="text-white text-4xl font-bold mb-1">{isSignInForm? "Sign In" : "Sign up"}</h1>
       {!isSignInForm && <input type="text" 
          placeholder='Full Name'
          className='p-4 mt-2 w-80 h-14 border border-gray-500  bg-neutral-800 bg-opacity-40 rounded-sm text-white'
        />}
        <input type="text" 
          placeholder='Email or mobile number'
          className='p-4 mt-2 w-80 h-14 border border-gray-500  bg-neutral-800 bg-opacity-40 rounded-sm text-white'
        />
         <input type="text" 
          placeholder='Password'
          className='p-2 mt-1 w-80 h-14 border  border-gray-500  bg-neutral-800 bg-opacity-40 rounded-sm text-white'
        />
        <button className="mt-1 w-80 h-10 bg-red-600 text-white text-lg font-medium rounded-md">
        {isSignInForm? "Sign In" : "Sign up"}
        </button>
        {isSignInForm && <p className='text-gray-300 ml-36'>OR</p>}
        {isSignInForm && <button className="mt-1 w-80 h-10 bg-slate-100 bg-opacity-20 text-white text-lg font-medium rounded-md">
          Use a sign-in code
        </button>}
        {isSignInForm && <p className="text-center text-white text-base">Forgot password?</p>}
        {isSignInForm && <div className="flex gap-2">
          <input type="checkbox" name="" id="" className=' w-5  '/>
         <label htmlFor="" className="text-white">Remember me</label>
        </div>}
        <p className="text-gray-400">{isSignInForm? "New to Netflix?" : "Already registered?"} <span className=' text-white cursor-pointer' onClick={toggleSignInForm}>{!isSignInForm? "Sign In Now" : "Sign up Now"}</span></p>
        <div className="">
        <p className='text-gray-400 text-sm'>This page is protected by Google reCAPTCHA </p>
        <p className='text-gray-400 text-sm ;'>to ensure you're not a bot. <span className='text-blue-700'>Learn more.</span></p>
        </div>
      </form>
      </div>
    </div>
  );
}

export default Login;
