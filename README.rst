===========
Koa & React
===========

Koa backend & React frontend

Run
===

Run docker and visit http://localhost:3000::

    $ docker-compose up

How to build it from scratch?
=============================

1. Create project folder::

    $ mkdir koa-react
    $ cd koa-react

2. Install ``koa-generator``::

    $ npm install koa-generator -g

3. Create Koa backend app, install dependencies::

    $ koa2 back
    $ cd back
    $ npm install

4. Change default port from ``3000`` to ``8000`` in ``bin/www``.

5. Create React frontend app in project folder, install dependencies::

    $ npx create-react-app front
    $ cd front
    $ npm install

6. Add ``"proxy": "http://back:8000"`` to the package.json in frontend app.

7. Create separate ``Dockerfile`` in back and front apps and ``docker-compose.yml`` in project folder.
