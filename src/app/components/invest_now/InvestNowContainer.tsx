"use client";
import React, { useState } from 'react';

interface Athlete {
    name: string;
    price: number;
    sport: string;
}

const InvestNowContainer = () => {
    const [boughtAthletes, setBoughtAthletes] = useState<Athlete[]>([]);
    const [totalMoney, setTotalMoney] = useState(900);

    const athletes: Athlete[] = [
        { name: 'Caleb Williams', price: 35, sport: 'Football' },
        { name: 'Trae Young', price: 57, sport: 'Basketball' },
        { name: 'Shohei Ohtani', price: 73, sport: 'Baseball' },
        { name: 'Patrick Mahomes', price: 61, sport: 'Football' },
        { name: 'Lebron James', price: 80, sport: 'Basketball' },
        { name: 'Tom Brady', price: 44, sport: 'Football' },
        { name: 'Luka Doncic', price: 92, sport: 'Basketball' },
        { name: 'Mike Trout', price: 50, sport: 'Baseball' },
        { name: 'Aaron Rodgers', price: 26, sport: 'Football' },
        { name: 'Kevin Durant', price: 95, sport: 'Basketball' },
        { name: 'Stephen Curry', price: 67, sport: 'Basketball' },
        { name: 'Bryce Harper', price: 89, sport: 'Baseball' },
        { name: 'Dak Prescott', price: 47, sport: 'Football' },
        { name: 'Zion Williamson', price: 31, sport: 'Basketball' },
        { name: 'Dustin Johnson', price: 63, sport: 'Golf' },
        { name: 'Joel Embiid', price: 55, sport: 'Basketball' },
        { name: 'Novak Djokovic', price: 88, sport: 'Tennis' },
        { name: 'Kyrie Irving', price: 78, sport: 'Basketball' },
        { name: 'Kawhi Leonard', price: 49, sport: 'Basketball' },
        { name: 'Mookie Betts', price: 36, sport: 'Baseball' },
        { name: 'Giannis Antetokounmpo', price: 82, sport: 'Basketball' },
        { name: 'Cristiano Ronaldo', price: 74, sport: 'Soccer' },
        { name: 'Lionel Messi', price: 91, sport: 'Soccer' },
        { name: 'Serena Williams', price: 60, sport: 'Tennis' },
        { name: 'Tiger Woods', price: 65, sport: 'Golf' },
        { name: 'Rafael Nadal', price: 55, sport: 'Tennis' },
        { name: 'Jimmy Butler', price: 40, sport: 'Basketball' },
        { name: 'Christian McCaffrey', price: 72, sport: 'Football' },
        { name: 'Jayson Tatum', price: 53, sport: 'Basketball' },
        { name: 'Fernando Tatis Jr.', price: 49, sport: 'Baseball' },
        { name: 'Josh Allen', price: 70, sport: 'Football' },
        { name: 'Ja Morant', price: 45, sport: 'Basketball' },
        { name: 'Joe Burrow', price: 66, sport: 'Football' },
        { name: 'Max Verstappen', price: 85, sport: 'Formula 1' },
        { name: 'Lewis Hamilton', price: 58, sport: 'Formula 1' },
        { name: 'Simone Biles', price: 77, sport: 'Gymnastics' },
        { name: 'Alexander Ovechkin', price: 62, sport: 'Hockey' },
        { name: 'Sidney Crosby', price: 54, sport: 'Hockey' },
        { name: 'Naomi Osaka', price: 83, sport: 'Tennis' },
        { name: 'Aaron Judge', price: 71, sport: 'Baseball' }
    ];

    const buyAthlete = (athlete: Athlete) => {
        if (totalMoney >= athlete.price) {
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
            <h1>Athletes</h1>
            <p>Total Money: ${totalMoney}</p>

            {Object.keys(athletesBySport).map((sport, index) => (
                <div key={index} className="sport-container mb-6">
                    <h2 className='mt-4'>{sport}</h2>
                    <ul>
                    {athletesBySport[sport].map((athlete, idx) => (
                        <li key={idx} className="flex justify-between mb-2">
                            <div className="flex p-4">
                                {athlete.name} - ${athlete.price}
                                <div className="flex ml-3">
                                    <button onClick={() => buyAthlete(athlete)} className="bg-white text-black border border-black rounded px-2">Buy Now</button>
                                </div>
                            </div>
                        </li>
                    ))}
                    </ul>
                    <hr className="my-4 border-white" />
                </div>
            ))}

            <div className="mt-4 p-4 border border-black">
                <h2>Bought Athletes</h2>
                <ul>
                {boughtAthletes.map((athlete, index) => (
                    <li key={index} className="flex justify-between mb-2">
                        <div className="flex p-4">
                            {athlete.name} - ${athlete.price}
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