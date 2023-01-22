import React from "react";

interface FlowerProgress {
    progress: number;
}

export default function FlowerProgress({progress}: FlowerProgress) {
    progress *= 100;
    // where progress represents the percentage of the contributions accumulated compared to the goal
    if (progress == 100) {
        return(
            <section>
                <img src="../../public/assets/stage5.png" />
            </section>
        )
    } else if (progress < 75) {
        return(
            <section>
                <img src="../../public/assets/stage4.png" />
            </section>
        )
    } else if (progress < 50) {
        return(
            <section>
                <img src="../../public/assets/stage3.png" />
            </section>
        )
    } else if (progress < 25) {
        return(
            <section>
                <img className="p-15" src="../public/assets/stage2.PNG" />
            </section>
        )
    } else if (progress == 0) {
        return(
            <section>
                <img src="../../public/assets/stage0.png" />
            </section>
        )
    } else {
        return (
            <section>
                <img src="../../public/assets/stage1.png" />
            </section>
        )
    }
    
}