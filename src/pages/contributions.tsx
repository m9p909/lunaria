import React from "react";
import Counter from "../components/Counter";
import { Layout } from "../components/Layout";
import FlowerProgress from "../components/FlowerProgress";


export default function Contributions() {
    return (
        <section className="flex flex-col">
            <Layout>
                <section className="flex flex-col items-center text-center w-screen p-10">
                    <Counter totalContributions={400} goalAmount={1000} />
                    <FlowerProgress progress={0.4} />
                </section>
            </Layout>
        </section>
    )
}