let typeSelect = document.getElementById('typeSelect');
let genderSelect = document.getElementById('genderSelect');
let ageSelect = document.getElementById('ageSelect');
let searchBtn = document.getElementById('search');
let results = document.getElementById('results')


const animals = [
    {
        name: 'Puki',
        type: 'cat',
        gender: 'male',
        age: 5,
        imageUrl: 'cats/puki.jpg'
    },
    {
        name: 'Jonny',
        type: 'dog',
        gender: 'male',
        age: 0.8,
        imageUrl: 'dogs/jonny.jpg'
    },
    {
        name: 'Lady',
        type: 'dog',
        gender: 'female',
        age: 4.5,
        imageUrl: 'dogs/lady.jpg'
    },
    {
        name: 'Lola',
        type: 'cat',
        gender: 'female',
        age: 1.3,
        imageUrl: 'cats/lola.jpg'
    },
    {
        name: 'Jack',
        type: 'dog',
        gender: 'male',
        age: 6,
        imageUrl: 'dogs/jack.jpg'
    },
    {
        name: 'Shy',
        type: 'cat',
        gender: 'male',
        age: 1,
        imageUrl: 'cats/shy.jpg'
    },
    {
        name: 'Pola',
        type: 'dog',
        gender: 'female',
        age: 6.3,
        imageUrl: 'dogs/pola.jpg'
    },
    {
        name: 'Yogurt',
        type: 'dog',
        gender: 'male',
        age: 1.5,
        imageUrl: 'dogs/yogurt.jpg'
    },
    {
        name: 'Loki',
        type: 'cat',
        gender: 'male',
        age: 0.5,
        imageUrl: 'cats/loki.jpg'
    },
    {
        name: 'Frida',
        type: 'dog',
        gender: 'female',
        age: 4,
        imageUrl: 'dogs/frida.jpg'
    },
    {
        name: 'Henry',
        type: 'cat',
        gender: 'male',
        age: 3,
        imageUrl: 'cats/henry.jpg'
    },
    {
        name: 'Buddy',
        type: 'dog',
        gender: 'male',
        age: 2.3,
        imageUrl: 'dogs/buddy.jpg'
    },
    {
        name: 'Kiwi',
        type: 'cat',
        gender: 'female',
        age: 7,
        imageUrl: 'cats/kiwi.jpg'
    },
    {
        name: 'Nibbler',
        type: 'cat',
        gender: 'male',
        age: 2,
        imageUrl: 'cats/nibbler.jpg'
    },
    {
        name: 'Wolly',
        type: 'dog',
        gender: 'male',
        age: 4,
        imageUrl: 'dogs/wolly.jpg'
    },
    {
        name: 'Tiger',
        type: 'cat',
        gender: 'male',
        age: 3.5,
        imageUrl: 'cats/tiger.jpg'
    },
    {
        name: 'Tulip',
        type: 'cat',
        gender: 'female',
        age: 6,
        imageUrl: 'cats/tulip.jpg'
    },
    {
        name: 'Honey',
        type: 'cat',
        gender: 'female',
        age: 5.5,
        imageUrl: 'cats/honey.jpg'
    },
    {
        name: 'Alice',
        type: 'dog',
        gender: 'female',
        age: 2,
        imageUrl: 'dogs/alice.jpg'
    },
    {
        name: 'Billie',
        type: 'dog',
        gender: 'male',
        age: 1,
        imageUrl: 'dogs/billie.jpg'
    },
    {
        name: 'Moon',
        type: 'cat',
        gender: 'female',
        age: 0.7,
        imageUrl: 'cats/moon.jpg'
    },
];

function displayAnimals(animals) {
    results.innerHTML = '';
    animals.forEach(animal => {
        const petDetails = document.createElement('div');
        petDetails.classList.add('pet-details');
        petDetails.innerHTML = `<img src="${animal.imageUrl}" alt="${animal.name}">
        <h2>${animal.name}</h2>
        <span>${animal.gender}, ${animal.age} years old</span>`
        results.appendChild(petDetails)
    });
}

displayAnimals(animals);

searchBtn.addEventListener('click', () => {
    //Get selected values
    let selectedType = typeSelect.value;
    let selectedGender = genderSelect.value;
    let selectedAge = ageSelect.value;

    results.innerHTML = '';

    //filter animals array
    let filteredAnimals = animals.filter(animal => {
        //check age range
        let ageMatch = false;
        if (selectedAge === 'all') {
            ageMatch = true;
        } else if (selectedAge === '0-year' && animal.age <= 1) {
            ageMatch = true;
        } else if (selectedAge === '1-3' && animal.age >= 1 && animal.age <= 3) {
            ageMatch = true;
        } else if (selectedAge === '3-5' && animal.age >= 3 && animal.age <= 5) {
            ageMatch = true;
        } else if (selectedAge === '5-all' && animal.age >= 5) {
            ageMatch = true;
        }


        return (selectedType === 'all' || animal.type === selectedType) &&
               (selectedGender === 'all' || animal.gender === selectedGender) &&
               ageMatch; 
    });

    //display filltered animals
    displayAnimals(filteredAnimals);
});


