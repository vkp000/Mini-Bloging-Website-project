# 📝 Mini Blogging Website

A modern, minimalistic, full-stack **Mini Blogging Platform** powered by:

<p align="left">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" width="40" height="40"/>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vite/vite-original.svg" alt="Vite" width="40" height="40"/>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" alt="TailwindCSS" width="40" height="40"/>
  <img src="https://appwrite.io/images-ee/brand/logomark.png" alt="Appwrite" width="40" height="40"/>
  <img src="https://redux.js.org/img/redux-logo-landscape.png" alt="Redux Toolkit" width="90" height="30"/>
  <img src="https://seeklogo.com/images/T/tinymce-logo-4F4C99D1B2-seeklogo.com.png" alt="TinyMCE" width="40" height="40"/>
</p>



---

## 🚀 Features

- 🔐 **User Authentication** – Signup/Login with Appwrite
- ✍️ **Rich Text Editor** – Write beautiful posts using TinyMCE
- 🧾 **Post Management** – Add, edit, and view blog posts
- ⚛️ **Modern React (v19)** + **Redux Toolkit** for state management
- 🌀 **TailwindCSS** for utility-first responsive styling
- 🌐 **React Router v7** for routing
- 📦 **Appwrite** backend integration
- 📜 **Form Handling** with React Hook Form
- 🌍 **SEO-ready and performant**

---

## 📁 Folder Structure

```
Mini-Bloging-Website-project/
└── MiniBlogingWeb/
    ├── public/               # Public assets
    ├── src/
    │   ├── appwrite/         # Appwrite setup (auth + config)
    │   ├── assets/           # Static images/icons
    │   ├── components/       # Reusable components (Buttons, Header, Footer, etc.)
    │   ├── conf/             # App-wide config
    │   ├── pages/            # Route-level pages (Home, Login, Signup, etc.)
    │   ├── store/            # Redux slices and store
    │   ├── App.jsx           # Root component
    │   ├── main.jsx          # Entry point
    ├── index.html
    ├── package.json
    ├── tailwind.config.js
    └── vite.config.js
```

---

## 📦 Tech Stack

| Frontend | State Management | Styling     | Backend (BaaS) | Utilities     |
|----------|------------------|-------------|----------------|---------------|
| React 19 | Redux Toolkit     | TailwindCSS | Appwrite       | TinyMCE, Vite |

---

## 🛠️ Installation & Setup

```bash
# Clone the repository
git clone https://github.com/vkp000/Mini-Bloging-Website-project.git

cd Mini-Bloging-Website-project/MiniBlogingWeb

# Install dependencies
npm install

# Start the dev server
npm run dev
```

Make sure you have an Appwrite instance running and configured correctly in:
```
src/appwrite/config.js
```

---

## 🧪 Available Scripts

| Script        | Description                     |
|---------------|---------------------------------|
| `npm run dev` | Run development server          |
| `npm run build` | Build for production          |
| `npm run preview` | Preview production build    |
| `npm run lint` | Lint all project files         |

---

## 📸 Screenshots

> _Add screenshots of your UI here (Home Page, Editor, Post View, etc.)_

---

## 🧑‍💻 Author

**Vivek Prajapat**  
📌 GitHub: [@vkp000](https://github.com/vkp000)

---

## 📜 License

This project is licensed under the [MIT License](LICENSE).

---

## ⭐️ Show Your Support

If you liked this project, give it a ⭐️ on [GitHub](https://github.com/vkp000/Mini-Bloging-Website-project)!
