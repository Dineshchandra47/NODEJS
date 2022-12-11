const mongooose = require("mongoose");

const blogSchema = new mongooose.Schema(
  {
    // Your code goes here
    topic: { type: String, required: true },
    description: { type: String, required: true },
    posted_at: { type: Date, required: true },
    posted_by: { type: String, required: true },
  },
  { timestamps: true }
);

const Blog = mongooose.model("blogs", blogSchema);

module.exports = Blog;

// {
//     "topic": "NODEJS",
//     "description": "Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine.",
//     "posted_at": "2022:12:01",
//     "posted_by": "Derek Shepard"
// },

// {
//     "topic": "REACT",
//     "description": "React is a JavaScript library for building user interfaces.",
//     "posted_at": "2022:11:21",
//     "posted_by": "Meredith Grey"
// },
// {
//     "topic": "MongoDB",
//     "description": "React is a JavaScript library for building user interfaces.",
//     "posted_at": "2022:10:26",
//     "posted_by": "Alex Karev"
// },
// {
//     "topic": "Mongoose",
//     "description": "Mongoose provides a straight-forward, schema-based solution to model your application data",
//     "posted_at": "2022:10:26",
//     "posted_by": "Miranda Bailey"
// },
// {
//     "topic": "MYSQL",
//     "description": "Mongoose provides a straight-forward, schema-based solution to model your application data",
//     "posted_at": "2020:10:26",
//     "posted_by": "Richard webber"
// }
