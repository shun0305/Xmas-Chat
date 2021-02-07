import { IconButton } from '@material-ui/core';
import React, { useCallback } from 'react';
import AddPhotoAlternateIcon from '@material-ui/icons/AddPhotoAlternate';
import { makeStyles } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from "@material-ui/styles";
import { storage } from '../firebase'
//import ImagePreview from './imagePreview';
import { pushMessage } from '../firebase';


const useStyles = makeStyles(() => ({
    disnone: {
        display: 'none',
    }

}));
const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#388e3c',
        },
        secondary: {
            light: '#0066ff',
            main: '#d32f2f',
            contrastText: '#ffcc00',
        }
    }
});



const ImageArea = ({ name, setText, text, imageurl }) => {
    const classes = useStyles();

    const uploadImage = useCallback((event) => {
        const file = event.target.files;
        let blob = new Blob(file, { type: "image/jpeg" });

        const S = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        const N = 16;
        const fileName = Array.from(crypto.getRandomValues(new Uint32Array(N))).map((n) => S[n % S.length]).join('')

        const uploadRef = storage.ref('images').child(fileName);
        const uploadTask = uploadRef.put(blob);

        uploadTask.then(() => {

            uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
                //     console.log(images)
                const newImage = { id: fileName, path: downloadURL };
                const imageurl = newImage.path
                console.log(newImage.path)
                console.log(imageurl)
                console.log(name)
                text = ''
                name = name
                pushMessage({ name, text, imageurl })

                // images.setImages((prevState => [...prevState, newImage]))


                // return <div>
                //     <img alt="" src={newImage.path} />
                // </div>


            });
        })
    },
        //[]
    );


    return (
        <div>
            {/* {  <div className="">
                {images.length > 0 && (
                    images.map(images => <ImagePreview path={images.newImage.path} />)
                )}
            </div>} */}
            <div>
                <ThemeProvider theme={theme}>
                    <IconButton>
                        <label>
                            <AddPhotoAlternateIcon color="secondary" />
                            <input className={classes.disnone} type='file' id='image'
                                onChange={(event) => {
                                    uploadImage(event);

                                }}
                            />
                        </label>
                    </IconButton>
                </ThemeProvider>
            </div>
        </div>
    )
}

export default ImageArea