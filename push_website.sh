#!/bin/bash
# Script to commit and push all changes to main branch

# Change to your repo directory (edit this path)
cd /c/Users/jbre9/Projects/jobread || { echo "Directory not found!"; exit 1; }

# Stage all changes
git add -A

# Commit with a default message (you can customize)
git commit -m "Update website files"

# Push to remote main branch
git push origin main