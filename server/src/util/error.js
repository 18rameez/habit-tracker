exports.ERROR400 = {
    tile: "Invalid request",
    status: "400",
    detail:"Lacking required request body or parameter"
}

exports.ERROR404 = {
    tile: "The requested resource does not exist",
    status: "404",
    detail:""
}

exports.ERROR500 = {
    tile: "Internal Server Error",
    status: "500",
    detail:""
}

exports.ERROR503 = {
    tile: "Service Unavailable",
    status: "503",
    detail:"The requested service is not available"
}