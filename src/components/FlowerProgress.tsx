import React from "react";
import Image from "next/image";

interface FlowerProgress {
    progress: 0 | 1 | 2 | 3 | 4 | 5
}

const FlowerImage = ({progress}: FlowerProgress) => {
    return <Image alt={`stage ${progress} image`} height={200} width={200} src={`/assets/stage${progress}.PNG`}/>
}

export enum FlowerState {
    Normal,
    Happy,
    Sad,
    Dead
}

interface FlowerProps {
    progress: 0 | 1 | 2 | 3 | 4 | 5
    state: FlowerState
}

export default function FlowerProgress(props: FlowerProps) {
    const normal = ""
    const sad = "filter sepia"
    const dead = "filter grayscale"
    const happy = "brightness-150"
    let className = normal;
    switch(props.state){
        case FlowerState.Happy:
            className = happy;
            break;
        case FlowerState.Dead:
            className = dead;
            break;
        case FlowerState.Sad:
            className = sad;
            break;
        default:
            break;
    }
    return(
        <section className={className} >
            <section className="relative">
                      <img className="object-cover" height='200' width='200' src='/assets/IMG_0911.GIF' alt="Card cover image"/>
                      <section className="absolute inset-0 flex justify-center items-center z-10">  
                      <FlowerImage progress={props.progress}/>
                      </section>
                    </section>
        </section>
    )
}