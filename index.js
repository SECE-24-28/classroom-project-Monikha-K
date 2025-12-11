// // ========================================
// // SIMPLE BACKEND SERVER WITH MONGODB
// // Easy to understand code for beginners!
// // ========================================

// // STEP 1: Bring in the tools we need
// const express = require('express');           // Tool for making a web server
// const cors = require('cors');                 // Tool for letting React talk to this server
// const mongoose = require('mongoose');         // Tool for talking to MongoDB

// // STEP 2: Connect to MongoDB
// // Think of it like opening a door to a database in your computer
// console.log('📡 Trying to connect to MongoDB...');

// mongoose.connect('mongodb://localhost:27017/Backend');

// mongoose.connection.on('connected', () => {
//     console.log('✅ Connected to MongoDB successfully!');
// });

// mongoose.connection.on('error', (error) => {
//     console.log('❌ MongoDB connection failed:', error.message);
// });

// // STEP 3: Create a simple User structure
// // This is like a template for user data - what fields a user should have
// const userSchema = new mongoose.Schema({
//     name: String,          // Name of the user (like "John")
//     email: String,         // Email of the user (like "john@example.com")
//     createdAt: {           // When was this user created
//         type: Date,
//         default: Date.now
//     }
// });

// // STEP 4: Create a User collection using the schema
// // This is like saying "I'm going to store users in MongoDB with this structure"
// const User = mongoose.model('user', userSchema);

// // STEP 5: Create the web server (like opening a shop)
// const app = express();

// // STEP 6: Set up the port number
// // This is the address where our server will listen
// const port = process.env.PORT || 21000;

// // STEP 7: Set up helpers for the server
// app.use(cors());            // Allow React to talk to this server
// app.use(express.json());    // Help the server understand JSON data

// // ========================================
// // ROUTES: Things the server can do
// // ========================================

// // ROUTE 1: Check if the server is alive
// // Go to: http://localhost:21000/
// app.get('/', (req, res) => {
//     res.json({ 
//         success: true, 
//         message: '👋 Server is running! You can use it now.' 
//     });
// });

// // ROUTE 2: Get all users from the database
// // Go to: http://localhost:21000/users
// // This shows all the users we saved in MongoDB
// app.get('/users', async (req, res) => {
//     try {
//         // Find all users
//         const users = await User.find();
        
//         // Send them back as a response
//         res.json({ 
//             success: true, 
//             message: 'Here are all the users:',
//             count: users.length,
//             data: users 
//         });
//     } catch (error) {
//         // If something goes wrong, tell the user
//         res.status(500).json({ 
//             success: false, 
//             message: 'Sorry, something went wrong!',
//             error: error.message 
//         });
//     }
// });

// // ROUTE 3: Create a new user
// // Post data to: http://localhost:21000/users
// // Send JSON like this: { "name": "John", "email": "john@example.com" }
// app.post('/users', async (req, res) => {
//     try {
//         // Get the data from the request
//         const name = req.body.name;
//         const email = req.body.email;
        
//         // Make sure name and email are provided
//         if (!name || !email) {
//             return res.status(400).json({ 
//                 success: false, 
//                 message: 'Please provide both name and email!' 
//             });
//         }
        
//         // Create a new user in memory
//         const newUser = new User({
//             name: name,
//             email: email
//         });
        
//         // Save it to MongoDB
//         const savedUser = await newUser.save();
        
//         // Tell the user it worked
//         res.json({ 
//             success: true, 
//             message: '✅ User created successfully!',
//             data: savedUser 
//         });
//     } catch (error) {
//         // If something goes wrong, tell the user
//         res.status(500).json({ 
//             success: false, 
//             message: 'Sorry, could not create user!',
//             error: error.message 
//         });
//     }
// });

// // ROUTE 4: Get one user by ID
// // Go to: http://localhost:21000/users/USER_ID_HERE
// // Replace USER_ID_HERE with the actual MongoDB ID
// app.get('/users/:id', async (req, res) => {
//     try {
//         // Get the user ID from the URL
//         const userId = req.params.id;
        
//         // Find the user with that ID
//         const user = await User.findById(userId);
        
//         // Check if user exists
//         if (!user) {
//             return res.status(404).json({ 
//                 success: false, 
//                 message: '❌ User not found!' 
//             });
//         }
        
