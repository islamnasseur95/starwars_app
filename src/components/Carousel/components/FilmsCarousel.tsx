import React from 'react'
import { CCarouselItem, CCarousel, CImage } from '@coreui/react'

const FilmsCarousel = () => {
  return (
    <CCarousel controls transition="crossfade">
        <CCarouselItem>
            <CImage className="d-block w-100" src="/images/react.jpg" alt="slide 1" />
        </CCarouselItem>
        <CCarouselItem>
            <CImage className="d-block w-100" src="/images/vue.jpg" alt="slide 2" />
        </CCarouselItem>
        <CCarouselItem>
            <CImage className="d-block w-100" src="/images/angular.jpg" alt="slide 3" />
        </CCarouselItem>
    </CCarousel>
  )
}

export default FilmsCarousel