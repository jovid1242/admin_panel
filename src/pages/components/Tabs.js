import React from 'react'
import Xtabs from 'core/tabs/Xtabs'
import { AiOutlineHome } from 'react-icons/ai'
import { ImProfile, ImNotification } from 'react-icons/im'
import { BiPhone } from 'react-icons/bi'

export default function Tabs() {
    const tabs = [
        {
            title: 'Home',
            content:
                'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            disable: false,
            icon: <AiOutlineHome />,
        },
        {
            title: 'Profile',
            content:
                'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            disable: false,
            icon: <ImProfile />,
        },
        {
            title: 'Contatc',
            content: 'lorem sdcsdc scsdcsdc  sd csdc sd csd cnsdc sd',
            disable: false,
            icon: <BiPhone />,
        },
        {
            title: 'Disable',
            content: 'lorem sdcsdc scsdcsdc csdcjnsdkcnspk s 8444c s5dc45',
            disable: true,
            icon: <ImNotification />,
        },
    ]
    return (
        <>
            <Xtabs
                type={'simpleTabs'}
                titleTab={'Simple Tabs'}
                tabs={tabs}
                icon={false}
            />
            <Xtabs
                type={'simplePills'}
                titleTab={'Simple Pills'}
                tabs={tabs}
                icon={false}
            />
            <Xtabs
                type={'iconTabs'}
                titleTab={'Icon Tabs'}
                tabs={tabs}
                icon={true}
            />
            <Xtabs
                type={'verticalTabs'}
                titleTab={'Vertical Bordered'}
                tabs={tabs}
                icon={false}
            />
        </>
    )
}
