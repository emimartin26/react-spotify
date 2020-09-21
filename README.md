# React Spotify

A simple song search using Spotify API and OAuth2 authentication. 

This project is a SPA built with React. 

---
## Requirements

For development, you will only need Node.js  and a node global package, Yarn, installed in your environment.

### Node
    Node version : v12.16.3
- #### Node installation

To install Node I recommend to use [NVM](https://github.com/nvm-sh/nvm). 
If the installation was successful, you should be able to run the following command.

    $ node --version
    v12.16.3

    $ npm --version
    6.1.0

###
### Yarn installation
  After installing node, this project will need yarn too, so just run the following command.

      $ npm install -g yarn

---

## Install

    $ git clone https://github.com/egmartin/react-spotify
    $ cd react-spotify
    $ yarn install

## Configure client_id
    - Get client_id in https://developer.spotify.com/dashboard/applications.
    - Create an .env file with the following content:
        CLIENT_ID=your_client_id

## Running the project

    $ yarn run dev

## Simple build for production

    $ yarn run build