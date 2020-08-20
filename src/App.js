import React, {useState, useEffect} from 'react';
import ShowImage from './component/show-image/show-image.jsx';
import axios from 'axios';
import './App.css';

const apiRoot = "https://api.unsplash.com";
const accessKey = "your API key";

const App = () => {
  const [images, setImages] = useState([]);
  const [loaded, setIsLoaded] = useState(false);
  const fetchImages = async (count = 20) => {
    console.log('I am in useEffect');
    const abortController = new AbortController(); // clear subscription of Hook
    const signal = abortController.signal;
    try {
      const res = await axios.get(`${apiRoot}/photos/random?client_id=${accessKey}&count=${count}`, {signal:signal});
      setImages([...images, ...res.data]); // new array has elements which are all elements of images array and res.data array
      setIsLoaded(true);
    } catch(error) {
        alert(error);
        return function cleanup() {
          abortController.abort();
        }
    }
  }
  useEffect(() => {
    fetchImages();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);// second parameter is an [] means the function fetchImages in the hook only run when the array is updated or modified
    
    // Return JSX
  return (
        <div className="container">
          <div className="header content">
            <h2 className="subtitle is-6">Infinite Scroll by using React Hook</h2>
            <h1 className="title is-1">
              Infinite Scroll Unsplash
            </h1>
          </div>
           <ShowImage images={images} loaded={loaded} fetchImages={fetchImages} > </ShowImage>
        </div>
  );
};
export default App;
