interface RequestDemoFormData {
    firstName: string;
    lastName: string;
    email: string;
    company: string;
    jobTitle: string;
}

class RequestDemoComponent {

    elements = {
        iframeSelector: '.go812842568',
        firstNameInput: '.hs-form__field-row__column input[id="firstname-input"]',
        lastNameInput: '.hs-form__field-row__column input[id="lastname-input"]',
        emailInput: '.hs-form__field-row__column input[id="email-input"]',
        companyNameInput: '.hs-form__field-row__column input[id="company-input"]',
        jobTitleInput: '.hs-form__field-row__column input[id="jobtitle-input"]',
        closeButton: '#interactive-close-button'
    }

    fillRequestDemoFormAndCloseIt(data: RequestDemoFormData) {
        this.fillInFirstName(data.firstName);
        this.fillInLastName(data.lastName);
        this.fillInEmail(data.email);
        this.fillInCompanyName(data.company);
        this.fillInJobTitle(data.jobTitle);
        this.clickCloseButton();
    }

    fillInFirstName(firstName: string) {
        cy.iframe(this.elements.iframeSelector)
            .find(this.elements.firstNameInput)
            .should('be.visible')
            .type(firstName);
    }

    fillInLastName(lastName: string) {
        cy.iframe(this.elements.iframeSelector)
            .find(this.elements.lastNameInput)
            .should('be.visible')
            .type(lastName);
    }

    fillInEmail(email: string) {
        cy.iframe(this.elements.iframeSelector)
            .find(this.elements.emailInput)
            .should('be.visible')
            .type(email);
    }

    fillInCompanyName(companyName: string) {
        cy.iframe(this.elements.iframeSelector)
            .find(this.elements.companyNameInput)
            .should('be.visible')
            .type(companyName);
    }

    fillInJobTitle(jobTitle: string) {
        cy.iframe(this.elements.iframeSelector)
            .find(this.elements.jobTitleInput)
            .should('be.visible')
            .type(jobTitle);
    }

    clickCloseButton() {
        cy.iframe(this.elements.iframeSelector)
            .find(this.elements.closeButton)
            .should('be.visible')
            .click();
    }
}

export default RequestDemoComponent;