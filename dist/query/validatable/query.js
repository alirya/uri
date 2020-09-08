var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@dikac/t-string/validatable/match", "../pattern/query", "./string/query"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const match_1 = __importDefault(require("@dikac/t-string/validatable/match"));
    const query_1 = __importDefault(require("../pattern/query"));
    const query_2 = __importDefault(require("./string/query"));
    function Query(query, message = query_2.default) {
        return new match_1.default(query, new RegExp(`^${query_1.default}*$`, query_1.default.flags), message);
    }
    exports.default = Query;
});
//# sourceMappingURL=query.js.map