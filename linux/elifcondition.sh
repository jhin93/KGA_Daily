#!/bin/bash

a=100
b=20

if [ $a == $b ]
then
		echo "a is equal to b"
elif [ $a -gt $b ]
then 
		echo "a is greater tan b"
elif [ $a -lt $b ]
then
		echo "a is less tan b"
else
		echo "None of the condition met"
fi




