// import { Footer, Navbar } from '../components';
import { Navigation } from '../components/nav'
import { About, Hero } from './sections';

const Home = () => (
  <div className="overflow-hidden">
    <Navigation />
    <Hero />
    <div className="relative">
      <About />
      <div className="z-0" />
    </div>
  </div>
);

export default Home;
