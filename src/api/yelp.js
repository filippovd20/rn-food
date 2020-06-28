import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    header: {
        Authorization: 'Bearer yoss5kB1tYqu2CVtXNpbellaMnJH7HXsWeMaFqgct5wFpSkuScgAA2GP4Uhl4q08dFJmly9ZtWm85sDTPyrM9puBG1MES96kHNOAgXc6BLw2r9rfxxd3gts23wP5XnYx'
    }
});

