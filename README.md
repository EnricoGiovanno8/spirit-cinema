# Movie Explorer

## Overview

Movie Explorer is a web application that allows users to browse movies categorized into different sections such as:

- **Now Playing**
- **Popular**
- **Top Rated**
- **Upcoming**

Users can also search for movies by name and view detailed information about a selected movie by clicking on a movie card.

## Features

- **Browse Movies:** View lists of movies currently playing, popular movies, top-rated movies, and upcoming releases.
- **Search Movies:** Search for movies by title.
- **Movie Details:** Click on a movie to view its detailed information, including title, overview, genres, release date, and ratings.

## API Integration

This application utilizes [The Movie Database (TMDb) API](https://developers.themoviedb.org/3/getting-started/introduction) to fetch movie data. The following API endpoints are used:

### Base URL

```
https://api.themoviedb.org/3
```

### Endpoints

- **Now Playing Movies:** `/movie/now_playing`
- **Popular Movies:** `/movie/popular`
- **Top Rated Movies:** `/movie/top_rated`
- **Upcoming Movies:** `/movie/upcoming`
- **Search Movies:** `/search/movie`
- **Movie Details:** `/movie/{movie_id}`

## API Response Structures

### Movie List Responses

The following APIs return lists of movies:

- Now Playing
- Popular
- Top Rated
- Upcoming
- Search Movies

#### **Response Type:**

```typescript
interface Movie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

interface MovieQueryResult {
  results: Movie[];
}
```

### Movie Detail Response

#### **Response Type:**

```typescript
interface MovieDetailResult {
  adult: boolean;
  backdrop_path: string | null;
  belongs_to_collection: null | object;
  budget: number;
  genres: { id: number; name: string }[];
  homepage: string;
  id: number;
  imdb_id: string;
  origin_country: string[];
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: { id: number; name: string; logo_path?: string; origin_country: string }[];
  production_countries: { iso_3166_1: string; name: string }[];
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: { english_name: string; iso_639_1: string; name: string }[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}
```

## How to Use

1. Open the website.
2. Browse movies in different categories (Now Playing, Popular, Top Rated, Upcoming).
3. Use the search bar to find a movie by title.
4. Click on a movie card to view detailed information.

## Technologies Used

- **Frontend:** React.js with TypeScript and Tailwind CSS
- **State Management:** TanStack Query
- **Routing:** React Router
- **Testing:** Vitest with React Testing Library
- **API:** TMDb API

## Setup Instructions

1. Clone the repository:
   ```sh
   git clone https://github.com/EnricoGiovanno8/spirit-cinema.git
   ```
2. Install dependencies:
   ```sh
   yarn
   ```
3. Start the development server:
   ```sh
   yarn dev
   ```
4. Open the application in your browser.

