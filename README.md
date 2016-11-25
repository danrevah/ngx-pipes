# Angular2 Pipes 

[![Build Status](https://travis-ci.org/danrevah/ng2-pipes.svg?branch=master)](https://travis-ci.org/danrevah/ng2-pipes) [![npm version](https://badge.fury.io/js/ng2-pipes.svg)](https://badge.fury.io/js/ng2-pipes) 

> Useful pipes for Angular2.

## Table of contents

 - [Installation](#installation)
 - [String](#String)
    - [repeat](#repeat)
    - [scan](#scan)
    - [shorten](#shorten)
    - [strip-tags](#strip-tags)
    - [ucfirst](#ucfirst)
    - [ucwords](#ucwords)
    - [trim](#trim)
    - [ltrim](#ltrim)
    - [rtrim](#rtrim)
    - [reverse](#reverse)
 - [Array](#Array)   
    - [diff](#diff)
    - [flatten](#flatten)
    - [initial](#initial)
    - [intersection](#intersection)
    - [reverse](#reverse)
    - [tail](#tail)
    - [truthify](#truthify)
    - [union](#union)
    - [unique](#unique)
    - [without](#without)
 - [Math](#Math)   
    - [min](#min)
    - [max](#max)
    - [percent](#percent)
    - [ceil](#ceil)
    - [floor](#floor)
    - [round](#round)
    - [sqrt](#sqrt)
    - [pow](#pow)
 - [Boolean](#Boolean)   
    - [isNull](#isNull)
    - [isDefined](#isDefined)
    - [isUndefined](#isUndefined)
    - [isString](#isString)
    - [isFunction](#isFunction)
    - [isNumber](#isNumber)
    - [isArray](#isArray)
    - [isObject](#isObject)
 

## Installation


1. Use npm to install the package

```
$ npm install ng2-pipes --save 
```

2. Add into your module `imports` the `NgPipesModule`

```typescript
import {NgPipesModule} from 'ng2-pipes';

@NgModule({
 // ...
 imports: [
   // ...
   NgPipesModule
 ]
})

```


## String

### repeat

Repeats a string n times

Api: `string | repeat: times: [separator|optional]`

```html
<p>{{ 'example' | repeat: 3: '@' }}</p> <!-- Output: "example@example@example" -->
```

### scan

Scans string and replace `{i}` placeholders by equivalent member of the array

Api: `string | scan: [ARRAY]`

```html
<p>{{'Hey {0}, {1}' | scan: ['foo', 'bar']}}</p> <!-- Output: "Hey foo, bar" -->
```

### shorten

Shortening a string by length and providing a custom string to denote an omission


Api: `string | shorten: length: [suffix|optional]: [wordBreak boolean|optional]`

```html
<p>{{'Hey foo bar' | shorten: 3: '...'}}</p> <!-- Output: "Hey..." -->
```

### strip-tags

Strips a HTML tags from string and providing which tags should not be removed

Api: `string | strip-tags: [ARRAY]`

```html
<p>{{'<a href="">foo</a> <p class="foo">bar</p>' | strip-tags }}</p> <!-- Output: "foo bar" -->
<p>{{'<a href="">foo</a> <p class="foo">bar</p>' | strip-tags: ['p']}}</p> <!-- Output: foo <p class="foo">bar</p> -->
```

### ucfirst

Uppercase first letter of first word

```html
<p>{{'foo bar' | ucfirst }}</p> <!-- Output: "Foo bar" -->
```

### ucwords

Uppercase first letter every word

```html
<p>{{'foo bar' | ucwords }}</p> <!-- Output: "Foo Bar" -->
```

### trim

Strips characters from the beginning and end of a string (default character is space).

Api: `string | trim: [characters|optional]`

```html
<p>{{'  foo  ' | trim }}</p> <!-- Output: "foo" -->
<p>{{'foobarfoo' | ltrim: 'foo' }}</p> <!-- Output: "bar" -->
```

### ltrim

Strips characters from the beginning of a string (default character is space).

Api: `string | ltrim: [characters|optional]`

```html
<p>{{'  foo  ' | ltrim }}</p> <!-- Output: "foo  " -->
<p>{{'foobarfoo' | ltrim: 'foo' }}</p> <!-- Output: "barfoo" -->
```

### rtrim

Strips characters from the end of a string (default character is space).

Api: `string | rtrim: [characters|optional]`

```html
<p>{{'  foo  ' | rtrim }}</p> <!-- Output: "  foo" -->
<p>{{'foobarfoo' | rtrim: 'foo' }}</p> <!-- Output: "foobar" -->
```

### reverse

Reverses a string

Api: `string | reverse`

```html
<p>{{'foo bar' | reverse }}</p> <!-- Output: "rab oof" -->
```


## Array

### diff

Returns array of diff between arrays 

Api: `array | diff: [ARRAY]: [ARRAY]: ... : [ARRAY]`

```typescript
this.items = [1, 2, 3, 4];
```

```html
<li *ngFor="let item of items | diff: [[1, 2]]"> <-- Array: [3, 4] -->
```

### flatten

Flattens nested array, passing shallow will mean it will only be flattened a single level

Api: `array | flatten: [shallow|optional]`

```typescript
this.items = [1,2,3,[4,5,6,[7,8,9],[10,11,12,13,[14],[15],[16, [17]]]]];
```

```html
<li *ngFor="let item of items | flatten"> 
<-- Array: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17] -->
```

### initial

Slicing off the end of the array by n elements

Api: `array | initial: n`

```typescript
this.items = [first, second, third];
```

```html
<li *ngFor="let item of items | initial: 1"> <-- Array: [first, second] -->
```

### tail

Slicing off the start of the array by n elements

Api: `array | tail: n`

```typescript
this.items = [first, second, third];
```

```html
<li *ngFor="let item of items | tail: 1"> <-- Array: [second, third] -->
```

### intersection

Returns the intersections of an arrays

Api: `array | intersection: [ARRAY]: [ARRAY]: ... : [ARRAY]`

```typescript
this.items = [1, 2, 3, 4, 5];
```

```html
<li *ngFor="let item of items | intersection: [1, 2]: [3, 6]"> <-- Array: [1, 2, 3] -->
```

### reverse

Reverses an array

Api: `array | reverse`

```typescript
this.items = [1, 2, 3];
```

```html
<li *ngFor="let item of items | reverse"> <-- Array: [3, 2, 1] -->
```

### truthify

Removes un-truthy values from array

Api: `array | truthify`

```typescript
this.items = [null, 1, false, undefined, 2, 0, 3, NaN, 4, ''];
```

```html
<li *ngFor="let item of items | truthify"> <-- Array: [1, 2, 3, 4] -->
```

### union

Removes un-truthy values from array

Api: `array | union: [ARRAY]`

```typescript
this.items = [1, 2, 3];
```

```html
<li *ngFor="let item of items | union: [[4]]"> <-- Array: [1, 2, 3, 4] -->
```

### unique

Removes duplicates from array

Api: `array | unique`

```typescript
this.items = [1, 2, 3, 1, 2, 3];
```

```html
<li *ngFor="let item of items | unique"> <-- Array: [1, 2, 3] -->
```

### without

Returns array without specific elements

Api: `array | without: [ARRAY]`

```typescript
this.items = [1, 2, 3, 1, 2, 3];
```

```html
<li *ngFor="let item of items | without: [1,3]"> <-- Array: [2, 2] -->
```

## Math

### min

Returns the minimum of a given array

Api: `array | min`

```html
<p>{{ [1, 2, 3, 1, 2, 3] | min }}</p> <-- Output: "1" -->
```

### max

Returns the maximum of a given array

Api: `array | max`

```html
<p>{{ [1, 2, 3, 1, 2, 3] | max }}</p> <-- Output: "3" -->
```

### sum

Returns the sum of a given array

Api: `array | sum`

```html
<p>{{ [1, 2, 3, 4] | sum }}</p> <-- Output: "10" -->
```

### percent

Returns percent between numbers 

Api: `number | percentage: [total | default = 100]: [floor | default = false]`

```html
<p>{{ 5 | percentage }}</p> <-- Output: "5" -->
<p>{{ 5 | percentage: 160 }}</p> <-- Output: "3.125" -->
<p>{{ 5 | percentage: 160: true }}</p> <-- Output: "3" -->
```

### ceil

Returns ceil of a number by precision 

Api: `number | ceil: [precision | default = 0]`

```html
<p>{{ 42.123 | ceil }}</p> <-- Output: "43" -->
<p>{{ 42.123 | ceil: 2 }}</p> <-- Output: "42.13" -->
```

### floor

Returns floor of a number by precision 

Api: `number | floor: [precision | default = 0]`

```html
<p>{{ 42.123 | floor }}</p> <-- Output: "42" -->
<p>{{ 42.123 | floor: 2 }}</p> <-- Output: "42.12" -->
```

### round

Returns round of a number by precision 

Api: `number | round: [precision | default = 0]`

```html
<p>{{ 42.4 | round }}</p> <-- Output: "42" -->
<p>{{ 42.5 | round }}</p> <-- Output: "43" -->
<p>{{ 42.123 | round: 2 }}</p> <-- Output: "42.12" -->
```

### sqrt

Returns the square root of a number 

Api: `number | sqrt`

```html
<p>{{ 9 | sqrt }}</p> <-- Output: "3" -->
```

### pow

Returns the power of a number 

Api: `number | pow: [power | default = 2]`

```html
<p>{{ 3 | pow }}</p> <-- Output: "9" -->
<p>{{ 3 | pow: 3 }}</p> <-- Output: "27" -->
```

## Boolean

### isNull

Checks if some value is null

Api: `any | isNull`

```html
<p>{{ null | isNull }}</p> <-- Output: "true" -->
<p>{{ 1 | isNull }}</p> <-- Output: "false" -->
```

### isDefined

Checks if some value is defined

Api: `any | isDefined`

```html
<p>{{ 1 | isDefined }}</p> <-- Output: "true" -->
<p>{{ undefined | isDefined }}</p> <-- Output: "false" -->
```

### isUndefined

Checks if some value is undefined

Api: `any | isUndefined`

```html
<p>{{ 1 | isUndefined }}</p> <-- Output: "false" -->
<p>{{ undefined | isUndefined }}</p> <-- Output: "true" -->
```


### isString

Checks if some value is a string

Api: `any | isString`

```html
<p>{{ 1 | isString }}</p> <-- Output: "false" -->
<p>{{ '' | isString }}</p> <-- Output: "true" -->
```

### isNumber

Checks if some value is a number

Api: `any | isNumber`

```typescript
this.func = () => {};
this.num = 1;
```

```html
<p>{{ num | isNumber }}</p> <-- Output: "true" -->
<p>{{ func | isNumber }}</p> <-- Output: "false" -->
```

### isArray

Checks if some value is an array

Api: `any | isArray`

```typescript
this.arr = [1, 2];
this.num = 1;
```

```html
<p>{{ num | isArray }}</p> <-- Output: "false" -->
<p>{{ arr | isArray }}</p> <-- Output: "true" -->
```

### isObject

Checks if some value is an object

Api: `any | isObject`

```typescript
this.obj = {a: 1, b: 2};
this.num = 1;
```

```html
<p>{{ num | isObject }}</p> <-- Output: "false" -->
<p>{{ obj | isObject }}</p> <-- Output: "true" -->
```
