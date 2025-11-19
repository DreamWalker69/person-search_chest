# Person Search App

A full-stack person management application with complete CRUD functionality, built with Next.js 15, React 19, TypeScript, and Prisma ORM.

## 🌟 Features

- **Full CRUD Operations**: Create, Read, Update, and Delete person records
- **Real Database Integration**: SQLite database with Prisma ORM
- **Real-time Search**: Instant search functionality with database queries
- **Form Validation**: Client and server-side validation using Zod and React Hook Form
- **Responsive Design**: Mobile-first approach that works seamlessly on all devices
- **Dark Mode Support**: Theme toggle with system preference detection
- **Type Safety**: End-to-end TypeScript implementation
- **Accessible UI**: WCAG compliant components using Radix UI primitives

## 🏗️ Architecture

### Frontend Layer
- **Next.js 15** - App Router with Server Components
- **React 19** - Latest concurrent features
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling
- **shadcn/ui** - Accessible component library

### Backend Layer
- **Next.js Server Actions** - Type-safe server mutations
- **API Routes** - RESTful endpoints
- **Zod** - Schema validation

### Data Layer
- **Prisma ORM** - Type-safe database client
- **SQLite** - File-based relational database
- **Automated Migrations** - Schema versioning

## 📁 Project Structure

```
person-search_chest/
├── app/
│   ├── about/          # About page with architecture details
│   ├── database/       # Database schema documentation
│   ├── github/         # GitHub repository info
│   ├── actions/        # Server actions and schemas
│   ├── api/            # API routes
│   └── components/     # React components
├── components/         # Reusable UI components
├── lib/               # Utility functions and Prisma client
├── prisma/            # Database schema and migrations
│   ├── schema.prisma  # Prisma schema definition
│   ├── seed.ts        # Database seeding script
│   └── dev.db         # SQLite database file
└── public/            # Static assets
```

## 🗄️ Database Schema

```prisma
model Person {
  id          String   @id @default(uuid())
  name        String
  email       String   @unique
  phoneNumber String
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
}
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn or pnpm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/DreamWalker69/person-search_chest.git
cd person-search_chest
```

2. Install dependencies:
```bash
npm install --legacy-peer-deps
```

3. Set up the database:
```bash
npx prisma generate
npx prisma db push
npx tsx prisma/seed.ts
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📝 Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint
- `npx prisma studio` - Open Prisma Studio (database GUI)
- `npx prisma migrate dev` - Create new migration
- `npx tsx prisma/seed.ts` - Seed the database

## 🛠️ Technology Stack

| Category | Technology | Version |
|----------|-----------|---------|
| Framework | Next.js | 15.0.0 |
| UI Library | React | 19.0.0 |
| Language | TypeScript | 5.x |
| Database ORM | Prisma | 5.22.0 |
| Database | SQLite | File-based |
| Styling | Tailwind CSS | 3.4.1 |
| Components | shadcn/ui | Latest |
| Icons | Lucide React | 0.469.0 |
| Forms | React Hook Form | 7.54.2 |
| Validation | Zod | 3.24.1 |

## 🔍 CRUD Operations

### Create
- Click "Add New Person" button
- Fill in the form with name, email, and phone number
- Submit to create a new record in the database

### Read
- Search for people by name using the search input
- View person details in cards
- Click on a person to see full details

### Update
- Click the edit icon on a person card
- Modify the information
- Save changes to update the database record

### Delete
- Click the delete icon on a person card
- Confirm deletion
- Record is permanently removed from the database

## 📱 Responsive Design

The application is fully responsive and optimized for:
- 📱 Mobile devices (320px+)
- 📱 Tablets (768px+)
- 💻 Desktop (1024px+)
- 🖥️ Large screens (1440px+)

## 🎨 Theme Support

- Light mode
- Dark mode
- System preference detection
- Smooth transitions between themes

## 📄 Documentation Pages

- `/about` - Application architecture and technology stack
- `/database` - Prisma schema and database structure
- `/github` - GitHub repository information and links

## 🤝 Contributing

This is a demonstration project for educational purposes. Feel free to fork and modify for your own use.

## 📜 License

This project is open source and available under the MIT License.

## 👤 Author

**Your Name**
- GitHub: [@DreamWalker69](https://github.com/DreamWalker69)

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- UI components from [shadcn/ui](https://ui.shadcn.com/)
- Icons from [Lucide](https://lucide.dev/)
- Database ORM by [Prisma](https://www.prisma.io/)

---

Built with ❤️ using modern web technologies

