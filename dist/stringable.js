import Standard from './standard';
import Join from './string/join';
export default class Stringable extends Standard {
    constructor(scheme, authority, path, query, fragment, converter = Join) {
        super(scheme, authority, path, query, fragment);
        this.converter = converter;
    }
    toString() {
        return this.converter(this);
    }
}
//# sourceMappingURL=stringable.js.map