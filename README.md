# Van Halen – Guitar Store Landing Page

This is a project built with **Next.js**, created using `create-next-app`. It consists of a **mobile-first landing page** for a fictional guitar store called **Van Halen**.

The project uses **Tailwind CSS** for styling and includes an internal API based on Next.js API Routes, returning data in `.json` format.

## 📌 Project Concept

* Landing page for a fictional guitar store
* Mobile-first design
* Styling with Tailwind CSS
* Implementation of Next.js API Routes
* API consumption via `fetch` on the frontend

## 🛠️ Technologies Used

1. **Next.js**
2. **Node.js**
3. **React**
4. **Tailwind CSS**
5. **Next.js API Routes**
6. **JavaScript (ES6+)**

## 🚀 Prerequisites

Before running the project, make sure you have the following installed:

* **Node.js** — LTS version recommended
* **npm** — or another package manager such as Yarn, pnpm, or Bun

⚠️ **Important:** If Next.js is not already installed in the project, run:

```bash
npm install next
```

### Installing Dependencies

From the project's root directory, run:

```bash
npm install
```

### Running the Development Server

Start the development server with:

```bash
npm run dev
```

Then open the project in your browser:

```text
http://localhost:3000
```

## 🔌 API Routes

This project uses **Next.js API Routes** to provide data in `.json` format.

The API requests are made directly from the frontend using `fetch`.

## ⚠️ Important Disclaimer

The API is configured to run on **port 3000**.

If the project is started on a different port, API requests may fail.

### Solutions

Make sure the project is running at:

```text
localhost:3000
```

**or**

Update the port configured in the `fetch` request inside `body.js` to match the port being used by the application.

## 📱 Design

* Mobile-first approach
* Responsive layout
* Styling implemented exclusively with Tailwind CSS classes

## 📄 License

This project is intended for **educational and demonstration purposes only**.

It is not affiliated with the **Van Halen** band or any real-world brands.
