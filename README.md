# test-compare-protocal-motorepo-nestjs-typeorm

## Description

This Project is for comparing about RestfulAPI(RestAPI, HttpAPI, JSON-RPC), ~~GraphQL~~ and gRPC

## Installation

```bash
$ docker-compose up -d
```

## Running Containers

- test-postgis - Database for Quering 10000 Row POI Data.
- test-grpc - gRPC Protocal Service 
- test-restapi - Restful API Protocal Service
- ~~test-graphql - GraphQL API Protocal Service~~
- test-client - Test Caller Service. This will Calculate data response time from Restful API and gRPC Services; 

## Test

```bash
# curl test restapi
$ curl http://localhost:3001/restapi

# curl test grpc
$ curl http://localhost:3001/grpc
```

## Result

### Local to Local
|Protocal|Test 1|Test 2|Test 3|Test 4|Test 5|Avg.|
|:---|---:|---:|---:|---:|---:|---:|
|Restful API|0|0|0|0|0|0
|gRPC|0|0|0|0|0|0

### Local to Remote
|Protocal|Test 1|Test 2|Test 3|Test 4|Test 5|Avg.|
|:---|---:|---:|---:|---:|---:|---:|
|Restful API|0|0|0|0|0|0|
|gRPC|0|0|0|0|0|0|