const Quote = () => {
    return (
      <div className="bg-[url('/hands-up.png')] w-screen h-96 bg-no-repeat bg-cover flex items-center justify-center">
        <p className='font-MVBoli font-bold w-[80%] xl:w-[40%] text-2xl flex flex-col items-end'>
          Music is good to the melancholy, bad to those who mourn, and neither
          good nor bad to the deaf.{' '}
          <span className='float-right mt-3'>-Baruch Spinoza</span>
        </p>
      </div>
    );
}

export const Quote2 = () => {
  return (
    <div className="bg-[url('/drum-bass.png')] w-screen h-96 bg-no-repeat bg-cover flex items-center justify-center">
      <p className='font-MVBoli font-bold w-[80%] xl:w-[40%] text-2xl flex flex-col items-end'>
        “One good thing about music, when it hits you, you feel no pain.
        <span className='float-right mt-3'>-Bob Marley</span>
      </p>
    </div>
  );
};

export default Quote