import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer eyhaV5_YO-_Wqaf1AUzbkBcIlJ-GMQHJv122uI13gdeOXgDlLr-EL_Scjd9lmzEfX4IHcglQL-dUK5YCb9QonGk7cANsH9Rn16Bty7rbUj9Bj9ViWxokjskvrptxYXYx'
    }
});

