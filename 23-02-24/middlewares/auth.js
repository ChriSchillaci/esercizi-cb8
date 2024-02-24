const auth = (req, res, next) => {
   const {role} = req.query

  if ( role === 'admin') {
    next()
  }
    res.status(401).send('access not authorized')
}

module.exports = auth