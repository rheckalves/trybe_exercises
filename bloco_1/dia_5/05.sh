#!/bin/bash
read -p "Digite o caminho do arquivo ou diretorio:" CAMINHO 
if [ ! -e $CAMINHO ]; then
echo "o caminho $CAMINHO não existe!"
elif [ -d $CAMINHO ]; then
echo "$CAMINHO é um diretório"
elif [ -f $CAMINHO ]; then
echo "$CAMINHO é um arquivo"
else
echo "$CAMINHO é outro tipo de arquivo"
fi