var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
};
var _value;
export default class Coded {
    constructor(value, encoder = encodeURIComponent, decoder = decodeURIComponent) {
        this.encoder = encoder;
        this.decoder = decoder;
        _value.set(this, '');
        this.value = value;
    }
    set value(string) {
        __classPrivateFieldSet(this, _value, this.decoder(string));
    }
    get value() {
        return __classPrivateFieldGet(this, _value);
    }
    valueOf() {
        return this.toString();
    }
    toString() {
        return this.encoder(this.value);
    }
}
_value = new WeakMap();
//# sourceMappingURL=coded.js.map