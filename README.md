# ember-essential-modifiers

An essential Ember.js modifiers collection

[![Node.js Package](https://github.com/alexeipanov/ember-essential-modifiers/actions/workflows/npm-publish.yml/badge.svg)](https://github.com/alexeipanov/ember-essential-modifiers/actions/workflows/npm-publish.yml)


## Compatibility

* Ember.js v4.8 or above
* Ember CLI v4.8 or above
* Node.js v18 or above


## Installation

```
ember install ember-essential-modifiers
```


## Usage

- toggle-class:
Toggles className depends on isOn value

```
<div {{toggle-class isOn=true className="active">
  Menu
</div>
```

Result:

```
 <div class="active">Menu</div>
```

- show-popover
  Displays a popover

```
<div role="alert" popover="manual" {{show-popover duration=3000}}>
  Warning!
</div>
```
params:
- duration<Number>, ms: Number of milliseconds before a popover will be closed
  if not set or zero: popover will not be closed.

## Contributing

See the [Contributing](CONTRIBUTING.md) guide for details.


## License

This project is licensed under the [MIT License](LICENSE.md).
