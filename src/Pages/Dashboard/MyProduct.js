import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import ConfirmationModal from '../ConfirmationModal/ConfirmationModal';
import Loading from '../Home/Loading/Loading';

const MyProduct = () => {
    const [deletingProduct, setDeletingProduct] = useState(null);

    const closeModal = () => {
        setDeletingProduct(null);
    }


    const { data: products, refetch, isLoading } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            try {
                const res = await fetch('http://localhost:4000/products', {
                    headers: {
                        authorization: `bearer ${localStorage.getItem('accessToken')}`
                    }
                });
                const data = await res.json();
                return data;
            }
            catch (error) {

            }
        }
    });

    const handleDeleteProduct = products => {
        fetch(`http://localhost:4000/products/${products._id}`, {
            method: 'DELETE',
            // headers: {
            //     authorization: `bearer ${localStorage.getItem('accessToken')}`
            // }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    refetch();
                    toast.success(`User ${products.product_name} deleted successfully`)
                }
            })
    }

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h2 className='text-3xl'>My products {products?.length}</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th ></th>
                            <th>Product name</th>
                            <th>Price</th>
                            <th>Phone Number</th>
                            <th>Year Of Purchase</th>
                            <th>Location</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            // products.length > 0 &&
                            products?.map((product, i) => <tr key={product._id}>
                                <th>{i + 1}</th>

                                <td>{product.product_name}</td>
                                <td>{product.price}</td>
                                <td>{product.prone_number}</td>
                                <td>{product.Year_Of_Purchase}</td>
                                <td>{product.location}</td>
                                <td>
                                    <label onClick={() => setDeletingProduct(product)} htmlFor="confirmation-modal" className="btn btn-sm btn-error">Delete</label>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
            {
                deletingProduct && <ConfirmationModal
                    title={`Are you sure you want to delete?`}
                    message={`If you delete <span className='text-2xl'>${(deletingProduct.product_name)}</span> . It cannot be undone.`}
                    successAction={handleDeleteProduct}
                    successButtonName="Delete"
                    modalData={deletingProduct}
                    closeModal={closeModal}
                ></ConfirmationModal>
            }
        </div>
    );
};

export default MyProduct;