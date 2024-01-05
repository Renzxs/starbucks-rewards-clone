import './index.css';
import NavBar from './components/NavBar';

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
  return (
    <div className='p-10'>
      <div className='text-center'>
        <h1 className='text-[28px] font-bold mb-2'>Getting started is easy</h1>
        <p className='text-[15px] font-medium'>Collect Stars and get rewarded in a few steps</p>
      </div>
      <div>

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
