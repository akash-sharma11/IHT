#!/bin/bash

# Destination directory for .ejs files
target_dir="./public/images/hotels"

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
"Singapore"
"Thailand"
"Georgia"
"Istanbul"
"Italy"
"New York"
"Netherlands"
"Kazakhstan"
"Azerbaijan"
"Malaysia"
"Dubai"
"Srilanka"
"Bali"
"Bangkok"
"Paris"
"Denmark"
"New Zealand"
"Maldives"
"Phu Quoc"
"Turkey"
"Egypt"
"Hong Kong"
)

# Loop through each name and create folders
for name in "${names[@]}"; do
    # Convert name to lowercase, replace spaces with hyphens, and remove special chars
    foldername=$(echo "$name" | tr '[:upper:]' '[:lower:]' | tr ' ' '-' | tr -d '()&')
    folderpath="$target_dir/$foldername"
    mkdir -p "$folderpath"
done

echo "✅ All folders created in: $target_dir"
