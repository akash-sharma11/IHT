#!/bin/bash

# Target directory for international destination files
target_dir="./views/destination/international"

# Make sure the target directory exists
mkdir -p "$target_dir"

# List of international destination names
names=(
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

# Create .ejs files
for name in "${names[@]}"; do
    # Convert to lowercase, replace spaces with hyphens
    filename=$(echo "$name" | tr '[:upper:]' '[:lower:]' | tr ' ' '-' | tr -d '()&')
    filepath="$target_dir/$filename.ejs"
    echo "<!-- Template for $name -->" > "$filepath"
done

echo "✅ International .ejs files created in: $target_dir"
