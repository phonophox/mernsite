#!/bin/bash
docker-compose build
docker-compose up

docker stop mernsite
docker stop mongodb
