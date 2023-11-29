import Footer from "../components/Footer"
import Header from "../components/Header"
import AboutSection from "../components/Home/About"
import Chooseus from "../components/Home/chooseus"
import PageTitle from "../components/PageTitle"

const About = ()=>{
  return(
    <>   
    <Header />
    <PageTitle title="About us" />
    <AboutSection />
    <Chooseus />
    <Footer />
    </>

  )
}

export default About