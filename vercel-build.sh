#!/bin/bash

echo "Installing dependencies..."
npm install

echo "Building Next.js app..."
npm run build

echo "Running Payload CMS migrations..."
npm run migrate
