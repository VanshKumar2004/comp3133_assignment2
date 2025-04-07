require('dotenv').config();
const express = require('express');
const mongoose = require('./config/db');
const { createHandler } = require('graphql-http/lib/use/express');
const schema = require('./graphql/schema');
const cors = require('cors');
const { graphqlHTTP } = require('express-graphql');

const app = express();

const allowedOrigins = [
  'http://localhost:4200',
 
];

// CORS middleware
app.use(cors({
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('CORS not allowed for this origin: ' + origin));
    }
  },
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
}));

app.use(express.json());

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}));


app.options('*', cors());

// Server startup
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
