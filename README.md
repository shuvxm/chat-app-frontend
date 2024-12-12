# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## install tailwind, react-router, toast

## overview 
-  install toast: npm i react-hot-toast
-  added this component in main.jsx file   <Toaster />
- give button to create toast when you click on it and implent callback function for click
- <button onClick={notify}>Make me a toast</button>
- this notify is a function to execute with message
- const notify = () => toast('Here is your toast.');
- npm install @stomp/stompjs sockjs-client
<<<<<<< HEAD
// "https://avatar.iran.liara.run/public/32"
                    // https://avatar.iran.liara.run/public/girl
=======
## Installation Steps

### Install Tailwind CSS

1. **Add Tailwind dependencies:**
   ```bash
   npm install -D tailwindcss postcss autoprefixer
   npx tailwindcss init
   ```

2. **Configure Tailwind:**
   Update `tailwind.config.js` with the following:
   ```javascript
   module.exports = {
     content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
     theme: {
       extend: {},
     },
     plugins: [],
   };
   ```

3. **Include Tailwind in styles:**
   Add the following to `src/index.css`:
   ```css
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
   ```

### Set Up React Router

1. **Install React Router:**
   ```bash
   npm install react-router-dom
   ```

2. **Set up routing in your app:**
   Update `main.jsx` with:
   ```jsx
   import { BrowserRouter, Routes, Route } from 'react-router-dom';
   import App from './App';

   ReactDOM.createRoot(document.getElementById('root')).render(
     <React.StrictMode>
       <BrowserRouter>
         <Routes>
           <Route path="/" element={<App />} />
         </Routes>
       </BrowserRouter>
     </React.StrictMode>
   );
   ```

### Add Toast Notifications

1. **Install `react-hot-toast`:**
   ```bash
   npm install react-hot-toast
   ```

2. **Integrate Toast in `main.jsx`:**
   ```jsx
   import { Toaster } from 'react-hot-toast';

   ReactDOM.createRoot(document.getElementById('root')).render(
     <React.StrictMode>
       <BrowserRouter>
         <Toaster />
         <Routes>
           <Route path="/" element={<App />} />
         </Routes>
       </BrowserRouter>
     </React.StrictMode>
   );
   ```

3. **Create a Toast button in your component:**
   ```jsx
   import toast from 'react-hot-toast';

   const notify = () => toast('Here is your toast.');

   function App() {
     return (
       <div>
         <button onClick={notify}>Make me a toast</button>
       </div>
     );
   }

   export default App;
   ```

### Add WebSocket Support

1. **Install WebSocket dependencies:**
   ```bash
   npm install @stomp/stompjs sockjs-client
   ```

---

Your React + Vite app is now set up with Tailwind CSS, React Router, toast notifications, and WebSocket support!


>>>>>>> 09f3bd5e6914f9567962ee5f0857919eb4eb9f7d
