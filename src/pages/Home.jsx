import Contents from '../components/Contents';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Overview from '../components/Overview';
import Perspective from '../components/Perspective';
import TeamMembers from '../components/TeamMembers';

const Home = () => {
  return (
    <div className='section home-section'>
      <Navbar />
      <Perspective />
      <Overview />
      <Contents />
      <TeamMembers />
      <Footer />
    </div>
  );
};

export default Home;
