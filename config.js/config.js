import dot from "dotenv";

dot.config()

const appConfig ={
    port: process.env.PORT || 3000,
    mongo_url:process.env.MONGO_URL,
    db:process.env.DB,
    jwt_key:process.env.JWT_SECRET||"JWT_SECRET_KEY"

}

export default appConfig;