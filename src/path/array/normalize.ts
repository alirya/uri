
export default function Normalize(
    paths: string[],
) : string[]{

    const results : string[] = [];

    for(let index = paths.length - 1; index >=0 ; index--) {

        switch (paths[index]) {

            case '.' :
                break;
            case '..' :
                index--;
                break;
            default :
                results.unshift(paths[index]);
        }

    }

    return results;

}