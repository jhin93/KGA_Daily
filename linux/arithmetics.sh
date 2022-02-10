#!/bin/bash

x=3
y=5
let z=$x+$y
echo $z
let z=$x-$y
echo $z
let z=128/32
echo $z
val=`expr 2 + 6`
echo "Total value: $val"

