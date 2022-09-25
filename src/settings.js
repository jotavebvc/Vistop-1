import { config } from 'dotenv'
dotenv.config()

export default {
    serverUrl: process.env.SERVER_URL || 'https://vistapp-backend.herokuapp.com'
}
