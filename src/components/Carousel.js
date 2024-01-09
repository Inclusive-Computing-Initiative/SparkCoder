import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

function CustomPrevArrow(props) {
  const { onClick } = props;
  return (
    <button
      className="carouselarrow"
      style ={{left: "-5%", display: 'flex', alignItems: 'center' }}
      onClick={onClick}
    >
      <ArrowBackIosNewIcon/>
    </button>
  );
}

function CustomNextArrow(props) {
  const { onClick } = props;
  return (
    <button
      className="carouselarrow"
      style ={{right: "-5%", display: 'flex', alignItems: 'center' }}
      onClick={onClick}
    >
      <ArrowForwardIosIcon/>
    </button>
  );
}

export default function Carousel(props) {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      prevArrow: <CustomPrevArrow />,
      nextArrow: <CustomNextArrow />
    };

    return (
      <div>
        <Slider {...settings}>
            {props.children}
        </Slider>
      </div>
    );
  }
