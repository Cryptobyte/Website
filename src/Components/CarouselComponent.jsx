import {
  CCarousel,
  CCarouselItem

} from '@coreui/react';

export default function CarouselComponent({ children }) {
  return (
    <CCarousel controls indicators>
      {children.map((child, index) => (
        <CCarouselItem key={index}>
          {child}
        </CCarouselItem>
      ))}
    </CCarousel>
  )
}