import Carousel from 'react-multi-carousel';

const _multi = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1
  }
};

const _single = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    slidesToSlide: 1
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 1
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1
  }
};

type Props = {
  single?: boolean
  children: React.ReactNode
}

export default function CarouselComponent({ children, single = false }: Props) {
  return (
    <Carousel
      autoPlay
      showDots
      responsive={(single) ? _single : _multi}
      keyBoardControl={false}
      containerClass="carousel-container"
      removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}>

      {children}
    </Carousel>
  )
}