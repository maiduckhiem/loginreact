import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
const Productadd = (props) => {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();
    const onhandleadd = (data) => {
        const newData = { ...data, image: data.image[0].name };
        props.onAdd(newData);
        console.log(data);
    };
    return (
        <div>
            <form onSubmit={handleSubmit(onhandleadd)}>
                <input type="text" {...register("name", { required: true })} />
                {errors.name && <span>moi ban nhap</span>}
                <br />
                <input type="number" {...register("price", { required: true })} />
                {errors.price && <span>moi nhap</span>}
                <br />
                <input type="file" {...register("image")} />
                <br />
                <input type="text" {...register("textarea")} />
                <br />
                <button type="submit">Add</button>
            </form>
            <button><Link to="/admin/product">back</Link></button>
        </div>
    );
};
export default Productadd;
