export const validatorMiddleware = (schema) => (req, res, next) => {
    try {
        schema.parse(req.body)
        next()
    } catch (error) {
        return res.status(403).json({ error: error.errors.map((error) => error.message) });
    }
}