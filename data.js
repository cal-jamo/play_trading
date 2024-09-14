const athleteData = [{
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
}];

const teamData = [
    { name: 'Los Angeles Lakers', price: 100, sport: 'Basketball', shares: 5 },
    { name: 'New England Patriots', price: 95, sport: 'Football', shares: 3 },
    { name: 'New York Yankees', price: 120, sport: 'Baseball', shares: 4 },
    { name: 'Golden State Warriors', price: 110, sport: 'Basketball', shares: 2 },
    { name: 'Dallas Cowboys', price: 130, sport: 'Football', shares: 5 },
    { name: 'Real Madrid', price: 140, sport: 'Soccer', shares: 4 },
    { name: 'Manchester United', price: 125, sport: 'Soccer', shares: 3 },
    { name: 'Boston Red Sox', price: 90, sport: 'Baseball', shares: 2 },
    { name: 'Chicago Bulls', price: 85, sport: 'Basketball', shares: 4 },
    { name: 'San Francisco 49ers', price: 105, sport: 'Football', shares: 5 },
    { name: 'FC Barcelona', price: 135, sport: 'Soccer', shares: 3 },
    { name: 'Miami Heat', price: 75, sport: 'Basketball', shares: 1 },
    { name: 'Pittsburgh Steelers', price: 80, sport: 'Football', shares: 2 },
    { name: 'Toronto Raptors', price: 70, sport: 'Basketball', shares: 5 },
    { name: 'Los Angeles Dodgers', price: 115, sport: 'Baseball', shares: 4 },
    { name: 'Green Bay Packers', price: 125, sport: 'Football', shares: 3 },
    { name: 'Paris Saint-Germain', price: 150, sport: 'Soccer', shares: 4 },
    { name: 'Chelsea FC', price: 130, sport: 'Soccer', shares: 2 },
    { name: 'Houston Astros', price: 95, sport: 'Baseball', shares: 3 },
    { name: 'Philadelphia 76ers', price: 85, sport: 'Basketball', shares: 1 },
    { name: 'Kansas City Chiefs', price: 110, sport: 'Football', shares: 4 },
    { name: 'New York Knicks', price: 80, sport: 'Basketball', shares: 2 },
    { name: 'Juventus', price: 125, sport: 'Soccer', shares: 3 },
    { name: 'Milwaukee Bucks', price: 90, sport: 'Basketball', shares: 5 },
    { name: 'Oakland Raiders', price: 100, sport: 'Football', shares: 2 },
    { name: 'Chicago Cubs', price: 110, sport: 'Baseball', shares: 4 },
    { name: 'Bayern Munich', price: 140, sport: 'Soccer', shares: 3 },
    { name: 'Detroit Pistons', price: 70, sport: 'Basketball', shares: 1 },
    { name: 'Minnesota Vikings', price: 95, sport: 'Football', shares: 2 },
    { name: 'Los Angeles Clippers', price: 85, sport: 'Basketball', shares: 3 },
    { name: 'Cleveland Browns', price: 75, sport: 'Football', shares: 4 },
    { name: 'Seattle Seahawks', price: 115, sport: 'Football', shares: 5 },
    { name: 'New Orleans Pelicans', price: 65, sport: 'Basketball', shares: 2 },
    { name: 'Tampa Bay Buccaneers', price: 105, sport: 'Football', shares: 3 },
    { name: 'St. Louis Cardinals', price: 90, sport: 'Baseball', shares: 4 },
    { name: 'Atlanta Hawks', price: 70, sport: 'Basketball', shares: 1 },
    { name: 'Miami Dolphins', price: 85, sport: 'Football', shares: 5 },
    { name: 'Denver Broncos', price: 95, sport: 'Football', shares: 2 },
    { name: 'Houston Rockets', price: 75, sport: 'Basketball', shares: 3 },
    { name: 'New York Mets', price: 100, sport: 'Baseball', shares: 4 },
    { name: 'Brooklyn Nets', price: 90, sport: 'Basketball', shares: 2 },
    { name: 'Atlanta Braves', price: 115, sport: 'Baseball', shares: 5 },
    { name: 'Washington Football Team', price: 95, sport: 'Football', shares: 4 },
    { name: 'Inter Milan', price: 135, sport: 'Soccer', shares: 3 },
    { name: 'Phoenix Suns', price: 80, sport: 'Basketball', shares: 1 },
    { name: 'Carolina Panthers', price: 75, sport: 'Football', shares: 2 },
    { name: 'Texas Rangers', price: 105, sport: 'Baseball', shares: 3 },
    { name: 'Orlando Magic', price: 65, sport: 'Basketball', shares: 5 },
    { name: 'Cincinnati Bengals', price: 95, sport: 'Football', shares: 3 },
    { name: 'Colorado Rockies', price: 85, sport: 'Baseball', shares: 1 },
    { name: 'AC Milan', price: 130, sport: 'Soccer', shares: 4 },
    { name: 'Sacramento Kings', price: 70, sport: 'Basketball', shares: 2 },
    { name: 'Las Vegas Raiders', price: 100, sport: 'Football', shares: 5 },
    { name: 'San Antonio Spurs', price: 80, sport: 'Basketball', shares: 3 },
    { name: 'Baltimore Ravens', price: 110, sport: 'Football', shares: 4 },
    { name: 'San Diego Padres', price: 95, sport: 'Baseball', shares: 2 },
];

module.exports = teamData;

