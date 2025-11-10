# Arrays in Javascript

``` javascript
let scores = [100, 72, 83, 94, 88, 87];
```

This is an example of an array works similar to a list

This should just give you an example just like in Python and C#.

## Changing Values in an array

``` javascript

let scores = [100, 72, 83, 94, 88, 87];

scores[0] = 99;

```

This is an example of changing values in an array in javascript

## Iterating through a list

``` javascript

for (let i = 0; i < scores.length; i++) {
  console.log(scores[i]);
}

```

## Arrays have length (len in Python)

Always return the length of the function

``` javascript
let numScores = scores.length;
```

## Other array methods
``` javascript
scores.push(100); // Adds a new element to the end of the array

scores.pop(); // Removes the last element from the array

scores.shift(); // Removes the first element from the array

scores.unshift(100); // Adds a new element to the beginning of the array

scores.slice(2,3); // Cut out a portion of the array starting at an index for a given length

scores.splice(2, 1); // Removes 1 element from the array starting at index 2

scores.join(', '); // transform the array into a single string with a comma and space delimiter option
```