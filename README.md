# Vishal Media Tech

Production-oriented Next.js 15 digital marketing agency website with a completely separated public website and protected `/admin` dashboard.

## Stack
- Next.js 15 App Router + TypeScript
- Tailwind CSS
- Framer Motion
- React Hook Form + Zod
- TanStack React Query
- Zustand
- MongoDB + Mongoose
- JWT-style signed session cookie using `jose`
- Sonner toasts
- Lucide icons

## Run
1. `npm install`
2. Copy `.env.example` to `.env.local`
3. Set `MONGODB_URI`, `AUTH_SECRET`, `ADMIN_EMAIL`, and `ADMIN_PASSWORD`
4. `npm run dev`
5. Public site: `http://localhost:3000`
6. Admin: `http://localhost:3000/admin/login`

The middleware blocks all `/admin/*` pages except `/admin/login` unless a valid signed session cookie exists.

## Production notes
- Put the app behind HTTPS.
- Use a strong random `AUTH_SECRET`.
- Replace the environment admin password with a real credential store if multiple admins are required.
- Add an object-storage provider (S3/Cloudinary/etc.) for production image uploads.
- Add a distributed rate limiter (Redis/Upstash) for multi-instance deployments.
- Configure MongoDB IP/network access securely.
