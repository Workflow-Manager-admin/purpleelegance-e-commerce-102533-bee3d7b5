#!/bin/bash
cd /home/kavia/workspace/code-generation/purpleelegance-e-commerce-102533-bee3d7b5/purpleelegance_ecommerce
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

