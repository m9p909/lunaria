import React from 'react';
import Link from 'next/link';

interface NavButton {
    label: string;
    redirect: string;
    icon?: string;
}

export default function NavButton({label, redirect}: NavButton) {
    return(
        <button className="flex flex-row hover:bg-[#6DDFDB]/50 w-full p-2">
            <Link className="px-1 text-transform: uppercase" href={redirect}>{label}</Link>
        </button>
    )
}