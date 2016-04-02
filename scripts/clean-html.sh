#!/bin/bash

# Remove livereload script element
sed -i '/9091/s/.*//' out/index.html

# Remove empty lines
sed -i '/^$/d' out/index.html
