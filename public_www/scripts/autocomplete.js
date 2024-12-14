let availableKeywords = [
    {
        text: 'CzechYourTech: Jak tuto webovou stránku používat?',
        url: 'blog/czechyourtech.html'
    },
    {
        text: 'Obsidian: Nejbezpečnější místo pro vaše poznámky',
        url: 'blog/obsidian.html'
    },
    {
        text: 'Proton: Nejspolehlivější e-mail poskytovatel a mnoho dalšího',
        url: 'blog/proton.html'
    },
];

const resultsBox = document.querySelector(".result-box");
const inputBox = document.getElementById("input-box");

inputBox.onkeyup = function () {
    let result = [];
    let input = inputBox.value;
    if (input.length) {
        result = availableKeywords.filter((keyword) => {
            return keyword.text.toLowerCase().includes(input.toLowerCase());
        });
    }

    display(result);
}

function display(result) {
    const content = result.map((item) => {
        return `<li class="result-item my-2 hover:bg-black hover:bg-opacity-50 hover:shadow-lg hover:text-white p-4 cursor-pointer rounded-xl transition ease-out duration-200" onclick="selectInput('${item.url}')">${item.text}</li>`;
    });

    resultsBox.innerHTML = "<ul>" + content.join('') + "</ul>";
}

function selectInput(url) {
    window.location.href = url; // Redirect to the specified URL
}