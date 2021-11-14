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
    
    const [delete_bool, setDelete_bool] = useState([]);
    const [show_delete, setShow_delete] = useState(false);
    React.useEffect(() => {
	  	if(delete_bool.length > 0){
	  		// console.log("We have items to delete..")
	  		setShow_delete(true)
	  		// console.log(delete_bool.length)
	  	}
	}, [delete_bool]);

   
    React.useEffect(() => {
	  	var delete_photos = [];
	    localStorage.setItem("delete_photos", JSON.stringify(delete_photos));
	}, []);

    const selected_image = (image_index) => {
        var delete_photos = JSON.parse(localStorage.getItem("delete_photos"));

    	function remove_image(id){
    		console.log(id)
    		const current_image = data[id]
    		const _new_images_list = data.map((single_obj) =>
			    single_obj.id === current_image.id  ? { ...single_obj, isSelected: false } : single_obj
		    );
		    setData(_new_images_list)
		    // var delete_photos = JSON.parse(localStorage.getItem("delete_photos"));
		    delete_photos = delete_photos.filter((item) => item !== id);
		    localStorage.setItem('delete_photos', JSON.stringify(delete_photos));
		    setDelete_bool(delete_photos)
		    return;

    	}
    	const id = image_index
    	console.log("Index: " + image_index)
        const current_image = data[image_index]
		const new_images_list = data.map((single_obj) =>
			    single_obj.id === current_image.id ? { ...single_obj, isSelected: true } : single_obj
		);
	    console.log(new_images_list)
	    setData(new_images_list)
	    
	    delete_photos.indexOf(id) === -1 ? delete_photos.push(id) : remove_image(id);
	    localStorage.setItem('delete_photos', JSON.stringify(delete_photos));
	    setDelete_bool(delete_photos)

    }

    const delete_photos = () => {
    	 var delete_photos = JSON.parse(localStorage.getItem("delete_photos"));
    	 let images_list = []
    	 for(var index in delete_photos){
    	 	props.deleteProvider_photo(data[delete_photos[index]].id)
         }
         setShow_delete(false)
    }
  return (
    <div>
      <Gallery 
         enableImageSelection={true} 
         enableLightbox={true}
         // lightboxWidth={1536}
         onSelectImage={(image) => { selected_image(image) }}
         images={data}
       /> 
       <div  style={{  'marginTop' : '10px'}}>
       	  {
	       	show_delete === true ? ( <Button variant="outlined" 
	             style={{ 'marginBottom' : '10px', display: "flex", maxWidth: '120px', maxHeight: '35px', minWidth: '120px', minHeight: '35px'}} 
	             color="primary" 
	             onClick={delete_photos}
	             >
	           {"delete"}
	        </Button>) : null
          }
       </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { deleteProvider_photo })(PetGallery);
