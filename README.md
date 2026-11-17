# My PR Reviewer

AI-powered automated pull request reviewer built with Next.js, Prisma, Inngest, and GitHub Apps.

## Features

- **Automated Pull Request Reviews**: Receive intelligent code reviews, security checks, and suggestions on pull requests automatically.
- **GitHub App Integration**: Connect GitHub personal accounts or organizations seamlessly.
- **Inngest Workflow Engine**: Background job processing for PR diff fetching and LLM analysis.
- **Prisma & PostgreSQL**: Robust data persistence for users, accounts, reviews, and subscriptions.
- **Subscription & Billing**: Tiered plans integrated with Razorpay.

## Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure Environment Variables

Create a `.env` file based on your environment configuration:

```env
DATABASE_URL="postgresql://postgres:postgres@localhost:5438/myApp"
BETTER_AUTH_SECRET="your-better-auth-secret"
BETTER_AUTH_URL="http://localhost:3000"

GITHUB_CLIENT_ID="your-github-oauth-client-id"
GITHUB_CLIENT_SECRET="your-github-oauth-client-secret"

GITHUB_APP_ID="your-github-app-id"
GITHUB_APP_PRIVATE_KEY="-----BEGIN RSA PRIVATE KEY-----\n...\n-----END RSA PRIVATE KEY-----"
GITHUB_WEBHOOK_SECRET="your-github-webhook-secret"
NEXT_PUBLIC_GITHUB_APP_SLUG="my-pr-reveiwer"

INNGEST_EVENT_KEY="your-inngest-event-key"
INNGEST_SIGNING_KEY="your-inngest-signing-key"

OPENROUTER_API_KEY="your-openrouter-api-key"
AI_GATEWAY_API_KEY="your-ai-gateway-api-key"

RAZORPAY_KEY_ID="your-razorpay-key-id"
RAZORPAY_KEY_SECRET="your-razorpay-key-secret"
RAZORPAY_PRO_PLAN_ID="your-plan-id"
RAZORPAY_WEBHOOK_SECRET="your-razorpay-webhook-secret"
```

### 3. Database Setup

Start Postgres (optional using Docker):

```bash
docker compose up -d
```

Generate Prisma client and push database schema:

```bash
npx prisma generate
npx prisma db push
```

### 4. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser.
