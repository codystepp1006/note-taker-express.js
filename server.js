const path = require('path');
const express = require('express');
const routes = require('./Develop/routes');

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('./Develop/public'))


app.use(routes);

app.get('/', (req, res)=>
    res.sendFile(path.join(__dirname, 'Develop/public/index.html'))
);
app.get('/notes', (req, res) =>
    res.sendFile(path.join(__dirname, 'Develop/public/notes.html'))
    );

app.listen(PORT, () =>
    console.log(`App listening at http://localhost:${PORT}`)
);
































// const path = require('path');

// const express = require('express');
// const homeRoutes = require('./Develop/public/routes/homeroute');
// const app = express();
// app.use(express.static('public'));



// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// app.use(homeRoutes);


// // //home routes
// // app.get('/home', function(req, res){
// //     res.sendFile(path.join(__dirname + '/develop/public/index.html'));
// //     //res.send('POST request to the homepage')
// //     });


// app.listen(3000, () => {
//     console.log("App listening on port 3000");
//   });
  





