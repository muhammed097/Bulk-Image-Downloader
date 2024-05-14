function downloadImages() {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        const imgUrl = img.src;
        const imgName = imgUrl.substring(imgUrl.lastIndexOf('/') + 1);
        fetch(imgUrl)
            .then(response => response.blob())
            .then(blob => {
                const url = window.URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = url;
                a.download = imgName;
                document.body.appendChild(a);
                a.click();
                window.URL.revokeObjectURL(url);
            })
            .catch(error => console.error(`Failed to download ${imgUrl}: ${error}`));
    });
}

downloadImages();
