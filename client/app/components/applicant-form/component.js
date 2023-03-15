import { action } from '@ember/object';
import { guidFor } from '@ember/object/internals';
import { isEmpty } from '@ember/utils';
import Component from '@glimmer/component';

/**
    Provides affordance for adding, updating, and viewing `ApplicantRecord`s.

    @module ApplicantFormComponent
    @extends Glimmer.Component
 */
export default class ApplicantFormComponent extends Component {
    /**
        Provides unique ID for the age input (would normally do this in a set of
        generic form components).

        @property ageInputId
        @type {String}
     */
    get ageInputId() {
        const { formId } = this;

        return `${formId}-age-input`;
    }

    /**
        Provides unique ID for the form.

        @property formId
        @type {String}
     */
    get formId() {
        return `${guidFor(this)}-form`;
    }

    /**
        Validates the state of the `ApplicantModel`.

        @property isFormValid
        @type {Boolean}
     */
    get isFormValid() {
        const { args } = this;
        const { applicantAge, applicantName } = args;

        if (isEmpty(applicantAge) || isEmpty(applicantName)) {
            return false;
        }

        return true;
    }

    /**
        Provides unique ID for the name input (would normally do this in a set
        of generic form components).

        @property nameInputId
        @type {String}
     */
    get nameInputId() {
        const { formId } = this;

        return `${formId}-name-input`;
    }

    /**
        Marks input elements as `touched` on blur to enhance form feedback
        experience (would normally do this in a set of generic form components).

        @method markAsTouched
        @param {String} elementId
     */
    @action markAsTouched(elementId) {
        const element = document.querySelector(`#${elementId}`);

        if (element) {
            element.classList.add('touched');
        }
    }
}
