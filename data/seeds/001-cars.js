exports.seed = function(knex) {
  // Deletes ALL existing entries
  return (
    knex("cars")
      .del() //? deletes table
      // .truncate() // empties the table and resets the id
      .then(function() {
        // Inserts seed entries
        return knex("cars").insert([
          // {id: 1, colName: 'rowValue1'},
          // {id: 2, colName: 'rowValue2'},
          // {id: 3, colName: 'rowValue3'}
          {
            id: 1,
            VIN: "JHMFA36266S014756",
            make: "Tesla",
            model: "3",
            mileage: "150000 miles",
          },
          {
            id: 2,
            VIN: "1FDXR70U5BVJ33108",
            make: "Ford",
            model: "Fiesta",
            mileage: "200000 miles",
          },
          {
            id: 3,
            VIN: "5XXGM4A71DG299413",
            make: "Toyota",
            model: "Camry",
            mileage: "10000 miles",
          },
        ]);
      })
  );
};
