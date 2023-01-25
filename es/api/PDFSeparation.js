import { __awaiter, __generator } from "tslib";
import PDFDocument from "./PDFDocument";
import { PDFRef } from "../core";
import SeparationEmbedder from "../core/embedders/SeparationEmbedder";
import { assertIs } from "../utils";
/**
 * Represents a file that has been embedded in a [[PDFDocument]].
 */
var PDFSeparation = /** @class */ (function () {
    function PDFSeparation(ref, doc, embedder) {
        this.alreadyEmbedded = false;
        assertIs(ref, 'ref', [[PDFRef, 'PDFRef']]);
        assertIs(doc, 'doc', [[PDFDocument, 'PDFDocument']]);
        assertIs(embedder, 'embedder', [
            [SeparationEmbedder, 'SeparationEmbedder'],
        ]);
        this.ref = ref;
        this.doc = doc;
        this.name = embedder.separationName;
        this.embedder = embedder;
    }
    /**
     * > **NOTE:** You probably don't need to call this method directly. The
     * > [[PDFDocument.save]] and [[PDFDocument.saveAsBase64]] methods will
     * > automatically ensure all separations get embedded.
     *
     * Embed this separation in its document.
     *
     * @returns Resolves when the embedding is complete.
     */
    PDFSeparation.prototype.embed = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.embedder)
                            return [2 /*return*/];
                        // The separation should only be embedded once. If there's a pending embed
                        // operation then wait on it. Otherwise we need to start the embed.
                        if (this.alreadyEmbedded)
                            return [2 /*return*/];
                        this.alreadyEmbedded = true;
                        return [4 /*yield*/, this.embedder.embedIntoContext(this.doc.context, this.ref)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
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
    PDFSeparation.of = function (ref, doc, embedder) {
        return new PDFSeparation(ref, doc, embedder);
    };
    return PDFSeparation;
}());
export default PDFSeparation;
//# sourceMappingURL=PDFSeparation.js.map