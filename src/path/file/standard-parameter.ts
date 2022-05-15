import StandardParameters from "./standard-parameters";
import {StandardParameterArgument} from "../standard-parameter";


export default class StandardParameter extends StandardParameters {

    constructor({
        value,
        separator,
        separators,
        prefix
    } : StandardParameterArgument) {

        super(value, separator, separators, prefix);
    }
}
