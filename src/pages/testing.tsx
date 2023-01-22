import FlowerProgress, { FlowerState } from "../components/FlowerProgress";


export default function TestPage(){

    return <FlowerProgress progress={5} state={FlowerState.Normal} />
}