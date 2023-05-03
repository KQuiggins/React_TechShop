import Directory from "../../components/directory/directory-item.component";


const Home = () => {
const categories = [
    {
      id: 1,
      title: 'Desktops',
      imageUrl: 'images/desktop.jpg',
      
    },
    {
      id: 2,
      title: 'Laptops',
      imageUrl: 'images/gaming.jpg',
      
    },
    {
      id: 3,
      title: 'Home Office',
      imageUrl: 'images/home.jpg',
      
    },
    {
      id: 4,
      title: 'Networking',
      imageUrl: 'images/networking.jpg',
      
    },
    {
      id: 5,
      title: 'Accessories',
      imageUrl: 'images/accessories.jpg',
      
    },
  ];
    return <Directory categories={categories} />
}

export default Home