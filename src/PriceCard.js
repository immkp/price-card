import React from 'react';

class PriceCard extends React.Component {
  constructor({ tier, pricePer, price, currency, available, nonAvailable }) {
    super()
    this.state = {
      tier: tier,
      pricePer: pricePer,
      price: price,
      currency: currency,
      available: available,
      nonAvailable: nonAvailable,
    }
  }
  render() {
     return (
       <div className='col-lg-4'>
         <div className='card mb-5 mb-lg-0'>
           <div className='card-body'>
             <h5 className='card-title text-muted text-uppercase text-center'>
               {this.state.tier}
             </h5>
             <h6 className='card-price text-center'>
               {this.state.currency}
               {this.state.price}
               <span className='period'>{this.state.pricePer}</span>
             </h6>
             <hr></hr>
             <ul className='fa-ul'>
               {this.state.available.map((detail, index) => (
                 <li key={index}>
                   <span className='fa-li'>
                     <i className='fas fa-check'></i>
                   </span>
                   {detail}
                 </li>
               ))}
               {this.state.nonAvailable.map((detail, index) => (
                 <li key={index} className='text-muted'>
                   <span className='fa-li'>
                     <i className='fas fa-times'></i>
                   </span>
                   {detail}
                 </li>
               ))}
             </ul>
             <a
               href='./index.html'
               className='btn btn-block btn-primary text-uppercase'
             >
               Button
             </a>
           </div>
         </div>
       </div>
     )
  }
}

export default PriceCard;