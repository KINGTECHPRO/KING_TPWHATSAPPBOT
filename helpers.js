function successfullMessage(msg) {
    return "✅ *KING_TECHPRO*:  ```" + msg + "```"
}
function errorMessage(msg) {
    return "🛑 *KING_TECHPRO*:  ```" + msg + "```"
}
function infoMessage(msg) {
    return "• *KING_TECHPRO :*  ```" + msg + "```"
}


module.exports = {
    successfullMessage,
    errorMessage,
    infoMessage
}
