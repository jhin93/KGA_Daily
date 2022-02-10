#!/bin/bash

VAR="Metallica is World"
DISTRO=($VAR)
echo ${DISTRO[1]}

TODAY=(`date`)
echo ${TODAY[3]}

INFO=(`uname -a`)
echo ${INFO[1]}


