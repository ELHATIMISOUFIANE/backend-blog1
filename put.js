app.put('/blogs/:id', (req, res) => {
    const { title, content } = req.body;
    const blog = blogs.find(b => b.id === parseInt(req.params.id));
    if (!blog) {
      return res.status(404).json({ message: 'Blog non trouvé.' });
    }
    blog.title = title || blog.title;
    blog.content = content || blog.content;
    res.json(blog);
  });