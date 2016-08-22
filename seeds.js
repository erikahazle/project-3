var REPL = require('repl');
var db = require('./app/models/user');

var repl = REPL.start('BabyPass >');
repl.context.db = db;

// == clear database +++++++++
db.User.collection.remove();
db.Activity.collection.remove();

// ==== activities +++++++++
var activity1 = {
  title: 'Active Physical Play',
  address: "St. Hilda's Community Centre , 18 Club Row, London, E2 7PY",
  image: 'activity1.jpg',
  description: 'An active physcial play session for families and their children under 5 years. Set in a large hall, with a range of large soft play equipment, sit and ride toys and immaginative play resources.',
  capacity: 20,
  age_from: 3,
  age_to: 6,
  date: Date('2014-12-08')
};

var activity2 = {
  title: 'Early Years Soft Play Sessions',
  address: "Mile End Children's Park, Locksley Street, London, E14 7EJ",
  image: 'activity2.jpg',
  description: "A soft play session with a big range of play equipment for parents / carers and children under four who live in Tower Hamlets. Come and have fun with your child, meet up with friends and meet new people.",
  capacity: 10,
  age_from: 2,
  age_to: 4,
  date: Date('2015-08-07')
};

var activity3 = {
  title: "Gymboree Docklands",
  address: "95 Blackwall Way, New Providence Wharf, London, E14 9QT",
  image: "activity3.jpg",
  description: "You will have exclusive use of our gym studio filled with colourful custom made play equipment for under 5s in a safely matted area. A 2 hour party is hosted by an enthusiastic trained teacher and will include music, dance, games and our famous bubbles! We have themes such as farmyard animals, cars & trains, princesses or jungle safari to make your little ones birthday party extra special.",
  capacity: 10,
  age_from: 2,
  age_to: 5,
  date: Date('2015-08-07')
};

// // ========

var activity4 = {
    title: "Mudlarks Children's Gallery",
    address: "Museum in Docklands, No. 1 Warehouse, West India Quay, Hertsmere Road, London, E14 4AL",
    image: "activity4.jpg",
    description: "Great modern museum visually telling the history of London and Docklands with a special 'Mudlarks' gallery for children. Under fives can explore the soft play area with its DLR train and giant props, while older children can get to grips with hands-on interactives that bring the history of London’s Docks to life. There are also an exciting programme of activities for chidren under five and their carers. The Gallery is suitable for all under 12's. Nappy changing facilities, a cafe and restaurant (both with high chairs). Close to child friendly pubs, restaurants and Canary Wharf shopping.",
    capacity: 10,
    age_from: 1,
    age_to: 12,
    date: Date('2015-06-25')
  };


var activity5 = {
    title: "Tiller Leisure Centre - Little Rascal's playzone",
    address: "Tiller Road, Isle of Dogs, London, E14 8PX",
    image: "activity5.jpg",
    description: "Little Rascal's Playzone is quite a small soft play for children from 3-8. It has a smaller and a slightly larger soft play zone with two slides and a ball pit. It's incredibly clean, and since it's not known that well, very quiet!",
    capacity: 10,
    age_from: 3,
    age_to: 8,
    date: Date('2015-07-25')
  };

  var activity88 = {
    title: "Christchurch Toy Library",
    address: "The Parish Room, Christchurch, Manchester Road, Isle of Dogs, Isle of dogs , London, E14 9BN",
    image: "activity2.jpg",
    description: "This play session is for carers and 0 - 2 1/2 year olds. You can then borrow the toys for a 3 week period. There are toys, crafts (eg playdough) and books, with songtime at the end. In good weather the group has use of the next-door, large, vicarage lawn. Pushchairs are left in the church entrance hall downstairs.",
    capacity: 10,
    age_from: 0,
    age_to: 3,
    date: Date('2015-06-15')
  };

  var activity89 = {
    title: "Christchurch Toy Library",
    address: "The Parish Room, Christchurch, Manchester Road, Isle of Dogs, Isle of dogs , London, E14 9BN",
    image: "activity2.jpg",
    description: "This play session is for carers and 0 - 2 1/2 year olds. You can then borrow the toys for a 3 week period. There are toys, crafts (eg playdough) and books, with songtime at the end. In good weather the group has use of the next-door, large, vicarage lawn. Pushchairs are left in the church entrance hall downstairs.",
    capacity: 10,
    age_from: 0,
    age_to: 3,
    date: Date('2015-06-17')
  };

    var activity90 = {
    title: "Christchurch Toy Library",
    address: "The Parish Room, Christchurch, Manchester Road, Isle of Dogs, Isle of dogs , London, E14 9BN",
    image: "activity2.jpg",
    description: "This play session is for carers and 0 - 2 1/2 year olds. You can then borrow the toys for a 3 week period. There are toys, crafts (eg playdough) and books, with songtime at the end. In good weather the group has use of the next-door, large, vicarage lawn. Pushchairs are left in the church entrance hall downstairs.",
    capacity: 10,
    age_from: 0,
    age_to: 3,
    date: Date('2015-06-20')
  };

