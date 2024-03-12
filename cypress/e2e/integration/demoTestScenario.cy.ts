import 'cypress-iframe'
import ResourcesPage from '../pages/resourcesPage';
import MainMenuComponent from '../components/mainMenuComponent';
import RequestDemoComponent from '../components/requestDemoComponent';

describe('Demo Test Scenario', () => {
    let mainMenuComponent = new MainMenuComponent();
    let requestDemoComponent = new RequestDemoComponent();
    let resourcesPage = new ResourcesPage();
    before(() => {
        cy.fixture('demoData.json').as('demoData');
    });

    it('should navigate true Nobl9 website, fill the modal and close it', function () {
        //Go to https://www.nobl9.com/ page.
        cy.visit('https://www.nobl9.com/');

        //Select Resources in the main menu and click on the “Nobl9 Blog” item.
        mainMenuComponent.selectResourcesAndChooseBlog();

        //Choose the latest post displayed in the “All Posts” section and click on the “Learn More” button.
        resourcesPage.selectFirstPostAndOpenIt();

        //On the post page, click the “Request a Demo” button on the page header
        mainMenuComponent.selectRequestADemo();

        //Fill out the details in the “Request a Demo” form. Don’t click submit! Instead, close the modal after completing the form.
        requestDemoComponent.fillRequestDemoFormAndCloseIt(this.demoData);
    })
})


// Please provide a link to your GitHub repository
// containing the Cypress test code, along with any
// necessary instructions or additional documentation.