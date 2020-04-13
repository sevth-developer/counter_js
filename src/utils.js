
function SetCookie() {
    let exp_time = ExpiresTime();
    document.cookie="counter_user_check="+ exp_time.getTime() + "; expires="+ exp_time.toGMTString() + "; path=/"
}

function ExpiresTime() {
    let exp = new Date();
    exp.setTime(exp.getTime() + 86400 * 1000);
    return exp;
}

/**
 * @return {boolean}
 */
function GetCookie() {
    let ca = document.cookie.split(';');
    for(let i=0; i<ca.length; i++)
        {
            let name = ca[i].split('=')[0];
            if (name === "counter_user_check") {
                try {
                    if (window.counter_config.strict) {SetCookie()}
                } catch (e) {}
                return true;
            }
        }
        return false;
}

export {
    SetCookie,
    GetCookie
}

