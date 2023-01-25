import { PDFName } from "../core";
export declare enum ColorTypes {
    Grayscale = "Grayscale",
    RGB = "RGB",
    CMYK = "CMYK",
    Separation = "Separation"
}
export interface Grayscale {
    type: ColorTypes.Grayscale;
    gray: number;
}
export interface RGB {
    type: ColorTypes.RGB;
    red: number;
    green: number;
    blue: number;
}
export interface CMYK {
    type: ColorTypes.CMYK;
    cyan: number;
    magenta: number;
    yellow: number;
    key: number;
}
export interface Separation {
    type: ColorTypes.Separation;
    name: PDFName;
    tint: number;
}
export declare type Color = Grayscale | RGB | CMYK | Separation;
export declare const grayscale: (gray: number) => Grayscale;
export declare const rgb: (red: number, green: number, blue: number) => RGB;
export declare const cmyk: (cyan: number, magenta: number, yellow: number, key: number) => CMYK;
export declare const separation: (name: PDFName, tint: number) => Separation;
export declare const setFillingColorspaceOrUndefined: (color: Color) => import("../core/operators/PDFOperator").default | undefined;
export declare const setFillingColor: (color: Color) => import("../core/operators/PDFOperator").default;
export declare const setStrokingColorspaceOrUndefined: (color: Color) => import("../core/operators/PDFOperator").default | undefined;
export declare const setStrokingColor: (color: Color) => import("../core/operators/PDFOperator").default;
export declare const componentsToColor: (comps?: number[] | undefined, scale?: number) => Grayscale | RGB | CMYK | undefined;
export declare const colorToComponents: (color: Color) => number[];
//# sourceMappingURL=colors.d.ts.map