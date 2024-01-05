import { useState } from 'react';
import './index.css';
import NavBar from './components/NavBar';
import StepNo1 from './assets/stepno1.svg';
import StepNo2 from './assets/stepno2.svg';
import StepNo3 from './assets/stepno3.svg';


function RewardMainPage() {
  return (
  <div className='bg-[url("./assets/xl-hero-desktop_2023.png")] w-full h-[60vh] max-md:h-[100vh] bg-left bg-cover bg-no-repeat flex justify-start items-center pl-40 max-lg:justify-center max-lg:pl-0'>
        <div className="max-lg:text-center max-lg:flex max-lg:items-center max-lg:flex-col">
          <h1 className='font-bold uppercase w-[230px] text-[30px] max-lg:'>Free coffee is a tap away</h1>
          <p className='font-medium mt-4 text-[18px]'>Join now to start collecting Stars.</p>
          <button className=' text-[18px] px-[20px] py-[5px] bg-Starbucks text-white rounded-[20px] font-semibold mt-10 mb-2'>Join now</button><br />
          <a className='underline font-medium text-[18px]' href="#">Download and join in the app</a>
          <p className='font-medium text-[18px]'>for the best experience.</p>
        </div>
    </div>
  );
}

function GettingStartedPage() {

  const [step, setStep] = useState([
    {
      image: StepNo1,
      title: "Create an account",
      description: "To get started, join now. join in the app to get access to the full range of Starbucks® Rewards benefits."
    },
    {
      image: StepNo2,
      title: "Create an account",
      description: "To get started, join now. join in the app to get access to the full range of Starbucks® Rewards benefits."
    },
    {
      image: StepNo3,
      title: "Create an account",
      description: "To get started, join now. join in the app to get access to the full range of Starbucks® Rewards benefits."
    },

  ]);


  return (
    <div className='p-10'>
      <div className='text-center mb-10'>
        <h1 className='text-[28px] font-bold mb-2'>Getting started is easy</h1>
        <p className='text-[15px] font-medium'>Collect Stars and get rewarded in a few steps</p>
      </div>

      <div className='flex justify-around items-center gap-10 px-20 max-lg:flex-col max-lg:px-0'>
        {step.map((step) => {
          return (
            <div className='flex flex-col justify-center items-center text-center mt- gap-2 max-lg:flex-row max-lg:text-start'>
              <img className='w-[51px]' src={step.image} alt={StepNo1} />
              <div className='max-lg:ml-8'>
                <h1 className='font-bold text-[18px] mb-4'>{step.title}</h1>
                <p>{step.description}</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  );
}


function App() {
  return (
    <>
      <NavBar />
      <RewardMainPage />
      <GettingStartedPage />
    </>
  )
}

export default App;
