import TourismHero from '../components/sections/tourism/TourismHero';
import Support from '../components/sections/tourism/Support';
import TravelPlaces from '../components/sections/tourism/TravelPlaces';
import Travel from '../components/sections/tourism/Travel';
import TripPlan from '../components/sections/tourism/TripPlan';
import Next from '../components/sections/tourism/Next';
import Journey from '../components/sections/tourism/Journey';
import FAQ from '../components/sections/tourism/FAQ';
import CTA from '../components/sections/tourism/CTA';
import Footer from '../components/sections/home/Footer';

const Tourism = () => {
  return (
    <main>
        <TourismHero />
        <Support />
        <TravelPlaces />
        <Travel />
        <TripPlan />
        <Next />
        <Journey />
        <FAQ />
        <CTA />
        <Footer />
    </main>
  )
}

export default Tourism