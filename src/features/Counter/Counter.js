import { Button, TextField } from '@mui/material'
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, incByAmount, decByAmount } from './Counter.slice'

const Counter = () => {
    const num = useSelector(state => state.number)
    const dispatch = useDispatch()
    const [amount,setAmount] = useState(2)

    return <div>
        <h1>{num}</h1>
        <div>
            <Button onClick={() => dispatch(increment())}  variant="contained">up</Button>
            <Button onClick={() => dispatch(decrement())}  variant="contained">down</Button>
        </div>
        <div style={{margin:30}}>
            <TextField
                label="amount"
                type="number"
                value={amount}
                onChange={e => setAmount(e.target.value)}
            />
            <div style={{margin:30}}>
                <Button onClick={() => dispatch(incByAmount(+amount))} variant="contained">
                    up by amount
                </Button>
                <Button onClick={() => dispatch(decByAmount(+amount))} variant="contained">
                    down by amount
                </Button>
            </div>
        </div>
    </div>
}
export default Counter