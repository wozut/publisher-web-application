import {promises as fs} from "fs";
import {ResultAsync} from "neverthrow";
import {ObjectEncodingOptions, OpenMode, PathLike} from "node:fs";
import {Abortable} from "node:events";
import {FileHandle} from "fs/promises";
import {AnyCustomError, CustomError} from "@/src/CustomError";

export class ReadFileError extends CustomError<"ReadFileError"> {
    public readonly errorType: 'ReadFileError' = 'ReadFileError' as const;
}

function toError(error: unknown): ReadFileError {
    if (error instanceof Error) {
        return new ReadFileError(error.message, error);
    } else {
        return new ReadFileError(String(error));
    }
}

export const safeReadFile: (
    path: PathLike | FileHandle,
    options?:
        | (
        & ObjectEncodingOptions
        & Abortable
        & {
        flag?: OpenMode | undefined;
    }
        )
        | BufferEncoding
        | null,
) => ResultAsync<string | Buffer, AnyCustomError> = ResultAsync.fromThrowable(
    (
        path: PathLike | FileHandle,
        options?:
            | (
            & ObjectEncodingOptions
            & Abortable
            & {
            flag?: OpenMode | undefined;
        }
            )
            | BufferEncoding
            | null,
    ): Promise<string | Buffer> =>
        fs.readFile(path, options),
    toError,
);
