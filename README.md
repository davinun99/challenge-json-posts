## JSON Posts ABM

La app basicamente extrae datos desde https://jsonplaceholder.typicode.com/ y tiene operaciones de alta, baja y modificación usando los 4 endpoints principales 

GET	    /posts
POST    /posts
PUT     /posts/:id
DELETE  /posts/:id

Para el front-end se uso bootstrap como framework CSS, luego a la hora de trabajar con el state se uso REDUX.
El state inicial solamente tiene una lista de los posts y un 'selectedPost' que se usa para marcar que post sera editado.

En src/actions/PostAction.js se puede ver los métodos utilizados para ir cambiando el state, antes de hacer los cambios en cada método se invoca a la API para que se reflejen los cambios en el BackEnd, luego se modifica el front-end.

En src/reducer/PostReducer.js se ven los cambios en el state realizados, son cambios bastante sencillos que van reflejando lo mismo que pasa en el backend sin la necesidad de hacer un GET nuevamente.
