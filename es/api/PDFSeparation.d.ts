import Embeddable from "./Embeddable";
import PDFDocument from "./PDFDocument";
import { PDFRef } from "../core";
import SeparationEmbedder from "../core/embedders/SeparationEmbedder";
/**
 * Represents a file that has been embedded in a [[PDFDocument]].
 */
export default class PDFSeparation implements Embeddable {
    /**
     * > **NOTE:** You probably don't want to call this method directly. Instead,
     * > consider using the [[PDFDocument.embedSeparation]] method which will
     * > create instances of [[PDFSeparation]] for you.
     *
     * Create an instance of [[PDFSeparation]] from an existing ref and embedder
     *
     * @param ref The unique reference for this file.
     * @param doc The document to which the file will belong.
     * @param embedder The embedder that will be used to embed the file.
     */
    static of: (ref: PDFRef, doc: PDFDocument, embedder: SeparationEmbedder) => PDFSeparation;
    /** The unique reference assigned to this separation within the document. */
    readonly ref: PDFRef;
    /** The document to which this separation belongs. */
    readonly doc: PDFDocument;
    /** The name of this separation. */
    readonly name: string;
    private alreadyEmbedded;
    private readonly embedder;
    private constructor();
    /**
     * > **NOTE:** You probably don't need to call this method directly. The
     * > [[PDFDocument.save]] and [[PDFDocument.saveAsBase64]] methods will
     * > automatically ensure all separations get embedded.
     *
     * Embed this separation in its document.
     *
     * @returns Resolves when the embedding is complete.
     */
    embed(): Promise<void>;
}
//# sourceMappingURL=PDFSeparation.d.ts.map