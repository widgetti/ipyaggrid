const JSONfunc = {};

JSONfunc.stringify = function(obj) {
    return JSON.stringify(
        obj,
        (key, value) => (typeof value === 'function' ? value.toString() : value)
    );
};

JSONfunc.parse = function(str, helpers) {
    // helpers used in eval
    return JSON.parse(str, (key, value) => {
        if (typeof value !== 'string') return value;

        const valueCompact = value.replace(/\r?\n|\r/g, '').replace(/\s+/g, ' ');
        let r;
        if (valueCompact.substring(0, 8) === 'function') {
            r = eval(`(${value})`);
            return r;
        } else if (valueCompact.substring(0, 8) === 'helpers.') {
            r = eval(value);
            return r;
        }
        return value;
    });
};

export { JSONfunc };
