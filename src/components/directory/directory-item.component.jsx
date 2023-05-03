/* eslint-disable react/prop-types */
import CategoryItem from './../category-item/category-item.component';
import './directory.styles.scss';



  const Directory = ({ categories }) => {
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