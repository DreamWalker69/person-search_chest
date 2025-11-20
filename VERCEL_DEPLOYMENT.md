# Vercel Deployment Checklist

## Fix "Server error - There is a problem with the server configuration"

### ✅ Step 1: Configure Vercel Environment Variables

Go to your Vercel project dashboard → **Settings** → **Environment Variables**

Add the following variables for **Production**, **Preview**, and **Development**:

| Variable Name | Value | Example |
|--------------|-------|---------|
| `AUTH_SECRET` | Generate with `openssl rand -base64 32` | `your_random_32_char_string` |
| `GOOGLE_CLIENT_ID` | From Google Cloud Console | `123456.apps.googleusercontent.com` |
| `GOOGLE_CLIENT_SECRET` | From Google Cloud Console | `GOCSPX-abc123xyz` |
| `NEXTAUTH_URL` | Your Vercel app URL | `https://your-app.vercel.app` |
| `POSTGRES_PRISMA_URL` | From Neon dashboard | `postgresql://user:pass@host/db?sslmode=require` |
| `POSTGRES_URL_NON_POOLING` | From Neon dashboard | `postgresql://user:pass@host/db?sslmode=require` |

### ✅ Step 2: Update Google OAuth Settings

1. Go to [Google Cloud Console](https://console.cloud.google.com/apis/credentials)
2. Select your OAuth 2.0 Client ID
3. Under **Authorized redirect URIs**, add:
   ```
   https://your-vercel-app.vercel.app/api/auth/callback/google
   ```
4. If you have a custom domain:
   ```
   https://your-custom-domain.com/api/auth/callback/google
   ```
5. Click **Save**

### ✅ Step 3: Run Database Migration on Neon

Make sure your production database has the auth tables:

```bash
npx prisma migrate deploy
```

Or if you haven't created migrations yet:

```bash
npx prisma db push
```

### ✅ Step 4: Redeploy on Vercel

After setting environment variables:
1. Go to **Deployments** tab
2. Click the **︙** menu on the latest deployment
3. Select **Redeploy**
4. Wait for deployment to complete

### ✅ Step 5: Test Authentication

1. Visit your Vercel app: `https://your-app.vercel.app`
2. Click **Sign In**
3. Sign in with Google
4. Should redirect to `/mcp-demo` successfully

## Common Errors & Solutions

### Error: "Configuration error"
**Solution:** Check that `AUTH_SECRET` is set in Vercel environment variables

### Error: "Redirect URI mismatch"
**Solution:** Add your Vercel URL to Google Cloud Console authorized redirect URIs

### Error: "Database connection failed"
**Solution:** Verify `POSTGRES_PRISMA_URL` is correct and accessible from Vercel

### Error: "Session not found"
**Solution:** Run `npx prisma migrate deploy` to create auth tables in production database

## Verification

After deployment, verify:
- [ ] Environment variables are set in Vercel
- [ ] Google OAuth redirect URIs include Vercel URL
- [ ] Database migration has run successfully
- [ ] Can sign in with Google
- [ ] Can access protected routes (`/mcp-demo`, `/database`)
- [ ] User data persists across sessions

## Need Help?

Check Vercel logs:
```
vercel logs your-app-url
```

Or view logs in Vercel dashboard → **Deployments** → Select deployment → **Function Logs**
