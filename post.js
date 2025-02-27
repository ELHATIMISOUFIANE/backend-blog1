app.post('/blogs', (req, res) => {
    const { title, content , image} = req.body;
    if (!title || !content || !image) {
      return res.status(400).json({ message: 'Le titre et le contenu sont requis.' });
    }
    const newBlog = { id: Date.now(), title, content,image };
    blogs.push(newBlog);
    res.status(201).json(newBlog);
  });