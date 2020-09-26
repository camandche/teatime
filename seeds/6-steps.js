
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('steps').del()
    .then(function () {
      // Inserts seed entries
      return knex('steps').insert([
        {id: 1, recipe_id: 1, step_number: 1, step_desc: 'In a medium saucepan, melt the butter with a dash of olive oil over a medium heat. Add the garlic and cook until fragrant, 1-2 minutes. Add the basmati rice, water (for the rice) and the salt, stir, and bring to the boil. Reduce the heat to low and cover with a lid. Cook for 10 minutes, then remove from the heat and keep covered until the rice is tender and the water is absorbed, 10 minutes.'},
        {id: 2, recipe_id: 1, step_number: 2, step_desc: 'While the rice is cooking, finely grate the ginger. Cut the pork loin steaks into 2cm chunks. In a medium bowl, combine the ginger, pork, 1/2 the soy sauce and a drizzle of olive oil. Toss to coat and set aside.'},
        {id: 3, recipe_id: 1, step_number: 3, step_desc: 'Roughly chop the coriander. Cut the tomato and cucumber into 1cm chunks. Roughly chop the baby spinach leaves. Thinly slice the spring onion. Zest the lime to get a generous pinch, then slice into wedges.'},
        {id: 4, recipe_id: 1, step_number: 4, step_desc: 'In a large frying pan, heat a drizzle of olive oil over a medium-high heat. Add the pork and cook, tossing until almost cooked through, 2-3 minutes. Reduce the heat to medium and add the honey, water (4tsp) and the remaining soy sauce. Cook, stirring, until slightly reduced, 2-3 minutes. Remove from the heat and stir through 1/2 the coriander.'},
        {id: 5, recipe_id: 1, step_number: 5, step_desc: 'In a medium bowl, combine the tomato, cucumber, baby spinach, spring onion, lime zest and remaining coriander. Just before serving, toss with a drizzle of olive oil, a good squeeze of lime juice and a pinch of salt and pepper.'},
        {id: 6, recipe_id: 1, step_number: 6, step_desc: 'Divide the garlic rice between bowls and top with the caramelised pork and zesty tomato and cucumber salad. Sprinke with the crispy shallots and serve with any remaining lime wedges.'},
        {id: 7, recipe_id: 2, step_number: 1, step_desc: 'Finely chop the garlic. Scrunch up the markut leaves. In a medium saucepan, melt 1/2 the butter with a dash of olive oil over a medium heat. Add the makrut leaves and 1/2 the garlic and cook until fragrant, 1-2 minutes. Add the jasmine rice, water and salt and bring to the boil. Reduce the heat to low and cover with a lid. Cook for 12 minutes, then remove from the heat and keep covered until the rice is tender and the water is absorbed, 10-15 minutes.'},
        {id: 8, recipe_id: 2, step_number: 2, step_desc: 'While the rice is cooking, thinly slice the capsicum into strips. Thinly slice the carrot into half-moons. Slice the lime into wedges.'},
        {id: 9, recipe_id: 2, step_number: 3, step_desc: 'In a large frying pan or wok, heat a drizzle of olive oil over a high heat. When the oil is hot, add 1/2 the beef strips and cook until browned, 1-2 minutes. Transfer to a bowl and repeat with the remaining beef strips.'},
        {id: 10, recipe_id: 2, step_number: 4, step_desc: 'Return the frying pan to a medium-high heat with a drizzle of olive oil if needed. Add the onion and cook, stirring occasionally, untill just softened, 2-3 minutes. Add the capsicum and carrot and cook, tossing, until softened, 4-5 minutes. Add the baby spinach leaves and remaining garlic to the pan and cook until fragrant, 1 minutes.'},
        {id: 11, recipe_id: 2, step_number: 5, step_desc: 'Add the Thai red curry paste and the remaining butter to the pan and stir to coat. Cook untill fragrant, 1-2 minutes. Add the soy sauce, brown sugar and 2 tbs of water and stir to combine. Return the beef strips and any resting juices to the pan and toss to combine until heated through, 1-2 minutes. Add a squeeze of lime jiuce to taste.'},
        {id: 12, recipe_id: 2, step_number: 6, step_desc: 'Remove the makrut leaves from the jasmine rice. Divide the rice between bowls and top with the Thai beef stir-fry. Garnish with the remaining lime wedges.'},
        {id: 13, recipe_id: 3, step_number: 1, step_desc: 'Finely chop the garlic. In a medium bow, combine the garlic, soy sauce and honey. Add the beef strips, toss to coat and set aside to marinate.'},
        {id: 14, recipe_id: 3, step_number: 2, step_desc: 'While the beef is marination, thinly slice the red onion. In a small bowl combine the vinegar, 1/4 cup of water, the salt and sugar. Scrunch the onion in your hands, then add the pickling liquid and stir to coat. Set aside until just before serving.'},
        {id: 15, recipe_id: 3, step_number: 3, step_desc: 'While the onion is pickling, grate the carrot. Shred the cos lettuce. In a second medium bowl, combine the carrot and lettuce. Season with a pinch of salt and pepper and toss to coat. Set aside.'},
        {id: 16, recipe_id: 3, step_number: 4, step_desc: 'In a medium frying pan, heat a drizzle of olive oil over a high heat. When the oil is hot, add 1/2 the beef strips and cook, tossing, until browned and cooked through, 1-2 minutes. Transfer to a plate and repeat with the remaining strips.'},
        {id: 17, recipe_id: 3, step_number: 5, step_desc: 'While the beef is cooking, heat the mini flour tortillas in a sandwich press, or on a plate in the microwave for 10 second bursts, until warmed through.'},
        {id: 18, recipe_id: 3, step_number: 6, step_desc: 'Drain the liquid from the pickled onion. Take everything to the table to serve. Top the tortillas with the salad, Korean beef and quick pickled onions. Add a dollop of garlic aioli. Sprinkle with the crispy shallots and a pinch of chilli flakes.'},
        {id: 19, recipe_id: 4, step_number: 1, step_desc: 'Combine rice, water and salt in a medium pot and bring to the boil. As soon as it boils, cover with a lid and reduce to the lowest heat to cook for 12 minutes. Turn off heat, keep lid on and leave to steam for a further 8 minutes - NO PEEKING!'},
        {id: 20, recipe_id: 4, step_number: 2, step_desc: 'While rice cooks, thinly slice 2 cups worth of cabbage, then add sliced spring onions, grated carrot and courgette. Mix in a medium sized bowl and set aside.'},
        {id: 21, recipe_id: 4, step_number: 3, step_desc: 'In a separate bowl, combine flour and chicken oxo cube. Pat chicken dry and dice into 3cm sized pieces. Add to flour mix and toss well to combine.'},
        {id: 22, recipe_id: 4, step_number: 4, step_desc: 'Heat a little oil in a large fry-pan on medium-high heat. Shake off excess flour and cook chicken for 5-6 minutes, turn on all sides until cooked through and golden. Set aside on paper towels and season with salt.'},
        {id: 23, recipe_id: 4, step_number: 5, step_desc: 'In a small bowl combine second measure of mayonnaise and sesame oil.'},
        {id: 24, recipe_id: 4, step_number: 6, step_desc: 'Just before serving, add remaining slaw ingredients to the bowl, mix to combine and season to taste.'},
        {id: 25, recipe_id: 4, step_number: 7, step_desc: 'To serve, spoon rice onto plates, top with chicken and serve slaw on the side with a dollop of sesame mayonnaise'},
        {id: 26, recipe_id: 5, step_number: 1, step_desc: 'Peel and cut potatoes into 2cm cubes and put into a medium pot of salted water; then boil for 12-15 minutes, until very soft. Drain water and mash until smooth. Add milk, butter and season to taste. Mix together and set aside.'},
        {id: 27, recipe_id: 5, step_number: 2, step_desc: 'While potatoes are cooking, finely dice onion, thinly slice carrot on an angle, cut mushrooms into slices and also set aside.'},
        {id: 28, recipe_id: 5, step_number: 3, step_desc: 'Make a beef stock by dissolving the OXO cube in 3/4 cup of boiling water. Set aside.'},
        {id: 29, recipe_id: 5, step_number: 4, step_desc: 'Heat a little oil in a large fry-pan on medium-high heat. When the oil is hot, add 1/2 the beef strips and cook, tossing, until brown and cooked through, 1-2 minutes. Transfer to a plate and cover. Repeat process with the remaining strips.'},
        {id: 30, recipe_id: 5, step_number: 5, step_desc: 'Return pan to heat with a little more oil. Cook onion, carrot and mushrooms for about 5 minutes, until brown.'},
        {id: 31, recipe_id: 5, step_number: 6, step_desc: 'Add the stroganoff spices and cook for 1 minute - paprika, garlic powder, onion powder, tarragon and mild curry powder. Stir until fragrant. Add the beef stock, cream, mustard, vinegar and peas and cook for about 3 minutes, until sauce is thickened and veggies are tender.'},
        {id: 32, recipe_id: 5, step_number: 7, step_desc: 'Add beef strips back in the pan to warm through. Season to taste.'},
        {id: 33, recipe_id: 5, step_number: 8, step_desc: 'To serve, spoon the potato mash onto the plates and top with the beef stroganoff.'},
        {id: 34, recipe_id: 6, step_number: 1, step_desc: 'Preheat oven to 220 Deg. C'},
        {id: 35, recipe_id: 6, step_number: 2, step_desc: 'Cut kumara into chips and toss on a lined oven tray with olive oil. Season and roast for 20-25 mins, until golden brown.'},
        {id: 36, recipe_id: 6, step_number: 3, step_desc: 'Bring a small pot of salted water to the boil. (This is in preparation for the brocolli).'},
        {id: 37, recipe_id: 6, step_number: 4, step_desc: 'Prepare fish, check for bones and pat dry. Cut fillets into fish portions and place on another lined tray with a lipped edge. Season and coat fillets evenly with mayonnaise.'},
        {id: 38, recipe_id: 6, step_number: 5, step_desc: 'Roughly chop spinach, mix in a bowl with breadcrumbs and spices - dried chives, parsley and mustard powder. Add lemon zest and second measure of olive oil. Mix well and sprinkle mix evenly over fish to coat.'},
        {id: 39, recipe_id: 6, step_number: 6, step_desc: 'When kumara has 10 minutes left to cook, put fish tray on rack above kumara and cook for 8-10 minutes, until crumb is golden and fish is cooked through.'},
        {id: 40, recipe_id: 6, step_number: 7, step_desc: 'Cut brocolli into small florets and place in the boiling water for 6-8 minutes, until tender. Drain, refresh under cold water and drain again.'},
        {id: 41, recipe_id: 6, step_number: 8, step_desc: 'Prepare salad by whisking lemon juice, mustard, honey and third measure of oil (vegetable oil) together in a bowl.'},
        {id: 42, recipe_id: 6, step_number: 9, step_desc: 'Shred lettuce, cut tomato into thin wedges and thinly slice the onion. Add the brocolli and just before serving, add the dressing, mix and season to taste.'},
        {id: 43, recipe_id: 6, step_number: 10, step_desc: 'Serve herby crumbed fish with salad and kumara chips.'},
      ]);
    });
};
