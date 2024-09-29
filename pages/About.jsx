import aboutImage from "../images/aboutPage.png"

export default function About() {
  return (
    <>
      <div className="about-img-container">
        <img className="about-img" src={aboutImage} alt="image of a van" />
      </div>
      <main className="about-main">
        <h1 className="about-main--title">Don’t squeeze in a sedan when you could relax in a van.</h1>
        <div className="about-main--subtitle">
          <p>Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch.
            <span>(Hitch costs extra 😉)</span>
          </p>

          <p>Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.</p>
        </div>
        <div className="about-main--block">
          <h2>Your destination is waiting.
            <span>Your van is ready.</span></h2>
          <button>Explore our vans</button>
        </div>


      </main>
    </>
  )
}