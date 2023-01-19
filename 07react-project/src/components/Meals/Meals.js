import Meal from "./Meal/Meal"
const Meals = () => {
    const dataSource = [1, 2, 3]
    return <>
        {dataSource.map(item => <Meal key={item} />)}</>
}
export default Meals