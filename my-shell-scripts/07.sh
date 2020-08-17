#!/bin/bash
if [ ! -d $1 ]; then
echo "$1 não é um diretório"
else
cd "$1"
echo "O diretório $1 tem `ls -la | grep -e "^-" | wc -l` arquivos"
fi
