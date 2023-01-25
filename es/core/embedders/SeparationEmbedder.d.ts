import PDFRef from "../objects/PDFRef";
import PDFContext from "../PDFContext";
declare class SeparationEmbedder {
    static for(name: string, alternateColorSpace: string, alternateColorComponents: number[]): SeparationEmbedder;
    readonly separationName: string;
    private readonly alternateColorSpace;
    private readonly alternateColorComponents;
    private constructor();
    embedIntoContext(context: PDFContext, ref?: PDFRef): PDFRef;
}
export default SeparationEmbedder;
//# sourceMappingURL=SeparationEmbedder.d.ts.map