var activity17 = {
    title: "V&A Museum of Childhood Sensory Pod",
    address: "Cambridge Heath Rd, London, E2 9PA",
    image: "activity3.jpg",
    description: "Amid the plethora of playthings and child-related artefacts, the Sensory Pod is a cosy corner of impressions and illuminations. With an assortment of water- and bubble-filled columns and mirrors creating a dazzling mini maze, your baby will be surrounded by a kaleidoscope of colour and movement. Little ones can either sit or stand right up close to get touchy-feely and explore surfaces.",
    capacity: 10,
    age_from: 0,
    age_to: 3,
    date: Date('2015-07-07')
  };


var activity18 = {
    title: "National Army Museum Kids' Zone",
    address: "Royal Hospital Rd, London, SW3 4HT ",
    image: "activity5.jpeg",
    description: "There are plenty of interactive activities on hand in this snug section designed for babies and toddlers. With everything scaled down to small proportions, tots can pull themselves up to standing position – eliciting shrieks of joy from babies and parents alike.",
    capacity: 10,
    age_from: 2,
    age_to: 4,
    date: Date('2015-07-16')
  };


var activity22 = {
    title: "V&A Museum of Childhood Sensory Pod",
    address: "Cambridge Heath Rd, London, E2 9PA",
    image: "activity3.jpg",
    description: "Amid the plethora of playthings and child-related artefacts, the Sensory Pod is a cosy corner of impressions and illuminations. With an assortment of water- and bubble-filled columns and mirrors creating a dazzling mini maze, your baby will be surrounded by a kaleidoscope of colour and movement. Little ones can either sit or stand right up close to get touchy-feely and explore surfaces.",
    capacity: 10,
    age_from: 0,
    age_to: 3,
    date: Date('2015-07-07')
  };


var activity23 = {
    title: "National Army Museum Kids' Zone",
    address: "Royal Hospital Rd, London, SW3 4HT ",
    image: "activity5.jpeg",
    description: "There are plenty of interactive activities on hand in this snug section designed for babies and toddlers. With everything scaled down to small proportions, tots can pull themselves up to standing position – eliciting shrieks of joy from babies and parents alike.",
    capacity: 10,
    age_from: 2,
    age_to: 4,
    date: Date('2015-07-16')
  };

var activity19 = {
    title: "The Bee's Knees Indoor Children's Garden",
    address: "166 Lavender Hill, Battersea, London, SW11 5TN",
    image: "activity19.jpeg",
    description: "A gentle world of softly undulating ‘hills’, this chill-out zone conjures up a rural idyll fashioned after Teletubbies. There’s ample space for babies to practise crawling and climbing through explorative play amid the warm colours and scatter cushions.",
    capacity: 10,
    age_from: 2,
    age_to: 4,
    date: Date('2015-07-29')
  };


var activity20 = {
    title: "Parent and Baby (PABA) Aqua Aerobics",
    address: "Queen Elizabeth Olympic Park, E20",
    image: "activity20.jpeg",
    description: "The Aquakiddies/Babies PABA aqua aerobics course has been piloted over six months with several groups of mothers nationally, with all groups showing very positive results. Babies have become water confident and are learning the foundations of swimming, while Parents are taken through a carefully structured water aerobics exercise program.",
    capacity: 10,
    age_from: 2,
    age_to: 4,
    date: Date('2015-07-25')
  };


var activity21 = {
    title: "Busy Rascals",
    address: "Queensbury Pub, 110 Walm Lane, Willesden Green NW2 4RS",
    image: "activity8.jpeg",
    description: "Busy Rascals provide a baby and child friendly environment where parents in NW2, NW10 and in local areas can meet, socialise and participate in various activities with their little ones. Busy Rascals host parent and baby/toddler/pre-schooler mornings Monday to Friday and one Saturday per month between 9.30am-11.30am",
    capacity: 10,
    age_from: 0,
    age_to: 6,
    date: Date('2015-06-25')
  };

