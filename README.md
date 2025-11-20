# Person Search App with MCP Integration

A full-stack Next.js application featuring complete CRUD operations with Model Context Protocol (MCP) integration for AI-powered database operations via Claude Desktop.

## 🌟 Features

### Core Functionality
- ✅ **Full CRUD Operations**: Create, Read, Update, Delete person records
- ✅ **Real Database Integration**: PostgreSQL with Prisma ORM
- ✅ **Real-time Search**: Instant database search with live results
- ✅ **Form Validation**: Client and server-side validation with Zod
- ✅ **Responsive Design**: Mobile-first, works on all devices
- ✅ **Dark Mode**: System preference detection with manual toggle
- ✅ **Type Safety**: End-to-end TypeScript with Prisma types
- ✅ **Accessible UI**: WCAG compliant Radix UI components

### MCP Integration 🤖
- 🤖 **AI-Powered Operations**: Perform database operations through Claude Desktop
- 🔧 **Six MCP Tools**: create_person, get_person, search_persons, list_all_persons, update_person, delete_person
- 📡 **Real-time Communication**: StdIO transport for Claude integration
- ✅ **Data Validation**: Zod schemas ensure data integrity across AI operations
- 📚 **Interactive Demo**: Live MCP demonstration page

## 🏗️ Architecture

### Frontend Layer
- **Next.js 15.1.3** - App Router with Server Components
- **React 19.0.0** - Latest concurrent features
- **TypeScript 5.x** - Type-safe development
- **Tailwind CSS 3.4.1** - Utility-first styling
- **shadcn/ui** - Accessible component library

### Backend Layer
- **Next.js Server Actions** - Type-safe server mutations
- **API Routes** - RESTful endpoints
- **Zod 3.24.1** - Schema validation

### Data Layer
- **Prisma 5.22.0** - Type-safe database client
- **PostgreSQL (Neon)** - Production-ready cloud database
- **Automated Migrations** - Schema versioning

### MCP Integration Layer
- **@modelcontextprotocol/sdk** - MCP protocol implementation
- **StdIO Transport** - Claude Desktop communication
- **TypeScript MCP Server** - 6 AI-accessible tools
- **Shared Prisma Client** - Consistent data access

## 📁 Project Structure

```
person-search_chest/
├── app/
│   ├── about/          # About page with MCP architecture details
│   ├── mcp-setup/      # Step-by-step MCP configuration guide
│   ├── mcp-demo/       # Interactive MCP operations demo
│   ├── database/       # Database schema documentation
│   ├── github/         # GitHub repository info
│   ├── actions/        # Server actions and schemas
│   ├── api/            # API routes
│   └── components/     # React components
├── mcp-server/         # MCP server implementation
│   ├── src/
│   │   └── index.ts   # MCP server with 6 tools
│   ├── prisma/        # Prisma schema (shared with main app)
│   └── dist/          # Compiled JavaScript
├── components/         # Reusable UI components (shadcn/ui)
├── lib/               # Utility functions and Prisma client
├── prisma/            # Main Prisma configuration
│   ├── schema.prisma  # Database schema definition
│   ├── migrations/    # Database migrations
│   └── seed.ts        # Database seeding script
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
- PostgreSQL database (Neon, Vercel Postgres, or local)
- Claude Desktop (optional, for MCP features)

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

3. Set up environment variables:
Create a `.env` file in the root directory:
```env
POSTGRES_PRISMA_URL="your_postgres_connection_string"
POSTGRES_URL_NON_POOLING="your_direct_connection_string"
```

4. Set up the database:
```bash
npx prisma generate
npx prisma migrate deploy
npx tsx prisma/seed.ts
```

5. Run the development server:
```bash
npm run dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📝 Available Scripts

### Main App
- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production (local testing)
- `npm run build:deploy` - Build with migrations (for Vercel)
- `npm start` - Start production server
- `npm run lint` - Run ESLint
- `npx prisma studio` - Open Prisma Studio (database GUI)
- `npx prisma migrate dev` - Create new migration
- `npx tsx prisma/seed.ts` - Seed the database

