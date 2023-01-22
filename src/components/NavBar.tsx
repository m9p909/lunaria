import React from 'react';
import NavButton from './NavButton';

export default function NavBar() {
    return(
        <aside className="bg-[#E5FFF8] w-1/6 h-screen flex flex-col py-4 border-2-bg">
            <button className="flex justify-center p-5">
                <img className="h-20" src='.../public/assets/IMG_0872.PNG/'/> 
            </button>
            <NavButton label="Main" redirect="/"/>
            <NavButton label="Goals" redirect="/"/>
            <NavButton label="History" redirect="/"/>
            <NavButton label="Settings" redirect="/"/>
        </aside>
    );
}
