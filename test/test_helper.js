import jsdom from 'jsdom';
import jquery from 'jQuery';
import TestUtils from 'react-addons-test-utils';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from '../src/reducers/';
import chai, { expect } from 'chai';
import chaiJquery from 'chai-jquery';

// setup testing environment to run like a browser from the CLI
global.document = jsdom.jsdom(`<!doctype html><html><body></body></html>`);
global.window = global.document.defaultView;
const $ = jquery(global.window);

// build 'renderComponent' helper that should render a given react class
function renderComponent(ComponentClass, props, state) {
  const componentInstance =
    TestUtils.renderIntoDocument(
        <Provider store={createStore(reducers, state)} >
          <ComponentClass {...props} />
        </Provider>
    ); 
  return $(ReactDOM.findDOMNode(componentInstance));
}

// Build helper for simulating events
$.fn.simulate = function(eventName, value) {
  if (value) {
    this.val(value);
  }
  TestUtils.Simulate[eventName](this[0]);
};


// setup chai-jquery
chaiJquery(chai, chai.util, $);

// export

export { renderComponent, expect };
