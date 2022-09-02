import React from "react";
import styles from "../../styles/Product.module.css";
import Image from "next/image";

const ProductDetail = () => {
  const pizza = {
    id: 1,
    img: "/img/pizza.png",
    name: "CAMPAGNOLA",
    price: [19.9, 23.9, 25.9],
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, earum nam accusantium dicta ipsam nemo?",
  };

  return (
    <div>
      <div className={styles.container}>
        <div className={styles.left}></div>
        <div className={styles.imgContainer}>
          <Image src={pizza.img} alt="" layout="fill" objectFit="contain" />
        </div>

        <div className={styles.right}>
          <h1 className={styles.title}>{pizza.name}</h1>
          <span className={styles.price}>₹{pizza.price}</span>
          <p className={styles.desc}>{pizza.desc}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
