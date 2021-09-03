import React from 'react'
import PriceCard from './PriceCard'
 
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      pricingData: [
        {
          tier: 'FREE',
          pricePer: '/month',
          price: 0,
          currency: '$',
          available: [
            'Single User',
            '5GB Storage',
            'Unlimited Public Projects',
            'Community Access',
          ],
          nonAvailable: [
            'Unlimited Private Projects',
            'Dedicated Phone Support',
            'Free Subdomain',
            'Monthly Status Reports',
          ],
        },
        {
          tier: 'PLUS',
          pricePer: '/month',
          price: 9,
          currency: '$',
          available: [
            <strong>5 Users</strong>,
            '50GB Storage',
            'Unlimited Public Projects',
            'Community Access',
            'Unlimited Private Projects',
            'Dedicated Phone Support',
            'Free Subdomain',
          ],
          nonAvailable: ['Monthly Status Reports'],
        },
        {
          tier: 'PRO',
          pricePer: '/month',
          price: 49,
          currency: '$',
          available: [
            <strong>Unlimited Users</strong>,
            '150GB Storage',
            'Unlimited Public Projects',
            'Community Access',
            'Unlimited Private Projects',
            'Dedicated Phone Support',
            <span>
              <strong>Unlimited</strong> Free Subdomain
            </span>,
            'Monthly Status Reports',
          ],
          nonAvailable: [],
        },
      ],
    }
  }
  render() {
    return (
      <section className='pricing py-5'>
        <div className='container'>
          <div className='row'>
            {this.state.pricingData.map(
              ({
                tier,
                pricePer,
                price,
                currency,
                available,
                nonAvailable,
              }) => {
                return(
                <PriceCard
                tier = {tier}
                pricePer ={pricePer}
                price={price}
                currency={currency}
                available={available}
                nonAvailable={nonAvailable}
                />);
              }
            )}
          </div>
        </div>
      </section>
    )
  }
}

export default App
