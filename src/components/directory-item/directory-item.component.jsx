import { DirectoryItemContainer, BackgroundImage, DirectoryItemBody} from './directory-item.styles'
import { useNavigate } from 'react-router-dom';

const DirectoryItem = ({ category }) => {
  const navigate = useNavigate()
  const { imageUrl, title, path } = category

  const handleClick = () => {
    navigate(path)
  }
  return (
    <DirectoryItemContainer onClick={handleClick}>
      <BackgroundImage imageUrl={imageUrl} />
      <DirectoryItemBody>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </DirectoryItemBody>
    </DirectoryItemContainer>
  );
};

export default DirectoryItem;
