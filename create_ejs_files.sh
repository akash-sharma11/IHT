#!/bin/bash

# Destination directory for .ejs files
target_dir="./views/destination/india"

# Make sure the target directory exists
mkdir -p "$target_dir"

# List of destination names
names=(
"Agra"
"Ahmedabad"
"Amritsar"
"Andaman & Nikobar"
"Aurangabad"
"Bengaluru"
"Bhimtal"
"Bhubaneswar"
"Chandigarh"
"Chennai"
"Coorg"
"Darjeeling"
"Delhi (NCR)"
"Dharamshala"
"Gangtok"
"Goa"
"Haridwar"
"Jaipur"
"Jaisalmer"
"Jim Corbett"
"Jodhpur"
"Kashmir"
"Kasauli"
"Kochi"
"Manali"
"Mumbai"
"Munnar"
"Mussoorie"
"Nanital"
"Pondicherry"
"Rishikesh"
"Varanasi"
"Vrindavan"
)

# Loop through each name and create .ejs files
for name in "${names[@]}"; do
    # Convert name to lowercase, replace spaces with hyphens, and remove special chars
    filename=$(echo "$name" | tr '[:upper:]' '[:lower:]' | tr ' ' '-' | tr -d '()&')
    filepath="$target_dir/$filename.ejs"
    echo "<!-- Template for $name -->" > "$filepath"
done

echo "✅ All .ejs files created in: $target_dir"