//         // Send the user back
//         res.json({ 
//             success: true, 
//             message: 'Here is the user:',
//             data: user 
//         });
//     } catch (error) {
//         res.status(500).json({ 
//             success: false, 
//             message: 'Error getting user!',
//             error: error.message 
//         });
//     }
// });

// // ROUTE 5: Update a user
// // Send PUT request to: http://localhost:21000/users/USER_ID_HERE
// // Send new data like: { "name": "Jane", "email": "jane@example.com" }
// app.put('/users/:id', async (req, res) => {
//     try {
//         const userId = req.params.id;
//         const newData = req.body;
        
//         // Update the user with new data
//         const updatedUser = await User.findByIdAndUpdate(
//             userId,
//             newData,
//             { new: true }  // This means "give me the updated user back"
//         );
        
//         // Check if user exists
//         if (!updatedUser) {
//             return res.status(404).json({ 
//                 success: false, 
//                 message: '❌ User not found!' 
//             });
//         }
        
//         // Send the updated user back
//         res.json({ 
//             success: true, 
//             message: '✅ User updated successfully!',
//             data: updatedUser 
//         });
//     } catch (error) {
//         res.status(500).json({ 
//             success: false, 
//             message: 'Error updating user!',
//             error: error.message 
//         });
//     }
// });

// // ROUTE 6: Delete a user
// // Send DELETE request to: http://localhost:21000/users/USER_ID_HERE
// app.delete('/users/:id', async (req, res) => {
//     try {
//         const userId = req.params.id;
        
//         // Delete the user
//         const deletedUser = await User.findByIdAndDelete(userId);
        
//         // Check if user exists
//         if (!deletedUser) {
//             return res.status(404).json({ 
//                 success: false, 
//                 message: '❌ User not found!' 
//             });
//         }
        
//         // Tell the user it worked
//         res.json({ 
//             success: true, 
//             message: '✅ User deleted successfully!' 
//         });
//     } catch (error) {
//         res.status(500).json({ 
//             success: false, 
//             message: 'Error deleting user!',
//             error: error.message 
//         });
//     }
// });

// // ROUTE 7: Test echo route (for testing)
// // Post any data to: http://localhost:21000/echo
// app.post('/echo', (req, res) => {
//     const received = req.body;
    
//     res.json({ 
//         success: true, 
//         message: 'I received your data!',
//         youSent: received 
//     });
// });


// // ========================================
// // WRONG ROUTE: Catch anything we missed
// // ========================================
// app.use((req, res) => {
//     res.status(404).json({ 
//         success: false, 
//         message: '❌ Route not found. Try one of these:\n' +
//                  '- GET http://localhost:21000/\n' +
//                  '- GET http://localhost:21000/users\n' +
//                  '- POST http://localhost:21000/users\n' +
//                  '- GET http://localhost:21000/users/:id\n' +
//                  '- PUT http://localhost:21000/users/:id\n' +
//                  '- DELETE http://localhost:21000/users/:id'
//     });
// });

// // ========================================
// // START THE SERVER
// // ========================================
// app.listen(port, () => {
//     console.log('');
//     console.log('╔════════════════════════════════════════╗');
//     console.log('║     🚀 SERVER IS RUNNING! 🚀          ║');
//     console.log('╠════════════════════════════════════════╣');
//     console.log(`║  Port: ${port.toString().padEnd(35)}║`);
//     console.log(`║  Database: intern-practise-db${' '.repeat(8)}║`);
//     console.log('║                                        ║');
//     console.log('║  Test it at:                           ║');
//     console.log(`║  http://localhost:${port}${' '.repeat(22 - port.toString().length)}║`);
//     console.log('╚════════════════════════════════════════╝');
//     console.log('');
// });
const database = require('./db-connect/db');
const express = require("express");
const cors = require("cors");
const path = require("path");
const BasicRoutes=require("./routes/basic-router");
let port = 21000;
const app = express();

// Enable CORS first
app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);

app.use(express.json());

// Serve static files from public directory
app.use(express.static(path.join(__dirname, 'public')));

// API routes
app.use("/api/v1/User",BasicRoutes);

// Connect to database
database.connect();

// Root route serves the HTML file
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});
app.listen(port, async () => {
  console.log(`App is running on the port ${port}`);
});