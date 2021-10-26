import React from 'react'
import { IoLogoSass } from 'react-icons/io5';
import Slider from 'react-slick';

//components
import { NextArrow , PrevArrow} from '../CarouselArrow';

const Brand = (props) => {
    const logos = [
         "https://b.zmtcdn.com/data/brand_creatives/logos/3bf3424f71561092add2087da7c68459_1599801129.png?output-format=webp",
         "https://b.zmtcdn.com/data/brand_creatives/logos/9cbf230b4128d7eb39ec5717b1d6d286_1617920031.png?output-format=webp",
         "https://b.zmtcdn.com/data/brand_creatives/logos/c38f7540bcc5a38e918856ac06409056_1504531339.png?output-format=webp",
         "https://b.zmtcdn.com/data/brand_creatives/logos/5caf38856d23347b351bb7abf97134d3_1550059625.png?output-format=webp",
         "https://b.zmtcdn.com/data/brand_creatives/logos/3764ecf36009e9a5e8dfeab9d96b35f2_1601350609.png?output-format=webp",
         "https://b.zmtcdn.com/data/brand_creatives/logos/6a11fd0f30c9fd9ceaff2f5b21f61d23_1617188086.png?output-format=webp",
         "https://b.zmtcdn.com/data/brand_creatives/logos/0e6f4a6a6d54c88d548abaa04a0227bc_1625164991.png?output-format=webp",
    ];
    const settings = {
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow:<NextArrow/>,
         prevArrow:<PrevArrow/>
      };
    return (
        <>
          <Slider {...settings}>
              {logos.map((logo) => (
                    <div className="w-24 h-32">
                    <img src={logo}
                         alt="Brand"
                         className="w-full h-full"/>
                </div>
              ))}

          </Slider>
        </>
    )
}

export default Brand;
