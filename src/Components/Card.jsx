import "./CardStyle.css";

const Card = ({card,setCard}) => {
  return (
    <>
      <h1>Cart Products  What U Choose!!</h1>
         <div className="Card-Container">
          <div className="Card-Product">
          {
            card.map((product) => {
              return (
                <div className="Card-Container">
                  <div className="Card-Details">
                    <h2> Food Name:{product.fname}</h2>
                    <img src={product.img} alt="img" style={{
                      height: '200px',
                      width: '200px',
                      border: '3px solid red',
                      padding: '10px'
                    }} />
                    <h3>Amount: ${product.Amt}</h3>
                    <button onClick={() => setCard(card.filter((c) => c.id !== product.id))} className="btn1">Remove</button>
                  </div>
                </div>
              );
            })
            }
          </div>
        
      
       
      
       
        
      </div>
    </>
  );
};

export default Card;
