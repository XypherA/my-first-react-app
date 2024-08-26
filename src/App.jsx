import Header from './Header'
import './App.css'
import Nav from './Nav'
import Mains from './Mains'
import Footer from './Footer'
import Button from './Button'
import TopPicture from './assets/TopPicture.jpg'
import Specials from './Specials'
import Testimonials from './Testimonials'
import AboutUs from './AboutUs'

function App() {

  return (
    <>
     <Header/>
     <Nav/>
     <div className='top-container'>
        <div className='container-one'>
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist. </p>
        <Button name="Reserve a table"/>
        </div>
        <div className='container-one'>
          <img className='top-image' src={TopPicture} alt="" />
        </div>
     </div>
     <Specials/>
     <Testimonials/>
     <AboutUs/>
     <Mains/>
     <Footer/>
    </>
  )
}

export default App
