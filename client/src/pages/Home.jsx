import React from 'react';
import HeroSection from '../components/HeroSection.jsx';
import ArtCard from '../components/ArtCard.jsx';
import ReviewCard from '../components/ReviewCard.jsx';
import UpdateCard from '../components/UpdateCard.jsx';
import ContactForm from '../components/ContactForm.jsx';
import Image1 from '../assests/Images/Emerald Vision.avif'
import Image2 from '../assests/Images/Legacy Stroke.jpg'
import Image3 from '../assests/Images/Mystic Flow.jpeg'
import Image4 from '../assests/Images/Stone Grace.jpg'
import Review1 from '../assests/Images/Review1.jpg'
import Review2 from '../assests/Images/Review2.jpg'
import Review3 from '../assests/Images/Review3.jpg'
import Dp1 from '../assests/Images/Dp1.jpg'
import Dp2 from '../assests/Images/Dp2.jpg'
import Dp3 from '../assests/Images/Dp3.jpg'
import Update1 from '../assests/Images/Update1.avif';
import Update2 from '../assests/Images/Update2.avif';
import Update3 from '../assests/Images/Update3.jpg';




function Home() {
  return (
    <div className="home-page">
      <HeroSection />

      <section className="home-section">
        <div className="art-collection">
          <ArtCard
            image={Image1}
            title="Royal Portrait"
            description="A legacy of Indian royalty"
            onBuy={() => alert('Added to cart')}
          />
          <ArtCard
            image={Image2}
            title="Heritage Sculpture"
            description="Crafted from tradition"
            onBuy={() => alert('Added to cart')}
          />
           <ArtCard
            image={Image3}
            title="Royal Portrait"
            description="A legacy of Indian royalty"
            onBuy={() => alert('Added to cart')}
          />
           <ArtCard
            image={Image4}
            title="Royal Portrait"
            description="A legacy of Indian royalty"
            onBuy={() => alert('Added to cart')}
          />
        </div>
      </section>

  <section className="reviews" id="reviews">
  <h2 className="review-title">What Our Clients Say</h2>
  <div className="review-scroll-container">
    <ReviewCard
      image={Review1}
      reviewer="Amelia R."
      rating="★★★★★"
      dp={Dp1}
      review="The quality and attention to detail on every piece is simply breathtaking."
    />
    <ReviewCard
      image={Review2}
      reviewer="Jonathan M."
      rating="★★★★☆"
      dp={Dp2}
      review="legARTsy truly captures the spirit of legacy and art. A fantastic experience!"
    />
    <ReviewCard
      image={Review3}
      reviewer="Priya K."
      rating="★★★★★"
      dp={Dp3}
      review="I ordered a custom sculpture and it exceeded all my expectations."
    />
  </div>
</section>


<section className="update-news">
      <div className="up-center-text">
        <h2>News Update</h2>
      </div>
      <div className="update-cart">
        <UpdateCard
          image={Update1}
          date="5 March 2023"
          title="Spring Season Art Sale"
          description="Celebrate spring with our exclusive art sale! Fresh sculptures and vibrant prints are available to bring seasonal energy into your space."
        />
        <UpdateCard
          image={Update2}
          date="20 June 2023"
          title="New Gallery Wing Opened"
          description="We just opened a new wing dedicated to emerging artists from across the globe. Come experience the future of sculpture and mixed media!"
        />
        <UpdateCard
          image={Update3}
          date="12 July 2023"
          title="Sculpture Workshop Highlights"
          description="Our summer workshop was a success! Dozens of participants crafted their first clay sculptures with guidance from top artists."
        />
      </div>
    </section>

      <ContactForm />
    </div>
  );
}

export default Home;
