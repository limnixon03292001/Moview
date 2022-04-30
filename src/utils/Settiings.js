import { SampleNextArrow, SamplePrevArrow } from "../components/MovieDetail/Buttons/Button";

//Settings for sliders

const settingsCastCrews = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
   
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
       {
          breakpoint: 1200,
 
          settings: {
             slidesToShow: 4,
             slidesToScroll: 4,
          },
       },
     
       {
        breakpoint: 768,
        settings: {
           slidesToShow: 5,
           slidesToScroll: 5,
        },
     },
     {
        breakpoint: 600,
        settings: {
           slidesToShow: 4,
           slidesToScroll: 4,
        },
     },
     {
      breakpoint: 480,
      settings: {
         slidesToShow: 3,
         slidesToScroll: 3,
      },
    },
    {
      breakpoint: 350,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    ],
};

const settingsReco = {
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 7,
   
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
       {
          breakpoint: 1200,
 
          settings: {
             slidesToShow: 6,
             slidesToScroll: 6,
          },
       },
       {
        breakpoint: 1100,
        settings: {
           slidesToShow: 5,
           slidesToScroll: 5,
        },
     },
       {
        breakpoint: 768,
        settings: {
           slidesToShow: 5,
           slidesToScroll: 5,
        },
     },
     {
        breakpoint: 600,
        settings: {
           slidesToShow: 4,
           slidesToScroll: 4,
        },
     },
     {
      breakpoint: 480,
      settings: {
         slidesToShow: 3,
         slidesToScroll: 3,
      },
    },
    {
      breakpoint: 350,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    ],
};

const settingsSeason = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
   
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
       {
          breakpoint: 1200,
 
          settings: {
             slidesToShow: 3,
             slidesToScroll: 3,
          },
       },
       {
        breakpoint: 900,
        settings: {
           slidesToShow: 2,
           slidesToScroll: 2,
        },
     },
       {
        breakpoint: 768,
        settings: {
           slidesToShow: 2,
           slidesToScroll: 2,
        },
     },
     {
        breakpoint: 483,
        settings: {
           slidesToShow: 2,
           slidesToScroll: 2,
        },
     },
     {
      breakpoint: 480,
      settings: {
         slidesToShow: 1,
         slidesToScroll: 1,
      },
   },
    ],
};


export {settingsCastCrews, settingsReco, settingsSeason}