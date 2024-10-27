import Button from '@mui/material/Button'
import Rating from '@mui/material/Rating';
import TextField from '@mui/material/TextField';
import Slider from '@mui/material/Slider';
import { useState } from 'react';
export default function MaterialUI(){
    const [rating, setRating] = useState(4)
    const handleChangeRating = (evt, newValue) => {
        setRating(newValue);
    }
    const [name, setName] = useState("")
    const handleChangeName = (evt) => {
        setName(evt.target.value)
    }
    const [value, setValue] = useState(3)
    const handleChangeSlider = (evt, newValue) => {
        setValue(newValue)
    }

    return(
        <div>
            <h1>Material UI</h1>
            <h2>Buttons</h2>
            <Button variant="text">Text</Button>
            <Button variant="contained">Contained</Button>
            <Button variant="outlined">Outlined</Button>
            <h2>Rating component</h2>
            <h3>Rating is: {rating}</h3>
            <Rating
                name="simple-controlled"
                value={rating}
                onChange={handleChangeRating}
            />
            <h2>TextFields</h2>
            <h3>Textfield value is: {name}</h3>
            <TextField id="outlined-basic" label="Name" variant="outlined" value={name} onChange={handleChangeName} />
            <h2>Slider</h2>
            <h3>Slider value is: {value}</h3>
            <Slider aria-label="Volume" value={value} onChange={handleChangeSlider} />


        </div>
    )
}