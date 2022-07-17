import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

function valuetext(value) {
    return `${value}$`;
}

const minDistance = 50;

export default function PriceFilter({ value1, setValue1 }) {

    const handleChange1 = (event, newValue, activeThumb) => {
        if (!Array.isArray(newValue)) {
            return;
        }

        if (activeThumb === 0) {
            setValue1([Math.min(newValue[0], value1[1] - minDistance), value1[1]]);
        } else {
            setValue1([value1[0], Math.max(newValue[1], value1[0] + minDistance)]);
        }
    };

    return (
        <Box sx={{ width: 250 }}>
            <Slider
                getAriaLabel={() => 'Minimum distance'}
                value={value1}
                onChange={handleChange1}
                valueLabelDisplay="auto"
                getAriaValueText={valuetext}
                disableSwap
                step={50}
                marks
                min={0}
                max={500}
            />
        </Box>
    );
}
