import Route from '@ember/routing/route';

/**
    Provides route for the single candidate view.

    @module CandidatesCandidateRoute
    @extends Ember.Route
 */
export default class CandidatesCandidateRoute extends Route {
    /**
        Provides `CandidateRoute` model from existing candidates (by ID) or by
        creating a new `ApplicantRecord`.

        @param {Object} params
        @returns {ApplicantRecord}
     */
    model(params) {
        const { id } = params;

        if (id === 'new') {
            return this.store.createRecord('applicant');
        }

        return this.store
            .findAll('applicant')
            .then((applicants) => applicants.findBy('id', id));
    }

    /**
        Renders the Candidate template into the Application's outlet.

        @method renderTemplate
     */
    renderTemplate() {
        this.render({
            into: 'application',
        });
    }
}
