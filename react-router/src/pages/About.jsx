import { Link } from "../Link";

export default function AboutPage() {
  return (
    <>
      <h2>
        About Pages
      </h2>
      <p>Hi, my name is Fabriany Orrego</p>
      <img src="https://media.licdn.com/dms/image/v2/D4D35AQEiH2ctAOUK7A/profile-framedphoto-shrink_200_200/profile-framedphoto-shrink_200_200/0/1736784732731?e=1738677600&v=beta&t=rzXI8-2oV0WkOmKV7qOm4aGeNSatFaOPjqsmv4w5_u0" 
            alt='Fabriany'/>
      <Link to='/' >Go to  Home</Link>
    </>
  )
}