#!/bin/bash

# Directory containing SVG files (can be passed as argument)
INPUT_DIR="${1:-.}"  # default is current directory
OUTPUT_DIR="${2:-$INPUT_DIR/png_output}"

# Create output directory if not exists
mkdir -p "$OUTPUT_DIR"

# Loop through all SVG files in the input directory
for svg_file in "$INPUT_DIR"/*.svg; do
  if [[ -f "$svg_file" ]]; then
    filename=$(basename -- "$svg_file")
    name="${filename%.*}"
    output_file="$OUTPUT_DIR/${name}.png"

    echo "Converting $filename to PNG..."
    inkscape "$svg_file" --export-type=png --export-filename="$output_file"
  fi
done

echo "✅ Conversion completed. PNGs are saved in: $OUTPUT_DIR"

