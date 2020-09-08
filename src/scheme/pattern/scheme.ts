/**
 * @reference https://tools.ietf.org/html/rfc3986#appendix-B
 */

const Scheme : RegExp = /[a-zA-Z][a-zA-Z0-9+.\\-]/;
export default Scheme;
