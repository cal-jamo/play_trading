import Image from "next/image";
import Link from 'next/link';

export default function HomePageContainer() {
    return (
        <div className="grid justify-items-center min-h-screen pb-5 font-[family-name:var(--font-geist-sans)]">
            <main className="flex flex-col gap-8 items-center sm:items-start">
                <h1 className="text-4xl items-center">Welcome to play trading!</h1>
                <img className="rounded mt-1" src="https://149359637.v2.pressablecdn.com/wp-content/uploads/2017/10/Sports-Unlimited-Wall-Mural-About-Murals.jpg" alt="Hero Banner" width="500" height="300" />
                <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
                    <h2 className="mb-2 text-xl">The ultimate investment platform for sports fans</h2>
                    <li>
                        Investing in things that are important to YOU!
                    </li>
                    <li>Trade your favorite athletes</li>
                    <li>Get real-time updates on your portfolio</li>
                    <li>Compare your investments with your friends</li>
                    <li>Read why this is a good idea!</li>
                </ol>

                <div className="flex gap-4 items-center flex-col sm:flex-row">
                    <Link
                        href="/invest_now"
                        className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
                    >
                        <Image
                            className="dark:invert"
                            src="https://nextjs.org/icons/vercel.svg"
                            alt="Vercel logomark"
                            width={20}
                            height={20}
                        />
                        Invest now!
                    </Link>
                    <a
                        className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
                        href="https://www.driveresearch.com/market-research-company-blog/sports-betting-statistics/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Read More!
                    </a>
                </div>
            </main>
            <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
            </footer>
        </div>
    );
}
