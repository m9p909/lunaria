import { useState } from "react"

const GoalPage = () => {
    const [title, setTtitle] = useState('')
    return (
        <div className="goal">
            <h2>Enter your Goal</h2>
            <form>
                <input
                    type="text"
                    required
                    value={title}
                />
                <button>Set Goal</button>
            </form>
        </div>
        )
}

export default GoalPage