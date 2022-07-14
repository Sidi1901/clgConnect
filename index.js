const express = require("express");
const app = express();
const path = require("path");

//const PATHVAR=path.join(__dirname, "/public");
const PATHTEMP=path.join(__dirname, "/templates");

app.set('view engine', "ejs");
app.set('views', PATHTEMP);
 
//middleware to show static html
//app.use(express.static(PATHVAR));

//to use static content like css from public
app.use(express.static(path.join(__dirname, "public")));


const authRoutes = require("./routes/auth");
const postRoutes = require("./routes/post");
const createRoutes = require("./routes/create");
const searchRoutes = require("./routes/search");
const profileRoutes = require("./routes/profile")

app.use(authRoutes);
app.use(createRoutes);
app.use(postRoutes);
app.use(profileRoutes);
app.use(searchRoutes);
app.get("/", (req,resp)=>{
    resp.render("home");
});



// app.use((req, res, next) => {
//     res.locals.isLoggedIn = req.session.isLoggedIn;
//     if (req.session.user)
//         res.locals.username = req.session.user.username;
//      else
//         res.locals.username = null


//     res.locals.csrfToken = req.csrfToken();
//     next();
// })
app.listen(8000, ()=>{
    console.log("listening to port 8000");
});




//


// app.get("/notice", (req,resp)=>{
//     resp.render("notice");
// });

// app.get("/search", (req,resp)=>{
//     resp.render("search");
// });

// app.get("/blog", (req,resp)=>{
//     resp.render("blog");
// });

// app.get("/singleblog", (req,resp)=>{
//     resp.render("singleBlog");
// });


// app.get("/posts", (req,resp)=>{
//     resp.render("posts");
// });

// app.get("/search", (req,resp)=>{
//     resp.render("search");
// });

// app.get("/signin", (req,resp)=>{
//     resp.render("search");
// });