import React from "react";

interface Counter {
    totalContributions: number;
    goalAmount: number;
}

export default function Counter({totalContributions, goalAmount}: Counter) {
    return(
        <h1>$ {totalContributions} / {goalAmount}</h1>
    )
}