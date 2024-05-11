export const useCounter = () => {
    const counter = useState('counter', () => 0);
    const setCounter = (newValue: number) => {
        if (!counter.value) {
            counter.value = newValue
        }
    }
    return {
        counter,
        setCounter
    }
}