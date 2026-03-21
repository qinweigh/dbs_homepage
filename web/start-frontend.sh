#!/bin/bash

PORT=80

while [[ "$#" -gt 0 ]]; do
    case $1 in
        --port) PORT="$2"; shift ;;
        *) echo "Unknown parameter passed: $1"; exit 1 ;;
    esac
    shift
done

echo "Starting frontend on port $PORT..."

# Remove node_modules
rm -rf node_modules

# Set npm registry
npm config set registry https://mirrors.tools.huawei.com/npm/

# Install dependencies
npm install

# Start development server
npm run dev -- --port $PORT
