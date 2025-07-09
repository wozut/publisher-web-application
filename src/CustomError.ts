import { ReadFileError } from "@/libraries/file-system/safeReadFileAsString";

export abstract class CustomError<T extends string> {
    public abstract readonly errorType: T;

    constructor(
        public readonly message: string,
        public readonly internalError?: Error,
    ) {}
}

export type AnyCustomError = ReadFileError;