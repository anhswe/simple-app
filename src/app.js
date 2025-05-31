require('dotenv').config()

const express = require('express');
     const mongoose = require('mongoose');
     const app = express();

     app.use(express.json());
     console.log(process.env.MONGO_URI, "ffffffffffffffffffff")
     // Kết nối MongoDB
     mongoose.connect(process.env.MONGO_URI, {
       useNewUrlParser: true,
       useUnifiedTopology: true
     })
     .then(() => console.log('MongoDB Connected'))
     .catch(err => console.log(err));

     // Route mẫu
     app.get('/', (req, res) => {
       res.json({ message: 'Hello from Node.js backend on AWS ECS!Image taggg: v1.0.11' });
     });

     const port = process.env.PORT || 8080;
     app.listen(port, () => console.log(`Server running on port ${port}`));