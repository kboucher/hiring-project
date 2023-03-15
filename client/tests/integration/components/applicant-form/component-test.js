import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | applicant-form', function (hooks) {
    setupRenderingTest(hooks);

    test('it renders', async function (assert) {
        // Set any properties with this.set('myProperty', 'value');
        // Handle any actions with this.set('myAction', function(val) { ... });
        this.setProperties({
            applicantAge: 35,
            applicantName: 'Carson Smith',
            onCancel() {},
            onSubmit() {},
        });

        await render(hbs`<ApplicantForm
            @applicantAge={{this.applicantAge}}
            @applicantName={{this.applicantName}}
            @onCancel={{this.onCancel}}
            @onSubmit={{this.onSubmit}}
        />`);

        assert.dom('[data-test-form="applicant"]').exists();
        assert.dom('[data-test-input="applicant-age"]').exists();
        assert.dom('[data-test-input="applicant-name"]').exists();
        assert.dom('[data-test-button="cancel"]').exists();
        assert.dom('[data-test-button="save"]').exists();
    });
});
