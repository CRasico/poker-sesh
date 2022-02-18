// package: hello
// file: hello.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";

export class Hello extends jspb.Message { 
    getId(): number;
    setId(value: number): Hello;
    getMessage(): string;
    setMessage(value: string): Hello;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Hello.AsObject;
    static toObject(includeInstance: boolean, msg: Hello): Hello.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Hello, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Hello;
    static deserializeBinaryFromReader(message: Hello, reader: jspb.BinaryReader): Hello;
}

export namespace Hello {
    export type AsObject = {
        id: number,
        message: string,
    }
}

export class Reply extends jspb.Message { 
    getHelloId(): number;
    setHelloId(value: number): Reply;
    getMessage(): string;
    setMessage(value: string): Reply;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Reply.AsObject;
    static toObject(includeInstance: boolean, msg: Reply): Reply.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Reply, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Reply;
    static deserializeBinaryFromReader(message: Reply, reader: jspb.BinaryReader): Reply;
}

export namespace Reply {
    export type AsObject = {
        helloId: number,
        message: string,
    }
}
