//TODO put contract Address and ABI in another file 
var colloportus_abi = [{
        "constant": false,
        "inputs": [{
                "name": "_to",
                "type": "address"
            },
            {
                "name": "_ID",
                "type": "int256"
            }
        ],
        "name": "check_out",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [{
            "name": "",
            "type": "int256"
        }],
        "name": "locations",
        "outputs": [{
            "name": "",
            "type": "string"
        }],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [{
                "name": "_to",
                "type": "address"
            },
            {
                "name": "_ID",
                "type": "int256"
            }
        ],
        "name": "give_access",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [{
                "name": "_from",
                "type": "address"
            },
            {
                "name": "_to",
                "type": "address"
            },
            {
                "name": "_ID",
                "type": "int256"
            }
        ],
        "name": "_revoke_access",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [{
                "name": "_from",
                "type": "address"
            },
            {
                "name": "_to",
                "type": "address"
            },
            {
                "name": "_ID",
                "type": "int256"
            }
        ],
        "name": "_check_in",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [{
                "name": "_from",
                "type": "address"
            },
            {
                "name": "_to",
                "type": "address"
            },
            {
                "name": "_ID",
                "type": "int256"
            }
        ],
        "name": "_check_out",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [{
                "name": "",
                "type": "address"
            },
            {
                "name": "",
                "type": "int256"
            }
        ],
        "name": "has_access",
        "outputs": [{
            "name": "",
            "type": "bool"
        }],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [{
                "name": "",
                "type": "address"
            },
            {
                "name": "",
                "type": "int256"
            }
        ],
        "name": "checked_in",
        "outputs": [{
            "name": "",
            "type": "bool"
        }],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [{
                "name": "_from",
                "type": "address"
            },
            {
                "name": "_name",
                "type": "string"
            }
        ],
        "name": "_create_location",
        "outputs": [{
            "name": "_ID",
            "type": "int256"
        }],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "owner",
        "outputs": [{
            "name": "",
            "type": "address"
        }],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [{
                "name": "_to",
                "type": "address"
            },
            {
                "name": "_ID",
                "type": "int256"
            }
        ],
        "name": "check_in",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [{
            "name": "_name",
            "type": "string"
        }],
        "name": "create_location",
        "outputs": [{
            "name": "ID",
            "type": "int256"
        }],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [{
                "name": "_to",
                "type": "address"
            },
            {
                "name": "_ID",
                "type": "int256"
            }
        ],
        "name": "revoke_access",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [{
                "name": "_from",
                "type": "address"
            },
            {
                "name": "_to",
                "type": "address"
            },
            {
                "name": "_ID",
                "type": "int256"
            }
        ],
        "name": "_give_access",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "anonymous": false,
        "inputs": [{
                "indexed": false,
                "name": "_to",
                "type": "address"
            },
            {
                "indexed": false,
                "name": "_ID",
                "type": "int256"
            }
        ],
        "name": "Event_Access_Given",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [{
                "indexed": false,
                "name": "_to",
                "type": "address"
            },
            {
                "indexed": false,
                "name": "_ID",
                "type": "int256"
            }
        ],
        "name": "Event_Access_Revoked",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [{
                "indexed": false,
                "name": "_to",
                "type": "address"
            },
            {
                "indexed": false,
                "name": "_ID",
                "type": "int256"
            }
        ],
        "name": "Event_CheckedIn",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [{
                "indexed": false,
                "name": "_to",
                "type": "address"
            },
            {
                "indexed": false,
                "name": "_ID",
                "type": "int256"
            }
        ],
        "name": "Event_CheckedOut",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [{
                "indexed": false,
                "name": "_ID",
                "type": "int256"
            },
            {
                "indexed": false,
                "name": "name",
                "type": "string"
            }
        ],
        "name": "Event_Location_created",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [{
            "indexed": false,
            "name": "_to",
            "type": "address"
        }],
        "name": "Event_user_has_already_access",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [{
            "indexed": false,
            "name": "_to",
            "type": "address"
        }],
        "name": "Event_user_is_not_owner",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [{
            "indexed": false,
            "name": "_to",
            "type": "address"
        }],
        "name": "Event_user_is_not_sender",
        "type": "event"
    }
],
contract_address = "yourDeployedContractAddress";

//node modules
var Web3 = require('web3'),
url = require('url'), 
http = require('http'),
fs = require('fs'),
//The paying account; can probably also set on the node itself? The Keystorefile must be available!
ethAccount = 'yourPayingAccount',
//some random port 
port = 15713;

if (typeof web3 !== 'undefined') {
    web3 = new Web3(web3.currentProvider);
} else {
    // set the provider you want from Web3.providers
    web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
}

if (!web3.isConnected()) {
    console.log("Not connected to node; Is node running?");
} else {
    //set up contract in JS Object
    var ColloportusObj = web3.eth.contract(colloportus_abi);
    var colloportusContract = ColloportusObj.at(contract_address);
}

//set default account (for web3 sendtransaction method)
if (!web3.eth.defaultAccount) {
    web3.eth.defaultAccount = ethAccount;
}

//Listen to some events
var events = [colloportusContract.Event_CheckedIn(), colloportusContract.Event_CheckedOut()];
events.forEach(function(event) {
    event.watch(function(error, result) {
        if (!error)
            console.log(result);
    });
});

//Very basic server
http.createServer(function(req, res) {
    var q = url.parse(req.url, true),
        filename = "." + q.pathname,
        //TODO put those in params 
        locationid = 1,
        visitor = ethAccount;

    if (q.pathname == "/command.html") {
        res.writeHead(200, {
            'Content-Type': 'text/html'
        });
	
	//TODO add other contract methods
        if (q.query.command === "checkin") {
            web3.personal.unlockAccount(ethAccount, "YourAccountPassword");
            colloportusContract.check_in.sendTransaction(ethAccount, locationid, {
                gas: 100000
            }, function(err, result) {
                console.log("Callback of: " + q.query.command + " call.");
            });
        } else if (q.query.command === "checkout") {
            web3.personal.unlockAccount(ethAccount, "YourAccountPassword");
            colloportusContract.check_out.sendTransaction(ethAccount, locationid, {
                gas: 100000
            }, function(err, result) {
                console.log("Callback of: " + q.query.command + " call.");
            });
        }

        var htmlTemplate = "<html><head><title>Page Title</title></head><body><h1>Concrats you just " + (q.query.command == "checkin" ? "Checked in" : "Checked out") + "</h1></p><p>";
        htmlTemplate += " From Account: " + ethAccount + "<br>";
        htmlTemplate += " To Smart Contract: " + contract_address + "<br>";
        htmlTemplate += " For Location ID: " + locationid + "<br></p>";
        htmlTemplate += "<p><a href='/index.html'>Bring Me Back</a></p></body></html>";
        res.write(htmlTemplate);
        res.end();

    } else {
        fs.readFile(filename, function(err, data) {
            if (err) {
                console.log(filename);
                res.writeHead(404, {
                    'Content-Type': 'text/html'
                });
                return res.end("404 Not Found");
            }
            res.writeHead(200, {
                'Content-Type': 'text/html'
            });
            res.write(data);
            return res.end();
        });
    }
}).listen(port);

console.log("Hi there...")
