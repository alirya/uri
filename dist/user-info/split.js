export default function Split(userInfo) {
    let parts = userInfo.split(':', 2);
    return {
        user: parts[0],
        password: parts[1] === undefined ? '' : parts[1]
    };
}
//# sourceMappingURL=split.js.map