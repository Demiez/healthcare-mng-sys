import { Express, Response, Request, NextFunction } from "express";
import { ErrorResponse, BaseErrorCodes, ErrorResponseTypes } from "../errors";

export function registerErrorsHandler(
  app: Express,
  logger: { error: (err: any) => void },
) {
  app.use(
    (error: ErrorResponse, req: Request, res: Response, next: NextFunction) => {
      logger.error(`${req.url}\n${error.message}\n${error.stack}\n`);
      if (error.type === ErrorResponseTypes.UNAUTHORIZED) {
        return res.status(401).json(error);
      }

      if (error.type === ErrorResponseTypes.FORBIDDEN) {
        return res.status(403).send(error);
      }

      if (error.type === ErrorResponseTypes.NOT_FOUND) {
        return res.status(404).send(error);
      }

      if (error.type === ErrorResponseTypes.INTERNAL_SERVER_ERROR) {
        return res.status(500).send(error);
      }
      return res
        .status(500)
        .send(
          new ErrorResponse(BaseErrorCodes.INTERNAL_SERVER_ERROR, [
            { message: error },
          ]),
        );
    },
  );
}
