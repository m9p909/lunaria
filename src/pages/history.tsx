const HistoryPage = () => {
    return (
        <div className="flex flex-col justify-center text-left">
            <h1 className="font-semibold uppercase mb-2 mt-8 pb-16 text-2xl text-center">savings history</h1>
                <h2 className="text-[#372D40] pb-5 px-10">Goal 1</h2>
                <div className="flex flex-row text-center">
                    <div className="bg-[#E5FFF8] hover:bg-[#B18AF8] hover:text-white text-[#372D40] border-black border-2 justify-center pt-6 pb-6 m-6 w-1/3">You met your goal of $100 last month!</div>
                    <div className="bg-[#E5FFF8] hover:bg-[#B18AF8] hover:text-white text-[#372D40] border-black border-2 justify-center pt-6 pb-6 m-6 w-1/3">You saved an average of $25 per week!</div>
                    <div className="bg-[#E5FFF8] hover:bg-[#B18AF8] hover:text-white text-[#372D40] border-black border-2 justify-center pt-6 pb-6 m-6 w-1/3"></div>
                </div>
                <h2 className="text-[#372D40] pb-5 px-10">Goal 2</h2>
                <div className="flex flex-row text-center">
                    <div className="bg-[#E5FFF8] hover:bg-[#B18AF8] hover:text-white text-[#372D40] border-black border-2 justify-center pt-6 pb-6 m-6 w-1/3">You met your goal of $500 over the past 3 months!</div>
                    <div className="bg-[#E5FFF8] hover:bg-[#B18AF8] hover:text-white text-[#372D40] border-black border-2 justify-center pt-6 pb-6 m-6 w-1/3">You saved an average of $133 per month!</div>
                    <div className="bg-[#E5FFF8] hover:bg-[#B18AF8] hover:text-white text-[#372D40] border-black border-2 justify-center pt-6 pb-6 m-6 w-1/3"></div>
                </div>
                <h2 className="text-[#372D40] pb-5 px-10">Goal 3</h2>
                <div className="flex flex-row text-center">
                    <div className="bg-[#E5FFF8] hover:bg-[#B18AF8] hover:text-white text-[#372D40] border-black border-2 justify-center pt-6 pb-6 m-6 w-1/3">You did not meet your goal of $1000 over the past 6 months!</div>
                    <div className="bg-[#E5FFF8] hover:bg-[#B18AF8] hover:text-white text-[#372D40] border-black border-2 justify-center pt-6 pb-6 m-6 w-1/3">You saved an average of $200 per month!</div>
                    <div className="bg-[#E5FFF8] hover:bg-[#B18AF8] hover:text-white text-[#372D40] border-black border-2 justify-center pt-6 pb-6 m-6 w-1/3"></div>
                </div>                
                <h2 className="text-[#372D40] pb-5 px-10">Goal 4</h2>
                <div className="flex flex-row text-center">
                    <div className="bg-[#E5FFF8] hover:bg-[#B18AF8] hover:text-white text-[#372D40] border-black border-2 justify-center pt-6 pb-6 m-6 w-1/3">You did not meet your goal of $2000 over the past 12 months!</div>
                    <div className="bg-[#E5FFF8] hover:bg-[#B18AF8] hover:text-white text-[#372D40] border-black border-2 justify-center pt-6 pb-6 m-6 w-1/3">You saved an average of $100 per month!</div>
                    <div className="bg-[#E5FFF8] hover:bg-[#B18AF8] hover:text-white text-[#372D40] border-black border-2 justify-center pt-6 pb-6 m-6 w-1/3"></div>
                </div>            </div>
    )
}

export default HistoryPage;
