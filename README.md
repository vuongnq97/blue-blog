# 📝 Blog Platform – Fullstack SaaS

A **multi-tenant personal blog platform** that allows users to register, create their own blogs, publish content, and access them via public, SEO-friendly URLs.

---

## 🚀 Overview

**Blog Platform** enables:

* User registration and authentication
* Each user to create **their own personal blog** (avatar, profile info, theme, etc.)
* Writing and publishing posts
* Public access via SEO-friendly URLs

Example URLs:

```
https://yourdomain.com/@john
https://yourdomain.com/@john/my-first-post
```

---

## ✨ Core Features

### 👤 Authentication & User Management

* User registration / login
* JWT-based authentication
* Password hashing with bcrypt
* User roles: `user`, `admin`
* Update profile (name, avatar)

---

### 🧑‍💻 Blog

* Each user owns **one blog**
* Customizable blog information:

    * Title
    * Description
    * Avatar
    * Cover image
    * Theme
* Publish / unpublish blog
* Unique blog slug

---

### 📝 Post

* Full CRUD operations
* Draft / Published states
* Markdown / HTML content support
* SEO-friendly post slugs
* View counter
* Published timestamp

---

### 🗂 Category

* CRUD categories per blog
* Unique slug per blog
* Assign categories to posts

---

### 🏷 Tag

* CRUD tags per blog
* Assign multiple tags to posts
* Tag reuse across posts

---

### 💬 Comment

* Guest comments
* Approve / reject moderation
* Linked to posts
* Designed for future threaded comments

---

## 🏗️ System Architecture

### Backend (API)

* **NestJS**
* RESTful API design
* JWT Authentication
* MongoDB with Mongoose

### Frontend (`blog-app`)

* Next.js 16 (App Router)
* React 19
* Tailwind CSS v4
* Internationalization with `next-intl`
* Forms with `react-hook-form` and `zod`
* UI primitives: Radix UI, `lucide-react`, `class-variance-authority`, `tailwind-merge`
* State management with `zustand`
* SEO-friendly routing
* Public blog rendering

---

## 🧱 Module Architecture (NestJS)

```
src/
├── auth/
├── users/
├── blogs/
├── posts/
├── categories/
├── tags/
├── comments/
├── database/
└── common/
```

> Rule: **One business domain = one module**

---

## 🗃 Database Design (MongoDB)

### Collections

* `users`
* `blogs`
* `posts`
* `categories`
* `tags`
* `comments`

### Relationships

```
User 1 ── 1 Blog
Blog 1 ── n Post
Post n ── 1 Category
Post n ── n Tag
Post 1 ── n Comment
```

---

## 🧩 Schema Strategy

* Use **NestJS Mongoose decorators**
* `@Schema`, `@Prop`, `SchemaFactory`
* `HydratedDocument<T>` for type safety
* Indexes for slugs and relations
* `timestamps: true` enabled

---

## 🔐 Security

* Password hashing using `bcrypt`
* `password` field excluded by default (`select: false`)
* JWT access tokens
* Role-based access control (RBAC)

---

## 🔄 Database Migration

NestJS **does not provide built-in MongoDB migrations**.

Recommended tools:
* `mongo-migrate-ts` (TypeScript-based)

Migrations are used for:

* Renaming fields
* Adding or removing fields
* Creating or updating indexes

---

## 🐳 Docker & Development Environment

### Services

* MongoDB
* Mongo Express
* NestJS API

### Development Database

* Local MongoDB via Docker

### Production Database

* MongoDB Atlas **or** AWS-hosted MongoDB-compatible services

---

## ⚙️ Environment Variables

```env
# App
PORT=3000
NODE_ENV=development

# MongoDB
MONGO_URI=mongodb://mongodb:27017/blog_dev

# Authentication
JWT_SECRET=super-secret
JWT_EXPIRES_IN=7d
```

---

## 🧪 Development Workflow

1. Set up MongoDB (Docker)
2. Run database migrations (if any)
3. Start the API server
4. Seed initial data (optional)

---

## 📈 Roadmap

* [ ] Frontend implementation (Next.js)
* [ ] Theme system
* [ ] Automatic SEO metadata generation
* [ ] Search functionality
* [ ] Analytics dashboard
* [ ] Admin panel
* [ ] Monetization (Premium blogs)

---

## 🤝 Contribution Guidelines

* Follow the module-based architecture
* All database changes **must include migrations**
* Write strictly typed TypeScript code

---

## 📄 License

MIT License

---

> 🚀 This project is designed to be **SaaS-ready**, **scalable**, and **production-grade**.
