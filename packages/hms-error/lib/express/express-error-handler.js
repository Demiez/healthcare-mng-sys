"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerErrorsHandler = void 0;
const errors_1 = require("../errors");
function registerErrorsHandler(app, logger) {
    app.use((error, req, res, next) => {
        logger.error(`${req.url}\n${error.message}\n${error.stack}\n`);
        if (error.type === errors_1.ErrorResponseTypes.UNAUTHORIZED) {
            return res.status(401).json(error);
        }
        if (error.type === errors_1.ErrorResponseTypes.FORBIDDEN) {
            return res.status(403).send(error);
        }
        if (error.type === errors_1.ErrorResponseTypes.NOT_FOUND) {
            return res.status(404).send(error);
        }
        if (error.type === errors_1.ErrorResponseTypes.INTERNAL_SERVER_ERROR) {
            return res.status(500).send(error);
        }
        return res
            .status(500)
            .send(new errors_1.ErrorResponse(errors_1.BaseErrorCodes.INTERNAL_SERVER_ERROR, [
            { message: error },
        ]));
    });
}
exports.registerErrorsHandler = registerErrorsHandler;
//# sourceMappingURL=express-error-handler.js.map