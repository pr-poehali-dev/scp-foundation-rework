import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import FeaturedObjects from "@/components/home/FeaturedObjects";
import AboutSection from "@/components/home/AboutSection";
import StoriesSection from "@/components/home/StoriesSection";

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <FeaturedObjects />
        <AboutSection />
        <StoriesSection />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;