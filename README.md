# GameTest Pro

A professional game testing job platform connecting developers with testers.

## Features

- **Dual Role System**: Separate dashboards for developers and testers
- **Developer Features**: Post jobs, manage listings, review applications
- **Tester Features**: Browse jobs, apply, track applications
- **Firebase Integration**: Real-time database, authentication
- **Gold/Copper Theme**: Premium professional design

## Setup

1. Create a Firebase project at [console.firebase.google.com](https://console.firebase.google.com)
2. Enable Authentication (Email/Password + Google)
3. Enable Firestore Database
4. Copy your Firebase config and paste it into `firebase-config.js`
5. Deploy to any static host (GitHub Pages, Netlify, Vercel, etc.)

## File Structure

- `index.html` - Landing page
- `login.html` - Authentication
- `register.html` - Account creation with role selection
- `dashboard.html` - Main app (dev/tester views)
- `styles.css` - Gold/copper theme
- `firebase-config.js` - Database configuration

## Database Schema

**users** collection:
- fullName: string
- email: string
- role: "developer" | "tester"
- createdAt: timestamp

**jobs** collection:
- title: string
- gameName: string
- description: string
- pay: number
- duration: number
- requirements: string
- postedBy: userId
- postedByName: string
- status: "open" | "closed"
- createdAt: timestamp

**applications** collection:
- jobId: string
- testerId: userId
- testerName: string
- status: "applied" | "accepted" | "rejected"
- appliedAt: timestamp
