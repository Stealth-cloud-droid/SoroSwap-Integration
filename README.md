# Soroswap Template

Professional-grade templates and tools to build decentralized exchanges (DEX) on Stellar using Soroban smart contracts. Built for developers who want to create AMM-based trading platforms with speed and reliability.

## 🚀 Features

- **Next.js 15** with App Router for modern web development
- **TypeScript** for type safety and better developer experience
- **Tailwind CSS** for utility-first styling
- **Radix UI** for accessible, unstyled components
- **shadcn/ui** for beautiful, customizable components
- **ESLint & Biome** for code quality and formatting
- **Husky** for Git hooks
- **Monorepo Structure** with apps and packages organization
- **Smart Contract Integration** ready for DEX and AMM protocols
- **DeFi Trading Architecture** designed for decentralized exchange applications

## 🏗 Tech Stack

- **Frontend:** Next.js 15 + App Router
- **Styling:** Tailwind CSS & shadcn/ui
- **Package Management:** Bun
- **Code Quality:** ESLint, Biome, Husky
- **Language:** TypeScript
- **Blockchain:** Soroban (Stellar) smart contracts
- **State Management:** Zustand

---

## 📂 Project Structure

```
soroswap-integration/
├── .husky/                 # Pre-commit hooks
├── apps/
│   ├── webapp/             # Main Next.js application
│   │   ├── app/            # Next.js App Router pages
│   │   │   ├── dashboard/  # Trading dashboard page
│   │   │   ├── layout.tsx  # Root layout
│   │   │   ├── page.tsx    # Home page
│   │   │   └── globals.css # Global styles
│   │   ├── components/     # React components
│   │   │   ├── home/       # Home page components
│   │   │   ├── dashboard/  # Dashboard components
│   │   │   └── ui/         # shadcn/ui components
│   │   ├── lib/            # Utility functions and helpers
│   │   ├── hooks/          # Custom React hooks
│   │   ├── store/          # State management
│   │   ├── constants/      # Application constants
│   │   ├── components.json # shadcn/ui components
│   │   ├── eslint.config.mjs  # Linter configuration
│   │   ├── next.config.ts  # Next.js configuration
│   │   ├── package.json    # Dependencies
│   │   ├── tailwind.config.ts # Tailwind CSS configuration
│   │   └── tsconfig.json   # TypeScript configuration
│   └── contracts/          # Soroban smart contracts for DEX/AMM
├── .gitignore              # Git ignored files
├── commitlint.config.js    # Commit message rules
├── README.md               # Project documentation
├── tsconfig.json           # Root TypeScript configuration
└── vercel.json             # Deployment configuration
```

---

## 🏃 Getting Started

### Prerequisites

Ensure you have the following installed:

- [Node.js (v18 or higher)](https://nodejs.org/)
- [Bun](https://bun.sh/)
- [Git](https://git-scm.com/)
- [Rust](https://rustup.rs/) (for smart contract development)
- [Soroban CLI](https://soroban.stellar.org/docs/getting-started/setup) (for Stellar contracts)

### Clone and Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/soroswap-template.git
   cd soroswap-template
   ```

2. Install dependencies:

   ```bash
   bun install
   ```

3. Start the development server:

   ```bash
   bun dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🏗 Architecture Overview

### Frontend

- Uses **Next.js 15** with the **App Router**
- Modular structure with reusable components
- Optimized with **shadcn/ui** and **Tailwind CSS**
- Ready for trading interfaces and DEX functionalities

### Smart Contracts

- **Soroban (Stellar)** smart contracts for DEX and AMM protocols
- Modular contract architecture for different trading pairs
- Integration ready for Soroswap's decentralized exchange platform

### Key Features

#### 🎨 UI Components

- Pre-configured shadcn/ui components
- Responsive design with Tailwind CSS
- Accessible components with Radix UI primitives
- Trading and swap interface components

#### 🔧 Development Tools

- TypeScript for type safety
- ESLint and Biome for code quality
- Husky for Git hooks
- Prettier for code formatting

#### 💱 DEX Integration

- Token swap interfaces
- Liquidity pool management
- Automated Market Maker (AMM) functionality
- Trading analytics and charts

---

## 🛠 Available Scripts

- `bun dev` - Start development server
- `bun build` - Build for production
- `bun start` - Start production server
- `bun lint` - Run ESLint
- `bun format-and-lint:fix` - Format and fix linting issues

---

## 📦 Adding New Components

This template uses shadcn/ui for components. To add new components:

```bash
cd apps/webapp
bunx shadcn@latest add button
bunx shadcn@latest add card
bunx shadcn@latest add table
bunx shadcn@latest add chart
# etc...
```

---

## 🔒 Best Practices

- **TypeScript**: Use strict type checking
- **Component Structure**: Follow single responsibility principle
- **Styling**: Use Tailwind CSS utility classes
- **Accessibility**: Ensure all components are accessible
- **Performance**: Optimize for Core Web Vitals
- **Security**: Implement proper validation for trading data
- **Testing**: Write comprehensive tests for DEX logic

---

## 🚀 Soroswap Integration

This template is designed to integrate seamlessly with Soroswap's decentralized exchange:

- **Token Swapping**: Seamless token-to-token exchanges
- **Liquidity Provision**: Add and remove liquidity from pools
- **AMM Protocol**: Automated market maker functionality
- **Price Discovery**: Real-time price feeds and trading analytics
- **Multi-Asset Support**: Support for various Stellar assets

---

## 📜 License

This project is open-source and available under the [MIT License](LICENSE).

## 🚀 Contributing

We welcome contributions! Feel free to submit pull requests or open issues.

---

Made with ❤️ by the Scaffold Rust Team
