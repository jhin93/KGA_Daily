#!/bin/ksh

set -A name "James Hettfield" "Las Ulich" "Kirk Hammet" "Robert Trujilo"

echo $name
echo ${name[*]}
echo ${name[0]}
echo ${name[1]}
echo ${name[2]}
echo ${name[3]}

