import axios from 'axios'

const baseURL = "https://veljhf7ma5.execute-api.us-east-1.amazonaws.com/qas/"

export default axios.create({
    baseURL
})

