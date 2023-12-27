import Unreserved from './unreserved.js';
import Percent from './percent-encoded.js';
import SubDelimiter from './sub-delimiter.js';
import Escape from '@axiona/string/pattern/escape.js';
import { UniqueParameters } from '@axiona/array/unique.js';

const subDelimiter = SubDelimiter;
const unreserved = Unreserved;
const extra = Escape('@:');

const flag = UniqueParameters([...subDelimiter.flags, ...unreserved.flags]).join('');

const Pattern  = new RegExp(`([${extra}]|${Percent.source}|${unreserved.source}|${subDelimiter.source})*`, flag);
export default Pattern;
