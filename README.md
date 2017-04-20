# submarine

This small libs helps a developer to go directly inside object properties for any given depth and to return the datat

## The problem

```javascript
   const obj = {a: {b: {c: 'd'}}};
   // get a.b.c
   if(a && a.b && a.c)
     return a.b.c
```

## Submarine solution

```javascript
   const submarine = require('submarine');
   const obj = {a: {b: {c: 'd'}}};
   submarine(obj).a.b.c.getOrElse('bla') // === 'd'
   // or
   submarine(obj).a.b.not.exist.getOrElse('bla') // === 'bla'
```

## Install
```shell
$ npm install --save-dev submarine
```

* Implemented via ES6 proxy, so it it compatible with node 6 >
