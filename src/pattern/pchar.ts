import Unreserved from './unreserved.js';
import Percent from './percent-encoded.js';
import SubDelimiter from './sub-delimiter.js';
import Escape from '@alirya/string/pattern/escape.js';
import Unique from '@alirya/array/unique-parameters.js';

const subDelimiter = SubDelimiter;
const unreserved = Unreserved;
const extra = Escape('@:');

const flag = Unique([...subDelimiter.flags, ...unreserved.flags]).join('');

const Pattern : RegExp = new RegExp(`([${extra}]|${Percent.source}|${unreserved.source}|${subDelimiter.source})*`, flag);
export default Pattern;
