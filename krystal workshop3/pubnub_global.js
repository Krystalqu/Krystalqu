/**
 * Written for UTSC New Media in Theory
 * Parts of this code is adapted from Nick Puckett & Kate Hartman's Creation & Computation PubNub Code
 * 
 * This file sets up the publish and subscribe events for the all of the pubnub pages on this website.  
*/

let dataServer;
let pubKey = "pub-c-e6d6b188-2161-4733-b37f-f44d63bf7fe4";
let subKey = "sub-c-5caa329c-e813-4681-8c6a-f07d9dfa7856";
let secretKey = "sec-c-OWU3MmViMjMtYjg0Yi00MTUzLTgzMmEtNDBiMDJlMzVkZGU0";


function createServer(you) {

  dataServer = new PubNub({
      subscribeKey: subKey,
      publishKey: pubKey,
      uuid: you,
      secretKey: secretKey,
      heartbeatInterval: 0,
    });

}

