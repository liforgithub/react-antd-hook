const Storage = window.localStorage

const set = (key, value) => {
    return Storage.setItem(key, value)
}

const get = key => {
    return Storage.getItem(key);
}

module.exports = {
    set,
    get
}