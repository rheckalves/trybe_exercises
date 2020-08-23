#!/bin/bash
FILE=./teste.txt
if [ -e $FILE ]; then
echo "O caminho $FILE está habilitado"
else
echo "O caminho $FILE não existe"
fi
if [ -w $FILE ]; then
echo "Voce tem permissão para editar $FILE"
else
echo "Voce não tem permissão para editar"
fi

