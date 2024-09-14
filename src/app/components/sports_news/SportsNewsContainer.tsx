"use client";
import React, { useEffect, useState } from 'react';

interface Article {
        source: {
            id: string | null;
            name: string;
        };
        author: string | null;
        title: string;
        description: string;
        url: string;
        urlToImage: string | null;
        publishedAt: string;
        content: string;
    }

const SportsNewsContainer = () => {
    const [articles, setArticles] = useState<Article[] | null>(null);

    useEffect(() => {
        fetch('https://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=72fba5b14dc14f968aea3812b9bcdf92')
            .then((res) => res.json())
            .then((jsonResponse) => {
                console.log(jsonResponse);
                setArticles(jsonResponse.articles);
            });
    }, []);
    console.log(articles);

    return (
        <div className='text-white'>
            <h1 className='text-center text-xl font-semibold mb-2'>Sports News</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center">
                {articles && articles.map((article, index) => (
                    <div key={index} className="rounded-lg p-4 shadow-lg border border-gray-300">
                        <h2 className="text-xl text-center font-semibold mb-2">{article.title}</h2>
                        <img
                            className="w-full mx-auto max-w-xs object-cover border border-bg-blue-600 mb-2 rounded-md"
                            src={article.urlToImage ?? ''}
                            alt={article.title}
                        />
                        <p className="mb-4 text-center">{article.description}...</p>
                        <a
                            href={article.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500 hover:underline text-center"
                        >
                            Read more at {article.source.name}
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SportsNewsContainer;