var activity77 = {
    title: "Stratford Circus",
    address: "Theatre Square, Stratford, Stratford, E15",
    image: "activity7.jpeg",
    description: "Stratford Circus - A performing arts venue, putting our community centre stage. 'Stratford Circus is an incubator for young imaginations and if imagination is celebrated and nurtured it will provide the next generation of performance makers and audiences.’Paloma Faith, Artistic Ambassador for Stratford Circus",
    capacity: 10,
    age_from: 2,
    age_to: 4,
    date: Date('2015-07-20')
  };

  var activity78 = {
    title: "Stratford Circus",
    address: "Theatre Square, Stratford, Stratford, E15",
    image: "activity7.jpeg",
    description: "Stratford Circus - A performing arts venue, putting our community centre stage. 'Stratford Circus is an incubator for young imaginations and if imagination is celebrated and nurtured it will provide the next generation of performance makers and audiences.’Paloma Faith, Artistic Ambassador for Stratford Circus",
    capacity: 10,
    age_from: 2,
    age_to: 4,
    date: Date('2015-07-23')
  };

  var activity79 = {
    title: "Stratford Circus",
    address: "Theatre Square, Stratford, Stratford, E15",
    image: "activity7.jpeg",
    description: "Stratford Circus - A performing arts venue, putting our community centre stage. 'Stratford Circus is an incubator for young imaginations and if imagination is celebrated and nurtured it will provide the next generation of performance makers and audiences.’Paloma Faith, Artistic Ambassador for Stratford Circus",
    capacity: 10,
    age_from: 2,
    age_to: 4,
    date: Date('2015-07-25')
  };

// ==== I M A G E     N E E D E D ========

var activity6 = {
    title: "Yoga babies",
    address: "5 Old Ford Rd, London, E2 9PJ",
    image: "baby-yoga.jpg",
    description: "Learn how to teach baby yoga with our baby yoga instructor course across the UK and in your home. Our 'open' baby yoga instructor training courses are held in London, Doncaster and Sheffield.",
    capacity: 10,
    age_from: 0,
    age_to: 3,
    date: Date('2015-07-25')
  };

// ==== I M A G E     N E E D E D ========
var activity7 = {
    title: "Zen Babes",
    address: "221 The Highway, London, E1W 3BP",
    image: "baby-yoga2.jpeg",
    description: "Teaching parents and carers how to practise yoga with their babies can be an incredibly rewarding experience and of great benefit for all parties. Our Sale is underway with £20 savings on our full price baby yoga instructor open courses across the UK and baby yoga instructor distance learning with training starting from only £306 (distance learning option)!!",
    capacity: 10,
    age_from: 0,
    age_to: 2,
    date: Date('2015-07-14')
  };
// ==== I M A G E     N E E D E D ========
var activity8 = {
    title: "Baby Massage",
    address: "15 Marshall Street, London, W1F 7EL",
    image: "baby-mass.jpeg",
    description: "It is through loving, caressing, tactile stimulation and communication that the infant learns that he/she is loved. We must speak to their skins. We must speak to their backs, which thirst and cry as much as their bellies. Join us in this enriching experience for both infant and parent",
    capacity: 10,
    age_from: 0,
    age_to: 2,
    date: Date('2015-06-29')
  };

// ==== I M A G E     N E E D E D ========
  var activity11 = {
    title: "Toy Library Stay & Play",
    address: "St Mary & St Micheal primary school, St Mary & St Michael Church Hall, London, E1 0AA",
    image: "toy-lib.jpg",
    description: "Stay and play Toy Library, Come along and have fun with your children, Meet other parents, Prepare your child for school, Warm, safe and welcoming environmentfree! Goody bags packed with fun idea for things to do at home. Refreshments provided",
    capacity: 10,
    age_from: 0,
    age_to: 4,
    date: Date('2015-07-06')
  };

// ==== I M A G E     N E E D E D ========
var activity12 = {
    title: "I Love to Swim",
    address: "Sir John Cass Secondary School, Stepney Way, 282 Grange Road, London, GREAT BRITAIN, E1 0RH",
    image: "kids-swim.jpeg",
    description: "Small group swimming lessons for children take place at Sir John Cass School in the East London Borough of Tower Hamlets. As the Love to Swim Scheme incorporates the ASA Nation Plan for Teaching Swimming there is a clear pathway for progression. Children will not be recommended to move up a class until they have achieved the standards, this is important has children may lose confidence if they are put into a higher group and cannot complete the tasks.",
    capacity: 10,
    age_from: 2,
    age_to: 16,
    date: Date('2015-08-01')
  };

