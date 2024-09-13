import BestSeller from '../components/BestSeller'
import ChickenGrill from '../components/ChickenGrill'
import Hero from '../components/Hero'
import LenoraFields from '../components/LenoraFields'
import OrientalTaste from '../components/OrientalTaste'
import Statistics from '../components/Statistics'
import Subscribe from '../components/Subscribe'
function Home() {
  return (
    <>
      <Hero></Hero>
      <BestSeller></BestSeller>
      <OrientalTaste></OrientalTaste>
      <Statistics></Statistics>
      <ChickenGrill></ChickenGrill>
      <LenoraFields></LenoraFields>
      <Subscribe></Subscribe>
    </>
  )
}

export default Home