/** load Express Validator and Multer Library */
const { validationResult, body } = require(`express-validator`);

const validateDiskon = [
    // Validation checks for the request body
    body('nama_diskon').notEmpty().withMessage('nama diskon is required'),
    body('nominal_diskon').notEmpty().withMessage('nominal diskon  is required'),
 
  
    // Custom validation logic
    (request, response, next) => {
        const errors = validationResult(request);
        if (!errors.isEmpty()) {
            /** get all error message */
            let errMessage = errors.array().map(it => it.msg).join(",")
            
            /** return error message with code 422 */
            return response.status(422).json({
                success: false,
                message: errMessage
            })
        }
        next(); // Proceed to the next middleware/route handler if validation passes
    }
];

module.exports = { validateDiskon }
