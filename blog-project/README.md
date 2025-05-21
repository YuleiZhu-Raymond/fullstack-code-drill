# Backend Deployment Guide (Render + MongoDB Atlas)

This guide will walk you through deploying your backend (Node.js/Express) to [Render](https://render.com/) and migrating your local MongoDB data to MongoDB Atlas (cloud database).

---

## 1. Prepare Your Codebase

- Ensure your backend code is in a subdirectory (e.g., `blog-project/server`) with its own `package.json`.
- Push your project to GitHub if you haven't already:
  ```bash
  git init
  git add .
  git commit -m "init"
  git remote add origin <your-github-repo-url>
  git push -u origin main
  ```

---

## 2. Set Up MongoDB Atlas (Cloud Database)

1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas/register) and create a free account.
2. Create a new **free cluster**.
3. Create a database user (set username and password).
4. In **Network Access**, add IP whitelist (for development, you can use `0.0.0.0/0`).
5. In **Clusters**, click **Connect** → **Connect your application**.
6. Copy the connection string (starts with `mongodb+srv://`).
7. Replace `<username>`, `<password>`, and `<dbname>` in the string with your actual values.

---

## 3. Migrate Local MongoDB Data to Atlas

1. **Export your local data:**
   ```bash
   mongodump --db blogDB --out ./dump
   ```
2. **Import to Atlas:**
   ```bash
   mongorestore --uri "<your-atlas-connection-string>" ./dump/blogDB
   ```
   - Make sure you have [MongoDB Database Tools](https://www.mongodb.com/try/download/database-tools) installed.
   - Replace `<your-atlas-connection-string>` with your actual Atlas URI.

---

## 4. Deploy Backend to Render

1. Log in to [Render](https://render.com/).
2. Click **New Web Service**.
3. Connect your GitHub and select your repository.
4. Set **Root Directory** to your backend folder (e.g., `blog-project/server`).
5. Set **Language** to `Node`.
6. Set **Build Command** (if needed):
   - Usually `yarn` or `npm install` (Render may auto-detect).
7. Set **Start Command**:
   - Example: `node index.js` (or your actual entry file).
8. Set **Environment Variables**:
   - `MONGODB_URI`: your Atlas connection string
   - `JWT_SECRET`: your JWT secret key
9. Choose the free instance type (for hobby projects).
10. Click **Deploy Web Service**.

---

## 5. Test Your Deployment

- Once deployed, Render will provide a public URL for your backend API.
- Use Postman or curl to test your endpoints.

---

## Troubleshooting

- **Cannot connect to MongoDB:**
  - Double-check your Atlas URI, username, password, and IP whitelist.
- **Environment variables not set:**
  - Make sure you add them in Render's dashboard.
- **Port issues:**
  - Use `process.env.PORT` in your code (Render sets this automatically).

---

If you get stuck, check the Render and MongoDB Atlas documentation, or ask for help!
