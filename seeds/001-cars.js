exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("cars")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("cars").insert([
        {
          VIN: 420420,
          make: "Toyota",
          model: "Tundra",
          mileage: 420,
          transmission: "manual",
          condition: "Reeks of oregano"
        },
        {
          VIN: 12345,
          make: "Beep",
          model: "Honk",
          mileage: 420,
          transmission: "automatic",
          condition: "Goes skrr skrr"
        }
      ]);
    });
};
