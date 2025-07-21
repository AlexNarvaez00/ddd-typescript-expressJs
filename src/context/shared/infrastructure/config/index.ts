export const config = {
    express: {
        port: process.env.EXPRESS_PORT || 3000,
        jwtTokenSecret: process.env.JWT_SECRET,
        jwtAlgorithm: process.env.JWT_ALGORITHM,
    },
}