### MCP Server
- `cd mcp-server && npm install` - Install MCP server dependencies
- `cd mcp-server && npm run build` - Build MCP server
- `cd mcp-server && npm run dev` - Watch mode for development

## 🤖 MCP Server Setup

### 1. Install MCP Server Dependencies

```bash
cd mcp-server
npm install
npm run build
```

### 2. Configure Claude Desktop

Edit your Claude Desktop config file:
- **Windows**: `%APPDATA%\Claude\claude_desktop_config.json`
- **macOS**: `~/Library/Application Support/Claude/claude_desktop_config.json`

Add this configuration (replace paths with your actual paths):

```json
{
  "mcpServers": {
    "person-crud": {
      "command": "node",
      "args": ["C:\\path\\to\\person-search_chest\\mcp-server\\dist\\index.js"],
      "env": {
        "POSTGRES_PRISMA_URL": "your_postgres_connection_string",
        "POSTGRES_URL_NON_POOLING": "your_direct_connection_string"
      }
    }
  }
}
```

### 3. Restart Claude Desktop

Quit and restart Claude Desktop to load the MCP server.

### 4. Test MCP Tools

Ask Claude:
- "List all persons in the database"
- "Create a new person named Alice Smith with email alice@example.com and phone 0412345678"
- "Search for persons named John"
- "Update person [id] to have email newemail@example.com"
- "Delete person with id [uuid]"

For detailed setup instructions, visit [http://localhost:3000/mcp-setup](http://localhost:3000/mcp-setup)

## 🛠️ Technology Stack

| Category | Technology | Version |
|----------|-----------|---------|
| Framework | Next.js | 15.1.3 |
| UI Library | React | 19.0.0 |
| Language | TypeScript | 5.x |
| Database ORM | Prisma | 5.22.0 |
| Database | PostgreSQL (Neon) | Cloud |
| MCP SDK | @modelcontextprotocol/sdk | 1.0.4 |
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

- **`/`** - Main person search interface with CRUD operations
- **`/about`** - Application architecture and MCP integration details
- **`/mcp-setup`** - Step-by-step MCP server configuration guide
- **`/mcp-demo`** - Interactive MCP operations demonstration
- **`/database`** - Prisma schema and database structure
- **`/github`** - GitHub repository information and links

## 🚀 Deployment

### Vercel Deployment

1. **Push to GitHub**:
```bash
git add .
git commit -m "Add MCP integration"
git push origin main
```

2. **Deploy to Vercel**:
   - Visit [vercel.com/new](https://vercel.com/new)
   - Import your repository
   - Select the main branch

3. **Add PostgreSQL Database**:
   - Go to your project → Storage → Create Database → Postgres
   - Vercel automatically populates environment variables

4. **Deploy**:
   - Click Deploy
   - Vercel runs `npm run build:deploy` which includes migrations

Your app will be live at `https://your-project.vercel.app`

## 🤝 Contributing

This is a demonstration project showcasing Next.js 15, React 19, and MCP integration. Feel free to fork and modify for your own use.

## 📜 License

This project is open source and available under the MIT License.

## 👤 Author

**DreamWalker69**
- GitHub: [@DreamWalker69](https://github.com/DreamWalker69)
- Repository: [person-search_chest](https://github.com/DreamWalker69/person-search_chest)

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/) 15 and React 19
- MCP integration powered by [Anthropic's Model Context Protocol](https://modelcontextprotocol.io/)
- UI components from [shadcn/ui](https://ui.shadcn.com/)
- Icons from [Lucide](https://lucide.dev/)
- Database ORM by [Prisma](https://www.prisma.io/)
- Hosted on [Vercel](https://vercel.com/)
- Database by [Neon](https://neon.tech/)

---

**Built with ❤️ using modern web technologies and AI integration**

For questions or support, visit the [GitHub repository](https://github.com/DreamWalker69/person-search_chest).

