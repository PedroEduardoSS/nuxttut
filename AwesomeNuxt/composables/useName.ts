export const useName = () => {
    const name = useState('name', () => '');
    const setName = (newValue: string) => {
        if (!name.value) {
            name.value = newValue
        }
    }
    return {
        name,
        setName
    }
}