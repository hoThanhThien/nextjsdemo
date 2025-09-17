# Next.js Dashboard - Deployment Ready

## 🚀 Quick Deploy Guide

This project has been configured for deployment without requiring a database connection.

### Environment Variables Required

Create a `.env.local` file (or configure in your hosting platform):

```bash
# Required for authentication
AUTH_SECRET=your-very-long-random-string-here-at-least-32-characters

# Required for production deployment  
NEXTAUTH_URL=https://yourdomain.com

# Optional - only if you have PostgreSQL database
# POSTGRES_URL=postgresql://username:password@host:5432/database

# For deployment without database
NODE_ENV=development
USE_MOCK_DATA=true
```

### Deploy to Vercel

1. Push your code to GitHub
2. Import project in Vercel
3. Add environment variables:
   - `AUTH_SECRET`: Generate with `openssl rand -base64 32`
   - `NEXTAUTH_URL`: Your domain (e.g., `https://yourapp.vercel.app`)
4. Deploy!
### Deploy to Other Platforms

1. Build the project: `pnpm build`
2. Set environment variables
3. Deploy the `.next` folder

## 🛠 Development

```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start
```

## 📝 Features

- ✅ Mock data (no database required)
- ✅ Authentication system
- ✅ Dashboard with charts and tables  
- ✅ Invoice management (CRUD)
- ✅ Responsive design
- ✅ Production ready

## 🔧 Restore Database Functions

If you want to restore original database functionality:

```bash
# Restore original files
copy app/lib/data.ts.backup app/lib/data.ts
copy app/lib/actions.ts.backup app/lib/actions.ts
copy auth.ts.backup auth.ts

# Add PostgreSQL URL to .env.local
POSTGRES_URL=postgresql://username:password@host:5432/database
```

## 🎯 Mock Data

Currently using mock data for:
- Revenue charts (12 months of data)
- Invoice listings (6 sample invoices)
- Customer management
- Dashboard statistics

Perfect for demos and testing!