import React, { useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import Gallery from 'react-grid-gallery';
import Button from '@material-ui/core/Button';
import { deleteProvider_photo } from "../actions/form";

function PetGallery(props) {

    const [data, setData] = useState("");
   // console.log(props.images)
    React.useEffect(() => {
        const images_list = []
	    const first_image = props.images[0].id;
	    props.images.filter((single_image) => {
	    	if(single_image.id === first_image){
	    	  const image_object = {
	    	  	  id: single_image.id,
			      src: single_image.image,
			      thumbnail: single_image.image,
			      thumbnailWidth: 320,
			      thumbnailHeight: 174,
			      isSelected: false
		      }
		     images_list.push(image_object)
	    	}else {
	    	  const image_object = {
	    	  	  id: single_image.id,
			      src: single_image.image,
			      thumbnail: single_image.image,
			      thumbnailWidth: 320,
			      thumbnailHeight: 212,
			      isSelected: false
			    }
			  images_list.push(image_object)
	    	}
	     })
        setData(images_list)
    // console.log(images_list)
  }, []);

  return (
    <div>
      <Gallery 
         enableImageSelection={true} 
         enableLightbox={true}
         // lightboxWidth={1536}
         // onSelectImage={(image) => { selected_image(image) }}
         images={data}
       /> 
    </div>
  );
}

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { deleteProvider_photo })(PetGallery);
