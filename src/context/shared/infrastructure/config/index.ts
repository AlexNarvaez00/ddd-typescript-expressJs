export const config = {
    express: {
        port: process.env.EXPRESS_PORT || 3000,
        jwtToken: process.env.EXPRESS_JWT_SECRET,
    },
}
