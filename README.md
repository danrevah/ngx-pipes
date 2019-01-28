<p align="center">
<img 
    src="assets/ngx-logo.png" width="160" border="0" alt="NGX-PIPES">
<br/><br/>
<a href="https://www.npmjs.com/package/ngx-pipes"><img src="https://img.shields.io/npm/v/ngx-pipes.svg?style=flat-square" alt="npm"></a>
<a href="http://packagequality.com/#?package=ngx-pipes"><img src="http://npm.packagequality.com/shield/ngx-pipes.svg?style=flat-square" alt="Package Quality"></a>
<a href="https://travis-ci.org/danrevah/ngx-pipes"><img src="https://img.shields.io/travis/danrevah/ngx-pipes.svg?style=flat-square" alt="Travis"></a>
<a href="https://coveralls.io/github/danrevah/ngx-pipes?branch=master"><img src="https://img.shields.io/coveralls/danrevah/ngx-pipes.svg?style=flat-square" alt="Coveralls"></a>
<a href="https://www.npmjs.com/package/ngx-pipes"><img src="https://img.shields.io/npm/dm/ngx-pipes.svg?style=flat-square" alt="npm"></a>
<a href="https://github.com/danrevah/ngx-pipes/blob/master/LICENSE.md"><img src="https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square" alt="MIT licensed"></a>
<br/><br/>
 Useful pipes for Angular with no external dependencies
<br/><br/>
</p>

<b><a href="https://github.com/danrevah/typeserializer" target="_blank">TypeSerializer</a> - Another library you might find interesting. Serializer / Deserializer, designed to make prettier code while using decorators (Can be used both with Angular or Node.js).</b>

