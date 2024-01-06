import { useState } from 'react';
import './index.css';
import NavBar from './components/NavBar';

import StepNo1 from './assets/stepno1.svg';
import StepNo2 from './assets/stepno2.svg';
import StepNo3 from './assets/stepno3.svg';

import Star25 from './assets/star25.svg';
import TwoB from './assets/2B.svg';

import Star40 from './assets/star40.svg';
import ICGrab from './assets/ic_grabxlaz.svg';

import Star50 from './assets/star50.svg';
import OneA from './assets/1A.svg';


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
      id: crypto.randomUUID(),
      image: StepNo1,
      title: "Create an account",
      description: "To get started, join now. join in the app to get access to the full range of Starbucks® Rewards benefits."
    },
    {
      id: crypto.randomUUID(),
      image: StepNo2,
      title: "Order and pay how you’d like",
      description: "Use cash, credit/debit card or save some time and pay right through the app. You’ll collect Stars all ways."
    },
    {
      id: crypto.randomUUID(),
      image: StepNo3,
      title: "Collect Stars, earn Rewards",
      description: "When you collect Stars, you can redeem them for Rewards — like free food and drinks."
    },

  ]);

  return (
    <div className='p-10'>
      <div className='text-center mb-10'>
        <h1 className='text-[28px] font-bold mb-2 max-sm:text-[20px]'>Getting started is easy</h1>
        <p className='text-[15px] font-medium'>Collect Stars and get rewarded in a few steps</p>
      </div>

      <div className='flex justify-around items-center gap-10 px-20 max-lg:flex-col max-lg:px-0 max-lg:items-start'>
        {step.map((step) => {
          return (
            <div key={step.id}  className='w-[100%] flex flex-col items-center text-center mt- gap-2 max-lg:flex-row max-lg:text-start'>
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


function CardOrCardPage() {

  const [collectStarsDialog, setCollectStarsDialog] = useState([
    {
      id: crypto.randomUUID(),
      img_star: Star25,
      img_action: TwoB,
      title: "Starbucks Card or Mobile app",
      description: "Use a Starbucks Card or your mobile app to pay."
    },
    {
      id: crypto.randomUUID(),
      img_star: Star40,
      img_action: ICGrab,
      title: "Starbucks orders on GrabFood or Lazada",
      description: "Link and check-out your online orders."
    },
    {
      id: crypto.randomUUID(),
      img_star: Star50,
      img_action: OneA,
      title: "Cash, Credit/Debit card or e-Wallet",
      description: "Scan and pay at the register in one step."
    }
  ]);


  
  return (
    <div className="w-full bg-WarmWhite p-10 mt-20 ">
      <div className='text-center mb-14'>
        <h1 className='text-[28px] font-bold mb-2 max-sm:text-[20px]'>Cash or card, you collect Stars</h1>
        <p className='text-[15px] font-medium'>No matter how you pay, you can collect Stars. Those Stars add up to (really delicous) Rewards.</p>
      </div>

      <div className='flex flex-col items-center justify-around gap-10 px-20'>
          {collectStarsDialog.map((dialog) => {
            return (
              <div key={dialog.key} className='flex justify-start align-center gap-10 max-md:gap-5'>
                <img className="w-[150px] max-md:w-[80px] " src={dialog.img_star} alt={dialog.img_star} />
                <img className="w-[100px] max-md:w-[50px]" src={dialog.img_action} alt={dialog.img_action} />
                <div className='w-96 max-md:w-60'>
                  <h1 className='font-bold mb-2 text-[20px] max-md:text-[15px]'>{dialog.title}</h1>
                  <p className='font-medium max-md:text-[12px]'>{dialog.description}</p>
                </div>
              </div>
            );
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
      <CardOrCardPage />
    </>
  )
}

export default App;
