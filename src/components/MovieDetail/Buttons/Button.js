import { HiArrowSmUp } from 'react-icons/hi'

const SampleNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <span onClick={onClick} className='inline-block cursor-pointer p-[1px] absolute drop-shadow-lg rotate-90 z-20 right-0 top-[45%] rounded-full bg-white dark:bg-[#323F4B] text-[#4F4D4D] dark:text-[#E4E7EB] opacity-0 group-hover:opacity-100 transition-opacity duration-100'> <HiArrowSmUp size={31} /> </span>
    );
}
  
const SamplePrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <span onClick={onClick} className='inline-block absolute p-[1px] cursor-pointer drop-shadow-lg -rotate-90 z-20 top-[45%] left-0 rounded-full bg-white dark:bg-[#323F4B] text-[#4F4D4D] dark:text-[#E4E7EB] opacity-0 group-hover:opacity-100 transition-opacity duration-100'> <HiArrowSmUp size={31} /> </span>
    );
}


export {SampleNextArrow, SamplePrevArrow};