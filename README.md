# Next.js Startup project

A modern, full-stack dashboard application built with Next.js, featuring authentication, analytics, and a responsive UI. This project serves as a startup template for building scalable web applications with user management and data visualization.

## 🚀 Features

- **Authentication System**: Secure login, registration, password reset, and email verification using NextAuth.js
- **Dashboard Analytics**: Interactive charts and cards displaying key metrics using Recharts
- **Responsive Design**: Mobile-first UI with dark/light theme support using Tailwind CSS
- **Database Integration**: Prisma ORM with support for SQLite and PostgreSQL
- **Form Validation**: Robust client-side validation with Zod and React Hook Form
- **Email Notifications**: SMTP-based email sending for user verification and password resets
- **Modern UI Components**: Built with Radix UI primitives and Framer Motion animations

## 🛠 Tech Stack

- **Frontend**: Next.js 15 (App Router), React 19, TypeScript
- **Styling**: Tailwind CSS with dark mode support
- **Authentication**: NextAuth.js with Prisma adapter
- **Database**: Prisma ORM (SQLite/PostgreSQL)
- **Charts**: Recharts for data visualization
- **Forms**: React Hook Form with Zod validation
- **Animations**: Framer Motion
- **Icons**: Lucide React

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (version 18 or higher)
- npm or yarn package manager
- A database (SQLite for development, PostgreSQL for production)

## 🔧 Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/jalalDev7/nextjs-startup.git
   cd nextjs-startup
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**

   Create a `.env.local` file in the root directory and add the following variables:

   ```env
   # Database
   DATABASE_URL="file:./dev.db"  # For SQLite (development)
   # DATABASE_URL="postgresql://username:password@localhost:5432/name_db"  # For PostgreSQL

   # NextAuth
   NEXTAUTH_SECRET="your-secret-key-here"
   NEXTAUTH_URL="http://localhost:3000"

   # Email (for password reset and verification)
   EMAIL_SERVER_HOST="smtp.gmail.com"
   EMAIL_SERVER_PORT="587"
   EMAIL_SERVER_USER="your-email@gmail.com"
   EMAIL_SERVER_PASSWORD="your-app-password"
   EMAIL_FROM="noreply@yourapp.com"
   ```

4. **Set up the database**

   ```bash
   # Generate Prisma client
   npx prisma generate

   # Run database migrations
   npx prisma migrate dev --name init

   # (Optional) Seed the database
   npx prisma db seed
   ```

5. **Start the development server**

   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🚀 Usage

- **Development**: `npm run dev` - Starts the development server with Turbopack
- **Build**: `npm run build` - Builds the application for production
- **Start**: `npm run start` - Starts the production server
- **Lint**: `npm run lint` - Runs ESLint for code quality checks

## 📊 Database Schema

The application uses Prisma ORM with the following main models:

- `User`: User accounts with authentication details
- `Account`, `Session`: NextAuth.js session management
- `VerificationToken`: Email verification tokens
- `PasswordResetToken`: Password reset functionality

View the complete schema in `prisma/schema.prisma`.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Support

If you have any questions or need help, please open an issue on GitHub.

---

Built with ❤️ using Next.js and modern web technologies.
