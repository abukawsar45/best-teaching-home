
import { SwiperSlide } from 'swiper/react';
const HomePageSlider = ({popData}) => {
  return (
    <>
     
      <SwiperSlide>
        <img src={ popData.orderClassImage } alt="" />
       

        </SwiperSlide>
      
    
    </>
  );
};

export default HomePageSlider;
