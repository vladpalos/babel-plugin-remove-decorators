# babel-plugin-remove-decorators
A babel plugin that **removes all decorators** from the code.
This is useful for testing purposes. It allows you to unit test the code that has decorators attached to it, by removing the decorator line before the transpilation. 

## Example
Turns this:

```javascript
function classDec (){};
function methodDec (){};

@classDec
class DecoratedClass {
    @methodFoo(true)
    method() { }
}
```

into this:

```js
function classDec (){};
function methodDec (){};

class DecoratedClass {
    method() { }
}
```


## Usage
Install via NPM
```bash
$ npm install --save-dev babel-plugin-remove-decorators
```

See Babel's documentation on [plugins](https://babeljs.io/docs/advanced/plugins/#usage).

! Ensure that you have ES7 decorator support enabled.

! You need to use the plugin with the `before` position specifier.

.babelrc example:
```json
{
  "optional": ["es7.decorators"],
  "plugins": ["remove-decorators:before"]
}

```

## Run tests
```bash
$ npm test
```
