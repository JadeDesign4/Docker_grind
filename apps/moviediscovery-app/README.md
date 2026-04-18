The Movie Discovery App is the best project for demonstrating your ability to work with External APIs—a core skill for any professional frontend developer. This app will fetch real-time data from The Movie Database (TMDB), allowing users to browse popular films and search for specific titles.
## 1. Get Your API Key
To make this work, you need a free API key from TMDB:

   1. Sign up at TheMovieDB.org.
   2. Go to your Account Settings > API and click Create to get your key.

## 2. The HTML Skeleton (index.html)
We need a search bar and a main container where the movie "cards" will be injected dynamically.

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Movie Explorer</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header>
        <form id="form">
            <input type="text" id="search" placeholder="Search for a movie..." class="search">
        </form>
    </header>

    <main id="main">
        <!-- Movie cards will appear here -->
    </main>

    <script src="script.js"></script>
</body>
</html>

## 3. The Modern Styling (style.css)
This creates a grid layout that automatically adjusts based on the screen size.

@import url('https://googleapis.com');

* { box-sizing: border-box; }
body { background-color: #22254b; font-family: 'Poppins', sans-serif; margin: 0; }

header { background-color: #373b69; padding: 1rem; display: flex; justify-content: flex-end; }
.search { background-color: transparent; border: 2px solid #22254b; border-radius: 50px; color: #fff; font-family: inherit; font-size: 1rem; padding: 0.5rem 1rem; }
.search::placeholder { color: #7378c5; }

main { display: flex; flex-wrap: wrap; justify-content: center; }

.movie { background-color: #373b69; border-radius: 3px; box-shadow: 0 4px 5px rgba(0,0,0,0.2); margin: 1rem; width: 300px; position: relative; overflow: hidden; }
.movie img { width: 100%; }
.movie-info { color: #eee; display: flex; align-items: center; justify-content: space-between; padding: 0.5rem 10px 1rem; }

## 4. The Logic (script.js)
This script uses the fetch() API to talk to TMDB and forEach() to render each movie card.

// Add your API Key from TMDB hereconst API_URL = '...'; const SEARCH_API = '...';const main = document.getElementById('main');const form = document.getElementById('form');const search = document.getElementById('search');
// Fetch and display movies using fetch(), async/await, and DOM manipulationasync function getMovies(url) {
    const res = await fetch(url);
    const data = await res.json();
    showMovies(data.results);
}// ... (implementation of showMovies and search event listener)

## Why this is essential for your portfolio:

* Asynchronous JS: Demonstrates async/await and fetch() for API integration.
* Dynamic UI: Generates DOM elements dynamically based on real-time data.
* Search Functionality: Implements event handling for filtering API results.

Would you like to move on to Project No. 4 (The Kanban Drag & Drop Board) to practice more complex browser interactions?

