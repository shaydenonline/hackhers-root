#!/bin/bash
dir=$(pwd)
rm -rf "${dir}/hackhers-backend-new/app/views"
cp -r "${dir}/hackhers-frontend-new/build" "${dir}/hackhers-backend-new/app/views"
