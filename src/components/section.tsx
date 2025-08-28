import logo from '/logo.jpg'
import q1Svg from '../assets/quarter/q1.svg'
import q2Svg from '../assets/quarter/q2.svg'
import q3Svg from '../assets/quarter/q3.svg'
import q4Svg from '../assets/quarter/q4.svg'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select"
import { useState } from 'react'
import { useIsMobile } from '../hooks/use-is-mobile'

export default function Section() {
  const isMobile = useIsMobile();

  const blocks = [
    { id: 1, label: "Q1", svg: q1Svg, title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", desc: "Vestibulum in tortor at massa faucibus dictum a a metus. Integer maximus quam vitae lacus ultricies, eget blandit massa bibendum." },
    { id: 2, label: "Q2", svg: q2Svg, title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", desc: "Vestibulum in tortor at massa faucibus dictum a a metus. Integer maximus quam vitae lacus ultricies, eget blandit massa bibendum." },
    { id: 3, label: "Q3", svg: q3Svg, title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", desc: "Vestibulum in tortor at massa faucibus dictum a a metus. Integer maximus quam vitae lacus ultricies, eget blandit massa bibendum." },
    { id: 4, label: "Q4", svg: q4Svg, title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", desc: "Vestibulum in tortor at massa faucibus dictum a a metus. Integer maximus quam vitae lacus ultricies, eget blandit massa bibendum." },
  ];

  type QuarterState = "q1" | "q2" | "q3" | "q4"

  const [quarter, setQuarter] = useState<QuarterState | null>(null)

  const handleQuarterClick = (quarterKey: QuarterState) => {
    if (isMobile) {
      setQuarter(quarter === quarterKey ? null : quarterKey);
    }
  }

  return (
    <div className="p-4 min-h-screen bg-white lg:p-8">
      <div className="mx-auto max-w-sm lg:max-w-4xl">
        <div className="flex flex-col mb-8 text-center lg:mb-12">
          <div className="inline-flex justify-center items-center">
            <img src={logo} className='w-32 lg:w-52' />
          </div>
          <div className="inline-flex justify-center items-center">
            <Select>
              <SelectTrigger className="w-[80px] lg:w-[100px]">
                <SelectValue placeholder="2024" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {[2021, 2022, 2023, 2024].map((year) => (
                    <SelectItem key={year} value={year.toString()}>{year}</SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="">
          <div className="relative bottom-32 w-full h-full lg:bottom-44">

            {/* Q1 */}
            <div className="absolute -left-3 top-10 md:top-8 md:left-2 lg:top-5 lg:left-37">
              <button
                className="hover:opacity-50"
                onClick={() => handleQuarterClick("q1")}
              >
                <img
                  src={blocks[0].svg}
                  alt={blocks[0].label}
                  className="w-26 h-26 sm:w-26 sm:h-26 md:w-28 md:h-28 lg:w-44 lg:h-52"
                />
              </button>
              <div className={`
                absolute 
                top-50 left-0 
                md:top-14 md:-left-46 
                lg:top-18 lg:-left-55 
                px-2 py-1 
                text-xs md:text-sm lg:text-sm 
                text-left md:text-right
                w-72 md:w-40 lg:w-52 
                h-fit 
                ${isMobile && quarter !== "q1" ? "hidden" : ""}
              `}>

                <div className="separator-arrow">
                  <div className="absolute left-3 bottom-30 md:left-43 lg:left-53 md:top-0 lg:top-0 lg:right-10 w-[2px] h-[125px] md:h-full bg-black"></div>
                  <div className="absolute -top-5 left-51.5 md:-top-2 md:left-43 lg:left-53 lg:-top-2 lg:-right-10 w-4 h-2 border-t-2 border-black rotate-180 hidden md:block"></div>
                </div>

                <h1 className='text-sm font-extrabold md:text-base lg:text-base'>
                  {blocks[0].label}
                </h1>
                <h3 className='text-xs font-bold md:text-sm lg:text-sm'>
                  {blocks[0].title}
                </h3>
                <span className='text-xs leading-tight'>
                  {blocks[0].desc}
                </span>
              </div>
            </div>

            {/* Q2 */}
            <div className="absolute left-12 top-23 md:top-22 md:left-18 lg:top-30 lg:left-60">
              <button
                className="hover:opacity-50"
                onClick={() => handleQuarterClick("q2")}
              >
                <img
                  src={blocks[1].svg}
                  alt={blocks[1].label}
                  className="w-31 h-31 md:w-30 md:h-30 lg:w-54 lg:h-55"
                />
              </button>
              <div className={`
                absolute 
                top-32 -left-6 
                md:top-54 md:-left-36 
                lg:top-55 lg:-left-35 
                px-2 py-1 
                text-xs md:text-sm lg:text-sm 
                text-left md:text-right lg:text-right 
                w-72 md:w-56 lg:w-52 
                h-fit 
                pt-6 md:pt-10 lg:pt-15 
                ${isMobile && quarter !== "q2" ? "hidden" : ""}
              `}>

                <div className="separator-arrow">
                  <div className="absolute -top-15 left-3 md:left-60 md:-top-26 lg:top-0 lg:left-53 w-[2px] h-[80px] sm:h-[285px] bg-black"></div>
                  <div className="absolute -top-15 left-3 md:-top-5 md:left-8.5 md:hidden lg:block lg:-top-4 lg:left-52.5 w-4 md:w-10 h-2 border-t-2 border-black md:-rotate-45"></div>
                </div>

                <h1 className='text-sm font-extrabold md:text-base lg:text-base'>
                  {blocks[1].label}
                </h1>
                <h3 className='text-xs font-bold md:text-sm lg:text-sm'>
                  {blocks[1].title}
                </h3>
                <span className='text-xs leading-tight'>
                  {blocks[1].desc}
                </span>
              </div>
            </div>

            {/* Q3 */}
            <div className="absolute right-12 top-25 md:top-24 md:right-18 lg:top-33 lg:right-60">
              <button
                className="hover:opacity-50"
                onClick={() => handleQuarterClick("q3")}
              >
                <img
                  src={blocks[2].svg}
                  alt={blocks[2].label}
                  className="w-28 h-28 md:w-28 md:h-28 lg:w-52 lg:h-50"
                />
              </button>
              <div className={`
                absolute 
                top-28 -right-8 
                md:top-52 md:-right-40 
                lg:top-53 lg:-right-35 
                px-2 py-1 
                text-xs md:text-sm lg:text-sm 
                text-right md:text-left 
                w-72 md:w-56 lg:w-52 
                h-fit 
                pt-6 md:pt-10 lg:pt-15 
                ${isMobile && quarter !== "q3" ? "hidden" : ""}
              `}>

                <div className="separator-arrow">
                  <div className="absolute right-3 bottom-25 md:-left-5 md:-top-25.5 lg:top-0 lg:-left-3 w-[2px] h-[80px] md:h-[285px] bg-black"></div>
                  <div className="absolute right-3 w-6 h-2 border-t-2 border-black md:w-10 -top-13 md:hidden lg:block lg:-top-4 lg:-left-12 md:rotate-45"></div>
                </div>

                <h1 className='text-sm font-extrabold md:text-base lg:text-base'>
                  {blocks[2].label}
                </h1>
                <h3 className='text-xs font-bold md:text-sm lg:text-sm'>
                  {blocks[2].title}
                </h3>
                <span className='text-xs leading-tight'>
                  {blocks[2].desc}
                </span>
              </div>
            </div>

            {/* Q4 */}
            <div className="absolute -right-3 top-9 sm:top-7 sm:-right-6 md:top-8 md:right-3 lg:top-5 lg:right-33">
              <button
                className="hover:opacity-50"
                onClick={() => handleQuarterClick("q4")}
              >
                <img
                  src={blocks[3].svg}
                  alt={blocks[3].label}
                  className="w-26 h-26 sm:w-28 sm:h-28 md:w-28 md:h-28 lg:w-54 lg:h-50"
                />
              </button>
              <div className={`
                absolute 
                top-50 right-0
                sm:top-8 sm:-right-28 
                md:top-14 md:-right-44 
                lg:top-18 lg:-right-55 
                px-2 py-1 
                text-xs md:text-sm lg:text-sm 
                text-right md:text-left 
                w-72 md:w-40 lg:w-52 
                h-fit 
                ${isMobile && quarter !== "q4" ? "hidden" : ""}
              `}>

                <div className="separator-arrow">
                  <div className="absolute right-3 bottom-25 md:-left-2 md:top-0 lg:top-0 lg:-left-3 w-[2px] h-[148px] md:h-full bg-black"></div>
                  <div className="absolute -top-5 left-51.5 md:-top-2 md:-left-6.5 lg:-top-2 lg:-left-7.5 w-5 h-2 border-t-2 border-black rotate-180 hidden md:block"></div>
                </div>

                <h1 className='text-sm font-extrabold md:text-base lg:text-base'>
                  {blocks[3].label}
                </h1>
                <h3 className='text-xs font-bold md:text-sm lg:text-sm'>
                  {blocks[3].title}
                </h3>
                <span className='text-xs leading-tight'>
                  {blocks[3].desc}
                </span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}
