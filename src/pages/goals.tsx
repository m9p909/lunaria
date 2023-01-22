import React from "react";
import Counter from "../components/Counter";

export default function Goals() {
    return(
        <section className="flex flex-col">
            <Counter totalContributions={35} goalAmount={500} />
        </section>
    )
}