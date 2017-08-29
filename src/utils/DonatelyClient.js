import Client from './Client';

const serviceEndpoint = 'https://www.dntly.com/api/v1';
const auth = 'OWExYTgyZjRiYmQ4NDRmMjE0YzRjY2E3MWVlM2NkODU';

const donationsAPICall = `${serviceEndpoint}/donations.json`;

class DonatelyClient extends Client {

  static instance;

  constructor() {
    super();
    if (this.instance) return this.instance;

    this.instance = this;
  }

  donations() {
    return this.get(donationsAPICall)
      .then(resp => {
        return resp.donations;
      });
  }

  totalDonations() {
    return this.donations()
      .then(donations => {
        return donations.reduce((sum, donation) => parseInt(donation.amount, 10) + sum, 0) || 0;
      });
  }

  getHeaders() {
    return {
      'Authorization': `Basic ${auth}`, 
    };
  }

};

export default DonatelyClient;
