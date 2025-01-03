'use client'

import Image from 'next/image'
import logo from '@/assets/logo.svg'
import Link from 'next/link'
import LinkMenu from '../atoms/LinkMenu'
import { usePathname } from 'next/navigation'

export default function Menu(){
    const url = usePathname()

    return (
        <section className='bg-purple-100 rounded-normal grid grid-rows-[76px_1fr_76px] items-center justify-center p-8'>
            <Link href='/'>
                <Image src={logo.src} width={76} height={76} alt='Logo' priority/>
            </Link>

            <div className='grid gap-4'>
                <LinkMenu href='/dashboard' active={url == '/dashboard'}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 20 20" fill="none">
                        <rect x="0.5" y="0.5" width="7.88889" height="7.88889" rx="2.5"/>
                        <rect x="11.6111" y="0.5" width="7.88889" height="7.88889" rx="2.5"/>
                        <rect x="0.5" y="11.6111" width="7.88889" height="7.88889" rx="2.5"/>
                        <rect x="11.6111" y="11.6111" width="7.88889" height="7.88889" rx="2.5"/>
                    </svg>
                </LinkMenu>
                <LinkMenu href='/projects' active={url == '/projects'}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 20 17" fill="none">
                        <rect x="0.5" y="0.5" width="19" height="16" rx="3.5"/>
                        <rect x="4.5" y="5.5" width="4" height="4" rx="1.5"/>
                        <path d="M4 12H9"/>
                        <path d="M11 12H16"/>
                        <path d="M11 9H16"/>
                        <path d="M11 6H16"/>
                    </svg>
                </LinkMenu>
            </div>
        </section>
    )
}