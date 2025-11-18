# 1. Map() Function
Then .map() automatically:

1. Loops through the array.

2. Passes each item (like your number) into the function you gave it.

3. Collects all the results into a `new array` (returns an array).

<hr>

# 2. Join() Function

What .join() Does
`.join()` is a method for arrays in JavaScript.

- It takes all the items in `an array` and glues them together into `one string`.

- You can choose what goes between the items (called the separator).

# 3. Reduce() Function
🔎 What reduce() Does
- It’s an `array method` that takes all the elements and reduces them down to a `single value`.

- You give it a callback function with `two main parameters`:

- `accumulator` → carries the running total/result. Assign the value to 0 (natural for calculations).

- `currentValue` → the current element in the array. 

``` javascript

const numbers = [5, 8, 5, 8, 3];

const sum = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);

console.log(sum);

```

# 4. Filter() Function

🔎 What filter() Does
- It’s an `array method` that creates a new array containing only the elements that pass a test (the condition you provide).

- The original array is `not changed`.

``` javascript 

const numbers = [5, 8, 5, 8, 3];

const biggerThanFive = numbers.filter(num => num > 5);
console.log(biggerThanFive);

``` 

- `num > 5 ` is the condition you need to pass on.



# When to use Reduce and Map 

🎯 Rule of Thumb
1. Use map() when you want a new array of transformed values.

2. Use reduce() when you want to collapse an array into one result.

3. Use both together when you need to transform first, then aggregate.

4. Transform data first (map) → e.g., turn names into their lengths, prices into discounts, etc.

5. Aggregate the transformed data (reduce) → e.g., sum, average, max, min, or combine into one result.