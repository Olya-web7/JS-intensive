function makeObjectDeepCopy(obj) {
    let res = {}
    for (let key in obj) {
        if((typeof obj[key]) === 'object') {
            res[key] = makeObjectDeepCopy(obj[key])
        } else {
            res[key] = obj[key]
        }
    }
    return res;
}

