import Hero from '../components/sections/home/Hero';
import Pilgrimage from '../components/sections/home/Pilgrimage';
import Tourism from '../components/sections/home/Tourism';
import WhyChooseUs from '../components/sections/home/WhyChooseUs';
import Lecture from '../components/sections/home/Lecture';
import Journey from '../components/sections/home/Journey';
import Testimonial from '../components/sections/home/Testimonial';
import Next from '../components/sections/home/Next';
import FAQ from '../components/sections/home/FAQ';
import CTA from '../components/sections/home/CTA';
import Footer from '../components/sections/home/Footer';

const Home = () => {
    return (
        <main>
            <Hero />
            <Pilgrimage />
            <Tourism />
            <WhyChooseUs />
            <Lecture />
            <Journey />
            <Testimonial />
            <Next />
            <FAQ />
            <CTA />
            <Footer />
        </main>
    );
}

export default Home;