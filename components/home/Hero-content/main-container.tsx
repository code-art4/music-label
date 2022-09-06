import { NextPage } from 'next';

const MainHeroContainer: NextPage<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <div className='flex flex-col items-center justify-between h-max md:h-screen pt-2 md:pb-8'>
      <div className="h-[40rem] md:h-[80vh] w-screen bg-[url('/home-section.png')] bg-no-repeat bg-cover flex items-center justify-center">
        <h1 className='uppercase text-5xl lg:text-7xl text-center w-[30rem] lg:w-[28rem] leading-snug font-bold font-Oswald'>
          The show <p className='w-[19rem] mx-auto'>must go on!</p>
        </h1>
      </div>
      <div className='md:flex hidden flex-row justify-between items-center xl:w-[90%] w-full mx-auto'>
        {children}
      </div>
    </div>
  );
};

export default MainHeroContainer;
