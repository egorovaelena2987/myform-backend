const FormModel = require('./FormModel');

module.exports.getForm = async(req, res) => {
    const MyForm = await FormModel.find();
    res.sendFile(__dirname + "/frontend/App.js")
}
 module.exports.saveForm = async(req, res) => {
    let newMessage = new Message({
        name: req.body.name,
        email: req.body.email,
        message: req.body.message
    })
    newMessage.save()
    res.sendFile(__dirname + "/frontend/index.html")
}
