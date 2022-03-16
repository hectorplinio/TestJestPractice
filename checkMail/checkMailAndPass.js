const checkEmail = (input) => {
  const re = /\S+@\S+\.\S+/
  return input.filter(function (arrayElement) {
    return arrayElement.mail.match(re)
  })
}
const validatePass = (password) => {
  const correct = []
  for (let i = 0; i < password.length; i++) {
    if (password[i].password1 === password[i].password2) {
      correct.push(password[i])
    }
  }
  return correct
}

module.exports = { checkEmail, validatePass }
