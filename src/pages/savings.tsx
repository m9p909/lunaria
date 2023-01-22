import React, { useDeferredValue, useEffect } from 'react'
import Popup from 'reactjs-popup'
import { useState } from 'react'
import Image from 'next/image'
import { useTypesafeAnimate } from '../hooks/typesafeUseAnimate'
import { api } from '../utils/api'
import { useAutoAnimate } from '@formkit/auto-animate/react'
const SavingsModal = ({ triggerContribute }: { triggerContribute: () => void }) => {
    const [contribution, setContribution] = useState('')
    const [parent, setActive] = useAutoAnimate()
    const query = api.goal.addToSavings.useMutation({
        onSettled: () => triggerContribute()
    })


    const onContribute = async (e: { preventDefault: () => void }) => {
        e.preventDefault()
        const value = parseInt(contribution)
        if (value) {
              query.mutate(value)
        }
    }
    return (
        <div className="flex justify-center">
            <Popup

                trigger={<button ref={parent as React.RefObject<HTMLElement>} className="flex justify-center hover:brightness-150" id="dropbutton" data-tooltip-content="Water Plant" data-tooltip-place="right">
                    <Image width={100} height={100} alt="teardrop" src="/assets/IMG_0888.PNG"></Image>
                </button>}>
                <div className="flex flex-col rounded-2xl pt-10 mt-48 w-96 bg-[#E5FFF8]">
                    <h1 className="flex justify-center uppercase">goal contributions</h1>
                    <div className="flex justify-center">
                        <input
                            className="text-[#372D40] border-black border-2"
                            type="text"
                            maxLength={10}
                            required
                            value={contribution}
                            onChange={(d) => setContribution(d.target.value)}
                        />
                    </div>
                    <div className="flex justify-center">
                        <button onClick={(e) => void onContribute(e)} className="p-2 rounded-2xl m-10 bg-[#b18af8] text-white">Submit</button>
                    </div>
                </div>
            </Popup>
        </div>
    )
}

export default SavingsModal