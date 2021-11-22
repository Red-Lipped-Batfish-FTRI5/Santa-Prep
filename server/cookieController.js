const cookieController = {};


cookieController.setCookie = (req, res, next) => {
    res.cookie('worked', 'cool')
    res.cookie('ssid', res.locals.user_id, {httpOnly: true})
    return next()
}



module.exports = cookieController;