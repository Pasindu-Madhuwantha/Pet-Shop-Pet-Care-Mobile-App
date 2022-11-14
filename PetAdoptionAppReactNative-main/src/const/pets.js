const pets = [
  {
    pet: 'cats',
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
        gender:''
      },
      {
        id: '2',
        name: 'Joey',
        image: require('../assets/cat2.png'),
        type: 'Bobtail',
        age: '2 years old',
        location:'No.35 , Texas ',
        price:'Rs.35,000.00',
        description:'The American Bobtail is an uncommon breed of domestic cat which was developed in the late 1960s. It is most notable for its stubby "bobbed" tail about one-third to one-half the length of a normal cats tail.'

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
        name: 'Romeo',
        image: require('../assets/cat4.png'),
        type: 'Persian',
        age: '4 years old',
        location:'No.24 , New Jersey ',
        price:'Rs.25,000.00',
        description:'The Persian cat, also known as the Persian longhair, is a long-haired breed of cat characterized by a round face and short muzzle.'

      },
      {
        id: '5',
        name: 'Carl',
        image: require('../assets/cat5.png'),
        type: 'British Shorthai',
        age: '3 years old',
        location:'No.25 , Nevada ',
        price:'Rs.5,000.00',
        description:'The British Shorthair is a traditional British domestic cat, with a distinctively stocky body. The most familiar colour variant is the "British Blue", with a solid grey-blue coat, orange eyes, and a medium-sized tail.'

      },
      {
        id: '6',
        name: 'Ted',
        image: require('../assets/cat6.png'),
        type: 'Ragamuffin',
        age: '5 years old',
        location:'No.23 , Nevada ',
        price:'Rs.5,000.00',
        description:'The Ragamuffin is a breed of domestic cat. It was once considered to be a variant of the Ragdoll cat but was established as a separate breed in 1994. Ragamuffins are notable for their friendly personalities and thick fur.'

      },
    ],
  },
  {
    pet: 'dogs',
    pets: [
      {
        id: '1',
        name: 'Klaus',
        image: require('../assets/dog1.png'),
        type: 'German Shepherd',
        age: '2 years old',
        location:'No.23 , Nevada ',
        price:'Rs.6,000.00',
        description:'The German Shepherd or Alsatian is a German breed of working dog of medium to large size. The breed was developed by Max von Stephanitz using various traditional German herding dogs from 1899.'

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
        name: 'Bruno',
        image: require('../assets/dog3.png'),
        type: 'Labrador',
        age: '5 years old',
        location:'No.26 , New York ',
        price:'Rs.23,000.00',
        description:'The Labrador Retriever or simply Labrador is a British breed of retriever gun dog. It was developed in the United Kingdom from fishing dogs imported from the colony of Newfoundland.'

      },
      {
        id: '4',
        name: 'Rex',
        image: require('../assets/dog4.png'),
        type: 'Foxhound',
        age: '5 years old',
        location:'No.26 , New Jersy ',
        price:'Rs.7,000.00',
        description:'The English Foxhound is one of the four foxhound breeds of dog. It is a cousin of the American Foxhound. They are scent hounds, bred to hunt foxes by scent. '


        
      },
      {
        id: '5',
        name: 'Luther',
        image: require('../assets/dog5.png'),
        type: 'Golden Retriever',
        age: '3 years old',
        location:'No.26 , Manhatan ',
        price:'Rs.9,000.00',
        description:'The Golden Retriever is a Scottish breed of retriever dog. It is characterised by a gentle and affectionate nature and a striking golden coat. It is commonly kept as a pet and is among the most registered breeds in Western countries.'

      },
      {
        id: '6',
        name: 'Max',
        image: require('../assets/dog2.png'),
        type: 'Foxhound',
        age: '2 years old',
        location:'No.26 , New Mexico ',
        price:'Rs.7,000.00',
        description:'The English Foxhound is one of the four foxhound breeds of dog. It is a cousin of the American Foxhound. They are scent hounds, bred to hunt foxes by scent. '

      },
  
    ],
  },
  {
    pet: 'birds',
    pets: [
      {
        id: '1',
        name: 'Coco',
        image: require('../assets/bird1.png'),
        type: 'Hyacinth Macaw',
        age: '2 years old',
        location:'No.26 , New York ',
        price:'Rs.9,000.00',
        description:'The hyacinth macaw, or hyacinthine macaw, is a parrot native to central and eastern South America. With a length of about one meter it is longer than any other species of parrot.  '

      },
      {
        id: '2',
        name: 'Alfie',
        image: require('../assets/bird2.png'),
        type: 'Wing Macaws',
        age: '2 years old',
        location:'No.26 , New Jersey ',
        price:'Rs.7,000.00',
        description:'The red-and-green macaw, also known as the green-winged macaw, is a large, mostly-red macaw of the genus Ar,widespread in the forests and woodlands of northern and central South America. '

      },
      {
        id: '3',
        name: 'Victor',
        image: require('../assets/bird3.png'),
        type: 'Sun Conure',
        age: '2 years old',
        location:'No.26 , Nevada ',
        price:'Rs.8,000.00',
        description:'The sun parakeet, also known in aviculture as the sun conure, is a medium-sized, vibrantly colored parrot native to northeastern South America. '

      },
    ],
  },
  {
    pet: 'bunnies',
    pets: [
      {
        id: '1',
        name: 'Boots',
        image: require('../assets/bunny1.png'),
        type: 'Angora',
        age: '1 years old',
        location:'No.26 , Nevada ',
        price:'Rs.8,000.00',
        description:'The Angora rabbit, which is one of the oldest types of rabbit, is bred for the long fibers of its coat, which are gathered by shearing. Because rabbits do not possess the same allergy-causing qualities as many other animals. '

      },
      {
        id: '2',
        name: 'Pookie',
        image: require('../assets/bunny2.png'),
        type: 'Angora',
        age: '2 years old',
        location:'No.24 , New York ',
        price:'Rs.9,000.00',
        description:'The Angora rabbit, which is one of the oldest types of rabbit, is bred for the long fibers of its coat, which are gathered by shearing. Because rabbits do not possess the same allergy-causing qualities as many other animals. '

      },
      {
        id: '3',
        name: 'Roman',
        image: require('../assets/bunny3.png'),
        type: 'American Rabbits',
        age: '1 years old',
        location:'No.22 , New Jersy ',
        price:'Rs.8,000.00',
        description:'The American Rabbit is a breed of rabbit, recognized by the American Rabbit Breeders Association in 1917.American rabbits have a mandolin body shape. It has also been noted for a good mothering abilities. '

      },
    ],
  },
];

export default pets;
