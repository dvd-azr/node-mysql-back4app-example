#!/bin/sh
curl -v localhost:5000
curl -X POST -H "Content-Type: application/json" -v --data '{"content": "my content", "title": "my title"}' -v localhost:5000/notes
curl -v localhost:5000/notes