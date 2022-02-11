#!/bin/bash

startDate=`date +"%Y%m%d" -d "2022 01 01"`
endDate=`date +"%Y%m%d" -d "2022 02 01"`

while [ "$startDate" != "$endDate" ];
do
	echo $startDate

	startDate=`date +"%Y%m%d" -d "$startDate + 1 day"`;
done
