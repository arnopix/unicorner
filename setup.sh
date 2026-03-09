#!/bin/bash
# UNICORNER SETUP
# Usage: dans un dossier vide, lancer:
#   curl -sL https://raw.githubusercontent.com/arnopix/unicorner/main/setup.sh | bash
# Puis: claude

set -e

echo "=== Unicorner — Setup ==="

# Clone le template
git clone https://github.com/arnopix/unicorner.git .unicorner-template 2>/dev/null || true

# Copier la structure (sans le .git)
cp -r .unicorner-template/CLAUDE.md .
cp -r .unicorner-template/PRD.md .
cp -r .unicorner-template/workflow .
mkdir -p docs brand legal content infra

# Cleanup
rm -rf .unicorner-template

# Init git
git init -b main
git add -A
git commit -m "init: unicorner project"

echo ""
echo "=== Unicorner pret ==="
echo "Lance 'claude' et dis-lui ton idee de SaaS."
echo "Exemple: utilise unicorner pour me faire un service de [X]"
echo ""
