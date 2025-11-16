// export default function MultiCards4Stack({ items = [] }) {
//   return (
//     <section
//       className="
//         w-full 
//         bg-white
//         px-[48px] md:px-[64px]
//         pt-[64px] md:pt-[80px]
//         pb-[64px] md:pb-[80px]
//       "
//     >
//       <div
//         className="
//           grid 
//           gap-x-[32px] gap-y-[48px]
//           grid-cols-1
//           md:grid-cols-2
//           lg:grid-cols-4
//         "
//       >
//         {items.map((card, i) => (
//           <div key={i} className="flex flex-col">
            
//             {/* IMAGE WRAPPER */}
//             <div className="relative w-full aspect-[4/5] bg-[#64B3FC] overflow-hidden">
//               <img
//                 src={card.image}
//                 alt={card.title}
//                 className="absolute inset-0 w-full h-full object-cover"
//               />

//               {/* OVERLAY TITLE */}
//               <div className="absolute bottom-[16px] left-[16px]">
//                 <h3
//                   className="
//                     text-white 
//                     font-archia font-[500]
//                     text-[16px] leading-[20px]
//                     tracking-[0.32px]
//                   "
//                 >
//                   {card.title}
//                 </h3>

//                 {/* underline */}
//                 <div className="w-[152px] h-[1.75px] bg-white mt-[8px] opacity-80"></div>
//               </div>
//             </div>

//             {/* DESCRIPTION */}
//             <p
//               className="
//                 font-silka 
//                 text-[14px]
//                 leading-[21px]
//                 tracking-[0.56px]
//                 font-[400]
//                 text-[#262626]
//                 mt-[16px]
//               "
//             >
//               {card.text}
//             </p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }
"use client";

import { Player } from "@lottiefiles/react-lottie-player";

export default function MultiCards4Stack({
  items = [],
  bg = "",         // only pass the token name
  text = "",       // only pass the token name
}) {
  return (
    <section
      className={`
        w-full
        ${bg ? `${bg}` : ""}
        px-[20px] md:px-[48px] lg:px-[96px]
        pt-[64px] md:pt-[80px]
        pb-[64px] md:pb-[80px]
      `}
    >
      <div
        className="
          grid 
          gap-x-[32px] gap-y-[48px]
          grid-cols-1
          md:grid-cols-2
          lg:grid-cols-4
        "
      >
        {items.map((card, i) => (
          <div key={i} className="flex flex-col">

            {/* ===========================
                  MEDIA WRAPPER
                =========================== */}
            <div className="relative w-full aspect-[4/5] bg-[#64B3FC] overflow-hidden rounded-[4px] zoom-parent">

              {/*   PNG/JPEG */}
              {card.mediaType === "image" && card.image && (
                <img
                  src={card.image}
                  alt={card.title}
                  className="absolute inset-0 w-full h-full object-cover zoom-child"
                />
              )}

              {/*   SVG */}
              {card.mediaType === "svg" && card.svg && (
                <img
                  src={card.svg}
                  alt={card.title}
                  className="absolute inset-0 w-full h-full object-contain p-[32px] zoom-child"
                />
              )}

              {/*   Lottie */}
              {card.mediaType === "lottie" && card.lottie && (
                <Player
                  autoplay
                  loop
                  src={card.lottie}
                  className="absolute inset-0 w-full h-full object-contain p-[16px]"
                />
              )}

              {/* ===========================
                    OVERLAY HEADING
                  =========================== */}
              <div className="absolute bottom-[16px] left-[16px]">
                <h3
                  className={`
                    font-archia font-[500]
                    text-[16px] leading-[20px]
                    tracking-[0.32px]
                    ${text ? `text-${text}` : "text-white"}
                  `}
                >
                  {card.title}
                </h3>

                {/* underline */}
                <div
                  className={`
                    w-[152px] h-[1.75px] mt-[8px]
                    ${text ? `bg-${text}` : "bg-white opacity-80"}
                  `}
                ></div>
              </div>
            </div>

            {/* ===========================
                  DESCRIPTION
                =========================== */}
            <p
              className={`
                font-silka 
                text-[14px]
                leading-[21px]
                tracking-[0.56px]
                font-[400]
                mt-[16px]
                ${text ? `text-${text}` : "text-[#262626]"}
              `}
            >
              {card.text}
            </p>

          </div>
        ))}
      </div>
    </section>
  );
}
