import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | candidates/candidate', function (hooks) {
    setupTest(hooks);

    test('it exists', function (assert) {
        let route = this.owner.lookup('route:candidates/candidate');
        assert.ok(route);
    });
});
