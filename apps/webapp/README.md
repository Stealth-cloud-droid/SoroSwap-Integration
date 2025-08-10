# SoroSwap Integration Webapp

This is the main Next.js application for the SoroSwap integration platform. Built for developers who want to create decentralized exchange (DEX) applications with modern web technologies on the Stellar network using Soroban smart contracts.

## 🚀 Features

- **Next.js 15** with App Router for modern web development
- **TypeScript** for type safety and better developer experience
- **Tailwind CSS** for utility-first styling
- **Radix UI** for accessible, unstyled components
- **shadcn/ui** for beautiful, customizable components
- **ESLint & Biome** for code quality and formatting
- **Zustand** for state management
- **Smart Contract Integration** ready for DEX and AMM protocols
- **DeFi Trading Architecture** designed for decentralized exchange applications

---

## 🏃 Getting Started

### Prerequisites

Ensure you have the following installed:

- [Node.js (v18 or higher)](https://nodejs.org/)
- [npm](https://www.npmjs.com/) or [Bun](https://bun.sh/)
- [Git](https://git-scm.com/)
- [Rust](https://rustup.rs/) (for smart contract development)
- [Soroban CLI](https://soroban.stellar.org/docs/getting-started/setup) (for Stellar contracts)

### Setup

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start the development server:

   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

---

## 🏗 Architecture

The web application follows a structured component-based approach optimized for DEX functionality:

```
webapp/
├── app/                  # Next.js App Router pages
│   ├── dashboard/       # Trading dashboard page
│   ├── layout.tsx       # Root layout
│   ├── page.tsx         # Home page
│   └── globals.css      # Global styles
├── components/          # React components
│   ├── home/           # Home page components
│   ├── dashboard/      # Dashboard components
│   └── ui/             # shadcn/ui components
├── lib/                # Utility functions and helpers
├── hooks/              # Custom React hooks
├── store/              # State management with Zustand
└── constants/          # Application constants
```

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

### SoroSwap DEX Features Ready

This webapp is pre-configured for decentralized exchange applications:

- **Token Swapping**: Seamless token-to-token exchanges using AMM protocols
- **Liquidity Provision**: Add and remove liquidity from trading pools
- **Pool Management**: Create and manage liquidity pools
- **Price Discovery**: Real-time price feeds and trading analytics
- **Multi-Asset Support**: Support for various Stellar assets
- **AMM Integration**: Automated market maker functionality with Soroban contracts

### Soroban Integration

- **Smart Contract Interaction**: Ready for Soroban (Stellar) smart contract integration
- **Wallet Connection**: Stellar wallet connectivity for trading operations
- **Transaction Management**: Handle swap and liquidity transactions
- **Asset Management**: Support for Stellar native and custom assets

### Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

---

## 📦 Adding New Components

This template uses shadcn/ui for components. To add new components:

```bash
npx shadcn@latest add button
npx shadcn@latest add card
npx shadcn@latest add table
npx shadcn@latest add chart
# etc...
```

---

## 🔒 Best Practices

- **TypeScript**: Use strict type checking for DEX operations
- **Component Structure**: Follow single responsibility principle
- **Styling**: Use Tailwind CSS utility classes
- **Accessibility**: Ensure all trading components are accessible
- **Performance**: Optimize for Core Web Vitals
- **Security**: Implement proper validation for trading data and smart contract interactions
- **Testing**: Write comprehensive tests for DEX logic and Soroban integration

---

## 📜 License

This project is open-source and available under the [MIT License](LICENSE).

## 🚀 Contributing

We welcome contributions! Feel free to submit pull requests or open issues.

---

Made with ❤️ by the Scaffold Rust Team
