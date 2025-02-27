app.post('/blogs', (req, res) => {
    const { title, content } = req.body;
    if (!title || !content) {
      return res.status(400).json({ message: 'Le titre et le contenu sont requis.' });
    }
    const newBlog = { id: Date.now(), title, content };
    blogs.push(newBlog);
    res.status(201).json(newBlog);
  });