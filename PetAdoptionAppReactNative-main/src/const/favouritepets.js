const pets = [
    {
      pet: 'pets',
      pets: [
        {
          id: '1',
          name: 'Ross',
          image: require('../assets/cat1.png'),
          type: 'Chausie',
          age: '5 years old',
          location:'No.34 , New York ',
          price:'Rs.15,000.00',
          description:'The Chausie is a domestic breed of cat that was developed by breeding a few individuals from the non-domestic species jungle cat to a far greater number of domestic cats',
        },
        {
            id: '2',
            name: 'Luther',
            image: require('../assets/dog6.png'),
            type: 'Cockapoo',
            age: '5 years old',
            location:'No.26 , New Jersy ',
            price:'Rs.7,000.00',
            description:'The Cockapoo blazed the trail among planned hybrids; hes the offspring of the Poodle and the Cocker Spaniel. Also known as the Cockapoodle, Cockerpoo.'
    
          },
        {
          id: '3',
          name: 'Chandler',
          image: require('../assets/cat3.png'),
          type: 'Ragamuffin',
          age: '2 years old',
          location:'No.23 , New York ',
          price:'Rs.45,000.00',
          description:'The Ragamuffin is a breed of domestic cat. It was once considered to be a variant of the Ragdoll cat but was established as a separate breed in 1994. Ragamuffins are notable for their friendly personalities and thick fur.'
  
        },
        {
            id: '4',
            name: 'Victor',
            image: require('../assets/bird3.png'),
            type: 'Sun Conure',
            age: '2 years old',
            location:'No.26 , Nevada ',
            price:'Rs.8,000.00',
            description:'The sun parakeet, also known in aviculture as the sun conure, is a medium-sized, vibrantly colored parrot native to northeastern South America. '
    
          },
          {
            id: '5',
            name: 'Boots',
            image: require('../assets/bunny1.png'),
            type: 'Angora',
            age: '1 years old',
            location:'No.26 , Nevada ',
            price:'Rs.8,000.00',
            description:'The Angora rabbit, which is one of the oldest types of rabbit, is bred for the long fibers of its coat, which are gathered by shearing. Because rabbits do not possess the same allergy-causing qualities as many other animals. '
    
          },
       
      ],
    },

    {
      pet: 'ACCESSORIES',
      pets: [
        {
            id: '1',
            name: ' Bone Shaped Dog Toy ',
            image: require('../assets/toy2.png'),
            type: 'RS 1399',
            age: 'only 89 items left',
            description : '*Squeaky Bone Shaped Rubber Dog Toy. \n *Colours: Yellow, Blue, Pink, Green. \n *Item Size: 16 x 5 cm. \n *Non-Toxic Material.  ' ,
            discount : 'RS 1̶5̶0̶0̶  12%'
    
          },
          {
            id: '2',
            name: 'Premium Kitty Cat Food',
            image: require('../assets/cat_food.png'),
            type: 'RS 669',
            age: 'only 450 Items Left',
            description : 'Whatever your kitts preference, the flavors in this variety pack are sure to result in satisfied purrs. mixed grill dinner, super supper dinner, and classic tuna dinner. This variety pack is the perfect way to stock up if you have a multi-cat home. The makers of Special Kitty cat food know that cats rule, and your cat is confident you would only serve her the very best food. ' ,
            discount : 'RS 8̶0̶0̶ - 12%'
          },
    
          {
            id: '3',
            name: 'Harness Collar',
            image: require('../assets/HarnessCollar.png'),
            type: 'RS 1,999',
            age: 'Only 50 Items Left',
            description : 'Features:100% brand new and high quality Chest collar only or walking lead leash only, or combined purchase by your needs. Metal loop top the pet chest collar is convenient for walking lead leash to attach to Durable yet breathable and comfortableSewing thread are light-reflection material for night safety walking With lock buckle to firmly fasten even strenuous. ',
            discount : 'RS 3̶,̶9̶0̶0̶  -48%'
          },
    
          
    
          {
            id: '4',
            name: 'Pet Nail Clipper',
            image: require('../assets/pet_nail_clipper.png'),
            type: 'RS 900',
            age: 'Only 220 Items Left',
            description : '*Adopt high quality material, sturdy and durable, and you an use for a long time \n *The scissor head is designed with protector to protect your pet when clipping its nails. \n *Universal for cats and dogs, helpful for keeping your lovely pet clean and healthy. ' ,
            discount : 'RS 9̶8̶0̶   %4'
          },
    
          {
            id: '5',
            name: ' Mini Cute  Wool Pet Toy ',
            image: require('../assets/toy4.png'),
            type: 'RS 650',
            age: 'only 49 items left',
            description : '*Mini and cute, portable and safe. \n *It is very suitable for puppy dog cleaning the teeth.\n *Helpful for solving the dogs molar problem        .  ' ,
            discount : 'RS 7̶2̶0̶  12%'
          },
        ],
      },

      {
        pet: 'VET CENTERS',
        pets: [
          {
            id: '1',
            name: 'Neighborhood Veterinary Center',
            image: require('../assets/vet1.jpg'),
            type: 'Malabe',
            description : 'Vet Center is a Vet Line Animal Clinic located in Malabe. It is one of the 59 Veterinary' + 
            'cares in Sri Lanka. Address of Vet Center is 35, kandy rd, Malabe, Sri Lanka. Vet Center has quite ' + 
            'many listed places around it and we are covering at least 47 places around it on Srilanka-Places.com.',
            
          },
          {
            id: '2',
            name: 'Anicira Veterinary Center',
            image: require('../assets/vet3.jpg'),
            type: 'Malabe',
            description : 'Anicira Veterinary Center located in Malabe. Our service are open 24/7' + 
            ' Address of Vet Center is 365, Gamunupura mawatha, Malabe, Sri Lanka. \n\nContact us +9434343434 ' + 
            '\nemail - petvetclinic@mail.com.' ,
            
          },
        ],
      }, 
  ];
  
  export default pets;
  