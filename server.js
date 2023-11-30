const Database = require("./database");

const DataGet = async (req, res) => {
    try {
        const users = await Database.find();
        res.status(200).json(users);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}



const DataPost = async (req, res) => {
    try {
        const newUser = new Database({
            email: req.body.email,
            password: req.body.password,
        });
        await newUser.save();
        res.status(201).json(newUser);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

module.exports={DataGet, DataPost}