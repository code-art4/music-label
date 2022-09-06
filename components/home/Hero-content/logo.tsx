const Logo = () => {
  return (
    <div
      className='absolute w-screen'
      style={{
        left: 0,
        top: 0,
      }}
    >
      <div className='mx-auto w-max'>
        <svg
          width='70'
          height='70'
          viewBox='0 0 70 70'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M0 28.1143C0 34.9986 10.841 56.9972 21.1271 56.9972H21.1274C31.4139 56.9972 42.2907 35.9715 42.2907 27.3207C42.2907 21.8512 37.2031 13 21.0664 13C4.93008 13 0 22.7776 0 28.1143ZM13.6825 29.6548C9.82926 25.4953 7.43777 21.2789 7.43777 21.2789C7.43777 21.2789 11.378 19.317 13.9521 18.793C14.1714 18.7485 14.3951 18.7006 14.6243 18.652C17.0844 18.128 20.1447 17.4767 24.5577 19.061C33.7395 22.3576 37.6543 28.5236 37.6543 28.5236C37.6543 28.5236 31.7455 23.7655 25.2391 22.8101C21.4911 22.2597 14.5195 24.4923 14.5195 24.4923C14.5195 24.4923 16.9427 27.0571 18.915 30.8125C19.2259 31.4045 19.5289 31.9465 19.819 32.4655C21.3689 35.2373 22.5463 37.343 22.5463 42.837C22.5463 46.8453 19.5166 52.8018 19.5166 52.8018C19.5166 52.8018 21.2182 45.0409 19.8458 38.9044C18.8541 34.4684 18.089 33.7859 16.2857 32.177C15.5944 31.5604 14.7503 30.8076 13.6825 29.6548Z'
            fill='#F8F8F8'
          />
        </svg>
      </div>
    </div>
  );
};


export default Logo