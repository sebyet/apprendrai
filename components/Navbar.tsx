
'use client';

import React, { useEffect, useState } from 'react';
import Image from "next/image";
import Link from 'next/link';
import { Button } from './ui/button';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';
import Logo from '@/app/components/Logo';
export const linksServices = [
    {
        title: "Experience personalisation",
        path: "/services/personalised-experience",
        name: "AI Discovery Services",
    },
    {
        title: "Autonomous assistants/agents",
        path: "/services/autonomous-agents",
        name: "AI Coaching Services",
    },
    {
        title: "AI Integration & Dev",
        path: "/services/integration",
        name: "AI Conseil Services",
    },
  ];

  export const links = [
    {
      title: "Our Story",
      path: "/story",
      name: "story",
    },
  ];

const Navbar: React.FC = () => {
    const pathname = usePathname();

    const lastPath = pathname.split("/").filter(Boolean).pop() || '';

    return (
        <>
            <nav className="flex flex-col py-5 px-0">
                <ul className="flex w-full items-center justify-between">
                    <Link className='text-xl md:text-3xl font-semibold' href={"/"}>
                        <span className='text-brand'>AI</span>
                        <span className='text-accent'>.</span>
                        <span className='text-brand'>Collabs</span>
                    </Link>

                    <Link href="/#call">
                        <Button className='hidden md:flex' variant="accent">Book a Free Call</Button>
                        <Button className='flex md:hidden' size='sm' variant="accent">Book a call</Button>
                    </Link>
                   
              
                </ul>
            </nav>
        </>
    );
};

export default Navbar;


