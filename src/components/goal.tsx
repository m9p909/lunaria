import { useState } from "react"
import * as React from 'react'
import * as ToggleGroup from '@radix-ui/react-toggle-group'


const GoalPage = () => {
    const [title, setTitle] = useState('')
    const [radio1, setRadio1] = useState('')
    const [radio2, setRadio2] = useState('')
    return (
        <div className="flex justify-center h-screen bg-white] goal w-full">
            <div className="text-center">
                <h1 className="text-5xl pt-10 pb-20 text-[#372D40]">LET'S GET YOUR FIRST GOAL!</h1>
                <form className="flex flex-col text-center">
                    <h2 className="pb-5">ENTER YOUR SAVINGS GOAL: </h2>
                    <input
                        className="text-[#372D40] border-black border-2"
                        type="number"
                        maxLength={10}
                        required
                        value={title}
                        onChange={(a) => setTitle(a.target.value)}
                    />
                    <h2 className="pt-5">GOAL DURATION:</h2>
                    <ToggleGroup.Root
                        className="flex"
                        type="single"
                        value={radio1}
                        onValueChange={(radio1) => {
                            if (radio1) setRadio1(radio1)
                        }}
                    >
                        <ToggleGroup.Item className={`flex-grow p-6 rounded-l-lg mt-10 mb-10 border-black border-2 bg-[#E5FFF8] text-[#372D40] hover:opacity-70 ${radio1 === '3 months' ? "bg-[#b18af8] text-white" : "" }`} value="3 months">3 months</ToggleGroup.Item>
                        <ToggleGroup.Item className={`flex-grow p-6 mt-10 mb-10 border-black border-2 bg-[#E5FFF8] text-[#372D40] hover:bg-[#b18af8] hover:opacity-70 ${radio1 === '6 months' ? "bg-[#b18af8] text-white" : "" }`} value="6 months">6 months</ToggleGroup.Item>
                        <ToggleGroup.Item className={`flex-grow p-6 rounded-r-lg mt-10 mb-10 border-black border-2 bg-[#E5FFF8] text-[#372D40] hover:bg-[#b18af8] hover:opacity-70 ${radio1 === '12 months' ? "bg-[#b18af8] text-white" : "" }`} value="12 months">12 months</ToggleGroup.Item>
                    </ToggleGroup.Root>
                    <h2 className="pb-5">CONTRIBUTION FREQUENCY: </h2>
                    <ToggleGroup.Root
                        className="flex"
                        type="single"
                        value={radio2}
                        onValueChange={(radio2) => {
                            if (radio2) setRadio2(radio2)
                        }}
                    >
                        <ToggleGroup.Item className={`flex-grow p-6 rounded-l-lg border-black border-2 bg-[#E5FFF8] text-[#372D40] hover:bg-[#b18af8] hover:opacity-70 ${radio2 === '1 week' ? "bg-[#b18af8] text-white" : "" }`} value="1 week">1 week</ToggleGroup.Item>
                        <ToggleGroup.Item className={`flex-grow p-6 border-black border-2 bg-[#E5FFF8] text-[#372D40] hover:bg-[#b18af8] hover:opacity-70 ${radio2 === '2 weeks' ? "bg-[#b18af8] text-white" : "" }`} value="2 weeks">2 weeks</ToggleGroup.Item>
                        <ToggleGroup.Item className={`flex-grow p-6 rounded-r-lg border-black border-2 bg-[#E5FFF8] text-[#372D40] hover:opacity-70 ${radio2 === '1 month' ? "bg-[#b18af8] text-white" : "" }`} value="1 month">1 month</ToggleGroup.Item>
                    </ToggleGroup.Root>
                    <p className="pt-20 text-[#372D40]">Your goal is to save ${title} in {radio1}</p>
                    <button className="p-6 rounded-full m-32 bg-[#b18af8] text-white">Set Goal</button>
                </form>
            </div>
        </div>
        )
}

export default GoalPage