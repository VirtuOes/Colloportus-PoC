var colloportus_abi = [
  {
    "constant": false,
    "inputs": [
      {
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
    "inputs": [
      {
        "name": "",
        "type": "int256"
      }
    ],
    "name": "locations",
    "outputs": [
      {
        "name": "",
        "type": "string"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
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
    "inputs": [
      {
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
    "inputs": [
      {
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
    "inputs": [
      {
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
    "inputs": [
      {
        "name": "",
        "type": "address"
      },
      {
        "name": "",
        "type": "int256"
      }
    ],
    "name": "has_access",
    "outputs": [
      {
        "name": "",
        "type": "bool"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "",
        "type": "address"
      },
      {
        "name": "",
        "type": "int256"
      }
    ],
    "name": "checked_in",
    "outputs": [
      {
        "name": "",
        "type": "bool"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "_from",
        "type": "address"
      },
      {
        "name": "_name",
        "type": "string"
      }
    ],
    "name": "_create_location",
    "outputs": [
      {
        "name": "_ID",
        "type": "int256"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "owner",
    "outputs": [
      {
        "name": "",
        "type": "address"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
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
    "inputs": [
      {
        "name": "_name",
        "type": "string"
      }
    ],
    "name": "create_location",
    "outputs": [
      {
        "name": "ID",
        "type": "int256"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
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
    "inputs": [
      {
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
    "inputs": [
      {
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
    "inputs": [
      {
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
    "inputs": [
      {
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
    "inputs": [
      {
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
    "inputs": [
      {
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
    "inputs": [
      {
        "indexed": false,
        "name": "_to",
        "type": "address"
      }
    ],
    "name": "Event_user_has_already_access",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "name": "_to",
        "type": "address"
      }
    ],
    "name": "Event_user_is_not_owner",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "name": "_to",
        "type": "address"
      }
    ],
    "name": "Event_user_is_not_sender",
    "type": "event"
  }
];

var colloportus_add = "0x51282dF92e998166f4e707651845282aF487A15e";

// content of index.js
var Web3 = require('web3');
if (typeof web3 !== 'undefined') {
  web3 = new Web3(web3.currentProvider);
} else {
  // set the provider you want from Web3.providers
  web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
}

//Set Up default Account
var raspberry_account = '0x002bf361c744dF9eBCE8C61fD8Dbc64d7D614455';

if(!web3.isConnected()) {

   // show some dialog to ask the user to start a node
        console.log("not connected to node");

} else {
        var ColloportusObj = web3.eth.contract(colloportus_abi);
        var colloportusContract = ColloportusObj.at(colloportus_add);
}


if(!web3.eth.defaultAccount){
    //default raspberry account
    web3.eth.defaultAccount = raspberry_account;
}

var event = colloportusContract.Event_CheckedIn();
var event2 = colloportusContract.Event_CheckedOut();

// watch for changes
event.watch(function(error, result){
    if (!error)
        console.log(result);
});

// watch for changes
event2.watch(function(error, result){
    if (!error)
        console.log(result);
});
var locationid = 1;

var url = require('url');
const http = require('http');
var fs = require('fs');
const port = 15713

http.createServer(function (req, res) {
var q = url.parse(req.url, true);
var filename = "." + q.pathname;
//console.log(filename);
//console.log(q);

if(q.pathname == "/command.html" ){
   res.writeHead(200, {'Content-Type': 'text/html'});
    var response = ""; 
   
if (q.query.command === "checkin"){
	web3.personal.unlockAccount(raspberry_account, "trumptrain");
	colloportusContract.check_in.sendTransaction(raspberry_account, locationid, {gas: 100000}, function(err, result){console.log("something happend, ... Yeah! " + locationid); });
	console.log(locationid);
    } else if (q.query.command === "checkout") {
	web3.personal.unlockAccount(raspberry_account, "trumptrain");
	colloportusContract.check_out.sendTransaction(raspberry_account, locationid, {gas: 100000}, function(err, result){console.log("something happend, ... Yeah! " + locationid); });    
	console.log(locationid);
    }

var htmlTemplate =  "<html><head><title>Page Title</title></head><body><h1>Concrats you just " + (q.query.command == "checkin" ? "Checked in" : "Checked out")  +"</h1></p><p>";
htmlTemplate += " From Account: " + raspberry_account + "<br>";
htmlTemplate += " To Smart Contract: " + colloportus_add + "<br>";
htmlTemplate += " For Location ID: " + locationid + "<br></p>";
htmlTemplate += "<p><a href='/index.html'>Bring Me Back</a></p></body></html>";
res.write(htmlTemplate);
res.end();

/*
    res.write(" Transaction complete: \n");
    res.write(" From Account: " + raspberry_account +"\n");
    res.write(" To Smart Contract: " + colloportus_add +"\n");
    res.write(" For Location ID: " + locationid +"\n");
    res.end();
*/
    
} else{
  fs.readFile(filename, function(err, data) {
    if (err) {
      console.log(filename);
      res.writeHead(404, {'Content-Type': 'text/html'});
      return res.end("404 Not Found");
    } 
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
}
}).listen(port);

console.log("...")
