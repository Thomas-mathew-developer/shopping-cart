# Shopping Cart Application

A responsive shopping cart web application built with **Angular 17** and **Angular Material 17**. This project demonstrates product listing, add-to-cart functionality, and cart summary using modern Angular standalone components and Material UI.

---

## 📦 Tech Stack

- **Angular**: 17.x
- **Angular Material**: 17.x
- **RxJS**: 7.x
- **Bootstrap**: 4.x
- **Standalone Components**: Angular’s latest approach for modular development

---

## 🚀 Getting Started

Follow the steps below to run the app locally:

### 1. Clone the repository

```bash
git clone https://github.com/Thomas-mathew-developer/shopping-cart.git
cd shopping-cart
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the development server

```bash
ng serve
```

### 4. Open in browser

Navigate to: http://localhost:4200

---

## 📦 Features Implemented

✅ Product list fetched from [Fake Store API](https://fakestoreapi.com/products.)

✅ Add products to shopping cart

✅ Cart total calculated and displayed

✅ Cart displayed as a dialog with a separate CartComponent(Cart in product list page hidden for    mobile screens)

✅ Responsive UI using Angular Material Toolbar, Icons, and Badges

✅ Modular architecture using Angular 17 standalone components

✅ Unit tests for all services and components

---

## 🧪 Testing Instructions

To run unit tests

```bash
ng test
```

---

## 📡 Live Demo

The application is deployed and publicly accessible at:

👉 https://thomas-mathew-developer.github.io/shopping-cart/

✅ Make sure to use the full path including the repo name if it's a user/project GitHub Pages site.

---

## 🔁 Redeploying After Future Updates

Whenever you make changes and want to publish them:

### 1. Commit and push your changes to GitHub:

```bash
git add .
git commit -m "Your message"
git push origin main
```

### 2. Rebuild the app and redeploy:

```bash
ng build --configuration production
npx angular-cli-ghpages --dir=dist/shopping-cart/browser
```

---

## 🚫 Current Limitations
The following features are not yet implemented in this version:

❌ Cart items are not saved in local storage — data is lost on page reload

❌ Users cannot remove an item from the cart

❌ Cart icon in toolbar does not show item count

❌ No dedicated cart page (cart is displayed in a dialog)

---

## 🔜 Planned Enhancements
These features will be added in future updates:

1. Remove from Cart
Allow users to remove individual items from the cart.

<!-- 2. Cart Count on Toolbar Icon
Display a badge on the cart icon showing the total number of items. -->

2. Persist Cart in Local Storage
Automatically save and restore the cart on page reload using localStorage.

3. Dedicated Cart Page
In addition to the cart dialog, a full-page view of the cart will be created for better accessibility and navigation.

---

## 📜 Conclusion

1. This project demonstrates key Angular 17 features, including:

2. Component communication using @Input and services

3. RxJS-based reactive programming

4. Angular Material integration

5. Modular development with standalone components

6. Unit testing using Angular’s testing utilities
