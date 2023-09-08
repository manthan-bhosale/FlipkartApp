import Carousel from 'react-multi-carousel';
import { bannerData } from '../Constants/Data';
import './Banner.css';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Bannner = () => {
  return (
    <Carousel
      className="banner"
      responsive={responsive}
      swipeable={false}
      draggable={false}
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={4000}
    >
      {bannerData.map((data, index) => (
        <img className="banner-img" src={data.url} alt="banner" key={index} />
      ))}
    </Carousel>
  );
};

export default Bannner;
