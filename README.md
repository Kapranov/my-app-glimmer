# my-app-glimmer

This README outlines the details of collaborating on this Glimmer application.
A short introduction of this app could easily go here.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with NPM)
* [Yarn](https://yarnpkg.com/en/)
* [Ember CLI](https://ember-cli.com/)

## Installation

* `git clone <repository-url>` this repository
* `cd my-app-glimmer`
* `yarn`

## Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Building

* `ember build` (development)
* `ember build --environment production` (production)

## Further Reading / Useful Links

* [glimmerjs](http://github.com/tildeio/glimmer/)
* [ember-cli](https://ember-cli.com/)


# Glimmer.js: What’s the Deal with TypeScript?

by Tom Dale Member of the JavaScript glitterati. Apr 12

Two weeks ago at EmberConf, we announced [Glimmer.js][1], a component-based
library for writing superfast web applications.

In the demo video, we use TypeScript to write our Glimmer components.
Some people have been asking, what’s the deal? Have we turned our backs
on JavaScript and embraced our new TypeScript overlords?

I’m not usually a fan of “alternative” JavaScript. All the way back in
2013, for example, I was arguing against adopting CoffeeScript.

**Every CoffeeScript developer knows JavaScript. The inverse is not true**.
Because CoffeeScript emits JavaScript, and any debugging you do in the
browser is in JavaScript, by definition CoffeeScript developers must
have at least a passing familiarity with JavaScript.

**CoffeeScript jeopardizes the ability to stay up-to-date with the web
platform**. Parts of CoffeeScript require new syntax that is
incompatible with features coming in ES6 and ES7. By using CoffeeScript,
you are locking yourself into always using ES5. One of the principles of
TC39, 1JS, means that if you author ES4 code today, it will guarantee to
continue working in the future, and be easy to upgrade when new features
start landing in browsers.

It was easy to see that there was important new functionality coming in
ES6 and beyond, and it wasn’t clear how CoffeeScript users would be able
to take advantage of it.

For example, CoffeeScript adopted ``for..of`` loops to iterate over
the properties of an object. Meanwhile, ES6 introduced its own ``for..of``
loops as a way to loop through iterable objects. If CoffeeScript wants
to support new functionality with similar syntax like this, it has two
choices: break existing CoffeeScript code, or diverge from JavaScript
more and more over time.

Because JavaScript is the lingua franca of the web, and the web is
everywhere, it is a programming language subject to enormous
compatibility constraints. The smallest language change can potentially
render millions of sites inoperable.

I have witnessed the intense amount of thought and care TC39 members
devote to figuring out how to introduce modern language features in a
way that is completely backwards-compatible. It involves dumping out all
of the existing features and syntax on a table, and painstakingly moving
them around until a compatible path can be traced through.

Unfortunately, this heroic effort only helps JavaScript, not
“alt-JavaScript.” At the end of the day, transpiled languages suffer
from one of two problems:

1. “JavaScript-alikes” like CoffeeScript will have to break their own
    backwards compatibility, or diverge from JavaScript (and thus become
    less JS-alike over time).
2. Languages with totally different syntax and semantics, like
   ClojureScript, are difficult to debug, even when source maps are
   working perfectly.

But not TypeScript. TypeScript is different.

TypeScript is different because of how radically constrained it is.

Most transpiled languages exist because they want to correct some
perceived deficiencies in JavaScript. It’s hard to quantify, but you can
feel the respect that the TypeScript team has for JavaScript. They’re
not trying to rescue an inherently flawed language; instead, they’re
trying to help a language they love reach new heights.

I love TypeScript because the delta between it and JavaScript is so
small. In fact, you can take any JavaScript file, change the extension
to ``.ts``, and boom, you’ve got a valid TypeScript file.

*Because TypeScript is a superset of JavaScript, you’ve actually been
writing TypeScript this whole time*.

From there, you can incrementally add type checking only where you think
it’s necessary.

It’s easy for people to have a visceral negative reaction to TypeScript.
Let’s be frank: a lot of TypeScript examples are nearly
indistinguishable from Java.

But two points:

1. All of that extra type syntax is optional; only use it if it’s
   bringing you benefits.
2. Don’t get fooled into thinking that TypeScript is as awkward and
   occasionally frustrating to use as Java. Behind that Java-like syntax
   is a language that is every bit as flexible and dynamic as JavaScript
   because, well, it is JavaScript.

#### *JavaScript + Types = TypeScript*

### 5 May Oleg G.Kapranov






[1]: https://glimmerjs.com/


