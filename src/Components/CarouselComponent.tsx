import { ReactNode } from 'react';

import {
  CCarousel

} from '@coreui/react';

interface Props {
  children: ReactNode
}

export default function CarouselComponent({ children }: Props) {
  return (
    <CCarousel controls indicators dark>
      {children}
    </CCarousel>
  )
}