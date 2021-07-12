import { Express } from "express";
export declare function registerErrorsHandler(app: Express, logger: {
    error: (err: any) => void;
}): void;
