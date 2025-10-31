# CodingFriends - Complete Documentation

## Project Overview

CodingFriends is a comprehensive community platform designed specifically for programmers. It combines music for focus, inspirational content, community engagement, and humor into one cohesive platform.

**Tagline:** "Code. Chill. Connect."

---

## Table of Contents

1. [Architecture Overview](#architecture-overview)
2. [Frontend Structure](#frontend-structure)
3. [Backend Architecture](#backend-architecture)
4. [API Integrations](#api-integrations)
5. [Database Schema](#database-schema)
6. [Authentication System](#authentication-system)
7. [Features & Implementation](#features--implementation)
8. [Deployment Guide](#deployment-guide)

---

## Architecture Overview

### Tech Stack

**Frontend:**
- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS v4
- Lucide Icons
- Responsive Design

**Backend:**
- Node.js + Express.js (Recommended)
- RESTful API Architecture
- JWT Authentication
- WebSocket (Real-time features)

**Database:**
- PostgreSQL (Primary)
- Redis (Caching & Sessions)
- S3/Blob Storage (Media)

**External APIs:**
- Spotify API (Music)
- TMDb API (Movies)
- YouTube Data API (Video embedding)
- Unsplash API (Image placeholders)

---

## Frontend Structure

### Directory Layout

\`\`\`
app/
├── layout.tsx (Root layout)
├── globals.css (Tailwind config & theme)
├── page.tsx (Homepage)
├── music/
│   └── page.tsx (Music player page)
├── movies/
│   └── page.tsx (Movies page)
├── community/
│   └── page.tsx (Community forum page)
└── memes/
    └── page.tsx (Meme gallery page)

components/
├── navigation.tsx (Header with navigation)
├── hero-section.tsx (Landing page hero)
├── features-grid.tsx (Feature showcase)
├── music-player.tsx (Main music player)
├── playlist-selector.tsx (Playlist selection)
├── movie-grid.tsx (Movie grid display)
├── movie-filters.tsx (Category filters)
├── forum-categories.tsx (Forum sidebar)
├── thread-list.tsx (Forum threads)
├── meme-gallery.tsx (Meme feed)
├── meme-upload.tsx (Meme upload form)
└── footer.tsx (Footer component)
\`\`\`

### Key Components

#### Navigation Component
- Sticky header with logo and navigation links
- Mobile hamburger menu
- Authentication buttons
- Links to all major sections

#### Music Player
- Album art display with animation
- Play/Pause controls
- Progress bar with seek functionality
- Volume control
- Like/Favorite system
- Playlist selection

#### Movie Grid
- Responsive grid layout (1-4 columns based on screen)
- Movie posters with hover effects
- Rating display
- Category filtering
- Play button overlay

#### Community Forum
- Sidebar with forum categories
- Thread list with stats (replies, views, time)
- Pinned threads indicator
- User engagement metrics
- Thread creation button

#### Meme Gallery
- Masonry/grid layout
- Image upload form
- Like/comment/share interactions
- Author attribution
- Real-time upload functionality

---

## Backend Architecture

### API Endpoints

#### Authentication
\`\`\`
POST /api/auth/register
- Request: { email, password, username }
- Response: { user, token, refreshToken }

POST /api/auth/login
- Request: { email, password }
- Response: { user, token, refreshToken }

POST /api/auth/refresh
- Request: { refreshToken }
- Response: { token }

POST /api/auth/logout
- Request: { refreshToken }
- Response: { success: boolean }
\`\`\`

#### User Profile
\`\`\`
GET /api/users/:id
- Response: User object with profile info

PUT /api/users/:id
- Request: { username, bio, avatar, preferences }
- Response: Updated user object

GET /api/users/:id/favorites
- Response: Array of liked music, movies, memes

POST /api/users/:id/favorites
- Request: { type: 'music|movie|meme', itemId }
- Response: { success: boolean }
\`\`\`

#### Music API
\`\`\`
GET /api/music/playlists
- Response: Array of playlists

GET /api/music/playlists/:id/tracks
- Response: Array of tracks in playlist

GET /api/music/search?q=query
- Response: Array of matching tracks

POST /api/music/history
- Request: { trackId, duration, completed }
- Response: { success: boolean }

GET /api/music/recommendations
- Query: ?mood=focus&genre=lofi
- Response: Array of recommended tracks
\`\`\`

#### Movies API
\`\`\`
GET /api/movies?page=1&category=all
- Response: Paginated movie list with metadata

GET /api/movies/:id
- Response: Detailed movie object with recommendations

GET /api/movies/categories
- Response: Array of available categories

POST /api/movies/:id/watch
- Request: { duration, completed, rating }
- Response: { success: boolean }

GET /api/movies/:id/reviews
- Response: Array of community reviews
\`\`\`

#### Community API
\`\`\`
GET /api/forums
- Response: Array of forum categories

GET /api/forums/:forumId/threads?page=1&sort=latest
- Response: Paginated thread list

POST /api/forums/:forumId/threads
- Request: { title, content }
- Response: Created thread object

GET /api/forums/threads/:threadId/replies
- Response: Array of replies

POST /api/forums/threads/:threadId/reply
- Request: { content }
- Response: Created reply object

PUT /api/forums/threads/:threadId
- Request: { title, content }
- Response: Updated thread object

DELETE /api/forums/threads/:threadId
- Response: { success: boolean }

GET /api/jobs
- Response: Array of job postings

POST /api/jobs
- Request: { title, description, company, location, salary }
- Response: Created job posting
\`\`\`

#### Memes API
\`\`\`
GET /api/memes?page=1&sort=trending
- Response: Paginated meme list

POST /api/memes/upload
- Request: FormData with image file
- Response: { memeId, url, metadata }

POST /api/memes/:memeId/like
- Response: { likes: number }

POST /api/memes/:memeId/unlike
- Response: { likes: number }

GET /api/memes/:memeId/comments
- Response: Array of comments

POST /api/memes/:memeId/comment
- Request: { content }
- Response: Created comment object

DELETE /api/memes/:memeId
- Response: { success: boolean }
\`\`\`

---

## API Integrations

### 1. Spotify API

**Purpose:** Fetch and stream music playlists

**Setup:**
1. Create app on [Spotify Developer Dashboard](https://developer.spotify.com)
2. Get Client ID and Client Secret
3. Request access token using OAuth 2.0 Client Credentials flow

**Key Endpoints:**
\`\`\`javascript
// Get access token
POST https://accounts.spotify.com/api/token
- Body: { grant_type: 'client_credentials' }
- Headers: Authorization: Basic <base64(id:secret)>

// Get playlists
GET https://api.spotify.com/v1/browse/categories
GET https://api.spotify.com/v1/playlists/{playlist_id}/tracks

// Search tracks
GET https://api.spotify.com/v1/search?q={query}&type=track
\`\`\`

**Integration Example:**
\`\`\`javascript
// Backend - Spotify service
async function getPlaylistTracks(playlistId) {
  const token = await getSpotifyToken();
  const response = await fetch(
    `https://api.spotify.com/v1/playlists/${playlistId}/tracks`,
    { headers: { Authorization: `Bearer ${token}` } }
  );
  return response.json();
}
\`\`\`

### 2. TMDb API

**Purpose:** Fetch movie data, ratings, and recommendations

**Setup:**
1. Register at [TMDb](https://www.themoviedb.org/settings/api)
2. Get API key
3. Use API key for all requests

**Key Endpoints:**
\`\`\`javascript
// Trending movies
GET https://api.themoviedb.org/3/trending/movie/week
- Params: { api_key, page }

// Search movies
GET https://api.themoviedb.org/3/search/movie
- Params: { api_key, query, page }

// Movie details
GET https://api.themoviedb.org/3/movie/{movie_id}
- Params: { api_key }

// Recommendations
GET https://api.themoviedb.org/3/movie/{movie_id}/recommendations
- Params: { api_key }
\`\`\`

**Integration Example:**
\`\`\`javascript
// Backend - TMDb service
async function getTrendingMovies(page = 1) {
  const response = await fetch(
    `https://api.themoviedb.org/3/trending/movie/week?api_key=${TMDB_KEY}&page=${page}`
  );
  return response.json();
}

// Cache popular searches to reduce API calls
const movieCache = new Map();
\`\`\`

### 3. YouTube Data API

**Purpose:** Embed and search for video content

**Setup:**
1. Enable YouTube Data API in Google Cloud Console
2. Create API key
3. Set up quota and quotas

**Key Features:**
- Video search
- Playlist retrieval
- Video embedding
- Comments system

### 4. Firebase Authentication (Optional Alternative)

**Purpose:** Social login and authentication

**Supported Methods:**
- Google OAuth
- GitHub OAuth
- Email/Password
- Phone Authentication

---

## Database Schema

### Users Table
\`\`\`sql
CREATE TABLE users (
  id UUID PRIMARY KEY,
  username VARCHAR(255) UNIQUE NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  avatar_url TEXT,
  bio TEXT,
  programming_languages JSON,
  experience_level ENUM('beginner', 'intermediate', 'advanced'),
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW(),
  last_login TIMESTAMP
);
\`\`\`

### Music Playlists
\`\`\`sql
CREATE TABLE playlists (
  id UUID PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  description TEXT,
  category VARCHAR(100),
  genre VARCHAR(100),
  cover_url TEXT,
  created_by UUID REFERENCES users(id),
  is_public BOOLEAN DEFAULT true,
  play_count INT DEFAULT 0,
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE playlist_tracks (
  id UUID PRIMARY KEY,
  playlist_id UUID REFERENCES playlists(id),
  track_id VARCHAR(255),
  track_name VARCHAR(255),
  artist_name VARCHAR(255),
  duration_ms INT,
  spotify_url TEXT,
  added_at TIMESTAMP DEFAULT NOW()
);
\`\`\`

### User Favorites
\`\`\`sql
CREATE TABLE favorites (
  id UUID PRIMARY KEY,
  user_id UUID REFERENCES users(id),
  item_type ENUM('music', 'movie', 'meme') NOT NULL,
  item_id VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT NOW(),
  UNIQUE(user_id, item_type, item_id)
);
\`\`\`

### Community Forums
\`\`\`sql
CREATE TABLE forums (
  id UUID PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  slug VARCHAR(255) UNIQUE,
  description TEXT,
  category VARCHAR(100),
  member_count INT DEFAULT 0,
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE threads (
  id UUID PRIMARY KEY,
  forum_id UUID REFERENCES forums(id),
  user_id UUID REFERENCES users(id),
  title VARCHAR(255) NOT NULL,
  content TEXT NOT NULL,
  pinned BOOLEAN DEFAULT false,
  view_count INT DEFAULT 0,
  reply_count INT DEFAULT 0,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE replies (
  id UUID PRIMARY KEY,
  thread_id UUID REFERENCES threads(id),
  user_id UUID REFERENCES users(id),
  content TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);
\`\`\`

### Memes
\`\`\`sql
CREATE TABLE memes (
  id UUID PRIMARY KEY,
  user_id UUID REFERENCES users(id),
  image_url TEXT NOT NULL,
  description TEXT,
  like_count INT DEFAULT 0,
  comment_count INT DEFAULT 0,
  view_count INT DEFAULT 0,
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE meme_comments (
  id UUID PRIMARY KEY,
  meme_id UUID REFERENCES memes(id),
  user_id UUID REFERENCES users(id),
  content TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE meme_likes (
  id UUID PRIMARY KEY,
  meme_id UUID REFERENCES memes(id),
  user_id UUID REFERENCES users(id),
  created_at TIMESTAMP DEFAULT NOW(),
  UNIQUE(meme_id, user_id)
);
\`\`\`

### Jobs Postings
\`\`\`sql
CREATE TABLE job_postings (
  id UUID PRIMARY KEY,
  user_id UUID REFERENCES users(id),
  title VARCHAR(255) NOT NULL,
  description TEXT NOT NULL,
  company_name VARCHAR(255),
  location VARCHAR(255),
  job_type ENUM('full-time', 'part-time', 'contract', 'freelance'),
  salary_min DECIMAL(10, 2),
  salary_max DECIMAL(10, 2),
  required_skills JSON,
  created_at TIMESTAMP DEFAULT NOW(),
  expires_at TIMESTAMP
);
\`\`\`

---

## Authentication System

### JWT Implementation

**Token Structure:**
\`\`\`javascript
// Access Token (15 minutes expiry)
{
  sub: user.id,
  email: user.email,
  username: user.username,
  iat: timestamp,
  exp: timestamp + 15min
}

// Refresh Token (7 days expiry)
{
  sub: user.id,
  type: 'refresh',
  iat: timestamp,
  exp: timestamp + 7days
}
\`\`\`

**Backend Implementation:**
\`\`\`javascript
// Middleware for protecting routes
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) return res.sendStatus(401);

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
};
\`\`\`

---

## Features & Implementation

### 1. Music Player Feature

**Frontend:**
- Real-time playback visualization
- Progress tracking
- Volume control
- Playlist management
- Like/favorite system

**Backend:**
- Spotify API integration
- User history tracking
- Personalized recommendations (ML-based)
- Mood-based playlist generation

**Database:**
- User listening history
- Favorite tracks
- Playlist creation

### 2. Movie Section

**Frontend:**
- Movie discovery grid
- Search and filter
- Detailed movie pages
- Community reviews
- Watch tracking

**Backend:**
- TMDb API integration
- Rating aggregation
- Review management
- Recommendation engine

**Features:**
- Filter by category
- Sort by rating/popularity
- Trending movies
- Personalized recommendations

### 3. Community Forum

**Frontend:**
- Thread list with pagination
- Real-time reply system
- User profiles
- Moderation tools

**Backend:**
- Thread CRUD operations
- Reply management
- Search functionality
- Spam prevention

**Moderation:**
- Report system
- Admin dashboard
- Auto-flagging of inappropriate content

### 4. Meme Gallery

**Frontend:**
- Image upload
- Like/comment system
- Trending memes
- User galleries

**Backend:**
- File upload handling (S3/Blob)
- Image optimization
- Virus scanning
- Comment moderation

---

## Deployment Guide

### Environment Variables

\`\`\`env
# Database
DATABASE_URL=postgresql://user:password@localhost:5432/codefriends
REDIS_URL=redis://localhost:6379

# Authentication
JWT_SECRET=your_jwt_secret_here
JWT_REFRESH_SECRET=your_refresh_secret_here

# APIs
SPOTIFY_CLIENT_ID=your_spotify_id
SPOTIFY_CLIENT_SECRET=your_spotify_secret
TMDB_API_KEY=your_tmdb_key

# Storage
AWS_ACCESS_KEY_ID=your_aws_key
AWS_SECRET_ACCESS_KEY=your_aws_secret
AWS_S3_BUCKET=codefriends-media

# Email (for notifications)
SMTP_HOST=your_email_provider
SMTP_PORT=587
SMTP_USER=your_email
SMTP_PASS=your_password

# Frontend
NEXT_PUBLIC_API_URL=https://api.codefriends.com
\`\`\`

### Vercel Deployment

1. Connect GitHub repository to Vercel
2. Set environment variables in Vercel dashboard
3. Configure build settings:
   \`\`\`
   Build command: npm run build
   Output directory: .next
   \`\`\`
4. Deploy with automatic CI/CD

### Docker Setup

\`\`\`dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci --only=production

COPY . .
RUN npm run build

EXPOSE 3000
CMD ["npm", "start"]
\`\`\`

### Database Migration

\`\`\`bash
# Create migrations folder
mkdir migrations

# Run migrations on startup
npm run migrate

# Seed initial data
npm run seed
\`\`\`

---

## Performance Optimization

### Caching Strategy
- Redis for user sessions
- CDN for static assets
- Database query caching
- API response caching

### Frontend Optimization
- Code splitting
- Image optimization
- Lazy loading
- Service workers for offline support

### Backend Optimization
- Database indexing
- Connection pooling
- Rate limiting
- Query optimization

---

## Security Measures

1. **Authentication:**
   - JWT tokens with rotation
   - Refresh token storage (secure httpOnly cookies)
   - Password hashing (bcrypt)

2. **API Security:**
   - Rate limiting
   - CORS configuration
   - Input validation
   - SQL injection prevention (prepared statements)

3. **Data Protection:**
   - Encryption at rest
   - HTTPS only
   - Regular security audits

4. **Content Moderation:**
   - User reporting system
   - Automated spam detection
   - Manual review queue

---

## Future Features

1. **AI-Powered Recommendations**
   - Mood-based music suggestions
   - Movie recommendations based on watch history
   - Job matching based on skills

2. **Social Features**
   - Direct messaging
   - User profiles with portfolios
   - Community events/meetups
   - Real-time chat

3. **Gamification**
   - User badges and achievements
   - Leaderboards
   - Points system
   - Community challenges

4. **Mobile App**
   - React Native app
   - Offline capabilities
   - Push notifications

---

## Support & Contact

For technical support or questions:
- GitHub Issues: [repo-link]
- Email: support@codefriends.com
- Discord: [community-link]

---

**Last Updated:** 2025-10-31  
**Version:** 1.0.0
