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

