var SeparationEmbedder = /** @class */ (function () {
    function SeparationEmbedder(separationName, alternateColorSpace, alternateColorComponents) {
        this.separationName = separationName;
        this.alternateColorSpace = alternateColorSpace;
        this.alternateColorComponents = alternateColorComponents;
    }
    SeparationEmbedder.for = function (name, alternateColorSpace, alternateColorComponents) {
        return new SeparationEmbedder(name, alternateColorSpace, alternateColorComponents);
    };
    SeparationEmbedder.prototype.embedIntoContext = function (context, ref) {
        var components = this.alternateColorComponents;
        var colorSpace = context.obj([
            'Separation',
            this.separationName,
            this.alternateColorSpace,
            {
                FunctionType: 2,
                Domain: [0, 1],
                C0: components.map(function () { return 0; }),
                C1: components,
                N: 1,
            },
        ]);
        if (ref) {
            context.assign(ref, colorSpace);
            return ref;
        }
        else {
            return context.register(colorSpace);
        }
    };
    return SeparationEmbedder;
}());
export default SeparationEmbedder;
//# sourceMappingURL=SeparationEmbedder.js.map