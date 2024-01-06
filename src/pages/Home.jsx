import Contents from '../components/Contents';
import Footer from '../components/Footer';
import Overview from '../components/Overview';
import Perspective from '../components/Perspective';
import TeamMembers from '../components/TeamMembers';

const Home = () => {
  return (
    <div id='home'>
      <Perspective />
      <Overview />
      <Contents />
      <TeamMembers />
      <Footer />
    </div>
  );
};

export default Home;
