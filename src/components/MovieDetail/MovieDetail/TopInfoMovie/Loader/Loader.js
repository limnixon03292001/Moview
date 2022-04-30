

const Loader = () => {
  return (
    <div className="w-full">
    <div className="animate-pulse">
        <div className="relative w-full h-[300px] max-w-full overflow-hidden bg-gray-300 dark:bg-[#323F4B] "></div>
        <div className="flex px-2 lg:px-0 md:mx-6 md:space-x-4">
            <div className="hidden md:block -mt-[90px] w-full h-[236px] md:max-w-[140px] lg:max-w-[160px] overflow-hidden rounded-xl drop-shadow-md flex-grow-0 flex-shrink-0 bg-gray-300 dark:bg-[#323F4B]"></div>
            <div className="px-4 py-4 space-y-3 w-full max-w-full">
                <div className='space-y-2 mb-4 '>
                    <div className="h-6 bg-slate-300 dark:bg-[#323F4B] rounded-md w-full max-w-[343px]"></div>
                    <div className="h-4 bg-slate-300 dark:bg-[#323F4B] rounded-md w-full max-w-[143px]"></div>
                </div>
                <div className=" space-y-3 max-w-[343px]">
                  <div className="h-4 bg-slate-300 dark:bg-[#323F4B] rounded-md w-full  "></div>
                  <div className="h-4 bg-slate-300 dark:bg-[#323F4B] rounded-md w-full"></div>
                  <div className="h-4 bg-slate-300 dark:bg-[#323F4B] rounded-md w-full"></div>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Loader