var movie1 = {
    Title: "Silence of the Lambs",
    Description: "A young FBI cadet must receive the help of an incarcerated and manipulative cannibal killer to help catch another serial killer.",
    Genre: {
        Name: "Thriller",
        Description: "Thriller film, also known as suspense film or suspense thriller, is a broad film genre that involves excitement and suspense in the audience."
    },
    Director: {
        Name: "Jonathan Demme",
        Bio: "Robert Jonathan Demme was an American director, producer, and screenwriter.",
        Birth: "1944",
        Death: "2017"
    },
    ImagePath: "silenceofthelambs.png",
    Featured: true
}

db.movies.insertOne(movie1);

var movie2 = {
    Title: "The Dark Knight",
    Description: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
    Genre: {
        Name: "Action",
        Description: "Action films are a film genre where action sequences, such as fighting, stunts, car chases or explosions, take precedence over elements like characterization or complex plotting."
    },
    Director: {
        Name: "Christopher Nolan",
        Bio: "Christopher Edward Nolan, is a English-American filmmaker, who is known for making personal, distinctive films within the Hollywood mainstream.",
        Birth: "1970",
        Death: "2040"
    },
    ImagePath: "thedarkknight.png",
    Featured: true
}

db.movies.insertOne(movie2);

var movie3 = {
    Title: "Inception",
    Description: "A young FBI cadet must receive the help of an incarcerated and manipulative cannibal killer to help catch another serial killer.",
    Genre: {
        Name: "Sci-Fi",
        Description: "Science fiction film is a genre that uses speculative, fictional science-based depictions of phenomena that are not fully accepted by mainstream science."
    },
    Director: {
        Name: "Christopher Nolan",
        Bio: "Christopher Edward Nolan, is a English-American filmmaker, who is known for making personal, distinctive films within the Hollywood mainstream.",
        Birth: "1970",
        Death: "2040"
    },
    ImagePath: "inception.png",
    Featured: true
}

db.movies.insertOne(movie3);

var movie4 = {
    Title: "The Matrix",
    Description: "A young FBI cadet must receive the help of an incarcerated and manipulative cannibal killer to help catch another serial killer.",
    Genre: {
        Name: "Sci-Fi",
        Description: "Science fiction film is a genre that uses speculative, fictional science-based depictions of phenomena that are not fully accepted by mainstream science."
    },
    Director: {
        Name: "The Wachowskis",
        Bio: "Collectively known as the Wachowskis, they have worked as a writing and directing team through most of their professional film careers.",
        Birth: "1965",
        Death: "2040"
    },
    ImagePath: "thematrix.png",
    Featured: true
}

db.movies.insertOne(movie4);

var movie5 = {
    Title: "Gladiator",
    Description: "A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family and sent him into slavery.",
    Genre: {
        Name: "Action",
        Description: "Action films are a film genre where action sequences, such as fighting, stunts, car chases or explosions, take precedence over elements like characterization or complex plotting."
    },
    Director: {
        Name: "Ridley Scott",
        Bio: "Sir Ridley Scott is an English filmmaker.",
        Birth: "1937",
        Death: "2040"
    },
    ImagePath: "gladiator.png",
    Featured: true
}

db.movies.insertOne(movie5);