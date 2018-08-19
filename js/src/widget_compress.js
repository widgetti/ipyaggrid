import * as pako from 'pako';

window.p = pako;

const gzip = {};

gzip.compress = function(jsonStr, level) {
    const binaryString = pako.gzip(jsonStr, { level });
    return binaryString;
};

gzip.uncompress = function(binaryString, level) {
    const string = pako.inflate(binaryString, {
        level,
        to: 'string',
    });
    return string;
};

gzip.uncompressBase64ToStr = function(base64Str, level) {
    const binaryString = atob(base64Str);
    const string = gzip.uncompress(binaryString, level);
    return string;
};

export { gzip };
