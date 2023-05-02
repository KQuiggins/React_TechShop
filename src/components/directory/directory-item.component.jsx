import CategoryItem from './../category-item/category-item.component';
import './directory.styles.scss';

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
  ]

  const Directory = () => {
    return (
        <div className="directory-container">
        {categories.map((category) => (
          // eslint-disable-next-line react/jsx-key
          <CategoryItem key={category.id} category={category} />
        ))}
         
        </div>
    )
  }

export default Directory;