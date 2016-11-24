# Angular2 Pipes

[![Build Status](https://travis-ci.org/danrevah/ng2-pipes.svg?branch=master)](https://travis-ci.org/danrevah/ng2-pipes)

> Useful Angular2 pipes

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
 - [Array](#Array)   

## Installation


1. Use npm to install the package

```
$ npm install ng2-pipes --save 
```

2. Add into your module `imports` the PipesModule

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
Example:

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
