import Unreserved from './unreserved';
import Percent from './percent-encoded';
import SubDelimiter from './sub-delimiter';
import Escape from '@alirya/string/pattern/escape';
import Unique from '@alirya/array/unique';

const subDelimiter = SubDelimiter;
const unreserved = Unreserved;
const extra = Escape('@:');

const flag = Unique([...subDelimiter.flags, ...unreserved.flags]).join('');

const Pattern : RegExp = new RegExp(`([${extra}]|${Percent.source}|${unreserved.source}|${subDelimiter.source})*`, flag);
export default Pattern;