// ==== I M A G E     N E E D E D ========
var activity13 = {
    title: "Rio Cinema",
    address: "107 Kingsland High Street, Hackney, London, E8 2PB",
    image: "baby-cine.jpg",
    description: "Screenings are on most Tuesdays and Thursdays. The idea behind the Club is to enable parents with babies to visit the cinema regularly without having to find a baby sitter or worry about their babies causing disturbance. The auditorium is slightly lighter than normal and a secure space is provided for pushchairs. The Club is exclusively for parents with babies under 1 year old. Membership is free but you do need to sign up and receive a membership card to come to these screenings. Join the Club on the day or email us: mail@riocinema.org.uk giving us your name, address, telephone number and your baby's name and date of birth.",
    capacity: 10,
    age_from: 0,
    age_to: 1,
    date: Date('2015-07-17')
  };

var activity14 = {
    title: "Discover Children's Story Centre",
    address: "383 - 387 High Street, Stratford, London, E15 4QZ",
    image: "activity14.jpeg",
    description: "Discover Children's Story Centre in Stratford, East London, is a place where children aged 0-11 and their families can enjoy playing, learning and making up stories together. Let your imagination soar on our indoor Story Trail exploring a secret cave or climbing a magic tower. Have an adventure in our Story Garden - sail away on a pirate ship, slide down a monster's tongue or play with giant musical instruments. Our Story Studio hosts interactive family exhibitions by famous picture book illustrators. We also have a full programme of storytelling, crafts and workshops and visits by your favourite picture book authors and illustrators.",
    capacity: 10,
    age_from: 2,
    age_to: 14,
    date: Date('2015-08-18')
  };

var activity15 = {
    title: "Deen City Farm",
    address: "39 Windsor Avenue, Merton Abbey, London, SW19 2RR",
    image: "activity6.jpeg",
    description: "Set on part of the National Trust's Morden Hall Park Estate, Deen City Farm provides south Wimbledon with a healthy dose of the countryside. Meet the farmyard residents (including Milo and Kimby the alpacas), buy grass nuts to feed the animals or squeal over the newly born ducklings, chicks and lambs. With funding cuts looming, the farm is determined to stay open and is continuing to offer its Growing Garden community project and free bicycle surgeries. For kids, there is also a youngfarmers club and 'Own A Pony Days' for a taste of life on the farm.",
    capacity: 50,
    age_from: 2,
    age_to: 16,
    date: Date('2015-07-24')
  };

  var activity114 = {
    title: "Discover Children's Story Centre",
    address: "383 - 387 High Street, Stratford, London, E15 4QZ",
    image: "activity14.jpeg",
    description: "Discover Children's Story Centre in Stratford, East London, is a place where children aged 0-11 and their families can enjoy playing, learning and making up stories together. Let your imagination soar on our indoor Story Trail exploring a secret cave or climbing a magic tower. Have an adventure in our Story Garden - sail away on a pirate ship, slide down a monster's tongue or play with giant musical instruments. Our Story Studio hosts interactive family exhibitions by famous picture book illustrators. We also have a full programme of storytelling, crafts and workshops and visits by your favourite picture book authors and illustrators.",
    capacity: 10,
    age_from: 2,
    age_to: 14,
    date: Date('2015-08-28')
  };

var activity115 = {
    title: "Deen City Farm",
    address: "39 Windsor Avenue, Merton Abbey, London, SW19 2RR",
    image: "activity6.jpeg",
    description: "Set on part of the National Trust's Morden Hall Park Estate, Deen City Farm provides south Wimbledon with a healthy dose of the countryside. Meet the farmyard residents (including Milo and Kimby the alpacas), buy grass nuts to feed the animals or squeal over the newly born ducklings, chicks and lambs. With funding cuts looming, the farm is determined to stay open and is continuing to offer its Growing Garden community project and free bicycle surgeries. For kids, there is also a youngfarmers club and 'Own A Pony Days' for a taste of life on the farm.",
    capacity: 50,
    age_from: 2,
    age_to: 16,
    date: Date('2015-07-28')
  };


