#!/bin/bash

BASEDIR=$(dirname "$0")
GEN_PROTOCOL_BUFFER_DEST=./src/protocol-buffers
BUILD_PROTOCOL_BUFFER_DEST=./dist/protocol-buffers

cd ${BASEDIR}/../
mkdir -p ${GEN_PROTOCOL_BUFFER_DEST}

# JavaScript code generation
yarn run grpc_tools_node_protoc \
    --plugin=protoc-gen-ts=./node_modules/.bin/protoc-gen-ts \
    --ts_out=grpc_js:${GEN_PROTOCOL_BUFFER_DEST} \
    --js_out=import_style=commonjs,binary:${GEN_PROTOCOL_BUFFER_DEST} \
    --grpc_out=grpc_js:${GEN_PROTOCOL_BUFFER_DEST} \
    -I ./protocol-buffers \
    protocol-buffers/*.proto

mkdir ${BUILD_PROTOCOL_BUFFER_DEST}
for file in ${GEN_PROTOCOL_BUFFER_DEST}/*.js
do
    cp $file ${BUILD_PROTOCOL_BUFFER_DEST}/
done  