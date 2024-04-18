# Thought Trail

**Welcome to Thought Trail - A Blogging Website**

## Installation

Before you begin, make sure you have the following prerequisites installed on your machine:

- Node.js: [Download and Install Node.js](https://nodejs.org/)
- npm: Node.js package manager (comes with Node.js installation)

Follow these steps to set up Thought Trail on your local machine:

1. Clone the repository:
   ```bash
   git clone https://github.com/soniyaprasad77/ThoughtTrail.git
   ```

2. Navigate to the project directory:
   ```bash
   cd ThoughtTrail
   ```



3. Create a `.env` file in the root directory and set the following environment variables:
   ```env
   VITE_APPWRITE_URL = your-appwrite-url
   VITE_APPWRITE_PROJECT_ID = your-appwrite-project-id
   VITE_APPWRITE_DATABASE_ID= your-appwrite-database-id
   VITE_APPWRITE_COLLECTION_ID=your-appwrite-collection-id
   VITE_APPWRITE_BUCKET_ID=your-appwrite-bucket-id
   ```
4. Install dependencies:
   ```bash
   npm install
   ```
   
5. Start the development server:
   ```bash
   npm run dev
   ```

6. Open your browser and go to [http://localhost:3000](http://localhost:5173) to view Thought Trail.

## Features

Thought Trail is a blogging website built using React.js, Tailwind CSS, and Appwrite. Here are some of its key features:

1. **User Authentication**: Users can sign up, log in, and manage their accounts securely.

2. **Create and Edit Posts**: Users can create new blog posts and edit existing ones with a rich text editor.

3. **Comment System**: Readers can leave comments on blog posts, fostering engagement and discussions.

4. **Responsive Design**: The website is designed to be responsive, ensuring a seamless experience across devices.

5. **Tagging System**: Organize your posts with tags for easy categorization and navigation.

6. **Search Functionality**: Users can search for specific posts based on keywords or tags.

7. **Social Sharing**: Easily share your favorite blog posts on social media platforms.

8. **Appwrite Integration**: Utilizes Appwrite as a backend service for managing user data and blog content.


---

Thank you for using Thought Trail! We hope you enjoy blogging and sharing your thoughts with the world. If you encounter any issues or have suggestions for improvements, please open an [issue](https://github.com/your-username/thought-trail/issues). Happy blogging!
