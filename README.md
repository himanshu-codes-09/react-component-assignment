# React Component Assignment

This project was generated for your assignment. It includes:

- ⚛️ React + TypeScript
- ⚡ Vite (for fast dev server & build)
- 🎨 TailwindCSS (for styling)
- 🧪 Vitest + React Testing Library (for unit tests)
- 📖 Storybook (for component documentation)

---

## 📂 Project Structure

```
react-component-assignment-final/
├── package.json
├── vite.config.ts
├── tsconfig.json
├── tailwind.config.js
├── postcss.config.js
├── index.html
├── src/
│   ├── App.tsx
│   ├── main.tsx
│   ├── components/
│   │   ├── InputField/
│   │   │   ├── InputField.tsx
│   │   │   ├── InputField.test.tsx
│   │   │   └── InputField.stories.tsx
│   │   └── DataTable/
│   │       ├── DataTable.tsx
│   │       ├── DataTable.test.tsx
│   │       └── DataTable.stories.tsx
│   ├── hooks/
│   │   └── useForm.ts
│   ├── utils/
│   │   └── formatDate.ts
│   └── styles/
│       └── index.css
├── tests/
│   └── setupTests.ts
└── .storybook/
    ├── main.ts
    └── preview.ts
```

---

## 🚀 Getting Started

### 1️⃣ Install dependencies
```bash
npm install
```

### 2️⃣ Start development server
```bash
npm run dev
```

The app will be available at **http://localhost:5173**

### 3️⃣ Run tests
```bash
npm run test
```

### 4️⃣ Run Storybook
```bash
npm run storybook
```

Storybook will be available at **http://localhost:6006**

### 5️⃣ Build for production
```bash
npm run build
```

---

## ✅ Features Implemented

- **InputField Component**
  - Label + placeholder
  - Supports `text` and `password`
  - Error state with message

- **DataTable Component**
  - Dynamic columns + rows
  - Clean table layout
  - Hover effect

- **Custom Hook**
  - `useForm` hook for handling form inputs

- **Utils**
  - `formatDate` utility function

- **Styling**
  - TailwindCSS for consistent design

- **Testing**
  - Unit tests with `@testing-library/react`
  - Jest DOM matchers included

- **Storybook**
  - Interactive component documentation

---

👨‍💻 **Made for your assignment.** Just unzip, install, and run!
