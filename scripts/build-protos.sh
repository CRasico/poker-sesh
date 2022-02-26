#!/bin/bash
BASEDIR=$(dirname "$0")

# Colors
NO_COLOR='\033[0m'
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[0;33m'

# Messages
GEN_TYPESCRIPT_MESSAGE="${YELLOW}Generating TypeScript and Javascript files from all .proto extensions${NO_COLOR}"
SUCCESS_GEN_TYPESCRIPT_MESSAGE="${GREEN}Successfully Generated Typescript and Javascript Classes"
MOVE_JAVACRIPT_MESSAGE="${YELLOW}Copying All Generated Javascript to the distribution"
SUCCESS_MOVE_JAVASCRIPT_MESSAGE="${GREEN}Successfully Moved all Javascript Classes to the distribution"

while getopts s:d: flag
do case "${flag}" in 
    s) GEN_PROTOCOL_BUFFER_DEST=${OPTARG};;
    d) BUILD_PROTOCOL_BUFFER_DEST=${OPTARG};;
    esac
done

mkdir -p ${GEN_PROTOCOL_BUFFER_DEST}

# Typescript and Javascript code generation
echo ${GEN_TYPESCRIPT_MESSAGE}
yarn run grpc_tools_node_protoc \
    --plugin=protoc-gen-ts=./node_modules/.bin/protoc-gen-ts \
    --ts_out=grpc_js:${GEN_PROTOCOL_BUFFER_DEST} \
    --js_out=import_style=commonjs,binary:${GEN_PROTOCOL_BUFFER_DEST} \
    --grpc_out=grpc_js:${GEN_PROTOCOL_BUFFER_DEST} \
    -I ./protocol-buffers \
    protocol-buffers/*.proto
echo ${SUCCESS_GEN_TYPESCRIPT_MESSAGE}

# Copy Build JS files to folder, as they shouldn't be retranspiled.
echo ${MOVE_JAVACRIPT_MESSAGE}
mkdir -p ${BUILD_PROTOCOL_BUFFER_DEST}
for file in ${GEN_PROTOCOL_BUFFER_DEST}/*.js
do
    cp $file ${BUILD_PROTOCOL_BUFFER_DEST}/
done  
echo ${SUCCESS_MOVE_JAVASCRIPT_MESSAGE}