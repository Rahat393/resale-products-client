import React from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const AddProducts = () => {
    const navigate = useNavigate();

    const { register, handleSubmit, formState: { errors } } = useForm();
    const handleAddProduct = data => {
        const product = {
            product_name: data.product_name,
            price: data.price,
            prone_number: data.prone_number,
            Year_Of_Purchase: data.Year_Of_Purchase,
            location: data.location
        }
        fetch('http://localhost:4000/products', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                toast.success(`${data.product_name} is added successfully`);
                navigate('/dashboard/myproduct')
            })
        console.log(data);
    }
    return (
        <div>
            <h2>Add a productssss</h2>
            <div className='w-96 p-7'>
                <h2 className="text-4xl">Add A Product</h2>
                <form onSubmit={handleSubmit(handleAddProduct)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Product Name</span></label>
                        <input type="text" {...register("product_name", {
                            required: "Name is Required"
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Price</span></label>
                        <input type="text" {...register("price", {
                            required: "Name is Required"
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Phone Number</span></label>
                        <input type="text" {...register("prone_number", {
                            required: "Name is Required"
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Year Of Purchase</span></label>
                        <input type="text" {...register("Year_Of_Purchase", {
                            required: "Name is Required"
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                    </div>


                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Location</span></label>
                        <select
                            {...register('location')}
                            className="select input-bordered w-full max-w-xs">
                            <option value="Dhaka">Dhaka</option>
                            <option value="Chittagong">Chittagong</option>


                        </select>
                    </div>

                    <input className='btn btn-accent w-full mt-4' value="Add Product" type="submit" />
                </form>
            </div>
        </div>
    );
};

export default AddProducts;