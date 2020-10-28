var dotenv = require('dotenv')
dotenv.config();

module.exports = {
    mongoURI: `mongodb+srv://ar223ng:${process.env.ENV_VAR}@cluster0.tpjto.mongodb.net/<dbname>?retryWrites=true&w=majority`
};