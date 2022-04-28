[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-f059dc9a6f8d3a56e377f745f24479a46679e63a5d9fe6f495e02850cd0d8118.svg)](https://classroom.github.com/online_ide?assignment_repo_id=6581006&assignment_repo_type=AssignmentRepo)
# SQL Crud Operations

## Part 1: Houseplants 🌱🌵

Now that we are familiar with how SQL works, it's time for us to create a table of our own. We will then use it to practice our queries, and keep track of our houseplant collection!

### Creating our table:

We are going to create a table to store information about our houseplant collection. Each plant has a name, a quantity, boolean representing whether it is a succulent, and an array of colors. In JavaScript, we could represent a plant like this:

```js
const satinPothos = {
  plantName: "satin pothos",
  quantity: 2,
  isSucculent: false,
  colors: ["dark green", "silver"],
};
```

In order to store information in a Postgres database we need a table. A table is a lot like an Excel spreadsheet with rows and columns. Each column has a heading, and you can tell what which bit of data means by which column it is stored in. All information in the row belongs to the same entity, just like in a spreadsheet table. So in Postgres, our table will look like so:

![empty table](https://i.ibb.co/VMMkvpZ/empty-plants-table.png)

After you add some plants, your table will look something like this:

![table after plants added](https://i.ibb.co/J2TRktQ/table-plants-added.png)

The following SQL will create the table we want and add some entries:

```sql
CREATE TABLE houseplants (
    plant_id SERIAL PRIMARY KEY,
    plant_name TEXT,
    quantity INT,
    is_succulent BOOL,
    colors TEXT []
);

INSERT INTO
    houseplants (plant_name, quantity, is_succulent, colors)
VALUES
    (
        'Satin Pothos',
        2,
        false,
        ARRAY ['darkgreen', 'silver']
    ),
    (
        'Monstera Adansonii',
        1,
        false,
        ARRAY ['green']
    ),
    (
        'Sansevieria',
        1,
        true,
        ARRAY ['darkgreen', 'lightgreen', 'yellow']
    ),
    (
        'Aloe Vera',
        15,
        true,
        ARRAY [ 'lightgreen']
    ),
    (
        'Spider Plant',
        1,
        false,
        ARRAY [ 'green']
    );
```

👉 Take a moment to read each line of the above code and talk through with your partner what it means.

👉 Navigate to [our sample database on db-fiddle.com](https://www.db-fiddle.com/f/qRdC2W8WULw98eL7aGD8KZ/1).

👉 There are two windows, one with the Schema SQL already put in to set up our table and one with Query SQL where you'll be writing your queries.

### Task 1 - Getting your information

Now that we have our table set up we can begin writing some of our own queries. Write code for these exercises in the Query SQL section.

👉 There is currently a query that will return all the data in your table. Click `run`, and you should see five plants printed out.

👉 Alter your query so that it will return all the plants in your table that are succulents, and then click `run` to check that you have done so correctly.

👉 Alter your query again so that it will return all the plants that are succulents _and_ that you have more than one of in your collection, and then click `run` to check that you have done so correctly.

### Task 2 - Updating the table

Happy day! You've just propagated your satin pothos successfully into another whole plant, so you need to update how many of that plant that you have in your database.

👉 Delete your previous queries and write a query to update the row in your table that stores the information about your satin pothos plants and return the updated information about that row. 

### Task 3 - Deleting Rows

Ah... Maybe it's not such a happy day. You noticed that your Monstera Adansonii has wilted beyond the point of no return. You win some, you lose some! You decide that that's too tricky a plant to try and grow in your house and give up on it entirely.

👉 Delete your previous queries and write a query to delete the Monstera's whole row from the database, identifying it by its `plant_id`.

👉 After this query, write another query to return all the entries in your table to check that the Monstera has gone!

### Bonus: 

👉 Design your own database with the data of your choosing (for example, your favorite books or movies or things you or your partner might collect); draft your table structure in Excel or Google Sheets and plan out what types of data go into each column.

👉 Write your schema SQL in a [new DB Fiddle](https://www.db-fiddle.com/) to set up your table. Don't forget to change it to Postgres v12 at the top!

👉 Practice doing each CRUD operation on your table (creating, reading, updating, and deleting). Remember that you can use `SELECT` statements to see your changes and make sure you're on the right track.

## Part 2: More SQL practice with SQL Bolt ⚡

👉 If you've finished exploring SQL with the plants table and then your own table above with the bonus activities, head to [SQL Bolt](https://sqlbolt.com/) to get started on the exercises there. Work together with your partner, sharing your screen for alternate tasks. Read each page carefully before doing the activities.
