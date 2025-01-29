import { Link } from "../Link";

export default function HomePage() {
    return (
      <>
        <h1>
          Home Pages
        </h1>
        <p>React Router from Scratch</p>
        <Link to='/about'>Go to  About us</Link>
      </>
    )
  }