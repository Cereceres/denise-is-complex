# denise-is-complex
module to measure the complexity of a graph 

# Install 

```bash
npm install --save denise-graph-complex-js
```

# Usage

```js
const {allPath, }
const data = [1, 1, 1, 1,
              0, 1, 0, 0,
              1, 0, 0, 0,
              0, 1, 0, 0];
const vertices = 4;
const result = [11, 21, 7, 7, 
                0, 4, 0, 0, 
                7, 10, 4, 4, 
                0, 4, 0, 0];
const all = allPath(data, vertices);
assert.deepEqual(all, result);

const data = [1, 1, 1, 1,
              0, 1, 0, 0,
              1, 0, 0, 0,
              0, 1, 0, 0];
const vertices = 4;
const result = [2.1818181818181817,2.3333333333333335,2.142857142857143,2.142857142857143,
                Infinity,1.75,Infinity,Infinity,
                2.142857142857143,2.5,2.25, 2.25,
                Infinity,1.75,Infinity,Infinity];
const all = meanPath(data, vertices);
assert.deepEqual(all, result);
```

# API

## meanPath(graph = [], vertices = 0) -> Array


return the mean path matrix for the graph given without passing twice by the same vertice.


## allPath(graph = [], vertices = 0) -> Array


return the matrix with all paths possibles without passing twice by the same vertice.

## getDistance(graph = [], vertices = 0) -> Array


return the matrix with distances between vertices without passing twice by the same vertice.


### graph = [x_1, x_2, ... , x_vertXvert] where vert = #Vertices



# She is Denise, my love, my wife, my world:

![denise](./19073227_10211392369197249_507919421_o.jpg)