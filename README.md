# Blockchain Setup for 2 Organizations with 2 Peers and Sample Chaincode to Store Students Marks into the ledger and Query the Student Marks With a Sample RESTServer Based on First Network and FabCar Application

## Author: Raza Sikander
## Email:  raza.sikander.s@gmail.com



Hyperledger Fabric Version 1.4
Number of Organization 2
Number of Peers 2 each
Names of MSP: edu1MSP, edu2MSP
Endorsement Polict: Both orgs "AND ('edu1MSP.peer','edu2MSP.peer')"

## How to Setup the Network

1) Clone the repository
2) Make sure the docker images are available and node version >=12
3) execute the command by going into fabric-samples/first-network

```./byfn.sh up -l node -a ```
4) The network is up and running with chaincode installed.
5) Open a new terminal go to fabric-samples/controller/javascript and run 

```npm i ```
6) after installation run 
```node enrollAdmin.js ```
7) now come back to the folder fabric-samples and run npm i
8) Start the server by node server.js
```node server.js ```
the server will be up and running at localhost:8081 port

to exit

``` ctrl+c ```
9) to stop the blockchain network go to the first terminal execute

```./byfn.sh down ```


The post man scripts are provided to 
1) register an user
2) add student into the blockchain ledger
3) query the student info with the id


## API Endpoint:
- /register
- /student
- /query


Please contact if any issues at above mentioned email address
