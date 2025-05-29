import { useState, useEffect } from 'react'


const fake_menu_data = Array.from({ length: 100}, (_, i) =>({
    id: i + 1,
    name: `plato ${ i + 1}`,
    description: "Descripción del plato delicioso.",
    price: `$${(10000 + i * 1000).toLocaleString()}`,
    image: 'https://i0.wp.com/sarasellos.com/wp-content/uploads/2023/10/fresas-crema2.png?fit=775%2C477&ssl=1'
}));

const ITEMS_PER_LOAD = 10;

export const MenuComponent = () => {

    const [ menuItems, setMenuItems ] = useState([]);
    const [ hasMore, setHasMore ] = useState(true);
    const [ visibleCount, setVisibleCount ] = useState(0);


    const loadMoreItems = () => {
        if (visibleCount >= fake_menu_data.length) {
            setHasMore(false);
            return;
        }

        const nextItems = fake_menu_data.slice(
            visibleCount,
            visibleCount + ITEMS_PER_LOAD
        );

        setMenuItems((prev) => [...prev, ...nextItems]);
        setVisibleCount((prev) => prev + ITEMS_PER_LOAD);
    }

    // Detectar scroll
    useEffect(() => {
  const loadMoreItems = () => {
    if (visibleCount >= fake_menu_data.length) {
      setHasMore(false);
      return;
    }

    const nextItems = fake_menu_data.slice(
      visibleCount,
      visibleCount + ITEMS_PER_LOAD
    );
    setMenuItems((prev) => [...prev, ...nextItems]);
    setVisibleCount((prev) => prev + ITEMS_PER_LOAD);
  };

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop + 100 >=
      document.documentElement.offsetHeight
    ) {
      loadMoreItems();
    }
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, [visibleCount]);

    //cargar los primeros elementos
    useEffect(() => {
        loadMoreItems();
    }, [loadMoreItems]);


  return (
    <div className='menu-page'>
        <h1>Menú del restaurante</h1>

        <div className="menu-container">
            {menuItems.map((item) => (
                <div key={item.id} className="menu-item">
                    <img src={item.image} alt={item.name} />
                    <h2>{item.name}</h2>
                    <p>{item.description}</p>
                    <span>{item.price}</span> 
                </div>
            ))}
        </div>

        {!hasMore && <p>¡¨Fin del menú! 🍽️</p>}

        <style jsx>{`
            .menu-page {
            max-width: 600px;
            margin: auto;
            text-align: center;
            padding: 1rem;
            }
            .menu-container {
            display: grid;
            grid-template-columns: 1fr;
            gap: 1rem;
            }
            .menu-item {
            border: 1px solid #ccc;
            border-radius: 8px;
            padding: 1rem;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
            }
            .menu-item img {
            width: 100%;
            height: auto;
            border-radius: 8px;
            }
        `}</style>
    </div>
  )
}
