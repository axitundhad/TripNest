import SectionHeading from '@/components/Helper/SectionHeading'
import React from 'react'
import DestinationSlider from './DestinationSlider'

const Destination = () => {
  return (
    <div className='pt-20 pb-20'>
        {/* section heading */}
      <SectionHeading heading="Exploring Popular Destination" description="Discover breathtaking places around the world that travelers love to visit for unforgettable experiences."/>
      {/* section content */}
      <div className='mt-14 w-[80%] mx-auto'>
        {/* slider */}
        <DestinationSlider />

      </div>
    </div>
  )
}

export default Destination
