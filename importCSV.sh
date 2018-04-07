#!/bin/bash

curl 'http://localhost:3000/readCSV' \
    -X POST \
    -H 'Content-Type: text/plain' \
    --data-binary '@testdoc.csv' \
    
