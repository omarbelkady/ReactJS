'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _extends = require('@babel/runtime/helpers/extends');
var _objectWithoutPropertiesLoose = require('@babel/runtime/helpers/objectWithoutPropertiesLoose');
var finalForm = require('final-form');
var reactFinalForm = require('react-final-form');
var React = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _extends__default = /*#__PURE__*/_interopDefaultLegacy(_extends);
var _objectWithoutPropertiesLoose__default = /*#__PURE__*/_interopDefaultLegacy(_objectWithoutPropertiesLoose);
var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

// shared logic between components that use either render prop,
// children render function, or component prop
function renderComponent(props, name) {
  var render = props.render,
      children = props.children,
      component = props.component,
      rest = _objectWithoutPropertiesLoose__default['default'](props, ["render", "children", "component"]);

  if (component) {
    return /*#__PURE__*/React.createElement(component, _extends__default['default']({}, rest, {
      children: children,
      render: render
    })); // inject children back in
  }

  if (render) {
    return render(children === undefined ? rest : _extends__default['default']({}, rest, {
      children: children
    })); // inject children back in
  }

  if (typeof children !== 'function') {
    throw new Error("Must specify either a render prop, a render function as children, or a component prop to " + name);
  }

  return children(rest);
}

var defaultIsEqual = function defaultIsEqual(aArray, bArray) {
  return aArray === bArray || Array.isArray(aArray) && Array.isArray(bArray) && aArray.length === bArray.length && !aArray.some(function (a, index) {
    return a !== bArray[index];
  });
};

/**
 * A simple hook to create a constant value that lives for
 * the lifetime of the component.
 *
 * Plagiarized from https://github.com/Andarist/use-constant
 *
 * Do NOT reuse this code unless you know what you're doing.
 * Use Andarist's hook; it's more fault tolerant to things like
 * falsy values.
 *
 * @param {Function} init - A function to generate the value
 */

function useConstant(init) {
  var ref = React__default['default'].useRef();

  if (!ref.current) {
    ref.current = init();
  }

  return ref.current;
}

var all = finalForm.fieldSubscriptionItems.reduce(function (result, key) {
  result[key] = true;
  return result;
}, {});

var useFieldArray = function useFieldArray(name, _temp) {
  var _ref = _temp === void 0 ? {} : _temp,
      _ref$subscription = _ref.subscription,
      subscription = _ref$subscription === void 0 ? all : _ref$subscription,
      defaultValue = _ref.defaultValue,
      initialValue = _ref.initialValue,
      _ref$isEqual = _ref.isEqual,
      isEqual = _ref$isEqual === void 0 ? defaultIsEqual : _ref$isEqual,
      validateProp = _ref.validate;

  var form = reactFinalForm.useForm('useFieldArray');
  var formMutators = form.mutators;
  var hasMutators = !!(formMutators && formMutators.push && formMutators.pop);

  if (!hasMutators) {
    throw new Error('Array mutators not found. You need to provide the mutators from final-form-arrays to your form');
  }

  var mutators = useConstant(function () {
    return (// curry the field name onto all mutator calls
      Object.keys(formMutators).reduce(function (result, key) {
        result[key] = function () {
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          return formMutators[key].apply(formMutators, [name].concat(args));
        };

        return result;
      }, {})
    );
  });
  var validate = useConstant(function () {
    return function (value, allValues, meta) {
      if (!validateProp) return undefined;
      var error = validateProp(value, allValues, meta);

      if (!error || Array.isArray(error)) {
        return error;
      } else {
        var arrayError = [] // gross, but we have to set a string key on the array
        ;
        arrayError[finalForm.ARRAY_ERROR] = error;
        return arrayError;
      }
    };
  });

  var _useField = reactFinalForm.useField(name, {
    subscription: _extends__default['default']({}, subscription, {
      length: true
    }),
    defaultValue: defaultValue,
    initialValue: initialValue,
    isEqual: isEqual,
    validate: validate,
    format: function format(v) {
      return v;
    }
  }),
      _useField$meta = _useField.meta,
      length = _useField$meta.length,
      meta = _objectWithoutPropertiesLoose__default['default'](_useField$meta, ["length"]),
      input = _useField.input,
      fieldState = _objectWithoutPropertiesLoose__default['default'](_useField, ["meta", "input"]);

  var forEach = function forEach(iterator) {
    // required || for Flow, but results in uncovered line in Jest/Istanbul
    // istanbul ignore next
    var len = length || 0;

    for (var i = 0; i < len; i++) {
      iterator(name + "[" + i + "]", i);
    }
  };

  var map = function map(iterator) {
    // required || for Flow, but results in uncovered line in Jest/Istanbul
    // istanbul ignore next
    var len = length || 0;
    var results = [];

    for (var i = 0; i < len; i++) {
      results.push(iterator(name + "[" + i + "]", i));
    }

    return results;
  };

  return {
    fields: _extends__default['default']({
      name: name,
      forEach: forEach,
      length: length || 0,
      map: map
    }, mutators, fieldState, {
      value: input.value
    }),
    meta: meta
  };
};

var version = "3.1.2";

var versions = {
  'final-form': finalForm.version,
  'react-final-form': reactFinalForm.version,
  'react-final-form-arrays': version
};

var FieldArray = function FieldArray(_ref) {
  var name = _ref.name,
      subscription = _ref.subscription,
      defaultValue = _ref.defaultValue,
      initialValue = _ref.initialValue,
      isEqual = _ref.isEqual,
      validate = _ref.validate,
      rest = _objectWithoutPropertiesLoose__default['default'](_ref, ["name", "subscription", "defaultValue", "initialValue", "isEqual", "validate"]);

  var _useFieldArray = useFieldArray(name, {
    subscription: subscription,
    defaultValue: defaultValue,
    initialValue: initialValue,
    isEqual: isEqual,
    validate: validate
  }),
      fields = _useFieldArray.fields,
      meta = _useFieldArray.meta;

  return renderComponent(_extends__default['default']({
    fields: fields,
    meta: _extends__default['default']({}, meta, {
      __versions: versions
    })
  }, rest), "FieldArray(" + name + ")");
};

exports.FieldArray = FieldArray;
exports.useFieldArray = useFieldArray;
exports.version = version;
