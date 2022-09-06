import { NextPage } from 'next';
import Image from 'next/image';

const Sponsors: NextPage<{ image: string }> = ({ image }) => {
  return (
    <div className="lg:w-[9rem] md:w-[7rem]">
      <Image
        src={'/' + image}
        width='180'
        height='90'
        objectFit='contain'
        alt={image}
      />
    </div>
  );
};

export default Sponsors;
