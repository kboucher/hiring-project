import Controller from '@ember/controller';
import { action } from '@ember/object';
import { next } from '@ember/runloop';
import { inject as service } from '@ember/service';

/**
    Provides `Ember.Controller functionality for `CandidatesCandidateRoute`.

    @module CandidatesCandidateController
    @extends Ember.Controller
 */
export default class CandidatesCandidateController extends Controller {
    @service router;

    /**
        Resets `ApplicantRecord` and transitions back to list view (on _Cancel_).

        @method onCancel
     */
    @action onCancel() {
        const { model, router } = this;

        model.rollbackAttributes();
        router.transitionTo('candidates');
    }

    /**
        Saves `ApplicantRecord` and returns to the list view (or handles error).

        @method onSubmit
        @param {Event} event
     */
    @action onSubmit(event) {
        event.preventDefault();

        const { model, router } = this;

        model
            .save()
            .then((/* applicant */) => {
                // TODO: Handle success?

                this.send('refreshModel');

                next(() => {
                    router.transitionTo('candidates');
                });
            })
            .catch((/* error */) => {
                // TODO: Handle error
            });
    }
}
