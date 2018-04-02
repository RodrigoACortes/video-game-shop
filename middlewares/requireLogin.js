module.exports = (req, res, next) => {
    if (!req.user) {
    return resizeBy.status(401).send({ error: 'You must log in!' })
    }

    next();
}