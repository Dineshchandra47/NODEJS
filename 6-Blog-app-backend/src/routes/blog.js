const router = require("express").Router();
const Blog = require("../models/Blog");
const body_parser = require("body-parser");

// Your routing code goes here
router.use(body_parser());

// router.get('', (req, res)=>{
//     res.send('hello')
//     console.log('hello')

// })
// router.get('/blog,(req,res)=>{
//     res.json({ok:'blog'})
//     res.send('hello nodejs')
//     console.log(req.body);
// })
app.get("/blog", async (req, res) => {
  try {
    console.log(req.body);
    res.status(200).json({
      status: "success",
      data: blog,
    });
  } catch (e) {
    res.status(404).json({
      status: "failed",
      message: e.message,
    });
  }
});

router.post("/blog", async (req, res) => {
  try {
    const blog = await Blog.create(req.body);
    console.log(req.body);
    res.status(200).json({
      status: "success",
      data: blog,
    });
  } catch (e) {
    res.status(500).json({
      status: "Failed",
      message: e.message,
    });
  }
});

router.put("/blog/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const data = await Blog.findByIdAndUpdate(_id, req.body, { new: true });
    console.log(req.body);
    res.json({
      status: "success",
      result: data,
    });
  } catch (err) {
    res.status(500).json({
      status: "Failed",
      message: e.message,
    });
  }
});

router.delete("/blog/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const delete_data = await Blog.findByIdAndDelete(_id, req.body);
    console.log(req.body);
    res.json({
      status: "success",
      result: delete_data,
    });
  } catch (err) {
    res.status(500).json({
      status: "Failed",
      message: e.message,
    });
  }
});
module.exports = router;
