const slides = [
  {
    news: "** Cancer Screening in Secondary Schools: Free Breast Cancer Screening and Awareness Education - 7th & 21st June, 2024. **",
  },
  {
    news: "** Cancer Survival's walk: A walk to Honor Cancer Survivors and Loved Ones - 8th June, 2024. **",
  },
  {
    news: "** Cancer Survivors' Zoom Talk: Rising Strong Beyond Cancer. A Celebration of Survivorship and Hope for All - 22nd June, 2024 **",
  },
  {
    news: "** Cancer Survivors Gala: A Night of Celebrating Life, Strength and Resilience in a Glamorous and Uplifting Atmosphere at The Airpot View Hotel. An Evening Filled With Inspiring Stories, Music, Dancing and Delicious Foods - 29th June, 2024 **",
  },
];

const NewsSlide = () => {
  return (
    <div className="news-container">
      <div className="scroll">
        <div className="RightToLeft">
          {slides.map((slide, index) => (
            <p key={index}>{slide.news}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsSlide;

// import { motion } from "framer-motion";

// const slides = [
//   {
//     news: "** Cancer Screening in Secondary Schools: Free Breast Cancer Screening and Awareness Education - 7th & 21st June, 2024. **",
//   },
//   {
//     news: "** Cancer Survival's walk: A walk to Honor Cancer Survivors and Loved Ones - 8th June, 2024. **",
//   },
//   {
//     news: "** Cancer Survivors' Zoom Talk: Rising Strong Beyond Cancer. A Celebration of Survivorship and Hope for All - 22nd June, 2024 **",
//   },
//   {
//     news: "** Cancer Survivors Gala: A Night of Celebrating Life, Strength and Resilience in a Glamorous and Uplifting Atmosphere at The Airpot View Hotel. An Evening Filled With Inspiring Stories, Music, Dancing and Delicious Foods - 29th June, 2024 **",
//   },
// ];

// const NewsSlide = () => {
//   return (
//     <div className="relative w-full overflow-hidden bg-gray-100 p-2">
//       <motion.div
//         className="flex"
//         animate={{
//           x: ["50%", "-350%"],
//           transition: {
//             ease: "linear",
//             duration: 10,
//             repeat: Infinity,
//           },
//         }}
//       >
//         {slides.map((slide, index) => (
//           <div
//             key={index}
//             className="flex-shrink-0"
//             // style={{ width: `${100 / slides.length}%` }}
//           >
//             <div
//               className={`flex flex-col items-center justify-center h-full text-xl mx-5 text-purple-800`}
//             >
//               {slide.news}
//             </div>
//           </div>
//         ))}
//       </motion.div>
//     </div>
//   );
// };
//
// export default NewsSlide;
