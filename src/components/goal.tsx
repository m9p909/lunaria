import { useState } from "react"
import * as React from 'react'
import * as ToggleGroup from '@radix-ui/react-toggle-group'
import { api } from "../utils/api"
import { CircleLoader } from "react-spinners"
// x months to date
const stringToDate = (s: string): Date => {
    const numMonths = s.split(" ")[0]
    if(numMonths){
        const months = parseInt(numMonths)
        const now = new Date();
        const next = new Date(now.setMonth(now.getMonth() + months))
        return next;
    } else {
        console.error(s)
        throw new Error("Invalid date received")
    }
}
const frequencyToNumAndString = (s: string): [number, "weeks" | "months"] => {
    const [number, unit] = s.split(" ")
    if(number && unit){
        if(unit === "weeks" || unit === "months"){
            return [parseInt(number), unit]
        }
        console.error(s)
        throw new Error("Bad input string received")
 
    } else {
        console.error(s)
        throw new Error("Bad input string received")
    }
}

const useSubmit = () => {

    const mutation = api.goal.createGoal.useMutation()

    return {
        mutation,
        callMutate: (goal: string, // plain int in dollars
        duration: string, // x months
        frequency: string) => { // x weeks or months
    const [frequencyNumber, unit] = frequencyToNumAndString(frequency)
            mutation.mutate({
                amount: parseInt(goal),
                deadline: stringToDate(duration),
                contributionFreq: frequencyNumber,
                contributionTimeFrame: unit
            })

    }
}
}


const GoalPage = ({onGoalCreate}: {onGoalCreate: () =>void}) => {
    const [goal, setGoal] = useState('')
    const [duration, setDuration] = useState('')
    const [frequency, setFrequency] = useState('')
    const { mutation, callMutate } = useSubmit()

    const onSubmit = (e: { preventDefault: () => void;} ) => {
        e.preventDefault()
        callMutate(goal, duration, frequency);
    }
    if(mutation.isSuccess){
        onGoalCreate()
    }


    return (
        <div className="flex justify-center h-screen bg-white] goal w-full">
            <div className="text-center">
                <h1 className="text-5xl pt-10 pb-20 text-[#372D40]">LET'S GET YOUR FIRST GOAL!</h1>
                <form className="flex flex-col text-center" >
                    <h2 className="pb-5">ENTER YOUR SAVINGS GOAL: </h2>
                    <input
                        className="text-[#372D40] border-black border-2"
                        type="number"
                        maxLength={10}
                        required
                        value={goal}
                        onChange={(a) => setGoal(a.target.value)}
                    />
                    <h2 className="pt-5">GOAL DURATION:</h2>
                    <ToggleGroup.Root
                        className="flex"
                        type="single"
                        value={duration}
                        onValueChange={(radio1) => {
                            if (radio1) setDuration(radio1)
                        }}
                    >
                        <ToggleGroup.Item className={`flex-grow p-6 rounded-l-lg mt-10 mb-10 border-black border-2 bg-[#E5FFF8] text-[#372D40] hover:opacity-70 ${duration === '3 months' ? "bg-[#b18af8] text-white" : "" }`} value="3 months">3 months</ToggleGroup.Item>
                        <ToggleGroup.Item className={`flex-grow p-6 mt-10 mb-10 border-black border-2 bg-[##E5FFF8] text-[#372D40] hover:bg-[#b18af8] hover:opacity-70 ${duration === '6 months' ? "bg-[#b18af8] text-white" : "" }`} value="6 months">6 months</ToggleGroup.Item>
                        <ToggleGroup.Item className={`flex-grow p-6 rounded-r-lg mt-10 mb-10 border-black border-2 bg-[#E5FFF8] text-[#372D40] hover:bg-[#b18af8] hover:opacity-70 ${duration === '12 months' ? "bg-[#b18af8] text-white" : "" }`} value="12 months">12 months</ToggleGroup.Item>
                    </ToggleGroup.Root>
                    <h2 className="pb-5">CONTRIBUTION FREQUENCY: </h2>
                    <ToggleGroup.Root
                        className="flex"
                        type="single"
                        value={frequency}
                        onValueChange={(radio2) => {
                            if (radio2) setFrequency(radio2)
                        }}
                    >
                        <ToggleGroup.Item className={`flex-grow p-6 rounded-l-lg border-black border-2 bg-[#E5FFF8] text-[#372D40] hover:bg-[#b18af8] hover:opacity-70 ${frequency === '1 week' ? "bg-[#b18af8] text-white" : "" }`} value="1 week">1 week</ToggleGroup.Item>
                        <ToggleGroup.Item className={`flex-grow p-6 border-black border-2 bg-[#E5FFF8] text-[#372D40] hover:bg-[#b18af8] hover:opacity-70 ${frequency === '2 weeks' ? "bg-[#b18af8] text-white" : "" }`} value="2 weeks">2 weeks</ToggleGroup.Item>
                        <ToggleGroup.Item className={`flex-grow p-6 rounded-r-lg border-black border-2 bg-[#E5FFF8] text-[#372D40] hover:opacity-70 ${frequency === '1 month' ? "bg-[#b18af8] text-white" : "" }`} value="1 month">1 month</ToggleGroup.Item>
                    </ToggleGroup.Root>
                    <p className="pt-20 text-[#372D40]">Your goal is to save ${goal} in {duration}</p>
                    <div className="h-20 flex justify-center">
                    {mutation.isLoading && <CircleLoader />}
                    </div>
                    <button onClick={(e)=> onSubmit(e)} className="p-6 rounded-full  bg-[#b18af8] text-white">Set Goal</button>
                </form>
            </div>
        </div>
        )
}

export default GoalPage