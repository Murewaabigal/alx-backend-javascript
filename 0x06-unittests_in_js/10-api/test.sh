#!/bin/bash
if [ ! "$1" ]
then
	echo "too short"
	exit 0
fi
npm test "$1"
