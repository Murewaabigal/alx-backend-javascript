#!/bin/bash
if [ ! "$1" ]
then
	echo "too short"
	exit 0
fi
npm run lint "$1"
