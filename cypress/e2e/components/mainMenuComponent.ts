class MainMenu {

    elements = {
        tabSelector: '.nobl9__mega-menu--link-title #hs_cos_wrapper_module_16639154864387_',
        resourcesTab: 'Resources',
        itemSelector: '.nobl9__mega-menu--sub-item--meta',
        nobl9BlogItem: 'Nobl9 Blog',
        requestDemoButton: '#header-trial'
    }

    selectResourcesAndChooseBlog() {
        cy.get(this.elements.tabSelector).contains(this.elements.resourcesTab).click()
        cy.get(this.elements.itemSelector).contains(this.elements.nobl9BlogItem).click();
    }

    selectRequestADemo() {
        cy.get(this.elements.requestDemoButton).click();
    }
}

export default MainMenu;