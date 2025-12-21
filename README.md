# SubZilla Landing Page

A high-performance, modern landing page for the [SubZilla](https://github.com/DevOpen-io/SubZilla) application. Built with **React**, **TypeScript**, and **Tailwind CSS**.

This project showcases the features of SubZilla, a privacy-focused subscription tracker, using rich animations, a responsive design, and full internationalization support (English & Turkish).

## ✨ Features

- **🎨 Modern Aesthetics**: Clean, glassmorphic design with smooth gradients and layout.
- **🌒 Dark Mode**: Fully supported dark and light themes with seamless switching.
- **⚡ High Performance**: Built with Vite for lightning-fast development and production builds.
- **🎭 Rich Animations**: Interactive elements powered by [Framer Motion](https://www.framer.com/motion/).
- **🌐 Internationalization**: Built-in support for multiple languages (currently English & Turkish).
- **📱 Responsive Design**: Perfectly optimized for desktops, tablets, and mobile devices.

## 🛠️ Tech Stack

This project is built using the following technologies:

- **Core**: [React 19](https://react.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)

## 🚀 Getting Started

Follow these instructions to set up the project on your local machine.

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1.  **Clone the repository**
    ```bash
    git clone <repository-url>
    cd Subzilla-Landing
    ```

2.  **Install dependencies**
    ```bash
    npm install
    # or
    yarn install
    ```

3.  **Run the development server**
    ```bash
    npm run dev
    # or
    yarn dev
    ```
    The application will be available at `http://localhost:5173`.

### Building for Production

To create a production-ready build:

```bash
npm run build
# or
yarn build
```

The output will be in the `dist` directory.

## 📂 Project Structure

```
Subzilla-Landing/
├── src/
│   ├── components/        # UI Components (Hero, Features, Navbar, etc.)
│   ├── BackgroundEffects/ # Background animation components
│   ├── App.tsx           # Main application entry
│   ├── LanguageContext.tsx # Context for i18n
│   ├── config.ts         # Configuration (URLs, App Name)
│   └── index.css         # Global styles and Tailwind imports
├── public/               # Static assets
├── .gitignore
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

## 🤝 Contributing

Contributions are welcome! If you'd like to improve the landing page:

1.  Fork the repository.
2.  Create a new branch (`git checkout -b feature/AmazingFeature`).
3.  Commit your changes (`git commit -m 'Add some AmazingFeature'`).
4.  Push to the branch (`git push origin feature/AmazingFeature`).
5.  Open a Pull Request.

## 🌟 Support SubZilla

If you like this project or the SubZilla app, please consider starring the main repository!

[![Star History Chart](https://api.star-history.com/svg?repos=DevOpen-io/SubZilla&type=Date)](https://star-history.com/#DevOpen-io/SubZilla&Date)

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.
