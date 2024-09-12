import Link from 'next/link';
import React from 'react';

const HeaderContainer = () => {
    return (
        <header className="flex justify-center items-center border border-white">
            <nav>
                <ul className="flex space-x-4 pt-3 pb-3">
                    <li><Link href="/portfolio">Portfolio</Link></li>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/sports_news">Sports News</Link></li>
                    <li><Link href="/invest_now">Explore</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default HeaderContainer;
