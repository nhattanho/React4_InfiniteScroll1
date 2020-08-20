import React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import Grid from '@material-ui/core/Grid';
import './show-image.styles.scss'

const ShowImage = ({images, loaded, fetchImages}) => (
    <InfiniteScroll
     dataLength={images}
     next={() => fetchImages(10)}
     hasMore={true}
     loader={
      <img
         src="https://res.cloudinary.com/chuloo/image/upload/v1550093026/scotch-logo-gif_jq4tgr.gif"
         alt="loading"
      />}
    >
        <Grid container spacing={3} className="image-grid" style={{ marginTop: "30px"}}>
            {loaded ?
                images.map((image, index) => (
                        <Grid item xs={3} className="image-item" key={index} >
                            <img src={image.urls.regular} alt='unsplash'/>
                        </Grid>           
                )): ""}
        </Grid>
    </InfiniteScroll>
)

export default ShowImage;
