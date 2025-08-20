# Construction Store - React E-commerce App

A modern e-commerce application for construction materials built with React, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern UI/UX**: Clean, responsive design with Tailwind CSS
- **Product Catalog**: Browse construction materials with search and filtering
- **Shopping Cart**: Add/remove items with quantity controls
- **Checkout Process**: Complete order flow with delivery options
- **Order Management**: Track order history and status
- **Mobile Responsive**: Optimized for all device sizes
- **Mongolian Language Support**: Localized interface

## 🛠️ Tech Stack

- **Frontend**: React 19 + TypeScript
- **Styling**: Tailwind CSS v3
- **Routing**: React Router DOM
- **Icons**: Lucide React
- **Build Tool**: Create React App

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/MNNatsagdorj/construction-store.git
cd construction-store
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## 🏗️ Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Header.tsx      # Navigation header
│   ├── BottomNavigation.tsx  # Mobile navigation
│   └── ProductCard.tsx # Product display component
├── pages/              # Page components
│   ├── Home.tsx        # Landing page
│   ├── Products.tsx    # Product catalog
│   ├── Cart.tsx        # Shopping cart
│   ├── Checkout.tsx    # Order checkout
│   ├── Orders.tsx      # Order history
│   └── Contact.tsx     # Contact page
├── data/               # Mock data
│   └── products.ts     # Product and category data
├── types/              # TypeScript type definitions
│   └── index.ts        # Type definitions
└── App.tsx             # Main application component
```

## 🎨 Customization

### Colors
The app uses a custom color palette defined in `tailwind.config.js`:
- `construction-brown`: #8B4513
- `construction-gray`: #8B8B8B
- `construction-beige`: #F5F5DC
- `construction-sand`: #F4A460

### Fonts
- Primary: Noto Sans Mongolian (for Mongolian text support)
- Fallback: Roboto, system fonts

## 📱 Pages

1. **Home** (`/`) - Landing page with featured products
2. **Products** (`/products`) - Product catalog with search and filters
3. **Cart** (`/cart`) - Shopping cart management
4. **Checkout** (`/checkout`) - Order placement
5. **Orders** (`/orders`) - Order history and tracking
6. **Contact** (`/contact`) - Customer support

## 🚀 Deployment

### GitHub Pages
1. Create a new repository on GitHub
2. Push your code to the repository
3. Go to Settings > Pages
4. Select source branch (main)
5. Your app will be available at `https://username.github.io/repository-name`

### Netlify
1. Connect your GitHub repository to Netlify
2. Build command: `npm run build`
3. Publish directory: `build`
4. Deploy automatically on push to main branch

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**MNNatsagdorj** - [GitHub Profile](https://github.com/MNNatsagdorj)

---

Built with ❤️ for the Mongolian construction industry
