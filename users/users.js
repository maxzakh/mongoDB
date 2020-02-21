var user1 ={
    _id: 3424324,
    Username: "davidcohen2580",
    Password: "test123",
    Email: "davidcohen2580@gmail.com",
    Birthday: "09/10/1988",
    FavoriteMovies: [3424324, 43234, 23443]
}

db.users.insertOne(user1);

var user2 = {
    _id: 222222,
    Username: "maxzakh",
    Password: "test123",
    Email: "maxzakh@gmail.com",
    Birthday: "09/10/1988",
    FavoriteMovies: ["5e4b8a2b922d2acb9e582999", "5e4b89f5922d2acb9e582998", "5e4e1fa910e6fe0f8b765faf"]
}

db.users.insertOne(user2);

var user3 = {
    _id: 333333,
    Username: "maxamoose",
    Password: "test123",
    Email: "maxzakh@ucdavis.edu",
    Birthday: "05/9/1990",
    FavoriteMovies: ["5e4a5209922d2acb9e582991", "5e4b874f922d2acb9e582992", "5e4b8914922d2acb9e582997"]
}

db.users.insertOne(user3);

var user4 = {
    _id: 444444,
    Username: "maxamoose",
    Password: "test123",
    Email: "maxzakh@ucdavis.edu",
    Birthday: "05/9/1990",
    FavoriteMovies: ["5e4a5209922d2acb9e582991", "5e4b89f5922d2acb9e582998", "5e4b8914922d2acb9e582997"]
}

db.users.insertOne(user4);

var user5 = {
    _id: 555555,
    Username: "maxamoose",
    Password: "test123",
    Email: "foo@bar.com",
    Birthday: "06/19/1997",
    FavoriteMovies: ["5e4b8853922d2acb9e582996", "5e4b874f922d2acb9e582992", "5e4b8914922d2acb9e582997"]
}

db.users.insertOne(user5);