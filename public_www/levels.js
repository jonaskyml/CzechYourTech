function switchContent(level) {
    const buttons = document.querySelectorAll('.button-group button');
    const contents = document.querySelectorAll('.content');

    buttons.forEach((button, index) => {
        if (index === level - 1) {
            button.classList.add('active');
        } else {
            button.classList.remove('active');
        }
    });

    contents.forEach((content, index) => {
        if (index === level - 1) {
            content.classList.add('active');
        } else {
            content.classList.remove('active');
        }
    });

    // Update meta tags and URL
    updateMetaTags(level);
    history.pushState(null, '', '/article-about-x/level' + level);
}

function updateMetaTags(level) {
    const metaDescription = document.querySelector('meta[name="description"]');
    switch(level) {
        case 1:
            metaDescription.content = 'Description for Level 1 content.';
            break;
        case 2:
            metaDescription.content = 'Description for Level 2 content.';
            break;
        case 3:
            metaDescription.content = 'Description for Level 3 content.';
            break;
    }
}

// Load default content
switchContent(1);