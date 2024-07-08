import {
  CCarousel

} from '@coreui/react';

export default function CarouselComponent({ children }) {
  return (
    <CCarousel controls indicators>
      {children}
    </CCarousel>
  )
}