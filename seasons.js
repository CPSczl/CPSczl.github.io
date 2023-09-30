const seasons = {
    spring: 'spring.jpg',
    summer: 'summer.jpg',
    autumn: 'autumn.jpg',
    winter: 'winter.jpg'
};

const seasonImage = document.getElementById('seasonImage');

function updateImage() {
    const currentSeason = new Date().getMonth();
    const imageSrc = seasons[currentSeason];
    seasonImage.src = imageSrc;
}

updateImage();
