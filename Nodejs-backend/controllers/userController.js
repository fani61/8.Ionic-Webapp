// @desc Login User and redirect to homepage
// @route GET /api/login
// @access public
const { validationResult } = require("express-validator");

const User = require("../models/user");

const signupUser = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array().map((x) => x.msg) });
  }

  const { fullName, email, password } = req.body;
  const data = {
    fullName,
    email,
    password,
  };

  try {
    let createdUser = await new User(data).save();
    res.send(createdUser);
  } catch (e) {
    next(e);
  }

  // const createdUser = new User ({
  //     fullName,
  //     email,
  //     password,
  // });

  // createdUser.save().then((user) => {
  //     res.send(createdUser);

  // })
  // .catch( e => {
  //     console.error(e);
  //     next(e)
  // })
};

const loginUser = (req, res, next) => {
  const err = new Error("lagta ha kuch gadbad ha bhaiya");
  next(err);
  // res.send('You have reached login page')
};

const fetchFruits = (req, res, next) => {
  try {
    let fruits = [
      {
        id: 1,
        name: "Apple",
        description:
          "A sweet, crisp fruit that comes in red, green, or yellow varieties.",
      },
      {
        id: 2,
        name: "Banana",
        description:
          "A soft, creamy fruit that's rich in potassium and easy to digest.",
      },
      {
        id: 3,
        name: "Orange",
        description:
          "A juicy citrus fruit known for its vitamin C content and tangy flavor.",
      },
      {
        id: 4,
        name: "Strawberry",
        description:
          "A bright red berry with a sweet taste and tiny seeds on its surface.",
      },
      {
        id: 5,
        name: "Mango",
        description:
          "A tropical fruit with juicy flesh, often referred to as the 'king of fruits'.",
      },
      {
        id: 6,
        name: "Pineapple",
        description:
          "A tropical fruit with spiky skin and a sweet, tangy interior.",
      },
      {
        id: 7,
        name: "Grapes",
        description:
          "Small, juicy fruits that grow in clusters and come in many colors and varieties.",
      },
      {
        id: 8,
        name: "Watermelon",
        description:
          "A large fruit with a green rind and sweet, refreshing red or yellow flesh.",
      },
      {
        id: 9,
        name: "Blueberry",
        description:
          "A small, round fruit with a deep blue color and sweet-tart flavor.",
      },
      {
        id: 10,
        name: "Papaya",
        description:
          "A tropical fruit with orange flesh and black seeds, known for aiding digestion.",
      },
    ];

    res.send(fruits)
  } catch (err) {
    next(err);
  }
  // res.send('You have reached login page')
};

module.exports = { signupUser, loginUser, fetchFruits };
