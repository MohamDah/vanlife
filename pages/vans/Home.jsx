import { Link } from "react-router-dom"

export default function Home() {
  return (
    <main className="home-main">
      <h1 className="home-main--title">You got the travel plans, we got the travel vans.</h1>
      <p className="home-main--subtitle">
        Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.
      </p>
      <Link to="/vans">
        <button className="home-main--button">Find your van</button>
      </Link>
    </main>
  )
}