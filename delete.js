app.delete('/blogs/:id', (req, res) => {
    const blogIndex = blogs.findIndex(b => b.id === parseInt(req.params.id));
    if (blogIndex === -1) {
      return res.status(404).json({ message: 'Blog non trouvé.' });
    }
    blogs.splice(blogIndex, 1);
    res.status(204).send();
  });