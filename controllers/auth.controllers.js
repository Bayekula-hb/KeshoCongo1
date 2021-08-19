const user = require("../models/user");
// const verifymail = require("../utils/verifymail");
// const { body, validationResult } = require('express-validator');

// function verifymail(mail) {
//   const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
//   return regex.test(mail)
// }

module.exports = {
  login: (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    if (email === null || email.length <= 2) {
      res.status(400).json({
        message: "Email invalide",
      });
     } 
    else if (password === null || password.length <= 2) {
      res.status(400).json({
    
        message: "Mot de passe invalide",
      });
    }

    // const newEmail =  user.create({ email: `${email}` });
    // const newPassword =  user.create({ password: `${password}` });
    //check email and password
    // user.findOne({ email: email }, (err, user) => {
    //   if (err) {
    //     res.status(500).json({
      
    //       message: "Erreur lors de la recherche de l'utilisateur",
    //     });
    //   }
    //   if (user === null) {
    //     res.status(400).json({
      
    //       message: "Utilisateur non trouvé",
    //     });
    //   }
    //   if (user.password !== password) {
    //     res.status(400).json({
      
    //       message: "Mot de passe incorrect",
    //     });
    //   }
    //   req.session.user = user;
    //   res.status(200).json({
    //     success: true,
    //     message: "Utilisateur connecté",
    //   });
    // });
      res.status(200).json({
        success: true,
        message: "Utilisateur connecté",
      });
  },
};
