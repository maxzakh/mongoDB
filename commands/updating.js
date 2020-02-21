db.collection.update(
    { <array>: value ... },
    { <update operator>: { "<array>.$" : value } }
 )

 db.users.update(
     {"_id" : 222222, "FavoriteMovies" : "5e4b89f5922d2acb9e582998"},
     {$set: {"FavoriteMovies" : "5e4b8914922d2acb9e582997"}}
 )