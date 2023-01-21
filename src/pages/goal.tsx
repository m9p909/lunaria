import { useState } from "react"

const GoalPage = () => {
    const [title, setTitle] = useState('');
    const [radio1, setRadio1] = useState('');
    const [radio2, setRadio2] = useState('');
    return (
        <div className="flex justify-center h-screen goal">
            <div className="text-center">
                <h1 className="text-5xl pt-5 pb-40">Enter your Goal</h1>
                <form className="flex flex-col text-center">
                    <input
                        type="text"
                        required
                        value={title}
                        onChange={(a) => setTitle(a.target.value)}
                    />
                    <input
                        type="radio"
                        required
                        value={radio1}
                        onChange={(b) => setRadio1(b.target.value)}
                    />
                    <input
                        type="radio"
                        required
                        value={radio2}
                        onChange={(c) => setRadio2(c.target.value)}
                    />
                    <button className="pt-40">Set Goal</button>
                </form>
            </div>
        </div>
        )
}

export default GoalPage