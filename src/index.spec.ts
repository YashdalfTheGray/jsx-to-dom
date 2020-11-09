import test from 'ava';
import { JSDOM } from 'jsdom';

import { isEventHandler, extractEventName } from './index';

test('isEventHandler determines onClick to be event handler', (t) => {
  const dom = new JSDOM('<html></html>');

  t.truthy(isEventHandler('onClick', (dom.window as unknown) as typeof window));
});

test('extractEventName gets the event name from onClick', (t) => {
  t.is(extractEventName('onClick'), 'click');
});
