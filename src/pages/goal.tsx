import { useState } from "react"
import * as React from 'react'
import * as ToggleGroup from '@radix-ui/react-toggle-group'


const GoalPage = () => {
    const [title, setTitle] = useState('')
    const [radio1, setRadio1] = useState('3')
    const [radio2, setRadio2] = useState('1 week')
    return (
        <div className="flex justify-center h-screen bg-white] goal w-full">
            <div className="text-center">
                <h1 className="text-5xl pt-10 pb-20 text-[#372D40]">ENTER YOUR GOAL</h1>
                <form className="flex flex-col text-center">
                    <h2 className="pb-5">ENTER YOUR GOAL: </h2>
                    <input
                        className="text-[#372D40] border-black border-2"
                        type="text"
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
                        <ToggleGroup.Item className={`flex-grow p-10 rounded-l-lg mt-10 mb-10 bg-[#b18af8] text-white ${radio1 === '3' ? "bg-black" : "" }`} value="3">3 months</ToggleGroup.Item>
                        <ToggleGroup.Item className="flex-grow p-10 mt-10 mb-10 bg-[#b18af8] text-white" value="6">6 months</ToggleGroup.Item>
                        <ToggleGroup.Item className="flex-grow p-10 rounded-r-lg mt-10 mb-10 bg-[#b18af8] text-white" value="12">12 months</ToggleGroup.Item>
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
                        <ToggleGroup.Item className="flex-grow p-10 rounded-l-lg bg-[#b18af8] text-white" value="1 week">1 week</ToggleGroup.Item>
                        <ToggleGroup.Item className="flex-grow p-10 bg-[#b18af8] text-white" value="2 weeks">2 weeks</ToggleGroup.Item>
                        <ToggleGroup.Item className="flex-grow p-10 rounded-r-lg bg-[#b18af8] text-white" value="1 month">1 month</ToggleGroup.Item>
                    </ToggleGroup.Root>
                    <p className="pt-20 text-[#372D40]">Your goal is to save ${title} in {radio1}</p>
                    <button className="p-6 rounded-full m-32 bg-[#b18af8] text-white">Set Goal</button>
                </form>
            </div>
        </div>
        )
}

export default GoalPage