
import img1 from '../../assets/images/pexels-photo-1805600.jpeg';
import img2 from '../../assets/images/pexels-photo-1813346.jpeg';
import img3 from '../../assets/images/pexels-photo-1836983.jpeg';
import img4 from '../../assets/images/pexels-photo-2809652.jpeg';
import Nav from '../Nav/Nav';
import './Home.css';

function Home() {
  return (
    <div className='flex_column'>
      <Nav />
      <div className='main_title'><h3>Barbershop.</h3></div>
      <div className='main_images'>
        <div className='image_container'>
          <img src={img1} alt="barbershop"/>
        </div>
        <div className='image_container'>
          <img src={img2} alt="barbershop"/>
        </div>
        <div className='image_container'>
          <img src={img3} alt="barbershop"/>
        </div>
        <div className='image_container'>
          <img src={img4} alt="barbershop"/>
        </div>
      </div>
      <div className='book_appointment'>
        <div className='book_appointment_items'>
        <h3>Book your appointment now.</h3>
        <button>Schedule</button>
        </div>
      </div>
      
    </div>
  )
}

export default Home