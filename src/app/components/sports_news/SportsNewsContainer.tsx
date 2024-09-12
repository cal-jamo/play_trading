import React, { useEffect, useState } from 'react';

const SportsNewsContainer = () => {// Add a comma here

    return (
        <div>
            <h1>Sports News</h1>
                <div>
                    <div className="flex justify-between mb-2">
                        <div className="flex p-4">
                            <div className="flex ml-3">
                            <a href="https://www.espn.com/" target="_blank" rel="noopener noreferrer">
                                <button className="bg-white text-black border border-black rounded px-2">Read More</button>
                            </a>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    );
}

export default SportsNewsContainer;
