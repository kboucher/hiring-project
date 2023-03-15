import Route from '@ember/routing/route';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

/**
    Provides `Ember.Route` functionality for Candidates list view.

    @module CandidatesRoute
    @extends Ember.Route
 */
export default class CandidatesRoute extends Route {
    @service store;

    /**
        Returns list of `ApplicantRecord`s from server

        @method model
        @returns {Array} Collection of `ApplicantRecord`s
     */
    model() {
        return this.store.query('applicant', {});
    }

    /**
        @method refreshModel
     */
    @action refreshModel() {
        this.refresh();
    }
}
