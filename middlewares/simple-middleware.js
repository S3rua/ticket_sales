/** create first simple middleware */

const midOne = async (request, response, next) => {
    console.log(`Run Middleware One`)

    next()
}

/** export function to another file */

module.exports = {
    midOne
}