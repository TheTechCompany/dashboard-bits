import React from 'react';

import { useDropzone } from 'react-dropzone';

export default function ImageBlock(props){
  const [ preview, setPreview ] = React.useState(null)
  const onDrop = React.useCallback(accepted => {
    if(accepted.length > 0){
      //   let url = URL.createObjectURL(accepted[0])
      props.onChange(accepted[0])
      
    }
  }, [])

  const { getRootProps, getInputProps, isDragActive } = useDropzone({onDrop})

  return (
    <div className="image-block">
      <div {...getRootProps()}>
        <input {...getInputProps()} />


      </div>
    </div>
  );
}
