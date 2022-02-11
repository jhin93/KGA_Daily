#!/bin/bash

option="${1}" #option="${1}" mean the segregation of case. ex) -f, -d
case ${option} in
	-f) FILE="${2}"
		echo "File name is $FILE"
	;;
	-d) DIR="${2}"
		echo "Directory name is $DIR"
	;;
	*)
		echo "`basename ${0}`:usage: [-f file] | [-d dirname]"	
		exit 1 # Command to come out of the program with status 1
	;;
esac
