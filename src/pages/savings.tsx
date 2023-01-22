import React from 'react'
import Popup from 'reactjs-popup'
import {useState} from 'react'

const SavingsModal = () => {
    const [contribution, setContribution] = useState('')
    return(
        <div className="flex justify-center">
            <Popup
            trigger={<button>Insert Water Droplet Here</button>}>
                <div className="flex flex-col rounded-2xl  bg-[#E5FFF8]">
                    <h1 className="flex justify-center uppercase">goal contributions</h1>
                    <input 
                    className="text-[#372D40] border-black border-2"
                    type="text"
                    maxLength={10}
                    required
                    value={contribution}
                    onChange={(d) => setContribution(d.target.value)}
                    />
                    <button className="p-6 rounded-full m-20 bg-[#b18af8] text-white">Submit</button>
                </div>
            </Popup>
        </div>
    )
}

export default SavingsModal