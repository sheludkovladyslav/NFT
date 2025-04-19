import css from "./Hero.module.css";

export const Hero = ({ product, author, collection }) => {
  return (
    <article className={css.product}>
      <div className={`${css.hero__container} container`}>
        <div className={css.separator}>
          <div className={css.date}>
            <p className={css.release}>{product.release}</p>
            <p className={css.date}>{product.date}</p>
          </div>

          <h2 className={css.title}>Discover new NFT</h2>

          <div className={css.info}>
            <div className={css.author}>
              <div className={css.img__container}>
                <img
                  src={author.img}
                  alt={author.name}
                  className={css.author__img}
                />
              </div>
              <div className={css.author_info}>
                <p className={css.label}>Created by</p>
                <h3 className={css.name}>{author.name}</h3>
              </div>
            </div>

            <div className={css.collection}>
              <div className={css.img__container}>
                <img src={`${collection.img}`} alt={collection.name} />
              </div>
              <div className={css.collection_info}>
                <p className={css.label}>Collection</p>
                <h3 className={css.collection__name}>{collection.name}</h3>
              </div>
            </div>
          </div>
          <div className={css.buttons}>
            <button className={css.bid}>Place a bid</button>
            <button className={css.view}>View NFT</button>
          </div>
        </div>

        <div className={css.product__img_container}>
          <img
            src={product.img}
            alt={product.name}
            className={css.product__img}
          />
        </div>
      </div>
    </article>
  );
};
