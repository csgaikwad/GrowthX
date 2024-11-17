# Assignment Submission Portal - Backend

This is a backend system for an assignment submission portal that allows **Users** to upload assignments and **Admins** to accept or reject them. It includes functionalities for user and admin registration, assignment upload, and assignment management.

## Technologies Used
- Node.js
- Express.js
- MongoDB
- JWT (JSON Web Tokens) for authentication
- bcryptjs for password hashing

## Endpoints
- **GET /test** : Check if the server is live or not

### User Endpoints
- **POST /register**: Register a new user
- **POST /login**: User login
- **POST /upload**: Upload an assignment

### Admin Endpoints
- **POST /register**: Register a new admin
- **POST /login**: Admin login
- **GET /assignments**: View assignments tagged to the admin
- **POST /assignments/:id/accept**: Accept an assignment
- **POST /assignments/:id/reject**: Reject an assignment

## Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/csgaikwad/GrowthX.git
   cd /Growthx/
    ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up environment variables: Create a .env file in the root directory with the following content:
   ```bash
   MONGODB_URI=<your-mongodb-uri>
   JWT_SECRET=<your-secret-key>
   ```
4. Run the application:
   ```bash
   npm start
   ```
The server will be running at `http://localhost:5000.`

## Testing with Postman

To test the server, you can import the provided Postman collection.

1. **Download the Postman collection** (shared as a `.json` file).
2. Open **Postman**.
3. Click **Import** (top left corner).
4. Choose **Upload Files** and select the downloaded `.json` file.
5. Once imported, you can use the collection to test the endpoints of the backend server.

Make sure to set up the correct environment variables in Postman (e.g., for `JWT_SECRET`, `MONGODB_URI`) if required.

**Notes:**
- Ensure MongoDB is running locally or use a MongoDB cloud service like MongoDB Atlas.
- This project can be extended to include features like OAuth2 authentication, file upload handling, and more.
