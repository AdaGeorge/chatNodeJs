const postsControlers = require("./posts.controllers");

const getAllPosts = (req, res) => {
  postsControlers.getAllPosts()
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((err) => {
      res.status(400).json({ message: err.message });
    });
};

const getPost = (req, res) => {
  const id = req.params.id;
  postsControlers.getPostById(id)
    .then((response) => {
      if (response) {
        res.status(200).json(response);
      } else {
        res.status(404).json({ message: "Invalid ID" });
      }
    })
    .catch((err) => {
      res.status(400).json({ message: err.message });
    });
};

const postAPost = (req, res) => {
  const { title, content, categoryId } = req.body;
  const userId = req.user.id
  if (title && content && categoryId) {
    postsControlers.createPost({title, content, userId, categoryId })
      .then((data) => {
        res.status(201).json(data);
      })
      .catch((err) => {
        res.status(400).json({ message: err.message });
      });
  } else {
    res.status(400).json({ message: "Missing data" });
  }
};

const getAllPostsByCategory = (req, res) => {
  const categoryId = req.params.id
  postsControlers.getPostsByCategory(categoryId)
    .then((data)=>{
      res.status(200).json(data)
    })
    .catch((err)=>{
      res.status(400).json({message: err.message})
    })
}

module.exports = {
  getAllPosts,
  getPost,
  postAPost,
  getAllPostsByCategory
};
