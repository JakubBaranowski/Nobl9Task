class ResourcesPage {

    elements = {
        postBlog: 'article.blog-index__post--small',
        postButton: '.blog-index__post-button'
    }

    selectFirstPostAndOpenIt() {
        cy.get(this.elements.postBlog)
            .first()
            .find(this.elements.postButton)
            .click();
    }
}

export default ResourcesPage