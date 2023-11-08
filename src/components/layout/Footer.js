import React from 'react'
import { BsGithub } from "react-icons/bs";
import { SiNotion } from "react-icons/si";
import Logo from './Logo';
import GridContainer from './GridContainer';
import SimpleNav from './SimpleNav';
import Sns from './Sns';

const Footer = () => {

    const navItems = [
        {
            title: "공지사항",
            href: "/notice",
        },
        {
            title: "버그제보",
            href: "/report",
        },
    ]

    const snsItems = {
        fe: [
            {
                label: "프론트 깃허브",
                href: "/fe-github",
                icon: <BsGithub size='18px'/>
            },
            {
                label: "프론트 노션",
                href: "/fe-notion",
                icon: <SiNotion size='18px' />
            },
        ],
        be: [
            {
                label: "백엔드 깃허브",
                href: "/be-github",
                icon: <BsGithub size='18px'/>
            },
            {
                label: "프론트 노션",
                href: "/be-notion",
                icon: <SiNotion size='18px' />
            },
        ]
    }

    return (
        <footer id='footer' role='contentinfo' className='bg-white border-top border-2 mt-3 mb-2'>
            <GridContainer column>
                <Logo />
                <SimpleNav items={navItems} />
                <div className='' style={{ fontSize: '12px' }}>
                    <p className='my-0'>공부 목적으로 만들어보는 간단한 개발자 커뮤니티</p>
                    <p className='my-0'>기술스택 : react, bootstrap, spring, jpa </p>
                    <p className='my-0'>© 2023 (주)Com, Inc. All rights reserved.</p>
                </div>
                <div className='d-flex'>
                    <Sns group='fe' items={snsItems.fe} />
                    <Sns group='be' items={snsItems.be} />
                </div>
            </GridContainer>
        </footer>
    )
}

export default Footer