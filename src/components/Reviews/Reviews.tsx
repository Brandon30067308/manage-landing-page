import { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import "swiper/css";
import avatarAnisha from "../../images/avatar-anisha.png";
import avatarRichard from "../../images/avatar-richard.png";
import avatarAli from "../../images/avatar-ali.png";
import avatarShanai from "../../images/avatar-shanai.png";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import breakpoints from "../../breakpoints/breakpoints";
import PrimaryButton from "../Layout/PrimaryButton";

const Reviews: FC = () => {
  const { width } = useWindowDimensions();

  return (
    <div
      className="w-full max-w-[2160px] flex flex-col justify-center items-center mx-auto
      py-10 sm:py-12 px-3 md:px-6 lg:px-0"
    >
      <h3 className="font-bold text-4xl text-center mb-10 sm:mb-20">
        What they've said
      </h3>
      <div className="w-full flex justify-center">
        <Swiper
          spaceBetween={25}
          slidesPerView={
            width >= breakpoints.lg ? 3 : width >= breakpoints.sm ? 2 : 1
          }
          slidesPerGroup={1}
          modules={[Autoplay, Pagination]}
          loop={true}
          loopFillGroupWithBlank={true}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          autoplay={{
            delay: 1500,
            disableOnInteraction: true,
          }}
          speed={800}
          pagination={{
            el: ".swiper-pagination",
          }}
          className={`${width >= breakpoints.lg ? "min-w-[115%]" : "w-full"}`}
        >
          <div className="swiper-pagination"></div>
          <SwiperSlide>
            <div className="review-box flex flex-col items-center">
              <img src={avatarAli} alt="avatar_ali" />
              <div
                className="w-full min-h-56 flex flex-col justify-start items-center text-center bg-lightGray
              border-2 border-gray-100 rounded-md mx-auto mr-6 pb-9 px-6"
              >
                <h2 className="font-bold text-base text-secondary mb-2 sm:mb-3.5">
                  Ali Bravo
                </h2>
                <span className="text-grayishBlue text-base text-center">
                  “We have been able to cancel so many other subscriptions since
                  using Manage. There is no more cross-channel confusion and
                  everyone is much more focused.”
                </span>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="review-box flex flex-col items-center">
              <img src={avatarAnisha} alt="avatar_anisha" />
              <div
                className="w-full min-h-56 flex flex-col justify-start items-center text-center bg-lightGray
              border-2 border-gray-100 rounded-md mx-auto mr-6 pb-9 px-6"
              >
                <h2 className="font-bold text-base text-secondary mb-2 sm:mb-3.5">
                  Anisha Li
                </h2>
                <span className="text-grayishBlue text-base text-center">
                  “Manage has supercharged our team’s workflow. The ability to
                  maintain visibility on larger milestones at all times keeps
                  everyone motivated.”
                </span>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="review-box flex flex-col items-center">
              <img src={avatarRichard} alt="avatar_richard" />
              <div
                className="w-full min-h-56 flex flex-col justify-start items-center text-center bg-lightGray
              border-2 border-gray-100 rounded-md mx-auto mr-6 pb-9 px-6"
              >
                <h2 className="font-bold text-base text-secondary mb-2 sm:mb-3.5">
                  Richard Watts
                </h2>
                <span className="text-grayishBlue text-base text-center">
                  “Manage allows us to provide structure and process. It keeps
                  us organized and focused. I can’t stop recommending them to
                  everyone I talk to!”
                </span>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="review-box flex flex-col items-center">
              <img src={avatarShanai} alt="avatar_shanai" />
              <div
                className="w-full min-h-56 flex flex-col justify-start items-center text-center bg-lightGray
              border-2 border-gray-100 rounded-md mx-auto mr-6 pb-9 px-6"
              >
                <h2 className="font-bold text-base text-secondary mb-2 sm:mb-3.5">
                  Shanai Gough
                </h2>
                <span className="text-grayishBlue text-base text-center">
                  “Their software allows us to track, manage and collaborate on
                  our projects from anywhere. It keeps the whole team in-sync
                  without being intrusive.”
                </span>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <PrimaryButton className="min-w-[150px] font-bold shadow shadow-primary mt-12 sm:mt-14">
        Get Started
      </PrimaryButton>
    </div>
  );
};

export default Reviews;
