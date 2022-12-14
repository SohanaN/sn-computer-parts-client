import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const AddProduct = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = (data, e) => {
        const url = `https://stormy-river-80261.herokuapp.com/service`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    toast('Product Added');
                    e.target.reset();
                };
            })
    };
    return (
        <div >
            <h2 className="text-secondary text-xl text-center my-4">Add Products</h2>
            <div className='flex justify-center m-10'>
                <form onSubmit={handleSubmit(onSubmit)} className='shadow-md shadow-indigo-500/50 p-10 border'>
                    <div className="form-control w-96 max-w-xs">
                        <label className="label">
                            <span className="label-text">Product Name</span>
                        </label>
                        <input
                            className="input input-bordered w-full max-w-xs"
                            type="name" placeholder="Enter Name"  {...register("toolName", { required: true, maxLength: 20 })}
                        />
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input
                            className="input input-bordered w-full max-w-xs"
                            type="text" placeholder="Price" {...register("price")}
                        />
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Quantity</span>
                        </label>
                        <input
                            className="input input-bordered w-full max-w-xs"
                            type="number" placeholder="Quantity"  {...register("quantity")}
                        />
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input
                            className="input input-bordered w-full max-w-xs"
                            type="text" placeholder="Photo URL" {...register("img")}
                        />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Description</span>
                        </label>
                        <textarea className="textarea h-24 textarea-bordered" placeholder="Product description"
                            {...register("description", { required: true })}
                        ></textarea>
                    </div>

                    <input className='btn btn-primary w-full max-w-xs my-4 text-white' type="submit" value="Add" />
                </form>
            </div>
        </div>
    );
};

export default AddProduct;