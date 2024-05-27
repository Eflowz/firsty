import Hero from '../COMPONENTS/hero';
import Homecards from '../COMPONENTS/HomeCards';
import Joblistings from '../COMPONENTS/joblistings';
import ViewAll from '../COMPONENTS/viewAll';

const Homepage = () => {
    return (
    <>
        <Hero/>
        <Homecards/>
        <Joblistings isHome = {true}/>
        <ViewAll/>
    </>
    );
};

export default Homepage;