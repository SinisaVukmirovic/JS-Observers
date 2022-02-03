# JS Observers
___

## Mutation Observer
### The MutationObserver interface provides the ability to watch for changes being made to the DOM tree.

#### Constructor - MutationObserver()
##### Creates and returns a new MutationObserver which will invoke a specified callback function when DOM changes occur.

#### Methods
##### disconnect() - Stops the MutationObserver instance from receiving further notifications until and unless observe() is called again.
##### observe() - Configures the MutationObserver to begin receiving notifications through its callback function when DOM changes matching the given options occur.
##### takeRecords() - Removes all pending notifications from the MutationObserver's notification queue and returns them in a new Array of MutationRecord objects.
##### subtree option observers changes on all elements inside of an observed element