# Testing LWC reactive properties passed into child components

Exploring template rerendering when passing an object into a child component as a reactive property.

## Instructions
1. Clone the repo
2. Create a new scratch org
3. Push the source
4. Open the repo
5. Go to the "LWC Test" tab in the Sales app


## Components
1. parentComponent - Parent component where private reactive properties are defined and passed into children. It also has several text boxes for updating the private reactive properties.
2. childCmp - Child component where public reactive properties are set. It also has buttons for alerting the values of the reactive properties.

parentComponent contains 3 childCmp components:

1. Child 1 - parentComponent passes in both an entire object and a primitive value to the childCmp's public properties
2. Child 2 - parentComponent passes just the object in, omitting the primitive value
3. Child 3 - parentComponent passes just the object in, but a copy of the object that is always fully replaced instead of just having its properties updated


## Results

Updating the properties in parentComponent always updates the underlying value in the child components, but the template isn't always rerendered.

Child 1 rerenders only if the primitive property is also updated. If just the object is updated, there is no rerender.
Child 2 never rerenders.
Child 3 rerenders when the entire object is replaced.


