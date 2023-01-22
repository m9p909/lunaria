import React from 'react'
import Popup from 'reactjs-popup'
import {useState} from 'react'

const SavingsModal = () => {
    const [contribution, setContribution] = useState('')
    return(
        <div className="flex justify-center">
            <Popup
            trigger={<button className="flex justify-center">
                <img className="w-1/6 h-auto" src="/assets/IMG_0888.PNG"></img>
            </button>}>
                <div className="flex flex-col rounded-2xl pt-10 mt-48 w-96 opacity-70 bg-[#E5FFF8]">
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
                        <button className="p-2 rounded-2xl m-10 bg-[#b18af8] text-white">Submit</button>
                    </div>
                </div>
            </Popup>
        </div>
    )
}

export default SavingsModal