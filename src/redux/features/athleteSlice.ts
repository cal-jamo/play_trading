import { useEffect, useState } from 'react';
import { Athlete } from '@/types/athleteType';
import { MongoClient, MongoClientOptions } from 'mongodb';

const initialState: Athlete = {
    _id: "",
    fullName: '',
    firstName: '',
    lastName: '',
    pictureUrl: '',
    sport: '',
    price: 0,
    totalShares: 0
};

const AthleteComponent = () => {
    const [athletes, setAthletes] = useState<Athlete[]>([]);

    useEffect(() => {
        const fetchAthletes = async () => {
            const client = new MongoClient('mongodb://localhost:27017', { useUnifiedTopology: true } as MongoClientOptions);
            await client.connect();
            const db = client.db('play_trade');
            const athletesCollection = db.collection('athletes');
            const athletesData = await athletesCollection.find().toArray();
            const transformedAthletes = athletesData.map((athlete: any) => ({
                _id: athlete._id,
                fullName: athlete.fullName,
                firstName: athlete.firstName,
                lastName: athlete.lastName,
                pictureUrl: athlete.pictureUrl,
                sport: athlete.sport,
                price: athlete.price,
                totalShares: athlete.totalShares
            }));
            setAthletes(transformedAthletes);
            client.close();
        };

        fetchAthletes();
    }, []);

    // ... rest of your component
}

export default AthleteComponent;