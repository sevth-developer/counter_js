
const SetUV = () => {
    let obj = {
        data: 1,
        time: Date.now(),
        expire: 24 * 3.6e6
    };
    localStorage.setItem('counterBySevth', JSON.stringify(obj));
};

const GetUV = () => {
    let val = localStorage.getItem('counterBySevth')
    try {
        val = JSON.parse(val);
        if (Date.now() - val.time > val.expire) return false
        if (window.counterConfig && window.counterConfig.strict) SetUV()
        return true
    } catch (e) {
        return false
    }
};

export {
    SetUV,
    GetUV
}

