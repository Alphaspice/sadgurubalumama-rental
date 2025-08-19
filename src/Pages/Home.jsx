import Hero from "../components/Hero";
import BookCar from "../components/BookCar";
import PickCar from "../components/PickCar";
import Banner from "../components/Banner";
import Faq from "../components/Faq";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Hero />
      <BookCar />
      {/* <PlanTrip /> */}
      <PickCar />
      <Banner />
      {/* <ChooseUs /> */}
      {/* <Testimonials /> */}
      <Faq />
      {/* <Download /> */}
      <Footer />
    </>
  );
}

export default Home;
