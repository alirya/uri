import Escape from '@alirya/string/pattern/escape.js';
//
// export default function Join(
//     start : string,
//     end : string,
//     delimiter : string = '/',
//     delimiters : string = ':/\\',
// ) : string {
//
//     let escaped = Escape(delimiters);
//
//     {
//         let match = start.match(new RegExp(`[${escaped}]+$`));
//
//         if(match) {
//
//             return start + end;
//         }
//     }
//
//
//     {
//         let match = end.match(new RegExp(`^[${escaped}]+`));
//
//         if(match) {
//
//             return start + end;
//         }
//     }
//
//
//     return start + delimiter[0] + end;
//
// }


export default function Join(
    paths : string[],
    delimiter  = '/',
    delimiters  = ':/\\',
) : string {

    delimiter = delimiter[0];

    const escaped = Escape(delimiters + delimiter);

    return paths.map((path, index)=>{

        // check ended with delimiter
        const match = path.match(new RegExp(`[${escaped}]+$`));

        if(match) {

            return path;
        }


        // check next
        const next = paths[index + 1];

        if(next === undefined) {

            return path;

        } else {

            const match = next.match(new RegExp(`^[${escaped}]+`));

            if(match) {

                return path;
            }
        }

        return path + delimiter[0];

    }).join('');

    // return paths.join(delimiter).replace(new RegExp(`[${escaped}]+`,'g'), delimiter);

    // {
    //     let match = start.match(new RegExp(`[${escaped}]+$`));
    //
    //     if(match) {
    //
    //         return start + end;
    //     }
    // }
    //
    //
    // {
    //     let match = end.match(new RegExp(`^[${escaped}]+`));
    //
    //     if(match) {
    //
    //         return start + end;
    //     }
    // }
    //
    //
    // return start + delimiter[0] + end;

}
