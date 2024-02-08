function highlightSearchResults(searchTerm) {
    const sections = document.querySelectorAll('#sobre-mi, #mis-trabajos, #mis-conocimientos');
    sections.forEach(section => {
        const paragraphs = section.getElementsByTagName('p');
        for (let i = 0; i < paragraphs.length; i++) {
            const paragraph = paragraphs[i];
            const text = paragraph.innerText;
            const regex = new RegExp(searchTerm, 'gi');
            const highlightedText = text.replace(regex, '<span class="highlight">$&</span>');
            paragraph.innerHTML = highlightedText;
        }
    });
}
