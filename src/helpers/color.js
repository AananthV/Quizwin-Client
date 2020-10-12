export const colors = ['red', 'orange', 'yellow', 'olive', 'green', 'teal', 'blue', 'violet', 'purple', 'pink'];

export const getColor = (index) => {
    return colors[index % colors.length]
}

export const getRandomColor = () => {
    return colors[Math.floor(Math.random() * colors.length)]
}