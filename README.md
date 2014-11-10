socket-io-clients
=================

How to get clients from socket io room.

Demonstrates whether http://stackoverflow.com/a/24811267 still works.

Clone the repo, in a terminal, `cd` into the cloned directory, run `npm install` then run `node server.js`. Now, go to http://localhost:3000 in your browser. You should see in your terminal something like the following:

    ~/dev/socket-io-clients$ node server.js 
    listening on *: 3000
    undefined
    undefined
    joining  some-room
    { Xidgv4Us84oDjSOvAAAA: true }
    { Xidgv4Us84oDjSOvAAAA: true }
    { Xidgv4Us84oDjSOvAAAA: true }

It looks like both of the following work right now (with socket.io v1.2.0):

    io.of(defaultNsps).adapter.rooms[theRoom]
    io.nsps[defaultNsps].adapter.rooms[theRoom]