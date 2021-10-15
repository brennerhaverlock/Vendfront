import db from "@utils/db";
import Product from "models/product";
import nc from "next-connect"
import { data } from "remark";


const io = nc();

io.get(async (req,res) => {
    await db.connect();
    await Product.deleteMany();
    await Product.insertMany(data.products);
    await db.disconnect();

    res.send(products);
    res.send({message:"seeded successfully!"})
});

export default io