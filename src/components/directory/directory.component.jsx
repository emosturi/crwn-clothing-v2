import DirectoryItem from '../directory-item/directory-item.component';

import { DirectoryContainer } from './directory.styles';

const categories = [
  {
    id: 1,
    title: 'hats',
    imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
<<<<<<< HEAD
    path: 'shop/hats',
=======
    route: 'shop/hats',
>>>>>>> lesson-34
  },
  {
    id: 2,
    title: 'jackets',
    imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
<<<<<<< HEAD
    path: 'shop/jackets',
=======
    route: 'shop/jackets',
>>>>>>> lesson-34
  },
  {
    id: 3,
    title: 'sneakers',
    imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
<<<<<<< HEAD
    path: 'shop/sneakers',
=======
    route: 'shop/sneakers',
>>>>>>> lesson-34
  },
  {
    id: 4,
    title: 'womens',
    imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
<<<<<<< HEAD
    path: 'shop/womens',
=======
    route: 'shop/womens',
>>>>>>> lesson-34
  },
  {
    id: 5,
    title: 'mens',
    imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
<<<<<<< HEAD
    path: 'shop/mens',
  },
]
=======
    route: 'shop/mens',
  },
];
>>>>>>> lesson-34

const Directory = () => {
  return (
    <DirectoryContainer>
      {categories.map((category) => (
        <DirectoryItem key={category.id} category={category} />
      ))}
    </DirectoryContainer>
  );
};

export default Directory;
