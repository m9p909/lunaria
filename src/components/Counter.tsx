import React from "react";

interface Counter {
    totalContributions: number;
    goalAmount: number;
}

export default function Counter({totalContributions, goalAmount}: Counter) {
    return(
        <h1 className="flex flex-col text-center text-8xl">$ {totalContributions} / {goalAmount}</h1>
    )
}
