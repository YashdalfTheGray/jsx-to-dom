import test from 'ava';

import { getMessage } from './index';

test('getMessage returns a string', async (t) => {
  const result = await getMessage();

  t.is(typeof result, 'string');
});