## Table of contents

 - [Installation](#installation)
 - [Contributing](#contributing)
 - [Changelog](CHANGELOG.md)
 - [String](#string)
    - [a-or-an](#a-or-an)
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
    - [slugify](#slugify)
    - [camelize](#camelize)
    - [latinise](#latinise)
    - [lines](#lines)
    - [underscore](#underscore)
    - [test](#test)
    - [match](#match)
    - [lpad](#lpad)
    - [rpad](#rpad)
    - [make-plural-string](#make-plural-string)
    - [wrap](#wrap)
 - [Array](#Array)   
    - [diff](#diff)
    - [flatten](#flatten)
    - [initial](#initial)
    - [intersection](#intersection)
    - [range](#range)
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
    - [groupBy](#groupby)
    - [groupByImpure](#groupbyimpure)
    - [filterBy](#filterby)
    - [filterByImpure](#filterbyimpure)
    - [orderBy](#orderby)
    - [orderByImpure](#orderbyimpure)
 - [Object](#object)
    - [keys](#keys)
    - [values](#values)
    - [pairs](#pairs)
    - [pick](#pick)
    - [omit](#omit)
    - [invert](#invert)
    - [invertBy](#invertby)
    - [diffObj](#diffobj)
 - [Math](#math)   
    - [min](#min)
    - [max](#max)
    - [sum](#sum)
    - [percentage](#percentage)
    - [ceil](#ceil)
    - [floor](#floor)
    - [round](#round)
    - [sqrt](#sqrt)
    - [pow](#pow)
    - [degrees](#degrees)
    - [radians](#radians)
    - [bytes](#bytes)
 - [Boolean](#boolean)   
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
  $ npm install ngx-pipes --save 
  ```

2. You could either add into your module `imports` the `NgPipesModule` in order to add all of the pipes, Or add a specific module such as `NgArrayPipesModule`, `NgObjectPipesModule`, `NgStringPipesModule`, `NgMathPipesModule` or `NgBooleanPipesModule`.

  ```typescript
  import {NgPipesModule} from 'ngx-pipes';
  
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
  import {ReversePipe} from 'ngx-pipes';

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

4. You can also use pipes as part of your template for ex. 

```html
<p>{{ 'foo' | reverse }}</p> <!-- Output: "oof" -->
```

and it's also possible to stack multiple pipes

```html
<p>{{ ' foo' | ltrim | reverse }}</p> <!-- Output: "oof" -->
```


## String

### a-or-an

Prefixes input string with "a" or "an".

**Usage:** `string | a-or-an`

```html
<span>This is a picture of {{imageDescription | a-or-an}}</span>
```

### repeat

Repeats a string n times

**Usage:** `string | repeat: times: [separator|optional]`

```html
<p>{{ 'example' | repeat: 3: '@' }}</p> <!-- Output: "example@example@example" -->
```

### scan

Scans string and replace `{i}` placeholders by equivalent member of the array

**Usage:** `string | scan: [ARRAY]`

```html
<p>{{'Hey {0}, {1}' | scan: ['foo', 'bar']}}</p> <!-- Output: "Hey foo, bar" -->
```

### shorten

Shortening a string by length and providing a custom string to denote an omission

**Usage:** `string | shorten: length: [suffix|optional]: [wordBreak boolean|optional]`

```html
<p>{{'Hey foo bar' | shorten: 3: '...'}}</p> <!-- Output: "Hey..." -->
```

### stripTags

Strips a HTML tags from string and providing which tags should not be removed

**Usage:** `string | stripTags: [ARRAY]`

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

**Usage:** `string | trim: [characters|optional]`

```html
<p>{{'  foo  ' | trim }}</p> <!-- Output: "foo" -->
<p>{{'foobarfoo' | trim: 'foo' }}</p> <!-- Output: "bar" -->
```

### ltrim

Strips characters from the beginning of a string (default character is space).

**Usage:** `string | ltrim: [characters|optional]`

```html
<p>{{'  foo  ' | ltrim }}</p> <!-- Output: "foo  " -->
<p>{{'foobarfoo' | ltrim: 'foo' }}</p> <!-- Output: "barfoo" -->
```

### rtrim

Strips characters from the end of a string (default character is space).

**Usage:** `string | rtrim: [characters|optional]`

```html
<p>{{'  foo  ' | rtrim }}</p> <!-- Output: "  foo" -->
<p>{{'foobarfoo' | rtrim: 'foo' }}</p> <!-- Output: "foobar" -->
```

### reverse

Reverses a string

**Usage:** `string | reverse`

```html
<p>{{'foo bar' | reverse }}</p> <!-- Output: "rab oof" -->
```

### slugify

Slugify a string (lower case and add dash between words).

**Usage:** `string | slugify`

```html
<p>{{'Foo Bar' | slugify }}</p> <!-- Output: "foo-bar" -->
<p>{{'Some Text To Slugify' | slugify }}</p> <!-- Output: "some-text-to-slugify" -->
```

### camelize

Camelize a string replaces dashes and underscores and converts to camelCase string.

**Usage:** `string | camelize`

```html
<p>{{'foo_bar' | camelize }}</p> <!-- Output: "fooBar" -->
<p>{{'some_dashed-with-underscore' | camelize }}</p> <!-- Output: "someDashedWithUnderscore" -->
<p>{{'-dash_first-' | camelize }}</p> <!-- Output: "dashFirst" -->
```

### latinise

Removes accents from Latin characters.

**Usage:** `string | latinise`

```html
<p>{{'Féé' | latinise }}</p> <!-- Output: "Fee" -->
<p>{{'foo' | latinise }}</p> <!-- Output: "foo" -->
```

### lines

Converts a string with new lines into an array of each line.

**Usage:** `string | lines`

```html
<p>{{'Some\nSentence with\r\nNew line' | lines }}</p> <!-- Output: "['Some', 'Sentence with', 'New line']" -->
```

### underscore

Converts camelCase string to underscore.

**Usage:** `string | underscore`

```html
<p>{{'angularIsAwesome' | underscore }}</p> <!-- Output: "angular_is_awesome" -->
<p>{{'FooBar' | underscore }}</p> <!-- Output: "foo_bar" -->
```

### test

Tests if a string matches a pattern.

**Usage:** `string | test: {RegExp}: {Flags}`

```html
<p>{{'foo 42' | test: '[\\d]+$': 'g' }}</p> <!-- Output: true -->
<p>{{'42 foo' | test: '[\\d]+$': 'g' }}</p> <!-- Output: false -->
<p>{{'FOO' | test: '^foo': 'i' }}</p> <!-- Output: true -->
```

### match

Returns array of matched elements in string.

**Usage:** `string | match: {RegExp}: {Flags}`

```html
<p>{{'foo 42' | match: '[\\d]+$': 'g' }}</p> <!-- Output: '42' -->
<p>{{'42 foo' | match: '[\\d]+$': 'g' }}</p> <!-- Output: null -->
<p>{{'FOO' | match: '^foo': 'i' }}</p> <!-- Output: 'FOO' -->
```

### lpad

Left pad a string to a given length using a given pad character (default is a space)


**Usage:** `string | lpad: length: [padCharacter:string|optional]`

```html
<p>{{'foo' | lpad: 5}}</p> <!-- Output: "  foo" -->
<!-- Cast a number to string in order to left pad it with zeros -->
<p>{{String(3) | lpad: 5: '0'}}</p> <!-- Output: "00003" -->
```

### rpad

Right pad a string to a given length using a given pad character  (default is a space)


**Usage:** `string | rpad: length: [padCharacter:string|optional]`

```html
<p>{{'Foo' | rpad: 5: '#'}}</p> <!-- Output: "Foo##" -->
```

### make-plural-string

Make a singular string plural. Optional `quantity` argument specifies how many of the singular string there are.

**Usage:** `string | make-plural-string: [quantity:string|optional]`

```html
<span>{{'Painting' | make-plural-string}}</span> <!-- Output: "Paintings" -->
<span>{{'Painting' | make-plural-string: 1}}</span> <!-- Output: "Painting" -->
<span>{{'One Painting' | make-plural-string: 1}}</span> <!-- Output: "One Painting" -->
<span>{{'Painting' | make-plural-string: 4}}</span> <!-- Output: "Paintings" -->
<span>{{'Four Painting' | make-plural-string: 4}}</span> <!-- Output: "Four Paintings" -->
``` 


### wrap

Wrap a string between a prefix and a suffix


**Usage:** `string | wrap: prefix: suffix`

```html
<p>{{'Foo' | wrap: 'nice prefix ': ' and awesome suffix!'}}</p> <!-- Output: "nice prefix Foo and awesome suffix!" -->
```

## Array

### diff

Returns array of diff between arrays 

**Usage:** `array | diff: [ARRAY]: [ARRAY]: ... : [ARRAY]`

```typescript
this.items = [1, 2, 3, 4];
```

```html
<li *ngFor="let item of items | diff: [1, 2]"> <!-- Array: [3, 4] -->
```

### flatten

Flattens nested array, passing shallow will mean it will only be flattened a single level

**Usage:** `array | flatten: [shallow|optional]`

```typescript
this.items = [1,2,3,[4,5,6,[7,8,9],[10,11,12,13,[14],[15],[16, [17]]]]];
```

```html
<li *ngFor="let item of items | flatten"> 
<!-- Array: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17] -->
```

### initial

Slicing off the end of the array by n elements

**Usage:** `array | initial: n`

```typescript
this.items = [first, second, third];
```

```html
<li *ngFor="let item of items | initial: 1"> <!-- Array: [first, second] -->
```

### tail

Slicing off the start of the array by n elements

**Usage:** `array | tail: n`

```typescript
this.items = [first, second, third];
```

```html
<li *ngFor="let item of items | tail: 1"> <!-- Array: [second, third] -->
```

### intersection

Returns the intersections of an arrays

**Usage:** `array | intersection: [ARRAY]: [ARRAY]: ... : [ARRAY]`

```typescript
this.items = [1, 2, 3, 4, 5];
```

```html
<li *ngFor="let item of items | intersection: [1, 2, 3]: [3, 6]"> <!-- Array: [3] -->
```

### range

Returns an array with range of numbers

**Usage:** `range: [start: number, default = '1']: [count: number]: [step: number | optional, default = '1']`

```typescript
this.items = this.rangePipe.transform(1, 5); // Returns: [1, 2, 3, 4, 5]
```

```html
<li *ngFor="let item of items"> <!-- Array: [1, 2, 3, 4, 5] -->
```

### reverse

Reverses an array

**Usage:** `array | reverse`

```typescript
this.items = [1, 2, 3];
```

```html
<li *ngFor="let item of items | reverse"> <!-- Array: [3, 2, 1] -->
```

### truthify

Removes un-truthy values from array

**Usage:** `array | truthify`

```typescript
this.items = [null, 1, false, undefined, 2, 0, 3, NaN, 4, ''];
```

```html
<li *ngFor="let item of items | truthify"> <!-- Array: [1, 2, 3, 4] -->
```

### union

Combine two arrays

**Usage:** `array | union: [ARRAY]`

```typescript
this.items = [1, 2, 3];
```

```html
<li *ngFor="let item of items | union: [[4]]"> <!-- Array: [1, 2, 3, 4] -->
```

### unique

Removes duplicates from array

**Usage:** `array | unique: 'Property (Optional)'`

```typescript
this.items = [1, 2, 3, 1, 2, 3];
```

```html
<li *ngFor="let item of items | unique"> <!-- Array: [1, 2, 3] -->
```

### without

Returns array without specific elements

**Usage:** `array | without: [ARRAY]`

```typescript
this.items = [1, 2, 3, 1, 2, 3];
```

```html
<li *ngFor="let item of items | without: [1,3]"> <!-- Array: [2, 2] -->
```

### pluck

Returns array of properties values

**Usage:** `array | pluck: propertyName`

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

**Usage:** `array | shuffle`

```typescript
this.items = [1, 2, 3, 4, 5, 6];
```

```html
<li *ngFor="let item of items | shuffle"> <!-- Array: [4, 1, 6, 2, 5, 3] -->
```

### every

Returns true if every elements of the array fits the predicate otherwise false

**Usage:** `array | every: predicate`

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

**Usage:** `array | some: predicate`

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

**Usage:** `array | sample: [amount | default = 1]`

```html
<p>{{ [1, 2, 3, 4] | sample }}</p> <!-- Output: "[2]" -->
<p>{{ [1, 2, 3, 4] | sample: 2 }}</p> <!-- Output: "[4, 3]" -->
```

### groupBy

Returns object of grouped by items by discriminator, and supports nested properties.

**Usage:** `array | groupBy: [string[] | string | Function]: [delimiter: string | optional, default = '|']`

```typescript
this.arrayObject = [
  {id: 1, elm: 'foo', value: 0}, 
  {id: 2, elm: 'bar', value: 1}, 
  {id: 3, elm: 'foo', value: 2}, 
  {id: 4, elm: 'foo', value: 2}
];

this.arrayNestedObject = [
  {id: 1, prop: { deep: 'foo' }},
  {id: 2, prop: { deep: 'bar' }},
  {id: 3, prop: { deep: 'foo' }},
  {id: 4, prop: { deep: 'bar' }}
];
```

```html
<p>{{ arrayObject | groupBy: 'elm' }}</p> 
<!-- Output: "{foo: [{id: 1, elm: 'foo', value: 0}, {id: 3, elm: 'foo', value: 2}, {id: 4, elm: 'foo', value: 2}], bar: [{id: 2, elm: 'bar', value: 1}]}" -->

<p>{{ arrayObject | groupBy: ['elm', 'value'] }}</p> 
<!-- Output: "{'foo|0': [{elm: foo, value: 0}], 'bar|1': [{elm:bar,value: 1}], 'foo|2': [{elm:foo, value: 2}], 'bar|3': [{elm:bar, value: 3}]}" -->

<p>{{ arrayObject | groupBy: ['elm', 'value']: '_' }}</p> 
<!-- Output: "{foo_0: [{elm: foo, value: 0}], bar_1: [{elm:bar,value: 1}], foo_2: [{elm:foo, value: 2}], bar_3: [{elm:bar, value: 3}]}" -->

<p>{{ arrayNestedObject | groupBy: 'prop.deep' }}</p> 
<!-- Output:{foo: [{id: 1, prop: {deep: foo}}, {id: 3, prop: {deep: foo}}], bar: [{id: 2, prop: {deep: bar}}, {id: 4, prop: {deep: bar}}]}" -->
```

## groupByImpure

Identical to groupBy pipe, the only difference is that it's an impure pipe.

Impure pipes: https://angular.io/guide/pipes#impure-pipes

### filterBy

Returns object array of grouped by items by discriminator

**Usage:** `array | filterBy: [prop, nested.prop, ...]: search: [strict | optional]`

```typescript
this.users = [
   {id: 1, first_name: 'John', last_name: 'Doe', work: { company: 'Foo Tech' }},
   {id: 2, first_name: 'Jane', last_name: 'West', work: { company: 'AAA Solutions' }},
   {id: 3, first_name: 'Bruce', last_name: 'John', work: { company: 'Bar Tech' }},
   {id: 4, first_name: 'William', last_name: 'Cent', work: { company: 'Foo Tech' }, arr: [{name: 'foo'}]}
];
```

```html
<!-- Returns users with `id` of 1 -->
<p>{{ users | filterBy: ['id']: 1 }}</p> 
<!-- Output: "[{id: 1, first_name: 'John', last_name: 'Doe', work: { company: 'Foo Tech', previous_company: '' }}]" -->

<!-- filterBy also support nested properties -->
<p>{{ users | filterBy: ['work.company']: 'Bar Tech' }}</p> 
<!-- Output: "[{ "id": 3, "first_name": "Bruce", "last_name": "John", "work": { "company": "Bar Tech", "previous_company": "" } }]" -->

<!-- filterBy also support nested properties inside of an array -->
<p>{{ users | filterBy: ['arr.name']: 'foo' }}</p> 
<!-- Output: "[{id: 4, first_name: 'William', last_name: 'Cent', work: { company: 'Foo Tech' }, arr: [{name: 'foo'}]}]" -->

<!-- Return users whose first name or last name is 'John'. -->
<p>{{ users | filterBy: ['first_name', 'last_name']: 'John' }}</p>
<!-- Output: "[{id: 1, first_name: 'John', last_name: 'Doe', work: { company: 'Foo Tech', previous_company: '' }}]" -->

<!-- Return users whose first name or last name is 'John' or 'Cent'. -->
<p>{{ users | filterBy: ['first_name', 'last_name']: ['John', 'Cent'] }}</p>
<!-- Output: "[{id: 1, first_name: 'John', last_name: 'Doe', work: { company: 'Foo Tech', previous_company: '' }}, {id: 3, first_name: 'Bruce', last_name: 'John', work: { company: 'Bar Tech' }}, {id: 4, first_name: 'William', last_name: 'Cent', work: { company: 'Foo Tech' }, arr: [{name: 'foo'}]}]" -->
```

## filterByImpure

Identical to filterBy pipe, the only difference is that it's an impure pipe.

Impure pipes: https://angular.io/guide/pipes#impure-pipes

### orderBy

Returns ordered array by configuration 

**Usage:** `array | orderBy: [prop, nested.prop, array of props, ...]`

```typescript
const numbers = [2, 1, 3];

const obj = [
  {id: 4, name: 'Dave', amount: 2},
  {id: 2, name: 'Michael', amount: 2},
  {id: 3, name: 'Dan', amount: 1},
  {id: 1, name: 'John', amount: 1}
];

const deepObj = [
  {id: 1, name: 'John', amount: 1337, deep: {prop: 4}},
  {id: 2, name: 'Michael', amount: 42, deep: {prop: 2}},
  {id: 3, name: 'Dan', amount: 1, deep: {prop: 1}},
  {id: 4, name: 'Dave', amount: 2, deep: {prop: 3}}
];
```

```html
<!-- Returns array ordered by value -->
<p>{{ numbers | orderBy }}</p>  <!-- Output: [1, 2, 3] -->
<p>{{ numbers | orderBy: '-' }}</p>  <!-- Output: [3, 2, 1] -->

<!-- Returns array ordered by value of property -->
<p>{{ deepObj | orderBy: 'amount' }}</p>  
<!-- Output: [{id: 3, ...}, {id: 4, ...}, {id: 2, ...}, {id: 1, ...}] -->
<p>{{ deepObj | orderBy: '-amount' }}</p>  
<!-- Output: [{id: 1, ...}, {id: 2, ...}, {id: 4, ...}, {id: 3, ...}] -->

<!-- Returns array ordered by value of deep property -->
<p>{{ deepObj | orderBy: 'deep.prop' }}</p>  
<!-- Output: [{id: 3, ...}, {id: 2, ...}, {id: 4, ...}, {id: 1, ...}] -->
<p>{{ deepObj | orderBy: '-deep.prop' }}</p>  
<!-- Output: [{id: 1, ...}, {id: 4, ...}, {id: 2, ...}, {id: 3, ...}] -->

<!-- Returns array ordered by mutliple properties -->
<p>{{ obj | orderBy: ['amount', 'id'] }}</p>  
<!-- Output: [{id: 1, ...}, {id: 3, ...}, {id: 2, ...}, {id: 4, ...}] -->
```

## orderByImpure

Identical to orderBy pipe, the only difference is that it's an impure pipe.

Impure pipes: https://angular.io/guide/pipes#impure-pipes

## Object

### keys

Returns array of object keys

**Usage:** `object | keys`

```html
<p>{{ {foo: 1, bar: 2} | keys }}</p> <!-- Output: "['foo', 'bar']" -->
```

### values

Returns array of object values

**Usage:** `object | values`

```html
<p>{{ {foo: 1, bar: 2} | values }}</p> <!-- Output: "[1, 2]" -->
```

### pairs

Returns array of an object key value pairs

**Usage:** `object | pairs`

```html
<p>{{ {foo: 1, bar: 2} | pairs }}</p> <!-- Output: "[['foo', 1], ['bar', 2]]" -->
<p>{{ {foo: [1, 2], bar: [3, 4]} | pairs }}</p> <!-- Output: "[['foo', [1, 2]], ['bar', [3, 4]]]" -->
```

### pick

Returns object with picked keys from object

**Usage:** `object | pick: [key | string]]`

```html
<p>{{ {foo: 1, bar: 2} | pick: 'foo' }}</p> <!-- Output: "{foo: 1}" -->
<p>{{ {foo: 1, bar: 2} | pick: 'foo': 'bar' }}</p> <!-- Output: "{foo: 1, bar: 2}" -->
```

### omit

Returns object after omitting keys from object (opposite of pick)

**Usage:** `object | omit: [key | string]]`

```html
<p>{{ {foo: 1, bar: 2} | omit: 'foo' }}</p> <!-- Output: "{bar: 2}" -->
<p>{{ {foo: 1, bar: 2} | omit: 'foo': 'bar' }}</p> <!-- Output: "{}" -->
```

### invert

Returns object with inverted keys and values. in case of equal values, subsequent values overwrite property assignments of previous values.

**Usage:** `object | invert`

```html
<p>{{ {foo: 1, bar: 2} | invert }}</p> <!-- Output: "{1: 'foo', 2: 'bar'}" -->
```

### invertBy

Returns object with inverted keys and values. in case of equal values, will add to an array.

**Usage:** `object | invertBy: [Function | optional]`

```typescript
this.cb = (value): string => {
  return `name_${value}`;
};
```

```html
<p>{{ {foo: 1, bar: 2} | invertBy }}</p> <!-- Output: "{1: ['foo'], 2: ['bar']}" -->
<p>{{ {foo: 1, bar: 2} | invertBy: cb }}</p> <!-- Output: "{name_1: ['foo'], name_2: ['bar']}" -->
<p>{{ {a: 1, b: 2, c: 1, d: 2} | invertBy }}</p> <!-- Output: "{1: ['a', 'c'], 2: ['b', 'd']}" -->
```

### diffObj

Returns a diff object of two objects

**Usage:** `object | diffObj: Object`

```html
<p>{{ {a: 1} | diffObj: {a: 1} }}</p> <!-- Output: "{}" -->
<p>{{ {a: 1} | diffObj: {a: 2} }}</p> <!-- Output: "{a: 1}" -->
<p>{{ {a: 1, b: 2} | diffObj: {a: 1, b: 1} }}</p> <!-- Output: "{b: 2}" -->
<p>{{ {a: 1, b: 2, c: {d: 3} } | diffObj: {a: 1, b: 1, c: {d: 1} } }}</p> <!-- Output: "{b: 2, c: {d: 3}}" -->
```

## Math

### min

Returns the minimum of a given array

**Usage:** `array | min`

```html
<p>{{ [1, 2, 3, 1, 2, 3] | min }}</p> <!-- Output: "1" -->
```

### max

Returns the maximum of a given array

**Usage:** `array | max`

```html
<p>{{ [1, 2, 3, 1, 2, 3] | max }}</p> <!-- Output: "3" -->
```

### sum

Returns the sum of a given array

**Usage:** `array | sum`

```html
<p>{{ [1, 2, 3, 4] | sum }}</p> <!-- Output: "10" -->
```

### percentage

Returns percentage between numbers 

**Usage:** `number | percentage: [total | default = 100]: [floor | default = false]`

```html
<p>{{ 5 | percentage }}</p> <!-- Output: "5" -->
<p>{{ 5 | percentage: 160 }}</p> <!-- Output: "3.125" -->
<p>{{ 5 | percentage: 160: true }}</p> <!-- Output: "3" -->
```

### ceil

Returns ceil of a number by precision 

**Usage:** `number | ceil: [precision | default = 0]`

```html
<p>{{ 42.123 | ceil }}</p> <!-- Output: "43" -->
<p>{{ 42.123 | ceil: 2 }}</p> <!-- Output: "42.13" -->
```

### floor

Returns floor of a number by precision 

**Usage:** `number | floor: [precision | default = 0]`

```html
<p>{{ 42.123 | floor }}</p> <!-- Output: "42" -->
<p>{{ 42.123 | floor: 2 }}</p> <!-- Output: "42.12" -->
```

### round

Returns round of a number by precision 

**Usage:** `number | round: [precision | default = 0]`

```html
<p>{{ 42.4 | round }}</p> <!-- Output: "42" -->
<p>{{ 42.5 | round }}</p> <!-- Output: "43" -->
<p>{{ 42.123 | round: 2 }}</p> <!-- Output: "42.12" -->
```

### sqrt

Returns the square root of a number 

**Usage:** `number | sqrt`

```html
<p>{{ 9 | sqrt }}</p> <!-- Output: "3" -->
```

### pow

Returns the power of a number 

**Usage:** `number | pow: [power | default = 2]`

```html
<p>{{ 3 | pow }}</p> <!-- Output: "9" -->
<p>{{ 3 | pow: 3 }}</p> <!-- Output: "27" -->
```

### degrees

Returns the degrees of a number in radians 

**Usage:** `number | degrees`

```html
<p>{{ 3.141592653589793 | degrees }}</p> <!-- Output: "180" -->
```

### radians

Returns the radians of a number in degrees 

**Usage:** `number | radians`

```html
<p>{{ 180 | radians }}</p> <!-- Output: "3.141592653589793" -->
```

### bytes

Returns bytes with a unit symbol

**Usage:** `number | bytes: [precision]`

```html
<p>{{ 10 | bytes }}</p> <!-- Output: "10 B" -->
<p>{{ 1048576 | bytes }}</p> <!-- Output: "1 KB" -->
<p>{{ 1073741824 | bytes }}</p> <!-- Output: "1 MB" -->
<p>{{ 1.0995116e12 | bytes }}</p> <!-- Output: "1 GB" -->
```

## Boolean

### isNull

**Usage:** `any | isNull`

```html
<p>{{ null | isNull }}</p> <!-- Output: "true" -->
<p>{{ 1 | isNull }}</p> <!-- Output: "false" -->
```

### isDefined

**Usage:** `any | isDefined`

```html
<p>{{ 1 | isDefined }}</p> <!-- Output: "true" -->
<p>{{ undefined | isDefined }}</p> <!-- Output: "false" -->
```

### isUndefined

**Usage:** `any | isUndefined`

```html
<p>{{ 1 | isUndefined }}</p> <!-- Output: "false" -->
<p>{{ undefined | isUndefined }}</p> <!-- Output: "true" -->
```


### isString

**Usage:** `any | isString`

```html
<p>{{ 1 | isString }}</p> <!-- Output: "false" -->
<p>{{ '' | isString }}</p> <!-- Output: "true" -->
```

### isNumber

**Usage:** `any | isNumber`

```typescript
this.func = () => {};
this.num = 1;
```

```html
<p>{{ num | isNumber }}</p> <!-- Output: "true" -->
<p>{{ func | isNumber }}</p> <!-- Output: "false" -->
```

### isArray

**Usage:** `any | isArray`

```typescript
this.arr = [1, 2];
this.num = 1;
```

```html
<p>{{ num | isArray }}</p> <!-- Output: "false" -->
<p>{{ arr | isArray }}</p> <!-- Output: "true" -->
```

### isObject

**Usage:** `any | isObject`

```typescript
this.obj = {a: 1, b: 2};
this.num = 1;
```

```html
<p>{{ num | isObject }}</p> <!-- Output: "false" -->
<p>{{ obj | isObject }}</p> <!-- Output: "true" -->
```

### isGreaterThan

**Usage:** `number | isGreaterThan: otherNumber`

```html
<p>{{ 1 | isGreaterThan: 1 }}</p> <!-- Output: "false" -->
<p>{{ 1 | isGreaterThan: 2 }}</p> <!-- Output: "false" -->
<p>{{ 2 | isGreaterThan: 1 }}</p> <!-- Output: "true" -->
```

### isGreaterEqualThan

**Usage:** `number | isGreaterEqualThan: otherNumber`

```html
<p>{{ 1 | isGreaterEqualThan: 1 }}</p> <!-- Output: "true" -->
<p>{{ 1 | isGreaterEqualThan: 2 }}</p> <!-- Output: "false" -->
<p>{{ 2 | isGreaterEqualThan: 1 }}</p> <!-- Output: "true" -->
```

### isLessThan

**Usage:** `number | isLessThan: otherNumber`

```html
<p>{{ 1 | isLessThan: 1 }}</p> <!-- Output: "false" -->
<p>{{ 1 | isLessThan: 2 }}</p> <!-- Output: "true" -->
<p>{{ 2 | isLessThan: 1 }}</p> <!-- Output: "false" -->
```

### isLessEqualThan

**Usage:** `number | isLessEqualThan: otherNumber`

```html
<p>{{ 1 | isLessEqualThan: 1 }}</p> <!-- Output: "true" -->
<p>{{ 1 | isLessEqualThan: 2 }}</p> <!-- Output: "true" -->
<p>{{ 2 | isLessEqualThan: 1 }}</p> <!-- Output: "false" -->
```

### isEqualTo

**Usage:** `number | isEqualTo: otherNumber`

```html
<p>{{ 1 | isEqualTo: 1 }}</p> <!-- Output: "true" -->
<p>{{ 1 | isEqualTo: '1' }}</p> <!-- Output: "true" -->
<p>{{ 1 | isEqualTo: 2 }}</p> <!-- Output: "false" -->
<p>{{ 2 | isEqualTo: 1 }}</p> <!-- Output: "false" -->
```

### isNotEqualTo

**Usage:** `number | isNotEqualTo: otherNumber`

```html
<p>{{ 1 | isNotEqualTo: 1 }}</p> <!-- Output: "false" -->
<p>{{ 1 | isNotEqualTo: '1' }}</p> <!-- Output: "false" -->
<p>{{ 1 | isNotEqualTo: 2 }}</p> <!-- Output: "true" -->
<p>{{ 2 | isNotEqualTo: 1 }}</p> <!-- Output: "true" -->
```

### isIdenticalTo

**Usage:** `number | isIdenticalTo: otherNumber`

```html
<p>{{ 1 | isIdenticalTo: 1 }}</p> <!-- Output: "true" -->
<p>{{ 1 | isIdenticalTo: '1' }}</p> <!-- Output: "false" -->
<p>{{ 1 | isIdenticalTo: 2 }}</p> <!-- Output: "false" -->
<p>{{ 2 | isIdenticalTo: 1 }}</p> <!-- Output: "false" -->
```

### isNotIdenticalTo

**Usage:** `number | isNotIdenticalTo: otherNumber`

```html
<p>{{ 1 | isNotIdenticalTo: 1 }}</p> <!-- Output: "false" -->
<p>{{ 1 | isNotIdenticalTo: '1' }}</p> <!-- Output: "true" -->
<p>{{ 1 | isNotIdenticalTo: 2 }}</p> <!-- Output: "true" -->
<p>{{ 2 | isNotIdenticalTo: 1 }}</p> <!-- Output: "true" -->
```

## Contributing

* Before adding any new feature or a fix make sure to open an issue first!

Make sure you have `angular-cli` & `karma` installed globally.

```bash
$ npm install -g angular-cli karma
```

Clone the project, and install dependencies.

```bash
$ git clone https://github.com/danrevah/ngx-pipes.git
$ npm install
```

Create a new branch

```bash
$ git checkout -b feat/someFeature
```

Add tests & make sure everything is running properly
```bash
$ npm test
```

Commit & push, and make a pull request!
