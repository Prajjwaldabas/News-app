import Carousel from 'react-bootstrap/Carousel';
import Slider1 from '../../assets/Slider1.webp'
import Slider2 from '../../assets/slider2.avif'
import Slider3 from '../../assets/slider3.jpg'

function Slider() {
  return (
    <Carousel className='position-relative'>
      <Carousel.Item interval={1000} >
        {/* <Slider1 text="First slide" /> */}
        <img src={Slider1} alt="First slide" height={500} width="100%"  />
        <Carousel.Caption class="position-absolute top-50 start-50 translate-middle" >
          <h3 className='text-white'>First slide label</h3>
          <p className='text-white'>  Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
      <img src={Slider2} alt="Second slide"  height={500} width="100%" />
        <Carousel.Caption  class="position-absolute top-50 start-50 translate-middle">
          <h3 className='text-white'>Second slide label</h3>
          <p className='text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={Slider3} alt="Third slide"  height={500} width="100%"/>
        <Carousel.Caption class="position-absolute top-50 start-50 translate-middle">
          <h3 className='text-white'>Third slide label</h3>
          <p className='text-white'>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;