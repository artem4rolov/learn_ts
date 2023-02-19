"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.obj1 = void 0;
// function head(value: number[]): number;
// function head(value: string[]): string;
// function head(value: boolean[]): boolean;
// function head(value: Date[]): Date;
// исходная функция
function head(value) {
    return value[0];
}
const head1 = (value) => value[0];
exports.obj1 = {
    title: "as",
    value: 12,
};
// obj1.value = "a"; -> false, поскольку мы указали generic как number
const obj2 = {
    title: "sdasd",
    value: [123],
};
