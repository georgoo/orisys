const AppError = require('../utils/appError')
const bcrypt = require('bcrypt')

module.exports = ({
    //@Method - GET
    //@desc - Get user singnup page
    getRegister: (req, res) => {

        res.render('Register')

    },

    //@Method - POST
    //@Desc - user signup
    handleRegister: async (req, res) => {

        const { email, username, mobile, password, confirmPassword } = req.body
        if (!email || !username || !mobile || !password || !confirmPassword) {
            res.json("all fields required")

        } else {
            //check email and mobile already exist or not
            if (isExistingEmail) {
                res.json({
                    status: "email",
                    message: "this email already exists",
                });
            } else if (isExistingPhoneno) {
                res.json({
                    status: "phoneno",
                    message: "this phone number already exists",
                });
            } else {
                // generate salt to hash password
                const salt = await bcrypt.genSalt(10);
                // hashing password
                const hashedPassword = await bcrypt.hash(password, salt);

                //insert the data into database



            }

        }
    },
    //@Method - GET
    //@Desc - get user SignIn page
    getLogin: (req, res) => {
        res.render('login')
    },

    //@Method - GET
    //@Desc - User SignIn 
    handleLogin: async (req, res) => {
        const { email, passoword } = req.body
        if (!email || !passoword) {
            res.json("all fields required F")
        } else {
            //get the userdata from database

            //compare and varify password with database password
            const isPasswordCorrect = await bcrypt.compare(password, user.password);


        }

    },
    //@Method - GET
    //@Desc - Get all posts
    getAllPosts: async (req, res) => {
        //query for get all post details from database

        res.render('', { posts: "allposts" })

    },
    //@Method - POST
    //@Desc - Create new post

    createPost: async (req, res) => {
        const { title, description } = req.body
        //get the file url using multer

        const post = {
            title,
            description,
            file: url,
            userId: 'req.user.user_id'
        }

        //query for storing data into datebase
        res.redirect('/posts')

    },

    //@Method - GET
    //@Desc - View a single post
    viewPost: async (req, res) => {

    },

    //@Method - PUT
    //@Desc - Edit post
    editPost: async (req, res) => {
        const postId = req.params.id
        const { title, description } = req.body

        //database updating query 
        res.redirect('/post')

    },

    //@Method - Delete
    //@Desc - Delete post

    deletePost: async (req, res) => {

    }





})