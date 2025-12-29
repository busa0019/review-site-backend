# Review Site Backend

---

A Strapi-powered headless CMS backend for managing and serving reviews across multiple categories (Movies, Books, Games, Music). This backend provides a REST API that powers the frontend review site.

---

## ✨ Features

* **Content Management:** Full CRUD operations for reviews via Strapi admin panel
* **Rich Content Support:** Rich text editor for reviews with image uploads
* **PostgreSQL Database:** Production-ready database using Neon (cloud PostgreSQL)
* **REST API:** Fully documented API endpoints with filtering and search capabilities
* **Role-Based Access:** Public API access with admin panel for content management

---

## 🌍 Tech Stack

* **Backend:** Strapi v4
* **Database:** PostgreSQL (via Neon)
* **Hosting:** Render.com 
* **Image Storage:** Cloudinary

---

## 🚀 Quick Start

### Prerequisites

* Node.js 18+
* PostgreSQL (local) or Neon account (cloud)
* npm or yarn

### Local Development

1. Clone the repository:

```bash
git clone https://github.com/niki0012A/Review-Site-BackEnd.git
cd Review-Site-BackEnd
```

2. Install dependencies:

```bash
npm install
```

3. Configure environment variables:

```bash
cp .env.example .env
# Edit .env with your database configuration
```

4. Start the development server:

```bash
npm run develop
```

5. Access the admin panel:

```
http://localhost:1337/admin
```

Create your admin account.

---

## 🌐 Deployment (Render.com)

### Automatic Deployment

1. Fork this repository
2. Go to Render.com
3. Create a new Web Service
4. Connect your GitHub repository
5. Configure:

   * Build Command: `npm install && npm run build`
   * Start Command: `npm start`
     

### Environment Variables on Render

Add the following environment variables in the Render dashboard:

```env
DATABASE_URL=your_neon_postgresql_connection_string
NODE_ENV=production
JWT_SECRET=generate_with_openssl_rand_base64_32
ADMIN_JWT_SECRET=generate_with_openssl_rand_base64_32
APP_KEYS=key1,key2,key3,key4
```

---

## 📊 Database Configuration

### Option 1: Neon (Recommended)

* Sign up at [neon.tech](https://neon.tech) (free tier)
* Create a new project and database
* Copy the connection string
* Add as `DATABASE_URL` in your environment variables

### Option 2: Local PostgreSQL

* Install PostgreSQL locally
* Create a database:

```sql
CREATE DATABASE review_site_db;
```

* Update `.env` with local credentials

---

## 🔗 API Endpoints

**Base URL:**

* Local: `http://localhost:1337/api`
* Production: `https://your-render-service.onrender.com/api`

| Method | Endpoint                                  | Description               |
| ------ | ----------------------------------------- | ------------------------- |
| GET    | /reviews                                  | Get all reviews           |
| GET    | /reviews/:id                              | Get single review by ID   |
| GET    | /reviews?populate=*                       | Get reviews with images   |
| GET    | /reviews?filters[slug][$eq]=:slug         | Get review by slug        |
| GET    | /reviews?filters[category][$eq]=:category | Filter by category        |
| POST   | /reviews                                  | Create new review (admin) |
| PUT    | /reviews/:id                              | Update review (admin)     |
| DELETE | /reviews/:id                              | Delete review (admin)     |

**Query Parameters:**

* `populate=*` – Include related media (images)
* `filters[field][$eq]=value` – Filter by field
* `sort=field:asc|desc` – Sort results
* `pagination[page]=1` – Pagination
* `pagination[pageSize]=10` – Items per page

**Example Requests:**

```bash
# Get all reviews with images
curl https://review-site-backend.onrender.com/api/reviews?populate=*

# Get reviews in Movie category
curl https://review-site-backend.onrender.com/api/reviews?filters[category][$eq]=Movie&populate=*

# Get specific review by slug
curl https://review-site-backend.onrender.com/api/reviews?filters[slug][$eq]=the-godfather&populate=*
```

---

## 🗑️ Team Management

* **Admin Access:** Access `/admin` to create team accounts and assign roles
* **Content Management:** Navigate to Content Manager → Review collection to create, edit, or delete reviews and upload cover images

---

## 🔧 Development Scripts

```bash
# Start development server
npm run develop

# Build for production
npm run build

# Start production server
npm run start

# Reset database (development only)
npm run db:reset

# Test database connection
npm run test:db
```

---

## 🔒 Security & Permissions

* **Public API Access:** Reviews are publicly readable
* **Admin Authentication:** Required for Create/Update/Delete operations
* **CORS Configuration:** In `config/middlewares.js`

```javascript
origin: [
  'http://localhost:3000',
  'http://localhost:5173',
  'https://your-frontend-domain.netlify.app'
]
```

* **Environment Variables Security:** Never commit `.env` to version control. Use `.env.example` as a template. Rotate JWT secrets periodically.

---

🚀 Live API

Production API: https://review-site-backend-uw6k.onrender.com/api/reviews  
Admin Panel: https://review-site-backend-uw6k.onrender.com/admin  
Frontend Static Site: [Review-Site-FrontEnd](https://review-site-frontend-beta.vercel.app/)


Happy Reviewing! 🎬📚🎮🎵


