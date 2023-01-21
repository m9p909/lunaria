import React from 'react';
import Link from 'next/link';

interface NavButton {
    label: string;
    redirect: string;
    icon?: string;
}

export default function NavButton({label, redirect, icon}: NavButton) {
    return(
        <button className="flex flex-row hover:bg-[#6DDFDB]/50 w-full rounded-lg p-2">
            <img className="w-6 p-0.5" src={icon} />
            <Link className="px-1 font-sans" href={redirect}>{label}</Link>
        </button>
    )
}