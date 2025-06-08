const express = require('express')
const app = express()
const port = 3000

// Middleware to parse form data  
app.use(express.urlencoded({ extended: true }));


app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('index',      { title: 'Home' })
})

app.get('/about', (req, res) => {
  res.render('about',      { title: 'About Us' })
})

app.get('/contactUs', (req, res) => {
  res.render('contactUs',  { title: 'Contact Us' })
})

app.get('/testimonials', (req, res) => {
  res.render('testimonials',{ title: 'Testimonials' })
})

app.get('/contact', (req, res) => {res.render('form');});

app.post('/contact', (req, res) => {
  const { name, message } = req.body;
  console.log('Form Submitted:', name, message);

  res.send(`<h2> Thank you, ${name}. Your message has been recieved</h2>`);
})


// 404 handler
app.use((req, res) => {
  res.status(404).render('404', { title: '404 - Page Not Found' })
})



//Start server
app.listen(port, () => {
  console.log(`Site running at http://loacalhost:${port}`)
})

