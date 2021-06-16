const _ = require('lodash');

export default function mailTo(address) {
    if (!address) {
        return address;
    }
    return "mailto:".concat(address)
}
