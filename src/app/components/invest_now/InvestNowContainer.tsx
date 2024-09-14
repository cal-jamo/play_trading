"use client";
import React, { useState } from 'react';

interface Athlete {
    name: string;
    price: number;
    sport: string;
    shares: number;
}

const InvestNowContainer = () => {
    const [boughtAthletes, setBoughtAthletes] = useState<Athlete[]>([]);
    const totalInvestmentValue = boughtAthletes.reduce((total, athlete) => total + athlete.price, 0);
    const [totalMoney, setTotalMoney] = useState(900);
    const [athletes, setAthletes] = useState( [
        {
            name: 'Caleb Williams', price: 35, sport: 'Football', shares: 4
        },
        {
            name: 'Trae Young', price: 57, sport: 'Basketball', shares: 3
        },
        {
            name: 'Shohei Ohtani', price: 73, sport: 'Baseball', shares: 5
        },
        {
            name: 'Patrick Mahomes', price: 61, sport: 'Football', shares: 2
        },
        {
            name: 'Lebron James', price: 80, sport: 'Basketball', shares: 1
        },
        {
            name: 'Tom Brady', price: 44, sport: 'Football', shares: 5
        },
        {
            name: 'Luka Doncic', price: 92, sport: 'Basketball', shares: 4
        },
        {
            name: 'Mike Trout', price: 50, sport: 'Baseball', shares: 2
        },
        {
            name: 'Aaron Rodgers', price: 26, sport: 'Football', shares: 1
        },
        {
            name: 'Kevin Durant', price: 95, sport: 'Basketball', shares: 3
        },
        {
            name: 'Stephen Curry', price: 67, sport: 'Basketball', shares: 5
        },
        {
            name: 'Bryce Harper', price: 89, sport: 'Baseball', shares: 4
        },
        {
            name: 'Dak Prescott', price: 47, sport: 'Football', shares: 2
        },
        {
            name: 'Zion Williamson', price: 31, sport: 'Basketball', shares: 3
        },
        {
            name: 'Dustin Johnson', price: 63, sport: 'Golf', shares: 1
        },
        {
            name: 'Joel Embiid', price: 55, sport: 'Basketball', shares: 5
        },
        {
            name: 'Novak Djokovic', price: 88, sport: 'Tennis', shares: 2
        },
        {
            name: 'Kyrie Irving', price: 78, sport: 'Basketball', shares: 4
        },
        {
            name: 'Kawhi Leonard', price: 49, sport: 'Basketball', shares: 3
        },
        {
            name: 'Mookie Betts', price: 36, sport: 'Baseball', shares: 2
        },
        {
            name: 'Giannis Antetokounmpo', price: 82, sport: 'Basketball', shares: 5
        },
        {
            name: 'Cristiano Ronaldo', price: 74, sport: 'Soccer', shares: 4
        },
        {
            name: 'Lionel Messi', price: 91, sport: 'Soccer', shares: 3
        },
        {
            name: 'Serena Williams', price: 60, sport: 'Tennis', shares: 5
        },
        {
            name: 'Tiger Woods', price: 65, sport: 'Golf', shares: 2
        },
        {
            name: 'Rafael Nadal', price: 55, sport: 'Tennis', shares: 3
        },
        {
            name: 'Jimmy Butler', price: 40, sport: 'Basketball', shares: 4
        },
        {
            name: 'Christian McCaffrey', price: 72, sport: 'Football', shares: 1
        },
        {
            name: 'Jayson Tatum', price: 53, sport: 'Basketball', shares: 5
        },
        {
            name: 'Fernando Tatis Jr.', price: 49, sport: 'Baseball', shares: 2
        },
        {
            name: 'Josh Allen', price: 70, sport: 'Football', shares: 3
        },
        {
            name: 'Ja Morant', price: 45, sport: 'Basketball', shares: 4
        },
        {
            name: 'Joe Burrow', price: 66, sport: 'Football', shares: 5
        },
        {
            name: 'Max Verstappen', price: 85, sport: 'Formula 1', shares: 1
        },
        {
            name: 'Lewis Hamilton', price: 58, sport: 'Formula 1', shares: 2
        },
        {
            name: 'Simone Biles', price: 77, sport: 'Gymnastics', shares: 3
        },
        {
            name: 'Alexander Ovechkin', price: 62, sport: 'Hockey', shares: 5
        },
        {
            name: 'Sidney Crosby', price: 54, sport: 'Hockey', shares: 4
        },
        {
            name: 'Naomi Osaka', price: 83, sport: 'Tennis', shares: 2
        },
        {
            name: 'Aaron Judge', price: 71, sport: 'Baseball', shares: 3
        }
    ]);

    const buyAthlete = (athlete: Athlete) => {
    if (totalMoney >= athlete.price) {
        // Decrease the shares of the bought athlete
        setBoughtAthletes([...boughtAthletes, athlete]);
        setTotalMoney(totalMoney - athlete.price);
    } else {
        alert("You don't have enough money to buy this athlete");
    }
};

    const sellAthlete = (athlete: Athlete) => {
        setBoughtAthletes(boughtAthletes.filter((a) => a !== athlete));
        setTotalMoney(totalMoney + athlete.price);
    };

    const athletesBySport = athletes.reduce((acc, athlete) => {
        (acc[athlete.sport] = acc[athlete.sport] || []).push(athlete);
        return acc;
    }, {} as Record<string, Athlete[]>);

    return (
        <div>
            <h1 className='text-center text-xl mb-4 font-semibold'>Athletes</h1>
            <p className='text-center font-semibold'>Total Money: ${totalMoney}</p>

            {Object.keys(athletesBySport).map((sport, index) => (
            <div key={index} className="sport-container mb-6">
                <h2 className='mt-4 text-xl font-semibold'>{sport}</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 mt-4">
                    {athletesBySport[sport].map((athlete, idx) => (
                        <div key={idx} className="flex flex-col p-4 bg-black shadow-lg border border-gray-300 rounded-lg">
                            <div className="mb-2">
                                <span className="font-bold">{athlete.name}</span>
                            </div>
                            <div className="mb-2">
                                Price: <span className="text-green-600">${athlete.price}</span>
                            </div>
                            <div className="mb-4">
                                Shares: {athlete.shares}
                            </div>
                            <button onClick={() => buyAthlete(athlete)} className="bg-white text-black py-2 rounded hover:bg-gray-700">
                                Buy Now
                            </button>
                        </div>
                    ))}
                </div>
                <hr className="my-4 border-white" />
            </div>
        ))}

            <div className="mt-4 p-4 border border-black">
                <h2>Bought Athletes</h2>
                <p>Total Investment Value: ${totalInvestmentValue}</p>
                <ul>
                {boughtAthletes.map((athlete, index) => (
                    <li key={index} className="flex justify-between mb-2">
                        <div className="flex p-4">
                            {athlete.name} - ${athlete.price} - Shares: {athlete.shares}
                            <div className="flex ml-3">
                                <button onClick={() => sellAthlete(athlete)} className="bg-white text-black border border-black rounded px-2">Sell Now</button>
                            </div>
                        </div>
                    </li>
                ))}
                </ul>
            </div>
        </div>
    );
};

export default InvestNowContainer;