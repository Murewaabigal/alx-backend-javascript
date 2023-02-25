#!/bin/bash
cdir=$(pwd)
wdir=/root/alx-backend-javascript/0x06-unittests_in_js
if [ ! "$2" ]
then
	echo "too short"
	exit 1
fi

cp -r "$1" "$wdir"
cd "$wdir"
git add *
git commit -m "$2"
git push
cd "$cdir"
