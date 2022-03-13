import * as React from 'react';
import {useState,useEffect} from 'react'
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

export default function ClothingList(props) {
    let itemData=props.arr
    
    // let [itemData,setitemData]=useState([{ img: 'WoolHat.PNG',rows: 2,cols: 2},{img: ''},{img: ''},{img: '',cols: 2},{img: '',cols: 2},{img: '',rows: 2,cols: 2},{img: ''},{img: ''}])

    // useEffect(async function(){
    //     setitemData([...arrImg])
    // },[])
    
    
    return (
    <>
    <h3>Recommended clothing list</h3>
    <ImageList
      sx={{ width: 500, height: 500 ,mx: "auto"}}

      variant="quilted"
      cols={4}
      rowHeight={121}
    >
      {itemData?.map((item) => (
        <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
          <img
            {...srcset(item.img, 121, item.rows, item.cols)}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
    </>
  );
}


const itemDatatest = [
  {
    img: 'WoolHat.PNG',
    rows: 2,
    cols: 2,
  },
  {
    img: 'gloves.PNG',
  },
  {
    img: 'scarf.PNG',
  },
  {
    img: 'sweater.PNG',
    cols: 2,
  },
  {
    img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
    cols: 2,
  },
  {
    img: 'cout.PNG',
    rows: 2,
    cols: 2,
  },
  {
    img: 'longBoots.PNG',
  },
  {
    img: 'pants.PNG',
  }
];