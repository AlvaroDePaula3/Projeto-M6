const User = require("../models/User");

const addUser = async (req, res) => {
    const { name, email, age, comment } = req.body;

    const userExist = await User.findOne({
        where: {
            email
        }
    });

    if (!userExist) {        
        if (name && email && age !== null) {
            const userCreated = await User.create({ name, email, age, comment });
            return res.json({ mensagem: "Usuário criado com sucesso!!!" });
        }
    }

    return res.redirect("/?error=emailTaken");
};

module.exports = {
    addUser
}
