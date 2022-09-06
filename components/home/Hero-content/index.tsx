import MainHeroContainer from './main-container';
import Logo from './logo';
import Sponsors from './sponsors';

const sponsorsData = [
  'articons_amazon-music.svg',
  'articons_google_play_store.svg',
  'articons_spotify.svg',
  'articons_deezer.svg',
  'articons_app_store.svg',
];

const HeroContainer = () => {
  return (
    <div>
      <Logo />

      <MainHeroContainer>{sponsorsData.map((each, index) => {
          return <Sponsors image={each} key={index} />;
      })}</MainHeroContainer>
    </div>
  );
};


export default HeroContainer;