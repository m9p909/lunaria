import { useState } from "react"
import * as React from 'react'
import * as ToggleGroup from '@radix-ui/react-toggle-group'


const GoalPage = () => {
    const [title, setTitle] = useState('')
    const [radio1, setRadio1] = useState('3 months')
    const [radio2, setRadio2] = useState('1 week')
    return (
        <div className="flex justify-center h-screen goal">
            <div className="text-center">
                <h1 className="text-5xl pt-10 pb-20">Enter your Goal</h1>
                <form className="flex flex-col text-center">
                    <input
                        className="text-center"
                        type="text"
                        required
                        value={title}
                        onChange={(a) => setTitle(a.target.value)}
                    />
                    <ToggleGroup.Root
                        type="single"
                        value={radio1}
                        onValueChange={(radio1) => {
                            if (radio1) setRadio1(radio1)
                        }}
                    >
                        <ToggleGroup.Item className="pr-10 pt-20" value="3 months">3 months</ToggleGroup.Item>
                        <ToggleGroup.Item className="pr-10 pl-10 pt-20" value="6 months">6 months</ToggleGroup.Item>
                        <ToggleGroup.Item className="pl-10 pt-20" value="12 months">12 months</ToggleGroup.Item>
                    </ToggleGroup.Root>
                    <ToggleGroup.Root
                        type="single"
                        value={radio2}
                        onValueChange={(radio2) => {
                            if (radio2) setRadio2(radio2)
                        }}
                    >
                        <ToggleGroup.Item className="pr-10 pt-20" value="1 week">1 week</ToggleGroup.Item>
                        <ToggleGroup.Item className="pr-10 pl-10 pt-20" value="2 weeks">2 weeks</ToggleGroup.Item>
                        <ToggleGroup.Item className="pl-10 pt-20" value="1 month">1 month</ToggleGroup.Item>
                    </ToggleGroup.Root>
                    <p className="pt-20">Your goal is to save ${title} in {radio1}</p>
                    <button className="pt-40">Set Goal</button>
                </form>
            </div>
        </div>
        )
}

export default GoalPage