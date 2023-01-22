import React from 'react';
import NavButton from './NavButton';

export default function NavBar() {
    return(
        <aside className="bg-[#E5FFF8] w-1/6 h-screen flex flex-col px-3 py-4">
            <button className="flex justify-center p-5">
                <img className="h-20" src="https://www.studiofun.com/wp-content/uploads/2020/01/Big-Bird-Header-1024x536.png"/> 
            </button>
            <NavButton label="Main" redirect="/" icon="https://cdn-icons-png.flaticon.com/512/25/25694.png" />
            <NavButton label="Goals" redirect="/" icon="https://cdn-icons-png.flaticon.com/512/25/25694.png" />
            <NavButton label="History" redirect="/" icon="https://cdn-icons-png.flaticon.com/512/25/25694.png" />
            <NavButton label="Settings" redirect="/" icon="https://cdn-icons-png.flaticon.com/512/25/25694.png" />
        </aside>
    );
}