// // ==== end of Activity definitions ++++++++++++++++

// // =====  Add     C U S T O M E R S    =======

// db.User.create({
//     name: 'julie morgan',
//     email: 'info@toyhouse.org.uk',
//     phone: '020 7987 7399',
//     role: 'Customer'
// }, function(err, user){
//   db.Activity.create(activity1, function(err, activity) {
//     console.log('activity1 has been created', activity);
//     user.activities.push(activity);
//     user.save();
//   })

//   db.Activity.create(activity2, function(err, activity) {
//     console.log('activity2 has been created');
//     user.activities.push(activity);
//     user.save();
//   })

//   db.Activity.create(activity3, function(err, activity) {
//     console.log('activity3 has been created');
//     user.activities.push(activity);
//     user.save();
//   })
// });

// db.User.create({
//   local: {
//     name: 'julie morgan',
//     email: 'info@toyhouse.org.uk',
//     phone: '020 7987 7399',
//     role: 'Customer',
//     password: 'password1'
//   }
//     }, function(err, user){
//   db.Activity.create(activity1, function(err, activity) {
//     console.log('activity1 has been created', activity);
//     user.local.activities.push(activity);
//     user.save()
//   })

//   db.Activity.create(activity2, function(err, activity) {
//     console.log('activity2 has been created');
//     user.local.activities.push(activity);
//     user.save();
//   })

//   db.Activity.create(activity3, function(err, activity) {
//     console.log('activity3 has been created');
//     user.local.activities.push(activity);
//     user.save();
//   })
// });

// // -------

// db.User.create({

//     name: 'Samuel Jones',
//     email: 'sam@btinternet.com',
//     phone: '020 7934 5467',
//     role: 'Customer'
// }, function(err, user){
//   db.Activity.create(activity17, function(err, activity) {
//     console.log('activity17 has been created', activity);
//     user.activities.push(activity);
//     user.save()
//   })

// });

// // --------

// db.User.create({

//     name: 'Anika Morris',
//     email: 'Annie@talktalk.net',
//     phone: '021 3487 4499',
//     role: 'Customer'
// }, function(err, user){

//   db.Activity.create(activity3, function(err, activity) {
//     console.log('activity3 has been created');
//     user.activities.push(activity);
//     user.save();
//   })
// });

// // ==== end of add customers ++++++++++++++++

// // =====  Add     V E N D O R S    =======

// -----

db.User.create({
    local: {
      name: 'Fiona Morris',
      email: 'fido@gmail.com',
      phone: '021 3347 1459',
      role: 'Vendor', 
      password: 'password1'
  }
}, function(err, user){
  db.Activity.create(activity4, function(err, activity) {
    console.log('activity has been created');
    user.local.activities.push(activity);
    user.save();
    console.log(user);
  })
});

// -- user created by brian wed 24th 13:34
db.User.create({
    local: {
      name: 'Tina Morgan',
      email: 'timo@gmail.com',
      phone: '020 3217 8759',
      role: 'Vendor', 
      password: 'password2'
  }
}, function(err, user){
  db.Activity.create(activity88, function(err, activity) {
    console.log('activity88 has been created');
    user.local.activities.push(activity);
    user.save();
    console.log(user);
  })
  db.Activity.create(activity89, function(err, activity) {
    console.log('activity89 has been created');
    user.local.activities.push(activity);
    user.save();
    console.log(user);
  })
  db.Activity.create(activity90, function(err, activity) {
    console.log('activity90 has been created');
    user.local.activities.push(activity);
    user.save();
    console.log(user);
  })
});

db.User.create({
    local: {
      name: 'Malcolm Moore',
      email: 'malc@talktalk.net',
      phone: '020 3567 2249',
      role: 'Vendor', 
      password: 'password3'
  }
}, function(err, user){
  db.Activity.create(activity17, function(err, activity) {
    console.log('activity17 has been created');
    user.local.activities.push(activity);
    user.save();
    console.log(user);
  })
  db.Activity.create(activity18, function(err, activity) {
    console.log('activity18 has been created');
    user.local.activities.push(activity);
    user.save();
    console.log(user);
  })
});


db.User.create({
    local: {
      name: 'Rupert Roberts',
      email: 'rupert@gmail.com',
      phone: '020 3337 1649',
      role: 'Vendor', 
      password: 'password4'
  }
}, function(err, user){
  db.Activity.create(activity22, function(err, activity) {
    console.log('activity22 has been created');
    user.local.activities.push(activity);
    user.save();
    console.log(user);
  })
  db.Activity.create(activity23, function(err, activity) {
    console.log('activity23 has been created');
    user.local.activities.push(activity);
    user.save();
    console.log(user);
  })
});

