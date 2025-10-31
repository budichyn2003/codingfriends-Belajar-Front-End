# CodingFriends API Documentation

## Overview
CodingFriends is a community platform for developers to discover music, movies, and memes while connecting with other developers worldwide.

## Base URL
\`\`\`
https://codefriends.app/api
\`\`\`

## Authentication
All API endpoints support optional JWT token authentication via the `Authorization` header:
\`\`\`
Authorization: Bearer <token>
\`\`\`

---

## Endpoints

### Music API

#### Get All Playlists
\`\`\`
GET /music/playlists
\`\`\`
**Response:**
\`\`\`json
{
  "playlists": [
    {
      "id": "lofi",
      "name": "Lo-Fi Hip Hop",
      "description": "Chill beats for focus",
      "tracks": 45
    }
  ]
}
\`\`\`

#### Get Playlist Songs
\`\`\`
GET /music/playlists/:playlistId/songs
\`\`\`
**Parameters:**
- `playlistId` (string): The playlist identifier

**Response:**
\`\`\`json
{
  "songs": [
    {
      "id": 1,
      "title": "Midnight Code",
      "artist": "Lo-Fi Dev",
      "duration": "3:45",
      "thumbnail": "/lofi-music-beats.jpg"
    }
  ]
}
\`\`\`

#### Like a Track
\`\`\`
POST /music/tracks/:trackId/like
\`\`\`
**Parameters:**
- `trackId` (number): The track identifier

**Response:**
\`\`\`json
{
  "success": true,
  "liked": true
}
\`\`\`

---

### Movies API

#### Get All Movies
\`\`\`
GET /movies
\`\`\`
**Query Parameters:**
- `category` (string, optional): Filter by category (all, tech, documentary)

**Response:**
\`\`\`json
{
  "movies": [
    {
      "id": 1,
      "title": "The Code",
      "rating": 8.5,
      "category": "Documentary",
      "poster": "/documentary-programming.jpg"
    }
  ]
}
\`\`\`

#### Get Movie Details
\`\`\`
GET /movies/:movieId
\`\`\`
**Parameters:**
- `movieId` (number): The movie identifier

**Response:**
\`\`\`json
{
  "id": 1,
  "title": "The Code",
  "rating": 8.5,
  "category": "Documentary",
  "poster": "/documentary-programming.jpg",
  "description": "A deep dive into the world of programming",
  "releaseYear": 2023,
  "duration": "95 min"
}
\`\`\`

---

### Community Forum API

#### Get All Threads
\`\`\`
GET /community/threads
\`\`\`
**Query Parameters:**
- `category` (string, optional): Filter by category
- `page` (number, optional): Pagination page number

**Response:**
\`\`\`json
{
  "threads": [
    {
      "id": 1,
      "title": "Best practices for React hooks",
      "author": "devexpert",
      "replies": 24,
      "views": 156,
      "category": "React",
      "createdAt": "2025-10-31T10:30:00Z"
    }
  ],
  "pagination": {
    "page": 1,
    "totalPages": 5
  }
}
\`\`\`

#### Create New Thread
\`\`\`
POST /community/threads
Authorization: Bearer <token>
\`\`\`
**Request Body:**
\`\`\`json
{
  "title": "How to optimize Next.js performance?",
  "content": "I'm struggling with page load times...",
  "category": "Next.js"
}
\`\`\`

**Response:**
\`\`\`json
{
  "id": 42,
  "title": "How to optimize Next.js performance?",
  "author": "username",
  "category": "Next.js",
  "createdAt": "2025-10-31T14:22:00Z"
}
\`\`\`

#### Get Thread Replies
\`\`\`
GET /community/threads/:threadId/replies
\`\`\`
**Parameters:**
- `threadId` (number): The thread identifier

**Response:**
\`\`\`json
{
  "replies": [
    {
      "id": 1,
      "author": "developer123",
      "content": "Have you tried using dynamic imports?",
      "likes": 12,
      "createdAt": "2025-10-31T11:00:00Z"
    }
  ]
}
\`\`\`

#### Reply to Thread
\`\`\`
POST /community/threads/:threadId/replies
Authorization: Bearer <token>
\`\`\`
**Request Body:**
\`\`\`json
{
  "content": "Great question! Here's what worked for me..."
}
\`\`\`

**Response:**
\`\`\`json
{
  "id": 5,
  "author": "username",
  "content": "Great question! Here's what worked for me...",
  "createdAt": "2025-10-31T15:45:00Z"
}
\`\`\`

---

### Meme Gallery API

#### Get All Memes
\`\`\`
GET /memes
\`\`\`
**Query Parameters:**
- `page` (number, optional): Pagination page number
- `sort` (string, optional): Sort by (newest, popular, trending)

**Response:**
\`\`\`json
{
  "memes": [
    {
      "id": 1,
      "title": "My code on Friday vs Monday",
      "imageUrl": "/memes/code-friday-monday.jpg",
      "upvotes": 234,
      "comments": 18,
      "author": "memester",
      "createdAt": "2025-10-30T09:15:00Z"
    }
  ]
}
\`\`\`

#### Upload Meme
\`\`\`
POST /memes
Authorization: Bearer <token>
Content-Type: multipart/form-data
\`\`\`
**Form Data:**
- `title` (string): Meme title
- `image` (file): Image file (jpeg, png, gif)

**Response:**
\`\`\`json
{
  "id": 42,
  "title": "My code on Friday vs Monday",
  "imageUrl": "/memes/my-code-friday-monday.jpg",
  "author": "username",
  "createdAt": "2025-10-31T16:20:00Z"
}
\`\`\`

#### Upvote Meme
\`\`\`
POST /memes/:memeId/upvote
Authorization: Bearer <token>
\`\`\`
**Response:**
\`\`\`json
{
  "success": true,
  "upvotes": 235
}
\`\`\`

#### Get Meme Comments
\`\`\`
GET /memes/:memeId/comments
\`\`\`
**Parameters:**
- `memeId` (number): The meme identifier

**Response:**
\`\`\`json
{
  "comments": [
    {
      "id": 1,
      "author": "dev_enthusiast",
      "content": "This is so true 😂",
      "createdAt": "2025-10-31T12:00:00Z"
    }
  ]
}
\`\`\`

---

## Error Responses

### 400 Bad Request
\`\`\`json
{
  "error": "Invalid request parameters",
  "message": "The provided data is invalid"
}
\`\`\`

### 401 Unauthorized
\`\`\`json
{
  "error": "Authentication required",
  "message": "Please provide a valid JWT token"
}
\`\`\`

### 404 Not Found
\`\`\`json
{
  "error": "Resource not found",
  "message": "The requested resource does not exist"
}
\`\`\`

### 500 Internal Server Error
\`\`\`json
{
  "error": "Server error",
  "message": "An unexpected error occurred"
}
\`\`\`

---

## Rate Limiting
- API requests are limited to 100 requests per minute per IP address
- Headers include `X-RateLimit-Limit`, `X-RateLimit-Remaining`, and `X-RateLimit-Reset`

## Data Models

### User
\`\`\`json
{
  "id": "user123",
  "username": "developer",
  "email": "dev@example.com",
  "avatar": "/avatars/user123.jpg",
  "bio": "Passionate developer",
  "joinedAt": "2025-01-15T10:00:00Z"
}
\`\`\`

### Track
\`\`\`json
{
  "id": 1,
  "title": "Song Title",
  "artist": "Artist Name",
  "duration": "3:45",
  "thumbnail": "/path/to/thumbnail.jpg",
  "playlist": "lofi"
}
\`\`\`

### Movie
\`\`\`json
{
  "id": 1,
  "title": "Movie Title",
  "rating": 8.5,
  "category": "Documentary",
  "poster": "/path/to/poster.jpg",
  "releaseYear": 2023,
  "duration": "95 min",
  "description": "Movie description"
}
\`\`\`

### Thread
\`\`\`json
{
  "id": 1,
  "title": "Thread Title",
  "content": "Thread content",
  "author": "username",
  "category": "Category",
  "replies": 24,
  "views": 156,
  "createdAt": "2025-10-31T10:30:00Z",
  "updatedAt": "2025-10-31T14:22:00Z"
}
\`\`\`

### Meme
\`\`\`json
{
  "id": 1,
  "title": "Meme Title",
  "imageUrl": "/path/to/meme.jpg",
  "author": "username",
  "upvotes": 234,
  "comments": 18,
  "createdAt": "2025-10-31T09:15:00Z"
}
\`\`\`

---

## Getting Started

1. **Install SDK** (if available)
   \`\`\`
   npm install codefriends-sdk
   \`\`\`

2. **Initialize Client**
   \`\`\`javascript
   import { CodingFriendsAPI } from 'codefriends-sdk'
   
   const client = new CodingFriendsAPI({
     baseURL: 'https://codefriends.app/api'
   })
   \`\`\`

3. **Make Requests**
   \`\`\`javascript
   // Get all playlists
   const playlists = await client.music.getPlaylists()
   
   // Get movies by category
   const movies = await client.movies.getAll({ category: 'tech' })
   
   // Create a forum thread
   const thread = await client.community.createThread({
     title: 'Best practices',
     content: 'Discussion...',
     category: 'General'
   })
   \`\`\`

---

## Support
For issues or questions, please reach out to support@codefriends.app or visit our community forum.
