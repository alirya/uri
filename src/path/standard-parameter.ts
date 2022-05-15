import StandardParameters from "./standard-parameters";

export interface StandardParameterArgument {
    value : string,
    separator ?: string,
    separators ?: string,
    prefix ?: boolean,
}

export default class StandardParameter extends StandardParameters {

    constructor(
        {
            value,
            separator,
            separators,
            prefix,
        } : StandardParameterArgument
    ) {
        super(value, separator, separators, prefix);
    }
}