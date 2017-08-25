pragma solidity ^0.4.16;

contract colloportus_0_0_8 {
    /* This creates an array with all relevant locations, and rights  */
    
    address public owner;
    int private ID_counter;
    mapping (int => string) public locations; // noted ID to Locationnames
    // mapping (address => mapping(int => bool)) public has_bought; //noted that user has bought access tight to ID
    mapping (address => mapping(int => bool)) public has_access; //noted that user has access to ID
    mapping (address => mapping(int =>bool)) public checked_in; // noted that user has checked in ID
    
    
    /* This generates a public event on the blockchain that will notify clients */
    event Event_Access_Given(address _to, int _ID);
    event Event_Access_Revoked(address _to, int _ID);
    event Event_CheckedIn(address _to, int _ID);
    event Event_CheckedOut(address _to, int _ID);
    event Event_Location_created(int _ID, string name);
    /*failure Events*/
    event Event_user_has_already_access(address _to);
    event Event_user_is_not_owner(address _to);
    event Event_user_is_not_sender(address _to);
    
    
    /* Initializes contract with inital owner, needed for check */
    function colloportus_0_0_8() {
        owner = msg.sender;
        ID_counter = 1;
        }

    
    /*Function to give user access rights to location, after ticket was bought - verifeid outside blockchain*/
    function _give_access(address _from, address _to, int _ID) public {
        require (_to != 0x0); // Prevent transfer to 0x0 address.
        require (_from == owner);  // Check that called by owner
        if (_from != owner) {
            Event_user_is_not_owner(_from);
            }         

        /*Check if user has access, if not give him access */
        if (has_access[_to][_ID] != true){
            has_access[_to][_ID] = true;
            } 
        else {Event_user_has_already_access(_to);
            }
    }
    
    function _revoke_access(address _from, address _to, int _ID) public {
        require (_to != 0x0);                    // Prevent transfer to 0x0 address.
        require (_from == owner);                // Check that called by owner
        require (has_access[_to][_ID] == true);  // Check if the adress has access to be revoced
        if (_from != owner) {
            Event_user_is_not_owner(_from);}          
        else { has_access[_to][_ID] = false;
        }
        
    }
    /* internal function to create a certain location in smart contract*/
    
    /* not possible to serach for names in blockchain */
    function _create_location(address _from, string _name) public returns (int _ID ) {
        require (_from == owner); 
        if (_from != owner) {
            Event_user_is_not_owner(_from);
            }           // Check that called by owner
        
        else { _ID = ID_counter;        // create _ID for Location name
            locations[_ID] = _name;  // note the ID and the name
            ID_counter = ID_counter + 1; 
            }
        
    }
    
    /* Function of user to check in */
    
    function _check_in(address _from, address _to, int _ID) public {
        require(_from == _to);  // check only user = sender to check in
        if (_from != _to){
            Event_user_is_not_sender(_from);
            }
        else { require(has_access[_to][_ID]== true);           //check only users with access can check in
            checked_in[_to][_ID] = true;
            }                 
         }
        
    function _check_out(address _from, address _to, int _ID) public {
        require(_from == _to);                          // check only user = sender to check in
        require(has_access[_to][_ID]== true);         //check only users with access can check out
       require(checked_in[_to][_ID] = true);           //  only checked in users can check out
        checked_in[_to][_ID] = false;                    // mark user as checked in
        }

    
    
    /* public functions to call from outside */
    
    function give_access(address _to, int _ID) external {
        _give_access(msg.sender, _to, _ID);
        Event_Access_Given(_to, _ID);
    }
    
    function revoke_access (address _to, int _ID) external {
        _revoke_access(msg.sender, _to, _ID);
        Event_Access_Revoked(_to, _ID);                      // create Event message to log 
    }
    
    function create_location (string _name) external returns (int ID) {
        ID = _create_location(msg.sender, _name);
        Event_Location_created(ID, _name);
    }
    
    function check_in(address _to, int _ID) external {
        _check_in(msg.sender, _to, _ID);
        Event_CheckedIn(_to, _ID);
    }
    
    function check_out(address _to, int _ID) external {
        _check_out(msg.sender, _to, _ID);
        Event_CheckedOut(_to, _ID);
    }
}