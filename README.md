# JS Observers
___

## Mutation Observer
### The MutationObserver interface provides the ability to watch for changes being made to the DOM tree.

#### Constructor - new MutationObserver()
##### Creates and returns a new MutationObserver which will invoke a specified callback function when DOM changes occur.

#### Methods
##### disconnect() - Stops the MutationObserver instance from receiving further notifications until and unless observe() is called again.
##### observe() - Configures the MutationObserver to begin receiving notifications through its callback function when DOM changes matching the given options occur.
##### takeRecords() - Removes all pending notifications from the MutationObserver's notification queue and returns them in a new Array of MutationRecord objects.
##### subtree option observers changes on all elements inside of an observed element

___

## Resize Observer
### The ResizeObserver interface reports changes to the dimensions of an Element's content or border box, or the bounding box of an SVGElement.

#### Constructor - new ResizeObserver()
##### Creates and returns a new ResizeObserver object.

#### Methods
##### disconnect() - Unobserves all observed Element targets of a particular observer.
##### observe() - Initiates the observing of a specified Element.
##### unobserve() - Ends the observing of a specified Element.

___

## Intersection Observer
### The Intersection Observer API provides a way to asynchronously observe changes in the intersection of a target element with an ancestor element or with a top-level document's viewport.

#### Constructor - new IntersectionObserver()
##### Creates and returns a new ResizeObserver object.

#### Methods
##### observe() - observes when observed element changes intersections
##### unobserve() - stops observing an element once it shows
#### Options
##### treshold: 0(default) to 1 - how much of the element (in %) is intersecting (showing). 
##### rootMargin - how much before (-100px) or after (+100px) the end of the screen (both top and bottom) elems are observed. Important - Root margin value must be set in units (px or %) even if value is zero (0px)!