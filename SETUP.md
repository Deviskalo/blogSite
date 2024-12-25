# Modern Blog Project Setup Guide

## 🚀 Project Overview

A full-stack blogging website built with:

- Next.js 15
- TypeScript
- Tailwind CSS
- NextAuth
- MongoDB (Prisma ORM)
- GitHub OAuth

## 📋 Prerequisites

- Node.js (v18+)
- npm (v9+)
- MongoDB Atlas account
- GitHub account

## 🔧 Local Setup

### 1. Clone the Repository

```bash
git clone <your-repository-url>
cd blogSite
```

### 2. Environment Configuration

###### Create .env File

Create a .env file in the project root with the following variables:

```bash
# MongoDB Connection String
# Format: mongodb+srv://<username>:<password>@<cluster-url>/blogdb?<options>
DATABASE_URL="mongodb+srv://deviskalo:moLvLRtIQPLInmGD@blogcluster0.eihrq.mongodb.net/blogdb?retryWrites=true&w=majority&appName=blogCluster0"

# NextAuth Configuration
# Generate a secure secret using: openssl rand -base64 32
NEXTAUTH_SECRET="SfNRCQqTciRW4P3iwBk1B1bvl3CfoSEO0E/M9CyiuT4="
NEXTAUTH_URL="http://localhost:3000"

# GitHub OAuth Credentials
# Required for authentication
GITHUB_ID="your-github-client-id"
GITHUB_SECRET="your-github-client-secret"
```

### 3. GitHub OAuth Setup

- Visit GitHub Developer Settings
- Click "New OAuth App"
- Configure OAuth App:
- Application Name: Modern Blog
- Homepage URL: http://localhost:3000
- Authorization Callback URL: http://localhost:3000/api/auth/callback/github
- Generate and copy Client ID and Client Secret
- Update .env with these credentials

### 4. MongoDB Atlas Configuration

- Create a MongoDB Atlas account
- Create a new cluster
- Whitelist your IP address
- Create a database user
- Get connection string
- Replace DATABASE_URL in .env

### 5. Install Dependencies

```bash
npm install
```

```bash
yarn
```

```bash
bun install
```

```bash
pnpm install
```

### 6. Prisma Setup

bash

# Generate Prisma Client

npx prisma generate

# Push schema to database

npx prisma db push

### 7. Run Development Server

```bash
npm run dev
```

## 🌐 Deployment Checklist

Environment Variables

- Use platform-specific environment variable management
- Never commit sensitive credentials to version control
- Recommended Deployment Platforms
- Vercel (Recommended for Next.js)
- Netlify
- DigitalOcean App Platform

## 🛠 Troubleshooting

Common Issues
Verify all environment variables
Check MongoDB connection string
Confirm GitHub OAuth callback URL
Validate Prisma schema
Debugging Tips
`Use npm run dev` for local development
Check console for error messages
Verify network connectivity

#### 🤝 Contributing Guidelines

Follow conventional commit messages
Run npm run lint before submitting PRs
Ensure all tests pass

#### 📄 License

MIT License

Key Highlights:

- Comprehensive setup instructions
- Detailed environment variable configuration
- Step-by-step GitHub and MongoDB setup
- Deployment and troubleshooting guidance
- Contributing guidelines for maintainers
- MIT License for open source
