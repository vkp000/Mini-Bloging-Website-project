# 📝 Mini Blogging Website

A modern, minimalistic, full-stack **Mini Blogging Platform** powered by:

<p align="left">
  <!-- React -->
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" width="40" height="40"/>

  <!-- Vite -->
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vite/vite-original.svg" alt="Vite" width="40" height="40" />

  <!-- ✅ Tailwind CSS (PNG fallback) -->
  <img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" alt="TailwindCSS" width="40" height="40" />

  <!-- ✅ Appwrite (PNG from Appwrite Docs) -->
  <img src="https://appwrite.io/images/logos/appwrite-light.svg" alt="Appwrite" width="100" height="40" />

  <!-- Redux Toolkit (PNG from official site) -->
  <img src="https://redux.js.org/img/redux-logo-landscape.png" alt="Redux Toolkit" width="90" height="30" />

  <!-- ✅ TinyMCE (official PNG fallback) -->
  <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAADlElEQVR4AcXXAxAcSxSF4Xm2baMUP9u2bSO2bdu2bdu2U4jtLP6cWz3RqmbCrvrWPfcMenvaC9Me+wHvsZ/wcn3PZTm/4x55Sf6TVjJDtkjEt1FGSj65T33PU78QxX7BU0crdqGeb5fn5DepI0NlqeyQqJBBRBbIv3K1eJ8XzRDEUmb7wopzk3wlHf1ieyQunKSIdHFHTttPPBqP/Yznf3GFnn+UaXJIOM0Gy51ytLYr7Nwl7eSAcCpySPZv5ZuU37fQkb40l4XI+d/R4nfLkJMqZoUk2zfytfvs2V/hvXzwRTF4/MekPnvlMzm691dI+8DF/EJWUHvB87/BhwXg76pQvT30HAUzF8PGrTB9ETz3m+uXsK2hcrUfgG+DHvbnf4dPCkPumlCnM/QbB3OXq9g2OHiIpDZ/hfqkDrBdXrXi18rIIMUf+x46DoHtu+BQhJQtRABTzgK8LNuDBHj8Bxg5Hb+dlgC9LEBhiZ+jAOMtQBMhiMdSBLBTsWUHLFwJMxZDJBoqwFQL0DHTFe8PLb12Q6vvWBVbBf3HQ90ukKcmfFrYXem/VoB9B0IFmGEBugmpvPEf/KaNVmgJnYfCpHlQtIELkut7/HBuWGbV88/lQgeYZQF6pDnfGmJuaMXjYC0WgwJ1rFji712Yn8uHDjDbAvRKGeBHGDuLE1pUAQrWVbHTHKD3OQww0wL0PS0B9NlPCdeAjYgJc9w1kyNFDZl2UgHsGkicfJ76Gf6pCpPnQ69Rbk6wueHdvHbBph3aEyxAvzABCtWDp1XsA5t8qkC1dm7ymb0URk2HV/52h9ufrBQ0bXEzLFSAeNwVMjbTHUiYfObo82eOHu5AOrthmD5AqGYBng0eIC6lLECj0xZgWagA2+U1C/CfRE8lQDQKu/bA4El2fQQ+/KPkWgvwuGwIGiASga07YfFqGDoZGveAgvXgy+Lw0p+Bix+U78Wzu+DL9aJPqgDDp7pi9mcyYDzUs8mnFnxaxBXT7Hj8fOD/2QTSVXWvOv6e8EPZIzhu7GoBwceF3G2Y3ocrlt5EeUi8x3/yAyjNpXpuIRxPhcIXSy8mg+XRxIXJ8WuCEcJpFpfVUkJuFC/XD2lWRXK/9JaocAr2yToZKgXkYe3x+ZJhTfjj0RDXSX5ZHCBITHbJShkljeQfeUXut1X0pc/qXGvbgZs6mfO0gQf99CNlgxySiGyROdLR//4NeUB7d6X1Ey9MOwySnD9VRCNr7AAAAABJRU5ErkJggg==" alt="TinyMCE" width="40" height="40" />
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
