import { useContext } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { AuthContext } from "../../Provider/AuthProvider";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const AddNewProduct = () => {
  const { register, handleSubmit } = useForm();
  const { user } = useContext(AuthContext);
  const { axiosSecure } = useAxiosSecure();

  const imageHostingApi = `https://api.imgbb.com/1/upload?key=${
    import.meta.env.VITE_IMAGE_HOSTING_API_KEY
  }`;

  const addNewProduct = (data) => {
    const formData = new FormData();
    formData.append("image", data.image[0]);

    fetch(imageHostingApi, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgResponse) => {
        if (imgResponse.success) {
          const newProduct = {
            title: data.title,
            category: data.category,
            subCategory: data.subCategory,
            image: imgResponse.data.display_url,
            color: data.color,
            description: data.description,
            rating: parseFloat(data.rating),
            price: parseFloat(data.price),
          };

          axiosSecure.post("/post-product", newProduct).then((res) => {
            if (res.data.insertedId) {
              Swal.fire({
                position: "center",
                icon: "success",
                title: "Product Added successfully",
                showConfirmButton: false,
                timer: 1500,
              });
            }
          });
        }
      });
  };

  return (
    <main>
      <hr className="w-full my-3" />
      <form onSubmit={handleSubmit(addNewProduct)} className="px-[100px] py-5">
        <div className="my-3 text-center">
          <h2 className="text-2xl font-bold">Add New Product</h2>
        </div>

        <section className="w-full gap-3 md:grid md:grid-cols-2">
          <div className="w-full my-2">
            <span className="block font-bold">Product Name</span>
            <input
              {...register("title", { required: true })}
              type="text"
              className="w-full px-4 py-2 mt- border rounded outline-0"
              autoComplete="off"
              placeholder="Class Name"
            />
          </div>

          <div className="w-full my-2">
            <span className="block font-bold">Category</span>
            <select
              {...register("category")}
              className="w-full px-4 py-2 mt- border rounded outline-0"
            >
              <option value="phones">Phones</option>
              <option value="fashions">Fashions</option>
              <option value="electrics">Electrics</option>
              <option value="grocery">Grocery</option>
              {/* Add other category options here */}
            </select>
          </div>
          <div className="w-full my-2">
            <span className="block font-bold">Sub Category</span>
            <input
              {...register("subCategory", { required: true })}
              type="text"
              className="w-full px-4 py-2 mt- border rounded outline-0"
              autoComplete="off"
              placeholder="Sub Category"
            />
          </div>
          <div className="w-full my-2">
            <span className="block font-bold">Color</span>
            <input
              {...register("color")}
              type="text"
              className="w-full px-4 py-2 mt- border rounded outline-0"
              autoComplete="off"
              placeholder="Color"
            />
          </div>
          <div className="w-full my-2">
            <span className="block font-bold">Description</span>
            <textarea
              {...register("description")}
              className="w-full px-4 py-2 mt- border rounded outline-0"
              autoComplete="off"
              placeholder="Description"
            />
          </div>
          <div className="w-full my-2">
            <span className="block font-bold">Rating</span>
            <input
              {...register("rating", { required: true })}
              type="text"
              className="w-full px-4 py-2 mt- border rounded outline-0"
              autoComplete="off"
              placeholder="Rating"
            />
          </div>

          <div className="w-full mt-5">
            <span className="block font-bold">Upload an image</span>
            <input
              type="file"
              {...register("image", { required: true })}
              className="w-full max-w-xs file-input file-input-bordered"
            />
          </div>
          <div className="w-full my-2">
            <span className="block font-bold">Price</span>
            <input
              {...register("price", { required: true })}
              type="number"
              className="w-full px-4 py-2 mt- border rounded outline-0"
              autoComplete="off"
              placeholder="Price"
            />
          </div>
        </section>

        <div>
          <button
            className="block w-full px-4 py-2 mt-0 text-white rounded bg-[#4c5696]"
            type="submit"
          >
            Add Class
          </button>
        </div>
      </form>
    </main>
  );
};

export default AddNewProduct;
