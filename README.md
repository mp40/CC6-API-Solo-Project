# CC6-API-Solo-Project
This was created during my time as a student at Code Chrysalis

A database of common “combini” beers found in Japanese convenience stores.

It sores the following data:

* Name of beer, as string
* ABV, as float
* Price of a 500ml can, as integer (excluding sales tax)
* Price of a 350ml can, as integer (excluding sales tax)
* Drinkable, as boolean

The API returns the following beer object.
```json
{
  "id": 1,
  "name": "Yebisu",
  "abv": 5,
  "can500": 314,
  "can350": 242,
  "drinkable": true
};
```
## Install procedure
To set up database enter following in terminal.
It assumes database named `beers` created user postgres, no password

```
yarn migrate
yarn seed
yarn start
```
## How to use
### GET /beers
Returns list of beers
### GET /beers/:id
Returns beer with stated id number
### POST /beers
Adds a beer to list
### PUT /beers/:id
Updates beer
### DELETE /beers/:id
Deletes beer
