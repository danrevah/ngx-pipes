# Angular2 Pipes 

[![Build Status](https://travis-ci.org/danrevah/ng2-pipes.svg?branch=master)](https://travis-ci.org/danrevah/ng2-pipes) [![npm version](https://badge.fury.io/js/ng2-pipes.svg)](https://badge.fury.io/js/ng2-pipes) 

> Useful pipes for Angular2.

## Table of contents

 - [Installation](#installation)
 - [String](#String)
    - [repeat](#repeat)
    - [scan](#scan)
    - [shorten](#shorten)
    - [stripTags](#striptags)
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
    - [pluck](#pluck)
    - [shuffle](#shuffle)
    - [every](#every)
    - [some](#some)
    - [sample](#sample)
 - [Math](#Math)   
    - [min](#min)
    - [max](#max)
    - [percentage](#percentage)
    - [ceil](#ceil)
    - [floor](#floor)
    - [round](#round)
    - [sqrt](#sqrt)
    - [pow](#pow)
    - [degrees](#degrees)
    - [radians](#radians)
    - [bytes](#bytes)
 - [Boolean](#Boolean)   
    - [isNull](#isnull)
    - [isDefined](#isdefined)
    - [isUndefined](#isundefined)
    - [isString](#isstring)
    - [isFunction](#isfunction)
    - [isNumber](#isnumber)
    - [isArray](#isarray)
    - [isObject](#isobject)
    - [isGreaterThan](#isgreaterthan)
    - [isGreaterEqualThan](#isgreaterequalthan)
    - [isLessThan](#islessthan)
    - [isLessEqualThan](#islessequalthan)
    - [isEqualTo](#isequalto)
    - [isNotEqualTo](#isnotequalto)
    - [isIdenticalTo](#isidenticalto)
    - [isNotIdenticalTo](#isnotidenticalto)
 

## Installation

1. Use npm to install the package

  ```terminal
  $ npm install ng2-pipes --save 
  ```

2. You could either add into your module `imports` the `NgPipesModule` in order to add all of the pipes, Or add a specific module such as `NgArrayPipesModule`, `NgStringPipesModule`, `NgMathPipesModule` or `NgBooleanPipesModule`.

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

3. Pipes are also injectable and can be used in Components / Services / etc..

  ```typescript
  @Component({
    // ..
    providers: [ReversePipe]
  })
  export class AppComponent {
    constructor(private reversePipe: ReversePipe) {
      this.reversePipe.transform('foo'); // Returns: "oof"
    }
    // ..
  }
  ```




## String

### repeat

Repeats a string n times

API: `string | repeat: times: [separator|optional]`

```html
<p>{{ 'example' | repeat: 3: '@' }}</p> <!-- Output: "example@example@example" -->
```

### scan

Scans string and replace `{i}` placeholders by equivalent member of the array

API: `string | scan: [ARRAY]`

```html
<p>{{'Hey {0}, {1}' | scan: ['foo', 'bar']}}</p> <!-- Output: "Hey foo, bar" -->
```

### shorten

Shortening a string by length and providing a custom string to denote an omission


API: `string | shorten: length: [suffix|optional]: [wordBreak boolean|optional]`

```html
<p>{{'Hey foo bar' | shorten: 3: '...'}}</p> <!-- Output: "Hey..." -->
```

### stripTags

Strips a HTML tags from string and providing which tags should not be removed

API: `string | stripTags: [ARRAY]`

```html
<p>{{'<a href="">foo</a> <p class="foo">bar</p>' | stripTags }}</p> <!-- Output: "foo bar" -->
<p>{{'<a href="">foo</a> <p class="foo">bar</p>' | stripTags: 'p'}}</p> <!-- Output: foo <p class="foo">bar</p> -->
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

API: `string | trim: [characters|optional]`

```html
<p>{{'  foo  ' | trim }}</p> <!-- Output: "foo" -->
<p>{{'foobarfoo' | trim: 'foo' }}</p> <!-- Output: "bar" -->
```

### ltrim

Strips characters from the beginning of a string (default character is space).

API: `string | ltrim: [characters|optional]`

```html
<p>{{'  foo  ' | ltrim }}</p> <!-- Output: "foo  " -->
<p>{{'foobarfoo' | ltrim: 'foo' }}</p> <!-- Output: "barfoo" -->
```

### rtrim

Strips characters from the end of a string (default character is space).

API: `string | rtrim: [characters|optional]`

```html
<p>{{'  foo  ' | rtrim }}</p> <!-- Output: "  foo" -->
<p>{{'foobarfoo' | rtrim: 'foo' }}</p> <!-- Output: "foobar" -->
```

### reverse

Reverses a string

API: `string | reverse`

```html
<p>{{'foo bar' | reverse }}</p> <!-- Output: "rab oof" -->
```


## Array

### diff

Returns array of diff between arrays 

API: `array | diff: [ARRAY]: [ARRAY]: ... : [ARRAY]`

```typescript
this.items = [1, 2, 3, 4];
```

```html
<li *ngFor="let item of items | diff: [1, 2]"> <!-- Array: [3, 4] -->
```

### flatten

Flattens nested array, passing shallow will mean it will only be flattened a single level

API: `array | flatten: [shallow|optional]`

```typescript
this.items = [1,2,3,[4,5,6,[7,8,9],[10,11,12,13,[14],[15],[16, [17]]]]];
```

```html
<li *ngFor="let item of items | flatten"> 
<!-- Array: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17] -->
```

### initial

Slicing off the end of the array by n elements

API: `array | initial: n`

```typescript
this.items = [first, second, third];
```

```html
<li *ngFor="let item of items | initial: 1"> <!-- Array: [first, second] -->
```

### tail

Slicing off the start of the array by n elements

API: `array | tail: n`

```typescript
this.items = [first, second, third];
```

```html
<li *ngFor="let item of items | tail: 1"> <!-- Array: [second, third] -->
```

### intersection

Returns the intersections of an arrays

API: `array | intersection: [ARRAY]: [ARRAY]: ... : [ARRAY]`

```typescript
this.items = [1, 2, 3, 4, 5];
```

```html
<li *ngFor="let item of items | intersection: [1, 2, 3]: [3, 6]"> <!-- Array: [3] -->
```

### reverse

Reverses an array

API: `array | reverse`

```typescript
this.items = [1, 2, 3];
```

```html
<li *ngFor="let item of items | reverse"> <!-- Array: [3, 2, 1] -->
```

### truthify

Removes un-truthy values from array

API: `array | truthify`

```typescript
this.items = [null, 1, false, undefined, 2, 0, 3, NaN, 4, ''];
```

```html
<li *ngFor="let item of items | truthify"> <!-- Array: [1, 2, 3, 4] -->
```

### union

Removes un-truthy values from array

API: `array | union: [ARRAY]`

```typescript
this.items = [1, 2, 3];
```

```html
<li *ngFor="let item of items | union: [[4]]"> <!-- Array: [1, 2, 3, 4] -->
```

### unique

Removes duplicates from array

API: `array | unique`

```typescript
this.items = [1, 2, 3, 1, 2, 3];
```

```html
<li *ngFor="let item of items | unique"> <!-- Array: [1, 2, 3] -->
```

### without

Returns array without specific elements

API: `array | without: [ARRAY]`

```typescript
this.items = [1, 2, 3, 1, 2, 3];
```

```html
<li *ngFor="let item of items | without: [1,3]"> <!-- Array: [2, 2] -->
```

### pluck

Returns array of properties values

API: `array | pluck: propertyName`

```typescript
this.items = [
  {
    a: 1, 
    b: {
      c: 4
    }
  }, 
  {
    a: 2, 
    b: {
      c: 5
    }
  }, 
  {
    a: 3, 
    b: {
      c: 6
    }
  }, 
];
```

```html
<li *ngFor="let item of items | pluck: 'a'"> <!-- Array: [1, 2, 3] -->
<li *ngFor="let item of items | pluck: 'b.c'"> <!-- Array: [4, 5, 6] -->
```

### shuffle

Returns randomly shuffled array

API: `array | shuffle`

```typescript
this.items = [1, 2, 3, 4, 5, 6];
```

```html
<li *ngFor="let item of items | shuffle"> <!-- Array: [4, 1, 6, 2, 5, 3] -->
```

### every

Returns true if every elements of the array fits the predicate otherwise false

API: `array | every: predicate`

```typescript
this.itemsOne = [1, 1, 1];
this.itemsTwo = [1, 1, 2];
this.itemsThree = [2, 2, 2];
this.predicate = (value: any, index: number, array: any[]): boolean => {
  return value === 1;
};
```

```html
<p>{{ itemsOne | every: predicate }}</p> <!-- Output: "true" -->
<p>{{ itemsTwo | every: predicate }}</p> <!-- Output: "false" -->
<p>{{ itemsThree | every: predicate }}</p> <!-- Output: "false" -->
```

### some

Returns true if some elements of the array fits the predicate otherwise false

API: `array | some: predicate`

```typescript
this.itemsOne = [1, 1, 1];
this.itemsTwo = [1, 1, 2];
this.itemsThree = [2, 2, 2];
this.predicate = (value: any, index: number, array: any[]): boolean => {
  return value === 1;
};
```

```html
<p>{{ itemsOne | some: predicate }}</p> <!-- Output: "true" -->
<p>{{ itemsTwo | some: predicate }}</p> <!-- Output: "true" -->
<p>{{ itemsThree | some: predicate }}</p> <!-- Output: "false" -->
```

### sample

Returns sample items randomly from array

API: `array | sample: [amount | default = 1]`

```html
<p>{{ [1, 2, 3, 4] | sample }}</p> <!-- Output: "[2]" -->
<p>{{ [1, 2, 3, 4] | sample: 2 }}</p> <!-- Output: "[4, 3]" -->
```

## Math

### min

Returns the minimum of a given array

API: `array | min`

```html
<p>{{ [1, 2, 3, 1, 2, 3] | min }}</p> <!-- Output: "1" -->
```

### max

Returns the maximum of a given array

API: `array | max`

```html
<p>{{ [1, 2, 3, 1, 2, 3] | max }}</p> <!-- Output: "3" -->
```

### sum

Returns the sum of a given array

API: `array | sum`

```html
<p>{{ [1, 2, 3, 4] | sum }}</p> <!-- Output: "10" -->
```

### percentage

Returns percentage between numbers 

API: `number | percentage: [total | default = 100]: [floor | default = false]`

```html
<p>{{ 5 | percentage }}</p> <!-- Output: "5" -->
<p>{{ 5 | percentage: 160 }}</p> <!-- Output: "3.125" -->
<p>{{ 5 | percentage: 160: true }}</p> <!-- Output: "3" -->
```

### ceil

Returns ceil of a number by precision 

API: `number | ceil: [precision | default = 0]`

```html
<p>{{ 42.123 | ceil }}</p> <!-- Output: "43" -->
<p>{{ 42.123 | ceil: 2 }}</p> <!-- Output: "42.13" -->
```

### floor

Returns floor of a number by precision 

API: `number | floor: [precision | default = 0]`

```html
<p>{{ 42.123 | floor }}</p> <!-- Output: "42" -->
<p>{{ 42.123 | floor: 2 }}</p> <!-- Output: "42.12" -->
```

### round

Returns round of a number by precision 

API: `number | round: [precision | default = 0]`

```html
<p>{{ 42.4 | round }}</p> <!-- Output: "42" -->
<p>{{ 42.5 | round }}</p> <!-- Output: "43" -->
<p>{{ 42.123 | round: 2 }}</p> <!-- Output: "42.12" -->
```

### sqrt

Returns the square root of a number 

API: `number | sqrt`

```html
<p>{{ 9 | sqrt }}</p> <!-- Output: "3" -->
```

### pow

Returns the power of a number 

API: `number | pow: [power | default = 2]`

```html
<p>{{ 3 | pow }}</p> <!-- Output: "9" -->
<p>{{ 3 | pow: 3 }}</p> <!-- Output: "27" -->
```

### degrees

Returns the degrees of a number in radians 

API: `number | degrees`

```html
<p>{{ 3.141592653589793 | degrees }}</p> <!-- Output: "180" -->
```

### radians

Returns the radians of a number in degrees 

API: `number | radians`

```html
<p>{{ 180 | radians }}</p> <!-- Output: "3.141592653589793" -->
```

### bytes

Returns bytes with a unit symbol

API: `number | bytes`

```html
<p>{{ 10 | bytes }}</p> <!-- Output: "10 B" -->
<p>{{ 1000 | bytes }}</p> <!-- Output: "1 KB" -->
<p>{{ 1000000 | bytes }}</p> <!-- Output: "1 MB" -->
<p>{{ 1000000000 | bytes }}</p> <!-- Output: "1 GB" -->
```

## Boolean

### isNull

API: `any | isNull`

```html
<p>{{ null | isNull }}</p> <!-- Output: "true" -->
<p>{{ 1 | isNull }}</p> <!-- Output: "false" -->
```

### isDefined

API: `any | isDefined`

```html
<p>{{ 1 | isDefined }}</p> <!-- Output: "true" -->
<p>{{ undefined | isDefined }}</p> <!-- Output: "false" -->
```

### isUndefined

API: `any | isUndefined`

```html
<p>{{ 1 | isUndefined }}</p> <!-- Output: "false" -->
<p>{{ undefined | isUndefined }}</p> <!-- Output: "true" -->
```


### isString

API: `any | isString`

```html
<p>{{ 1 | isString }}</p> <!-- Output: "false" -->
<p>{{ '' | isString }}</p> <!-- Output: "true" -->
```

### isNumber

API: `any | isNumber`

```typescript
this.func = () => {};
this.num = 1;
```

```html
<p>{{ num | isNumber }}</p> <!-- Output: "true" -->
<p>{{ func | isNumber }}</p> <!-- Output: "false" -->
```

### isArray

API: `any | isArray`

```typescript
this.arr = [1, 2];
this.num = 1;
```

```html
<p>{{ num | isArray }}</p> <!-- Output: "false" -->
<p>{{ arr | isArray }}</p> <!-- Output: "true" -->
```

### isObject

API: `any | isObject`

```typescript
this.obj = {a: 1, b: 2};
this.num = 1;
```

```html
<p>{{ num | isObject }}</p> <!-- Output: "false" -->
<p>{{ obj | isObject }}</p> <!-- Output: "true" -->
```

### isGreaterThan

API: `number | isGreaterThan: otherNumber`

```html
<p>{{ 1 | isGreaterThan: 1 }}</p> <!-- Output: "false" -->
<p>{{ 1 | isGreaterThan: 2 }}</p> <!-- Output: "false" -->
<p>{{ 2 | isGreaterThan: 1 }}</p> <!-- Output: "true" -->
```

### isGreaterEqualThan

API: `number | isGreaterEqualThan: otherNumber`

```html
<p>{{ 1 | isGreaterEqualThan: 1 }}</p> <!-- Output: "true" -->
<p>{{ 1 | isGreaterEqualThan: 2 }}</p> <!-- Output: "false" -->
<p>{{ 2 | isGreaterEqualThan: 1 }}</p> <!-- Output: "true" -->
```

### isLessThan

API: `number | isLessThan: otherNumber`

```html
<p>{{ 1 | isLessThan: 1 }}</p> <!-- Output: "false" -->
<p>{{ 1 | isLessThan: 2 }}</p> <!-- Output: "true" -->
<p>{{ 2 | isLessThan: 1 }}</p> <!-- Output: "false" -->
```

### isLessEqualThan

API: `number | isLessEqualThan: otherNumber`

```html
<p>{{ 1 | isLessEqualThan: 1 }}</p> <!-- Output: "true" -->
<p>{{ 1 | isLessEqualThan: 2 }}</p> <!-- Output: "true" -->
<p>{{ 2 | isLessEqualThan: 1 }}</p> <!-- Output: "false" -->
```

### isEqualTo

API: `number | isEqualTo: otherNumber`

```html
<p>{{ 1 | isEqualTo: 1 }}</p> <!-- Output: "true" -->
<p>{{ 1 | isEqualTo: '1' }}</p> <!-- Output: "true" -->
<p>{{ 1 | isEqualTo: 2 }}</p> <!-- Output: "false" -->
<p>{{ 2 | isEqualTo: 1 }}</p> <!-- Output: "false" -->
```

### isNotEqualTo

API: `number | isNotEqualTo: otherNumber`

```html
<p>{{ 1 | isNotEqualTo: 1 }}</p> <!-- Output: "false" -->
<p>{{ 1 | isNotEqualTo: '1' }}</p> <!-- Output: "false" -->
<p>{{ 1 | isNotEqualTo: 2 }}</p> <!-- Output: "true" -->
<p>{{ 2 | isNotEqualTo: 1 }}</p> <!-- Output: "true" -->
```

### isIdenticalTo

API: `number | isIdenticalTo: otherNumber`

```html
<p>{{ 1 | isIdenticalTo: 1 }}</p> <!-- Output: "true" -->
<p>{{ 1 | isIdenticalTo: '1' }}</p> <!-- Output: "false" -->
<p>{{ 1 | isIdenticalTo: 2 }}</p> <!-- Output: "false" -->
<p>{{ 2 | isIdenticalTo: 1 }}</p> <!-- Output: "false" -->
```

### isNotIdenticalTo

API: `number | isNotIdenticalTo: otherNumber`

```html
<p>{{ 1 | isNotIdenticalTo: 1 }}</p> <!-- Output: "false" -->
<p>{{ 1 | isNotIdenticalTo: '1' }}</p> <!-- Output: "true" -->
<p>{{ 1 | isNotIdenticalTo: 2 }}</p> <!-- Output: "true" -->
<p>{{ 2 | isNotIdenticalTo: 1 }}</p> <!-- Output: "true" -->
```
