#!/bin/bash
if [ ! -e $CAMINHO ]; then
echo "o caminho $CAMINHO não existe!"
elif [ -d $1 ]; then
echo "$1 é um diretório"
elif [ -f $1 ]; then
echo "$1 é um arquivo"
else
echo "$1 é outro tipo de arquivo"
fi