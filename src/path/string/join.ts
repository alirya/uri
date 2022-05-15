import Escape from '@alirya/string/pattern/escape';

export default function Join(
    start : string,
    end : string,
    delimiter : string = '/',
    delimiters : string = ':/\\',
) : string {

    let escaped = Escape(delimiters);

    {
        let match = start.match(new RegExp(`[${escaped}]+$`));

        if(match) {

            return start + end;
        }
    }


    {
        let match = end.match(new RegExp(`^[${escaped}]+`));

        if(match) {

            return start + end;
        }
    }


    return start + delimiter[0] + end;

}
