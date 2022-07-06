import Path from './path.js';
import {StandardParameters} from './standard.js';
import {SplitParameters} from './array/split.js';
import Number from '../../../number/dist/boolean/number.js';
import String from '@alirya/string/boolean/string.js';

export interface ListType extends Array<string>, Path {

    separator : string;
    separators : string;
    empty : boolean;
    prefix: boolean;
    readonly splitter: string;
    toString() : string;

}

export class ListContainer extends Array<string> implements ListType {

    static get [Symbol.species](): ArrayConstructor {
        return Array;
    }

    constructor(
        segments : string|Iterable<string> = [],
        public separator : string = '/',
        public separators : string = '/\\:',
        public empty : boolean = true,
        public prefix: boolean = false,
        private proxyHandler : ReturnType<typeof ListGetterHandler>
    ) {

        if(String(segments)) {

            segments = [segments];
        }

        proxyHandler.split = false;
        super(...segments);
        this.split();
        proxyHandler.split = true;
    }

    get splitter() : string {

        return this.separators + this.separator;
    }

    push(...items : string[]): number {

        /**
         * temporary disable proxy handler, prevent repeat call on {@see ListGetterHandlerType.split} or this[number] = value
         */

        let result = 0;

        this.proxyHandler.unSplitUpdate(()=> {
            result = super.push(...items);
            this.split();
        });

        return result;
    }

    unshift(...items : string[]): number {

        /**
         * temporary disable proxy handler, prevent repeat call on {@see ListGetterHandlerType.split} or this[number] = value
         */

        let result = 0;

        this.proxyHandler.unSplitUpdate(()=> {
            result = super.unshift(...items);
            this.split();
        });

        return result;
    }

    split() {

        const data = SplitParameters(this.toString(), this.splitter, this.empty);

        this.proxyHandler.unSplitUpdate(()=> {

            super.length = data.length;

            for (const [i, value] of data.entries()) {

                super[i] = value;
            }
        });
    }

    toString(): string {

        let standard = new StandardParameters(this.join(this.separator[0]), this.separator[0], this.separators, this.prefix);
        return standard.toString();
    }
}

export type ListGetterHandlerType = ProxyHandler<ListContainer> & {
    split:boolean,
    unSplitUpdate(callbak:()=>void);
};

export function ListGetterHandler() : ListGetterHandlerType {

    return {

        split : true,

        /**
         * temporary disable proxy handler, prevent repeat call on {@see ListGetterHandlerType.split} or this[number] = value
         */
        unSplitUpdate(callbak:()=>void) : void {

            this.split = false;
            callbak();
            this.split = true;
        },

        set(target, p: PropertyKey, value: any, receiver: any): boolean {

            target[p] = value;

            if(this.split && Number(p)) {

                target.split();
            }

            return true;
        }
    };
}


export function ListParameters (
    segments : Iterable<string> = [],
    separator : string = '/',
    separators : string = '/\\:',
    empty : boolean = true,
    prefix: boolean = false
) : ListType {

    const handler = ListGetterHandler();

    return new Proxy(new ListContainer(segments, separator, separators, empty, prefix, handler), handler);
}


export interface ListArgument {
    segments ?: Iterable<string>;
    separator ?: string;
    separators ?: string;
    empty ?: boolean;
    prefix ?: boolean;
}

export function ListParameter(
    {
        segments  = [],
        separator = '/',
        separators = '/\\:',
        empty = true,
        prefix = false,
    } : ListArgument
) : ListType {

    return ListParameters(segments, separator, separators, empty, prefix);
}

namespace List {
    export const Parameters = ListParameters;
    export const Parameter = ListParameter;
    export type Type = ListType;
    export type GetterHandlerType = ListGetterHandlerType;
    export type Argument = ListArgument;
}
export default List;