db.User.create({
    local: {
      name: 'Amil Hassan',
      email: 'amilh@gmail.com',
      phone: '021 3337 1229',
      role: 'Vendor', 
      password: 'password5'
  }
}, function(err, user){
  db.Activity.create(activity77, function(err, activity) {
    console.log('activity77 has been created');
    user.local.activities.push(activity);
    user.save();
    console.log(user);
  })
  db.Activity.create(activity78, function(err, activity) {
    console.log('activity78 has been created');
    user.local.activities.push(activity);
    user.save();
    console.log(user);
  })
  db.Activity.create(activity79, function(err, activity) {
    console.log('activity79 has been created');
    user.local.activities.push(activity);
    user.save();
    console.log(user);
  })
});

db.User.create({
    local: {
      name: 'Jeff Milton',
      email: 'amilh@gmail.com',
      phone: '021 3337 1229',
      role: 'Vendor', 
      password: 'password6'
  }
}, function(err, user){
  db.Activity.create(activity19, function(err, activity) {
    console.log('activity19 has been created');
    user.local.activities.push(activity);
    user.save();
    console.log(user);
  })
});

db.User.create({
    local: {
      name: 'Rakmil Hunoram',
      email: 'rakki@gmail.com',
      phone: '020 3237 1459',
      role: 'Vendor', 
      password: 'password7'
  }
}, function(err, user){
  db.Activity.create(activity20, function(err, activity) {
    console.log('activity20 has been created');
    user.local.activities.push(activity);
    user.save();
    console.log(user);
  })
});

db.User.create({
    local: {
      name: 'Ronald Fanshawe',
      email: 'ronnief@gmail.com',
      phone: '021 645 2987',
      role: 'Vendor',
      password: 'password8'
  }
}, function(err, user){
  db.Activity.create(activity21, function(err, activity) {
    console.log('activity21 has been created');
    user.local.activities.push(activity);
    user.save();
    console.log(user);
  })
});


// ==== assign activities to following -----
db.User.create({
    local: {
      name: 'Stuart Woods',
      email: 'Stuartw@gmail.com',
      phone: '020 623 2542',
      role: 'Vendor',
      password: 'password9'
  }
}, function(err, user){
  db.Activity.create(activity14, function(err, activity) {
    console.log('activity14 has been created');
    user.local.activities.push(activity);
    user.save();
    console.log(user);
  })
  db.Activity.create(activity114, function(err, activity) {
    console.log('activity114 has been created');
    user.local.activities.push(activity);
    user.save();
    console.log(user);
  })
});

db.User.create({
    local: {
      name: 'Chloe Warnick',
      email: 'cwclasses@gmail.com',
      phone: '020 611 2892',
      role: 'Vendor',
      password: 'password10'
  }
}, function(err, user){
  db.Activity.create(activity15, function(err, activity) {
    console.log('activity15 has been created');
    user.local.activities.push(activity);
    user.save();
    console.log(user);
  })
  db.Activity.create(activity115, function(err, activity) {
    console.log('activity115 has been created');
    user.local.activities.push(activity);
    user.save();
    console.log(user);
  })
});

db.User.create({
    local: {
      name: 'Samantha Warwick',
      email: 'wetbabes@gmail.com',
      phone: '020 611 2892',
      role: 'Vendor',
      password: 'password11'
  }
}, function(err, user){
  db.Activity.create(activity6, function(err, activity) {
    console.log('activity6 has been created');
    user.local.activities.push(activity);
    user.save();
    console.log(user);
  })
  db.Activity.create(activity7, function(err, activity) {
    console.log('activity7 has been created');
    user.local.activities.push(activity);
    user.save();
    console.log(user);
  })
  db.Activity.create(activity8, function(err, activity) {
    console.log('activity8 has been created');
    user.local.activities.push(activity);
    user.save();
    console.log(user);
  })
});

// ====== blank V E N D O R ======


// db.User.create({
//     local: {
 
//       password: 'password2'
//   }
// }, function(err, user){
//   db.Activity.create(activity19, function(err, activity) {
//     console.log('activity19 has been created');
//     user.local.activities.push(activity);
//     user.save();
//     console.log(user);
//   })
// });






