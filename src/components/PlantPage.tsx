import { Goal } from "@prisma/client"

import { Tooltip } from 'react-tooltip'
import 'react-tooltip/dist/react-tooltip.css'
import FlowerProgress from "./FlowerProgress";
import Image from "next/image"
import SavingsModal from "../pages/savings";

const getPlantLevel = (saved: number, goal: number) =>{
    if(saved === 0){
        return 0
    } if(saved/goal < 0.25){
        return 1;
    } if(saved/goal < 0.50){
        return 2;
    } if(saved/goal < 0.75){
        return 3;
    } if(saved/goal < 1){
        return 4;
    } 
        return 5;

}

const PlantPage = ({goal, onContribute}: {goal: Goal, onContribute: () => void}) => {

    return <>
        <div>
            <div className="mt-10">
                <span className="text-8xl"> ${goal.amountSaved ? goal.amountSaved : 0} / ${goal.amount} </span>
            </div>
            <div>
            <div className="flex justify-center">
               <SavingsModal triggerContribute={() => onContribute() } /> 

            </div>
            </div>
            <div className="flex justify-center">
                <FlowerProgress progress={getPlantLevel(goal.amountSaved as number, goal.amount)} state={0}></FlowerProgress>

            </div>
        </div>
    </>

}

export {PlantPage}