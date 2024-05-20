const userModel = require('../model/userModel')

const signup = (req) => {
    return new Promise(async (resolve, reject) => {
        try {
            const data = req.body
            const userDetails = await userModel.create({
                firstName: data.firstName,
                lastName: data.lastName,
                email: data.email,
                password: data.password
            })
            resolve({
                message: "Success",
                userDetails
            })
        } catch (err) {
            reject({
                message: err.message
            })
        }
    })
}

module.exports = {
    signup
}